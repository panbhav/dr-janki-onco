import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "assets/review_QR"
REVIEW_URL = "https://g.page/r/CYIJFym1aR7CEBM/review"

# Color Palette
COLOR_TEAL = (11, 77, 83)        # #0B4D53
COLOR_DARK_TEAL = (7, 53, 57)    # #073539
COLOR_LIGHT_TEAL = (240, 253, 250) # #F0FDFA
COLOR_GOLD = (245, 158, 11)      # #F59E0B
COLOR_TEXT_MAIN = (15, 23, 42)   # #0F172A
COLOR_TEXT_MUTED = (71, 85, 105) # #475569
COLOR_WHITE = (255, 255, 255)
COLOR_BORDER = (226, 232, 240)   # #E2E8F0

# Fonts
FONT_PLAYFAIR_BOLD = "C:/Windows/Fonts/georgiab.ttf"
FONT_PLAYFAIR = "C:/Windows/Fonts/georgia.ttf"
FONT_INTER_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_INTER = "C:/Windows/Fonts/segoeui.ttf"

def draw_star(draw, cx, cy, r_out, fill_color=COLOR_GOLD):
    r_in = r_out * 0.42
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = r_out if i % 2 == 0 else r_in
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill_color)

def create_google_g_badge(size=140):
    img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Outer circle badge with soft border
    margin = 4
    draw.ellipse([margin, margin, size - margin, size - margin], fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    
    cx, cy = size // 2, size // 2
    r_out = (size // 2) - 22
    stroke = 16
    bbox = [cx - r_out, cy - r_out, cx + r_out, cy + r_out]
    
    c_blue = (66, 133, 244, 255)
    c_red = (234, 67, 53, 255)
    c_yellow = (251, 188, 5, 255)
    c_green = (52, 168, 83, 255)
    
    # 4 colored arcs
    draw.arc(bbox, start=215, end=335, fill=c_red, width=stroke)
    draw.arc(bbox, start=135, end=225, fill=c_yellow, width=stroke)
    draw.arc(bbox, start=35, end=145, fill=c_green, width=stroke)
    draw.arc(bbox, start=330, end=45, fill=c_blue, width=stroke)
    
    # Horizontal blue bar of 'G'
    draw.rectangle([cx - 2, cy - (stroke // 2), cx + r_out + 1, cy + (stroke // 2)], fill=c_blue)
    return img

def generate_clean_qr():
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=18,
        border=3,
    )
    qr.add_data(REVIEW_URL)
    qr.make(fit=True)
    
    qr_img = qr.make_image(fill_color=COLOR_TEAL, back_color="white").convert("RGBA")
    qw, qh = qr_img.size
    
    # Embed center badge
    badge_size = int(qw * 0.22)
    badge = create_google_g_badge(badge_size)
    bx = (qw - badge_size) // 2
    by = (qh - badge_size) // 2
    
    qr_img.paste(badge, (bx, by), badge)
    
    out_path = os.path.join(OUTPUT_DIR, "dr-janki-google-review-qr.png")
    qr_img.save(out_path)
    print("Saved clean QR:", out_path, qr_img.size)
    return qr_img

def generate_square_card(qr_img):
    card_w, card_h = 1080, 1080
    card = Image.new("RGBA", (card_w, card_h), COLOR_WHITE)
    draw = ImageDraw.Draw(card)
    
    # Background subtle gradient/accents
    # Top banner in jewel teal
    draw.rectangle([0, 0, card_w, 140], fill=COLOR_DARK_TEAL)
    
    # Thin gold accent line
    draw.rectangle([0, 140, card_w, 146], fill=COLOR_GOLD)
    
    # Fonts
    f_title = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 42)
    f_sub = ImageFont.truetype(FONT_INTER_BOLD, 22)
    f_h2 = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 36)
    f_body = ImageFont.truetype(FONT_INTER, 22)
    f_body_bold = ImageFont.truetype(FONT_INTER_BOLD, 22)
    f_small = ImageFont.truetype(FONT_INTER, 18)
    f_url = ImageFont.truetype(FONT_INTER_BOLD, 20)
    
    # Top Banner text
    title_text = "Dr. Janki Choudhary"
    bbox = f_title.getbbox(title_text)
    draw.text(((card_w - (bbox[2] - bbox[0])) // 2, 35), title_text, fill=COLOR_WHITE, font=f_title)
    
    sub_text = "MBBS | MD | DrNB Medical Oncology"
    bbox = f_sub.getbbox(sub_text)
    draw.text(((card_w - (bbox[2] - bbox[0])) // 2, 90), sub_text, fill=(204, 251, 241), font=f_sub)
    
    # Section Header: Review Us on Google
    rev_text = "Review Us On Google"
    bbox = f_h2.getbbox(rev_text)
    draw.text(((card_w - (bbox[2] - bbox[0])) // 2, 175), rev_text, fill=COLOR_DARK_TEAL, font=f_h2)
    
    # 5 Stars
    star_cy = 235
    for i in range(5):
        draw_star(draw, card_w // 2 - 90 + (i * 45), star_cy, 18)
        
    tagline = "Your review helps cancer fighters & families make confident care decisions."
    bbox = f_body.getbbox(tagline)
    draw.text(((card_w - (bbox[2] - bbox[0])) // 2, 268), tagline, fill=COLOR_TEXT_MUTED, font=f_body)
    
    # QR Container with rounded box & shadow
    qr_size = 460
    qr_scaled = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    
    qx = (card_w - qr_size) // 2
    qy = 315
    pad = 20
    
    # White card frame with border
    draw.rounded_rectangle([qx - pad, qy - pad, qx + qr_size + pad, qy + qr_size + pad], radius=24, fill=(255, 255, 255), outline=COLOR_BORDER, width=2)
    card.paste(qr_scaled, (qx, qy), qr_scaled)
    
    # 3 Steps Instructions
    steps_y = 835
    step_box_w = 280
    step_gap = 25
    total_w = (step_box_w * 3) + (step_gap * 2)
    start_x = (card_w - total_w) // 2
    
    steps = [
        ("1. Open Camera", "Point your phone lens"),
        ("2. Scan Code", "Tap the review link"),
        ("3. Rate 5 Stars", "Share your treatment feedback")
    ]
    
    for idx, (head, desc) in enumerate(steps):
        bx = start_x + (idx * (step_box_w + step_gap))
        draw.rounded_rectangle([bx, steps_y, bx + step_box_w, steps_y + 90], radius=14, fill=COLOR_LIGHT_TEAL, outline=(204, 251, 241), width=1)
        
        hb = f_body_bold.getbbox(head)
        draw.text((bx + (step_box_w - (hb[2] - hb[0])) // 2, steps_y + 16), head, fill=COLOR_TEAL, font=f_body_bold)
        
        db = f_small.getbbox(desc)
        draw.text((bx + (step_box_w - (db[2] - db[0])) // 2, steps_y + 48), desc, fill=COLOR_TEXT_MUTED, font=f_small)
        
    # Footer link
    foot_y = 965
    url_text = "Direct Link: g.page/r/CYIJFym1aR7CEBM/review"
    ub = f_url.getbbox(url_text)
    draw.text(((card_w - (ub[2] - ub[0])) // 2, foot_y), url_text, fill=COLOR_TEAL, font=f_url)
    
    hosp_text = "American Oncology Institute • Aarvy Hospital, Sector 90, Gurugram"
    hb = f_small.getbbox(hosp_text)
    draw.text(((card_w - (hb[2] - hb[0])) // 2, foot_y + 32), hosp_text, fill=COLOR_TEXT_MUTED, font=f_small)
    
    # Card outer border
    draw.rectangle([0, 0, card_w - 1, card_h - 1], outline=COLOR_BORDER, width=2)
    
    out_path = os.path.join(OUTPUT_DIR, "dr-janki-google-review-square-card.png")
    card.save(out_path)
    print("Saved square card:", out_path, card.size)

def generate_desk_standee(qr_img):
    card_w, card_h = 1200, 1800
    standee = Image.new("RGBA", (card_w, card_h), COLOR_WHITE)
    draw = ImageDraw.Draw(standee)
    
    # Top header block in rich jewel teal
    draw.rectangle([0, 0, card_w, 280], fill=COLOR_DARK_TEAL)
    # Gold divider
    draw.rectangle([0, 280, card_w, 290], fill=COLOR_GOLD)
    
    f_title = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 54)
    f_sub = ImageFont.truetype(FONT_INTER_BOLD, 26)
    f_dept = ImageFont.truetype(FONT_INTER, 22)
    f_h1 = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 46)
    f_body = ImageFont.truetype(FONT_INTER, 26)
    f_step_h = ImageFont.truetype(FONT_INTER_BOLD, 26)
    f_step_d = ImageFont.truetype(FONT_INTER, 20)
    f_url = ImageFont.truetype(FONT_INTER_BOLD, 24)
    f_footer = ImageFont.truetype(FONT_INTER, 22)
    
    # Header Doctor Name & Sub
    t1 = "Dr. Janki Choudhary"
    b = f_title.getbbox(t1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 70), t1, fill=COLOR_WHITE, font=f_title)
    
    t2 = "MBBS | MD | DrNB Medical Oncology"
    b = f_sub.getbbox(t2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 145), t2, fill=(204, 251, 241), font=f_sub)
    
    t3 = "Consultant - Medical Oncology • American Oncology Institute, Gurugram"
    b = f_dept.getbbox(t3)
    draw.text(((card_w - (b[2] - b[0])) // 2, 195), t3, fill=(153, 246, 228), font=f_dept)
    
    # Standee Hero Message
    hero_h = "Help Other Cancer Fighters"
    b = f_h1.getbbox(hero_h)
    draw.text(((card_w - (b[2] - b[0])) // 2, 340), hero_h, fill=COLOR_DARK_TEAL, font=f_h1)
    
    hero_sub = "Share Your Experience On Google"
    b = f_title.getbbox(hero_sub)
    draw.text(((card_w - (b[2] - b[0])) // 2, 405), hero_sub, fill=COLOR_TEAL, font=f_title)
    
    # 5 Golden Stars
    star_cy = 485
    for i in range(5):
        draw_star(draw, card_w // 2 - 120 + (i * 60), star_cy, 24)
        
    tagline1 = "Your kind words and honest feedback provide encouragement & clarity"
    b = f_body.getbbox(tagline1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 535), tagline1, fill=COLOR_TEXT_MUTED, font=f_body)
    
    tagline2 = "to newly diagnosed patients seeking compassionate cancer care."
    b = f_body.getbbox(tagline2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 575), tagline2, fill=COLOR_TEXT_MUTED, font=f_body)
    
    # QR Container
    qr_size = 560
    qr_scaled = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    qx = (card_w - qr_size) // 2
    qy = 650
    pad = 28
    
    # Outer elegant frame with rounded corners
    draw.rounded_rectangle([qx - pad, qy - pad, qx + qr_size + pad, qy + qr_size + pad], radius=32, fill=(255, 255, 255), outline=COLOR_BORDER, width=3)
    standee.paste(qr_scaled, (qx, qy), qr_scaled)
    
    # "Scan With Phone Camera" banner under QR
    scan_badge = "SCAN WITH ANY SMARTPHONE CAMERA"
    b = f_step_h.getbbox(scan_badge)
    sb_w = (b[2] - b[0]) + 48
    sb_x = (card_w - sb_w) // 2
    sb_y = qy + qr_size + pad + 30
    draw.rounded_rectangle([sb_x, sb_y, sb_x + sb_w, sb_y + 48], radius=24, fill=COLOR_DARK_TEAL)
    draw.text(((card_w - (b[2] - b[0])) // 2, sb_y + 10), scan_badge, fill=COLOR_WHITE, font=f_step_h)
    
    # 3 Steps Grid
    steps_y = sb_y + 85
    step_box_w = 320
    step_gap = 30
    total_w = (step_box_w * 3) + (step_gap * 2)
    start_x = (card_w - total_w) // 2
    
    steps = [
        ("Step 1", "Open Camera", "Point lens at the QR code above"),
        ("Step 2", "Tap Popup Link", "Opens Google Review box instantly"),
        ("Step 3", "Rate & Review", "Select 5 stars ★★★★★ and share")
    ]
    
    for idx, (num, head, desc) in enumerate(steps):
        bx = start_x + (idx * (step_box_w + step_gap))
        draw.rounded_rectangle([bx, steps_y, bx + step_box_w, steps_y + 140], radius=18, fill=COLOR_LIGHT_TEAL, outline=(204, 251, 241), width=2)
        
        # Num pill
        draw.rounded_rectangle([bx + 16, steps_y + 14, bx + 95, steps_y + 42], radius=10, fill=COLOR_TEAL)
        f_num = ImageFont.truetype(FONT_INTER_BOLD, 16)
        draw.text((bx + 26, steps_y + 18), num, fill=COLOR_WHITE, font=f_num)
        
        hb = f_step_h.getbbox(head)
        draw.text((bx + 16, steps_y + 54), head, fill=COLOR_TEXT_MAIN, font=f_step_h)
        
        db = f_step_d.getbbox(desc)
        draw.text((bx + 16, steps_y + 92), desc, fill=COLOR_TEXT_MUTED, font=f_step_d)
        
    # Footer Section
    foot_y = 1620
    draw.line([60, foot_y, card_w - 60, foot_y], fill=COLOR_BORDER, width=2)
    
    u_text = "Direct Review URL:  https://g.page/r/CYIJFym1aR7CEBM/review"
    b = f_url.getbbox(u_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, foot_y + 24), u_text, fill=COLOR_TEAL, font=f_url)
    
    c_text = "American Oncology Institute • Aarvy Hospital, Sector 90, Gurugram | Website: drjankichoudhary.com"
    b = f_footer.getbbox(c_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, foot_y + 65), c_text, fill=COLOR_TEXT_MUTED, font=f_footer)
    
    # Outer boundary border
    draw.rectangle([0, 0, card_w - 1, card_h - 1], outline=COLOR_TEAL, width=8)
    draw.rectangle([8, 8, card_w - 9, card_h - 9], outline=COLOR_GOLD, width=3)
    
    out_path = os.path.join(OUTPUT_DIR, "dr-janki-google-review-standee.png")
    standee.save(out_path)
    print("Saved desk standee:", out_path, standee.size)

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    qr = generate_clean_qr()
    generate_square_card(qr)
    generate_desk_standee(qr)
    print("All review QR assets generated successfully!")
