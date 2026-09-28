import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "assets/instagram"
INSTAGRAM_URL = "https://www.instagram.com/oncologyinsightsbyjanki/"
HANDLE = "@oncologyinsightsbyjanki"

# Fonts
FONT_PLAYFAIR_BOLD = "C:/Windows/Fonts/georgiab.ttf"
FONT_PLAYFAIR = "C:/Windows/Fonts/georgia.ttf"
FONT_INTER_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_INTER = "C:/Windows/Fonts/segoeui.ttf"

# Colors
COLOR_DARK_TEAL = (7, 53, 57)       # #073539
COLOR_TEAL = (11, 77, 83)           # #0B4D53
COLOR_TEXT_MAIN = (15, 23, 42)      # #0F172A
COLOR_TEXT_MUTED = (71, 85, 105)    # #475569
COLOR_WHITE = (255, 255, 255)
COLOR_BORDER = (226, 232, 240)      # #E2E8F0

def draw_gradient_rect(draw_img, box, colors):
    """Draws a smooth horizontal gradient across a box [x1, y1, x2, y2]."""
    x1, y1, x2, y2 = box
    w = x2 - x1
    h = y2 - y1
    if w <= 0 or h <= 0:
        return
    grad = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    n_colors = len(colors)
    for x in range(w):
        t = x / max(1, w - 1)
        segment = t * (n_colors - 1)
        idx = min(int(segment), n_colors - 2)
        local_t = segment - idx
        c1 = colors[idx]
        c2 = colors[idx + 1]
        r = int(c1[0] + (c2[0] - c1[0]) * local_t)
        g = int(c1[1] + (c2[1] - c1[1]) * local_t)
        b = int(c1[2] + (c2[2] - c1[2]) * local_t)
        for y in range(h):
            grad.putpixel((x, y), (r, g, b, 255))
    draw_img.paste(grad, (x1, y1))

def create_instagram_badge(size=140):
    img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    
    # Instagram gradient (#833ab4 -> #fd1d1d -> #fcb045)
    gradient = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            if t < 0.5:
                u = t * 2
                r = int(131 + (253 - 131) * u)
                g = int(58 + (29 - 58) * u)
                b = int(180 + (29 - 180) * u)
            else:
                u = (t - 0.5) * 2
                r = int(253 + (252 - 253) * u)
                g = int(29 + (176 - 29) * u)
                b = int(29 + (69 - 29) * u)
            gradient.putpixel((x, y), (r, g, b, 255))
            
    mask = Image.new("L", (size, size), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, size - 1, size - 1], radius=size // 4, fill=255)
    
    badge = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    badge.paste(gradient, (0, 0), mask)
    
    # White Camera Glyph
    bdraw = ImageDraw.Draw(badge)
    pad = int(size * 0.22)
    glyph_box = [pad, pad, size - pad, size - pad]
    stroke = max(2, int(size * 0.065))
    bdraw.rounded_rectangle(glyph_box, radius=int(size * 0.16), outline=(255, 255, 255, 255), width=stroke)
    
    cx, cy = size // 2, size // 2
    r_lens = int(size * 0.18)
    bdraw.ellipse([cx - r_lens, cy - r_lens, cx + r_lens, cy + r_lens], outline=(255, 255, 255, 255), width=stroke)
    
    dot_r = max(2, stroke // 2 + 1)
    dot_x = size - pad - int(size * 0.12)
    dot_y = pad + int(size * 0.12)
    bdraw.ellipse([dot_x - dot_r, dot_y - dot_r, dot_x + dot_r, dot_y + dot_r], fill=(255, 255, 255, 255))
    
    return badge

def generate_clean_qr():
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=2,
    )
    qr.add_data(INSTAGRAM_URL)
    qr.make(fit=True)
    matrix = qr.get_matrix()
    n = len(matrix)
    box_size = 16
    size = n * box_size
    img = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img)

    # Deep Indigo to Berry gradient for dark modules (100% camera scannable)
    for r in range(n):
        for c in range(n):
            if matrix[r][c]:
                t = (r + c) / (2 * n)
                cr = int(74 + (194 - 74) * t)
                cg = int(20 + (24 - 20) * t)
                cb = int(140 + (91 - 140) * t)
                x1, y1 = c * box_size, r * box_size
                x2, y2 = x1 + box_size, y1 + box_size
                draw.rounded_rectangle([x1, y1, x2 - 1, y2 - 1], radius=3, fill=(cr, cg, cb, 255))

    # Center Badge with white backdrop
    badge_size = int(size * 0.22)
    badge = create_instagram_badge(badge_size)
    pad = int(badge_size * 0.14)
    total_b_size = badge_size + pad * 2
    
    white_card = Image.new("RGBA", (total_b_size, total_b_size), (255, 255, 255, 0))
    wdraw = ImageDraw.Draw(white_card)
    wdraw.rounded_rectangle([0, 0, total_b_size - 1, total_b_size - 1], radius=int(total_b_size * 0.22), fill=(255, 255, 255, 255), outline=COLOR_BORDER, width=2)
    white_card.paste(badge, (pad, pad), badge)

    qw, qh = img.size
    bx = (qw - total_b_size) // 2
    by = (qh - total_b_size) // 2
    img.paste(white_card, (bx, by), white_card)

    out_path = os.path.join(OUTPUT_DIR, "dr-janki-instagram-qr-clean.png")
    img.save(out_path)
    print("Saved clean QR:", out_path, img.size)
    return img

def generate_square_card(qr_img):
    card_w, card_h = 1080, 1080
    card = Image.new("RGBA", (card_w, card_h), COLOR_WHITE)
    draw = ImageDraw.Draw(card)

    # Top Instagram gradient banner
    ig_colors = [(131, 58, 180), (253, 29, 29), (252, 176, 69)]
    draw_gradient_rect(card, [0, 0, card_w, 140], ig_colors)

    # Fonts
    f_title = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 42)
    f_sub = ImageFont.truetype(FONT_INTER_BOLD, 22)
    f_h2 = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 36)
    f_handle = ImageFont.truetype(FONT_INTER_BOLD, 24)
    f_body = ImageFont.truetype(FONT_INTER, 21)
    f_step_h = ImageFont.truetype(FONT_INTER_BOLD, 20)
    f_step_d = ImageFont.truetype(FONT_INTER, 17)
    f_url = ImageFont.truetype(FONT_INTER_BOLD, 20)
    f_small = ImageFont.truetype(FONT_INTER, 18)

    # Top Banner Doctor Name
    t1 = "Dr. Janki Choudhary"
    b = f_title.getbbox(t1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 35), t1, fill=COLOR_WHITE, font=f_title)

    t2 = "MBBS | MD | DrNB Medical Oncology"
    b = f_sub.getbbox(t2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 90), t2, fill=(255, 241, 242), font=f_sub)

    # Header: Follow on Instagram
    h_text = "Follow on Instagram"
    b = f_h2.getbbox(h_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, 170), h_text, fill=COLOR_DARK_TEAL, font=f_h2)

    # Handle pill badge
    hb = f_handle.getbbox(HANDLE)
    pill_w = (hb[2] - hb[0]) + 60
    pill_h = 42
    pill_x = (card_w - pill_w) // 2
    pill_y = 225
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=21, fill=(253, 242, 248), outline=(244, 114, 182), width=1)
    
    # Mini IG camera icon inside pill
    mini_badge = create_instagram_badge(26)
    card.paste(mini_badge, (pill_x + 12, pill_y + 8), mini_badge)
    draw.text((pill_x + 46, pill_y + 7), HANDLE, fill=(190, 24, 93), font=f_handle)

    tagline = "Patient Education • Cancer Myths • Chemotherapy & Immunotherapy Insights"
    b = f_body.getbbox(tagline)
    draw.text(((card_w - (b[2] - b[0])) // 2, 280), tagline, fill=COLOR_TEXT_MUTED, font=f_body)

    # QR Container with rounded box & shadow
    qr_size = 450
    qr_scaled = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    qx = (card_w - qr_size) // 2
    qy = 325
    pad = 20

    # Gradient border around QR
    draw.rounded_rectangle([qx - pad, qy - pad, qx + qr_size + pad, qy + qr_size + pad], radius=28, fill=COLOR_WHITE, outline=(244, 114, 182), width=3)
    card.paste(qr_scaled, (qx, qy), qr_scaled)

    # 3 Educational Highlight Pills below QR
    steps_y = 830
    step_box_w = 285
    step_gap = 25
    total_w = (step_box_w * 3) + (step_gap * 2)
    start_x = (card_w - total_w) // 2

    pillars = [
        ("Reels & Guides", "Biopsy & symptoms explained simply"),
        ("Myth Busting", "Evidence-based facts on cancer & diet"),
        ("Precision Oncology", "Targeted therapy & NGS updates")
    ]

    for idx, (head, desc) in enumerate(pillars):
        bx = start_x + (idx * (step_box_w + step_gap))
        draw.rounded_rectangle([bx, steps_y, bx + step_box_w, steps_y + 90], radius=16, fill=(255, 241, 242), outline=(254, 205, 211), width=1)
        
        hb = f_step_h.getbbox(head)
        draw.text((bx + (step_box_w - (hb[2] - hb[0])) // 2, steps_y + 16), head, fill=(159, 18, 57), font=f_step_h)
        
        db = f_step_d.getbbox(desc)
        draw.text((bx + (step_box_w - (db[2] - db[0])) // 2, steps_y + 48), desc, fill=COLOR_TEXT_MUTED, font=f_step_d)

    # Footer
    foot_y = 960
    url_text = "Scan with your camera or open: instagram.com/oncologyinsightsbyjanki"
    b = f_url.getbbox(url_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, foot_y), url_text, fill=(159, 18, 57), font=f_url)

    hosp_text = "American Oncology Institute • Aarvy Hospital, Sector 90, Gurugram • drjankichoudhary.com"
    b = f_small.getbbox(hosp_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, foot_y + 32), hosp_text, fill=COLOR_TEXT_MUTED, font=f_small)

    # Card outer border
    draw.rectangle([0, 0, card_w - 1, card_h - 1], outline=COLOR_BORDER, width=2)

    out_path = os.path.join(OUTPUT_DIR, "dr-janki-instagram-square-card.png")
    card.save(out_path)
    print("Saved square card:", out_path, card.size)

def generate_desk_standee(qr_img):
    card_w, card_h = 1200, 1800
    standee = Image.new("RGBA", (card_w, card_h), COLOR_WHITE)
    draw = ImageDraw.Draw(standee)

    # Header block with rich dark teal + Instagram gradient accent stripe
    draw.rectangle([0, 0, card_w, 280], fill=COLOR_DARK_TEAL)
    ig_colors = [(131, 58, 180), (253, 29, 29), (252, 176, 69)]
    draw_gradient_rect(standee, [0, 280, card_w, 292], ig_colors)

    f_title = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 54)
    f_sub = ImageFont.truetype(FONT_INTER_BOLD, 26)
    f_dept = ImageFont.truetype(FONT_INTER, 22)
    f_h1 = ImageFont.truetype(FONT_PLAYFAIR_BOLD, 48)
    f_handle = ImageFont.truetype(FONT_INTER_BOLD, 30)
    f_body = ImageFont.truetype(FONT_INTER, 26)
    f_step_h = ImageFont.truetype(FONT_INTER_BOLD, 26)
    f_step_d = ImageFont.truetype(FONT_INTER, 20)
    f_url = ImageFont.truetype(FONT_INTER_BOLD, 25)
    f_footer = ImageFont.truetype(FONT_INTER, 22)

    # Header Doctor Name
    t1 = "Dr. Janki Choudhary"
    b = f_title.getbbox(t1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 70), t1, fill=COLOR_WHITE, font=f_title)

    t2 = "MBBS | MD | DrNB Medical Oncology"
    b = f_sub.getbbox(t2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 145), t2, fill=(204, 251, 241), font=f_sub)

    t3 = "Consultant - Medical Oncology • American Oncology Institute, Gurugram"
    b = f_dept.getbbox(t3)
    draw.text(((card_w - (b[2] - b[0])) // 2, 195), t3, fill=(153, 246, 228), font=f_dept)

    # Hero headline
    hero_h = "Oncology Insights & Patient Guidance"
    b = f_h1.getbbox(hero_h)
    draw.text(((card_w - (b[2] - b[0])) // 2, 345), hero_h, fill=COLOR_DARK_TEAL, font=f_h1)

    # Follow on Instagram pill
    pill_w = 540
    pill_h = 56
    pill_x = (card_w - pill_w) // 2
    pill_y = 425
    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=28, fill=(253, 242, 248), outline=(244, 114, 182), width=2)
    
    mini_badge = create_instagram_badge(36)
    standee.paste(mini_badge, (pill_x + 18, pill_y + 10), mini_badge)
    h_text = f"Follow {HANDLE}"
    draw.text((pill_x + 64, pill_y + 11), h_text, fill=(190, 24, 93), font=f_handle)

    # Narrative
    sub1 = "Empowering cancer fighters and families with easy-to-understand explanations,"
    b = f_body.getbbox(sub1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 515), sub1, fill=COLOR_TEXT_MUTED, font=f_body)

    sub2 = "biopsy interpretations, chemotherapy facts, and lifestyle support."
    b = f_body.getbbox(sub2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 555), sub2, fill=COLOR_TEXT_MUTED, font=f_body)

    # QR Container
    qr_size = 560
    qr_scaled = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    qx = (card_w - qr_size) // 2
    qy = 630
    pad = 28

    # Rounded frame with gradient accent border
    draw.rounded_rectangle([qx - pad, qy - pad, qx + qr_size + pad, qy + qr_size + pad], radius=36, fill=COLOR_WHITE, outline=(244, 114, 182), width=4)
    standee.paste(qr_scaled, (qx, qy), qr_scaled)

    # "Scan With Phone Camera" banner under QR
    scan_badge = "SCAN WITH ANY SMARTPHONE CAMERA"
    b = f_step_h.getbbox(scan_badge)
    sb_w = (b[2] - b[0]) + 52
    sb_x = (card_w - sb_w) // 2
    sb_y = qy + qr_size + pad + 30
    draw.rounded_rectangle([sb_x, sb_y, sb_x + sb_w, sb_y + 50], radius=25, fill=COLOR_DARK_TEAL)
    draw.text(((card_w - (b[2] - b[0])) // 2, sb_y + 11), scan_badge, fill=COLOR_WHITE, font=f_step_h)

    # 3 Steps Grid
    steps_y = sb_y + 85
    step_box_w = 320
    step_gap = 30
    total_w = (step_box_w * 3) + (step_gap * 2)
    start_x = (card_w - total_w) // 2

    steps = [
        ("Step 1", "Open Camera", "Point lens at the QR code above"),
        ("Step 2", "Tap Popup Link", "Opens Instagram profile directly"),
        ("Step 3", "Tap Follow", "Get reels & cancer guidance")
    ]

    for idx, (num, head, desc) in enumerate(steps):
        bx = start_x + (idx * (step_box_w + step_gap))
        draw.rounded_rectangle([bx, steps_y, bx + step_box_w, steps_y + 140], radius=18, fill=(255, 241, 242), outline=(254, 205, 211), width=2)
        
        # Num pill
        draw.rounded_rectangle([bx + 16, steps_y + 14, bx + 95, steps_y + 42], radius=10, fill=(190, 24, 93))
        f_num = ImageFont.truetype(FONT_INTER_BOLD, 16)
        draw.text((bx + 26, steps_y + 18), num, fill=COLOR_WHITE, font=f_num)
        
        hb = f_step_h.getbbox(head)
        draw.text((bx + 16, steps_y + 54), head, fill=COLOR_TEXT_MAIN, font=f_step_h)
        
        db = f_step_d.getbbox(desc)
        draw.text((bx + 16, steps_y + 92), desc, fill=COLOR_TEXT_MUTED, font=f_step_d)

    # Footer
    foot_y = 1620
    draw.line([60, foot_y, card_w - 60, foot_y], fill=COLOR_BORDER, width=2)

    u_text = "Direct Profile Link:  https://www.instagram.com/oncologyinsightsbyjanki/"
    b = f_url.getbbox(u_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, foot_y + 24), u_text, fill=(190, 24, 93), font=f_url)

    c_text = "American Oncology Institute • Aarvy Hospital, Sector 90, Gurugram | Website: drjankichoudhary.com"
    b = f_footer.getbbox(c_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, foot_y + 65), c_text, fill=COLOR_TEXT_MUTED, font=f_footer)

    # Outer border
    draw.rectangle([0, 0, card_w - 1, card_h - 1], outline=COLOR_DARK_TEAL, width=8)
    draw.rectangle([8, 8, card_w - 9, card_h - 9], outline=(244, 114, 182), width=3)

    out_path = os.path.join(OUTPUT_DIR, "dr-janki-instagram-standee.png")
    standee.save(out_path)
    print("Saved desk standee:", out_path, standee.size)

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    qr = generate_clean_qr()
    generate_square_card(qr)
    generate_desk_standee(qr)
    
    # Save a high-res JPEG copy to assets root for website modal
    jpg_path = "assets/dr-janki-instagram-qr.jpg"
    card_img = Image.open(os.path.join(OUTPUT_DIR, "dr-janki-instagram-square-card.png")).convert("RGB")
    card_img.save(jpg_path, quality=95)
    print("Updated website QR modal asset:", jpg_path)
    print("All Instagram QR assets generated successfully!")
