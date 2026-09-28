import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = os.path.abspath("assets/instagram")
INSTAGRAM_URL = "https://www.instagram.com/oncologyinsightsbyjanki/"
HANDLE = "@oncologyinsightsbyjanki"

# System Fonts (Windows)
FONT_SERIF_BOLD = "C:/Windows/Fonts/georgiab.ttf"
FONT_SERIF = "C:/Windows/Fonts/georgia.ttf"
FONT_SANS_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SANS = "C:/Windows/Fonts/segoeui.ttf"

# Color Palette
COLOR_DARK_TEAL = (7, 53, 57)          # #073539
COLOR_TEAL = (11, 77, 83)              # #0B4D53
COLOR_TEXT_MAIN = (15, 23, 42)         # #0F172A
COLOR_TEXT_MUTED = (71, 85, 105)       # #475569
COLOR_TEXT_SLATE = (100, 116, 139)     # #64748B
COLOR_WHITE = (255, 255, 255)
COLOR_BORDER = (226, 232, 240)         # #E2E8F0
COLOR_BERRY = (190, 24, 93)            # #BE185D
COLOR_DEEP_ROSE = (159, 18, 57)        # #9F1239
COLOR_PINK_BORDER = (254, 205, 211)    # #FECDD3
COLOR_PINK_BG = (255, 241, 242)        # #FFF1F2
COLOR_PINK_STROKE = (244, 114, 182)    # #F472B6

IG_GRADIENT_STOPS = [
    (131, 58, 180),  # #833ab4 (purple)
    (225, 48, 108),  # #e1306c (berry)
    (253, 29, 29),   # #fd1d1d (red)
    (252, 176, 69)   # #fcb045 (warm gold/orange)
]

def draw_horizontal_gradient(draw_img, box, colors):
    """Draws a smooth horizontal gradient across box [x1, y1, x2, y2]."""
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
    """Renders a pixel-perfect Instagram camera logo with radial/diagonal gradient."""
    badge_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    gradient = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            if t < 0.35:
                u = t / 0.35
                r = int(131 + (225 - 131) * u)
                g = int(58 + (48 - 58) * u)
                b = int(180 + (108 - 180) * u)
            elif t < 0.70:
                u = (t - 0.35) / 0.35
                r = int(225 + (253 - 225) * u)
                g = int(48 + (29 - 48) * u)
                b = int(108 + (29 - 108) * u)
            else:
                u = (t - 0.70) / 0.30
                r = int(253 + (252 - 253) * u)
                g = int(29 + (176 - 29) * u)
                b = int(29 + (69 - 29) * u)
            gradient.putpixel((x, y), (r, g, b, 255))

    mask = Image.new("L", (size, size), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * 0.26), fill=255)
    badge_img.paste(gradient, (0, 0), mask)

    # White Camera Glyph
    bdraw = ImageDraw.Draw(badge_img)
    pad = int(size * 0.22)
    glyph_box = [pad, pad, size - pad, size - pad]
    stroke = max(2, int(size * 0.068))
    bdraw.rounded_rectangle(glyph_box, radius=int(size * 0.17), outline=(255, 255, 255, 255), width=stroke)

    cx, cy = size // 2, size // 2
    r_lens = int(size * 0.18)
    bdraw.ellipse([cx - r_lens, cy - r_lens, cx + r_lens, cy + r_lens], outline=(255, 255, 255, 255), width=stroke)

    dot_r = max(2, stroke // 2 + 1)
    dot_x = size - pad - int(size * 0.13)
    dot_y = pad + int(size * 0.13)
    bdraw.ellipse([dot_x - dot_r, dot_y - dot_r, dot_x + dot_r, dot_y + dot_r], fill=(255, 255, 255, 255))

    return badge_img

def generate_clean_qr():
    """Generates high-contrast camera-scannable QR with embedded center logo."""
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

    # Deep Indigo-to-Berry modules for supreme camera scannability & premium aesthetic
    for r in range(n):
        for c in range(n):
            if matrix[r][c]:
                t = (r + c) / (2 * n)
                cr = int(74 + (159 - 74) * t)
                cg = int(20 + (18 - 20) * t)
                cb = int(140 + (57 - 140) * t)
                x1, y1 = c * box_size, r * box_size
                x2, y2 = x1 + box_size, y1 + box_size
                draw.rounded_rectangle([x1, y1, x2 - 1, y2 - 1], radius=3, fill=(cr, cg, cb, 255))

    # Center Badge with clean white backing card
    badge_size = int(size * 0.22)
    badge = create_instagram_badge(badge_size)
    pad = int(badge_size * 0.14)
    total_b_size = badge_size + pad * 2

    white_card = Image.new("RGBA", (total_b_size, total_b_size), (255, 255, 255, 0))
    wdraw = ImageDraw.Draw(white_card)
    wdraw.rounded_rectangle([0, 0, total_b_size - 1, total_b_size - 1], radius=int(total_b_size * 0.24), fill=(255, 255, 255, 255), outline=COLOR_BORDER, width=2)
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
    """
    Renders 1080x1080 Square Card for WhatsApp, Social Media, and Website Modal.
    Harmonious margins:
      - 70px safe margin on Left and Right (Content width: 940px)
      - Perfectly balanced vertical rhythm without cramped text or dead voids.
    """
    card_w, card_h = 1080, 1080
    card = Image.new("RGBA", (card_w, card_h), COLOR_WHITE)
    draw = ImageDraw.Draw(card)

    # 1. Header Banner (0 - 138px)
    draw_horizontal_gradient(card, [0, 0, card_w, 138], IG_GRADIENT_STOPS)
    # Subtle accent hairline under banner
    draw.line([0, 138, card_w, 138], fill=(252, 211, 77), width=3)

    f_title = ImageFont.truetype(FONT_SERIF_BOLD, 40)
    f_sub = ImageFont.truetype(FONT_SANS_BOLD, 20)
    f_dept = ImageFont.truetype(FONT_SANS, 16)

    # Doctor Name & Credentials in Header
    t1 = "Dr. Janki Choudhary"
    b = f_title.getbbox(t1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 30), t1, fill=COLOR_WHITE, font=f_title)

    t2 = "MBBS | MD | DrNB Medical Oncology"
    b = f_sub.getbbox(t2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 80), t2, fill=(255, 241, 242), font=f_sub)

    t3 = "Consultant — Medical Oncology & Precision Cancer Care"
    b = f_dept.getbbox(t3)
    draw.text(((card_w - (b[2] - b[0])) // 2, 108), t3, fill=(254, 226, 226), font=f_dept)

    # 2. Main Headline
    f_h2 = ImageFont.truetype(FONT_SERIF_BOLD, 32)
    h_text = "Connect with Dr. Janki on Instagram"
    b = f_h2.getbbox(h_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, 162), h_text, fill=COLOR_DARK_TEAL, font=f_h2)

    # 3. Instagram Handle Pill Badge
    f_handle = ImageFont.truetype(FONT_SANS_BOLD, 22)
    hb = f_handle.getbbox(HANDLE)
    handle_text_w = hb[2] - hb[0]
    mini_badge_size = 26
    pill_inner_gap = 10
    pill_pad_x = 22
    pill_w = mini_badge_size + pill_inner_gap + handle_text_w + (pill_pad_x * 2)
    pill_h = 42
    pill_x = (card_w - pill_w) // 2
    pill_y = 208

    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=21, fill=COLOR_PINK_BG, outline=COLOR_PINK_STROKE, width=1)
    mini_badge = create_instagram_badge(mini_badge_size)
    badge_paste_x = pill_x + pill_pad_x
    badge_paste_y = pill_y + (pill_h - mini_badge_size) // 2
    card.paste(mini_badge, (badge_paste_x, badge_paste_y), mini_badge)

    text_x = badge_paste_x + mini_badge_size + pill_inner_gap
    draw.text((text_x, pill_y + 8), HANDLE, fill=COLOR_BERRY, font=f_handle)

    # 4. Educational Tagline
    f_body = ImageFont.truetype(FONT_SANS, 18)
    tagline = "Evidence-Based Cancer Awareness • Patient Guides • Treatment Insights"
    b = f_body.getbbox(tagline)
    draw.text(((card_w - (b[2] - b[0])) // 2, 264), tagline, fill=COLOR_TEXT_MUTED, font=f_body)

    # 5. QR Container Frame (450x450, perfectly centered)
    qr_size = 406
    qr_scaled = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    frame_size = 450
    frame_x = (card_w - frame_size) // 2
    frame_y = 302
    
    # Outer soft glow frame
    draw.rounded_rectangle([frame_x - 4, frame_y - 4, frame_x + frame_size + 4, frame_y + frame_size + 4], radius=28, fill=(255, 245, 247))
    # Main white frame with pink border
    draw.rounded_rectangle([frame_x, frame_y, frame_x + frame_size, frame_y + frame_size], radius=24, fill=COLOR_WHITE, outline=COLOR_PINK_STROKE, width=2)
    
    # Paste QR in exact center of frame
    qx = frame_x + (frame_size - qr_size) // 2
    qy = frame_y + (frame_size - qr_size) // 2
    card.paste(qr_scaled, (qx, qy), qr_scaled)

    # 6. "Scan with Camera" pill badge below QR
    f_cam = ImageFont.truetype(FONT_SANS_BOLD, 14)
    cam_text = "SCAN WITH YOUR PHONE CAMERA TO OPEN PROFILE"
    cb = f_cam.getbbox(cam_text)
    cam_badge_w = (cb[2] - cb[0]) + 38
    cam_badge_h = 28
    cam_badge_x = (card_w - cam_badge_w) // 2
    cam_badge_y = 766
    draw.rounded_rectangle([cam_badge_x, cam_badge_y, cam_badge_x + cam_badge_w, cam_badge_y + cam_badge_h], radius=14, fill=COLOR_DARK_TEAL)
    draw.text(((card_w - (cb[2] - cb[0])) // 2, cam_badge_y + 5), cam_text, fill=COLOR_WHITE, font=f_cam)

    # 7. 3 Educational Highlight Pills (Exactly 70px margin on left & right: 940px total width)
    steps_y = 812
    step_box_w = 300
    step_gap = 20
    total_w = (step_box_w * 3) + (step_gap * 2)  # 940px
    start_x = (card_w - total_w) // 2            # Exactly 70px

    f_step_h = ImageFont.truetype(FONT_SANS_BOLD, 17)
    f_step_d = ImageFont.truetype(FONT_SANS, 14)

    pillars = [
        ("Reels & Guides", "Biopsy & symptoms explained"),
        ("Myth Busting", "Diet & cancer facts clarified"),
        ("Precision Care", "Targeted therapy & NGS updates")
    ]

    for idx, (head, desc) in enumerate(pillars):
        bx = start_x + (idx * (step_box_w + step_gap))
        draw.rounded_rectangle([bx, steps_y, bx + step_box_w, steps_y + 78], radius=14, fill=COLOR_PINK_BG, outline=COLOR_PINK_BORDER, width=1)
        
        hb = f_step_h.getbbox(head)
        draw.text((bx + (step_box_w - (hb[2] - hb[0])) // 2, steps_y + 14), head, fill=COLOR_DEEP_ROSE, font=f_step_h)
        
        db = f_step_d.getbbox(desc)
        draw.text((bx + (step_box_w - (db[2] - db[0])) // 2, steps_y + 44), desc, fill=COLOR_TEXT_MUTED, font=f_step_d)

    # 8. Symmetrical Footer Section
    # Divider line matching the 70px margins of the 3 cards above
    foot_divider_y = 918
    draw.line([start_x, foot_divider_y, start_x + total_w, foot_divider_y], fill=COLOR_BORDER, width=1)

    f_url = ImageFont.truetype(FONT_SANS_BOLD, 19)
    url_text = "Direct Profile: instagram.com/oncologyinsightsbyjanki"
    b = f_url.getbbox(url_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, 936), url_text, fill=COLOR_BERRY, font=f_url)

    f_small = ImageFont.truetype(FONT_SANS, 16)
    hosp_text = "American Oncology Institute • Aarvy Hospital, Sector 90, Gurugram • drjankichoudhary.com"
    b = f_small.getbbox(hosp_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, 972), hosp_text, fill=COLOR_TEXT_SLATE, font=f_small)

    # Card outer border
    draw.rectangle([0, 0, card_w - 1, card_h - 1], outline=COLOR_BORDER, width=2)

    out_path = os.path.join(OUTPUT_DIR, "dr-janki-instagram-square-card.png")
    card.save(out_path)
    print("Saved refined square card:", out_path, card.size)

def generate_desk_standee(qr_img):
    """
    Renders 1200x1800 Desk Standee for OPD Desk, Daycare & Acrylic Table Tents.
    Harmonious margins:
      - Symmetrical 80px Left and Right Margins (Content width: 1040px)
      - Proportional vertical distribution with zero cramped or stranded areas.
    """
    card_w, card_h = 1200, 1800
    standee = Image.new("RGBA", (card_w, card_h), COLOR_WHITE)
    draw = ImageDraw.Draw(standee)

    # 1. Header Block (0 - 268px)
    draw.rectangle([0, 0, card_w, 268], fill=COLOR_DARK_TEAL)
    # Instagram accent stripe
    draw_horizontal_gradient(standee, [0, 268, card_w, 280], IG_GRADIENT_STOPS)

    f_eyebrow = ImageFont.truetype(FONT_SANS_BOLD, 17)
    f_title = ImageFont.truetype(FONT_SERIF_BOLD, 52)
    f_sub = ImageFont.truetype(FONT_SANS_BOLD, 25)
    f_dept = ImageFont.truetype(FONT_SANS, 21)

    eye_text = "AMERICAN ONCOLOGY INSTITUTE • AARVY HOSPITAL, GURUGRAM"
    b = f_eyebrow.getbbox(eye_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, 44), eye_text, fill=(153, 246, 228), font=f_eyebrow)

    t1 = "Dr. Janki Choudhary"
    b = f_title.getbbox(t1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 82), t1, fill=COLOR_WHITE, font=f_title)

    t2 = "MBBS | MD | DrNB Medical Oncology"
    b = f_sub.getbbox(t2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 154), t2, fill=(204, 251, 241), font=f_sub)

    t3 = "Consultant — Medical Oncology & Precision Cancer Care"
    b = f_dept.getbbox(t3)
    draw.text(((card_w - (b[2] - b[0])) // 2, 202), t3, fill=(153, 246, 228), font=f_dept)

    # 2. Hero Headline
    f_h1 = ImageFont.truetype(FONT_SERIF_BOLD, 44)
    hero_h = "Oncology Insights & Patient Guidance"
    b = f_h1.getbbox(hero_h)
    draw.text(((card_w - (b[2] - b[0])) // 2, 328), hero_h, fill=COLOR_DARK_TEAL, font=f_h1)

    # 3. Instagram Handle Pill Badge (Dynamically measured)
    f_handle = ImageFont.truetype(FONT_SANS_BOLD, 26)
    handle_label = f"Follow {HANDLE}"
    hb = f_handle.getbbox(handle_label)
    label_w = hb[2] - hb[0]
    mini_badge_size = 36
    pill_gap = 12
    pill_pad_x = 28
    pill_w = mini_badge_size + pill_gap + label_w + (pill_pad_x * 2)
    pill_h = 54
    pill_x = (card_w - pill_w) // 2
    pill_y = 398

    draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=27, fill=COLOR_PINK_BG, outline=COLOR_PINK_STROKE, width=2)
    mini_badge = create_instagram_badge(mini_badge_size)
    badge_x = pill_x + pill_pad_x
    badge_y = pill_y + (pill_h - mini_badge_size) // 2
    standee.paste(mini_badge, (badge_x, badge_y), mini_badge)

    draw.text((badge_x + mini_badge_size + pill_gap, pill_y + 11), handle_label, fill=COLOR_BERRY, font=f_handle)

    # 4. Narrative Subtitle
    f_body = ImageFont.truetype(FONT_SANS, 22)
    sub1 = "Empowering cancer fighters and families with easy-to-understand explanations,"
    b = f_body.getbbox(sub1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 478), sub1, fill=COLOR_TEXT_MUTED, font=f_body)

    sub2 = "biopsy interpretations, chemotherapy facts, and lifestyle support."
    b = f_body.getbbox(sub2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 514), sub2, fill=COLOR_TEXT_MUTED, font=f_body)

    # 5. QR Code Container (592x592 frame, QR size 536x536)
    qr_size = 536
    qr_scaled = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    frame_size = 592
    frame_x = (card_w - frame_size) // 2
    frame_y = 566

    # Outer soft halo
    draw.rounded_rectangle([frame_x - 5, frame_y - 5, frame_x + frame_size + 5, frame_y + frame_size + 5], radius=36, fill=(255, 245, 247))
    # Frame box with rose stroke
    draw.rounded_rectangle([frame_x, frame_y, frame_x + frame_size, frame_y + frame_size], radius=32, fill=COLOR_WHITE, outline=COLOR_PINK_STROKE, width=3)
    
    qx = frame_x + (frame_size - qr_size) // 2
    qy = frame_y + (frame_size - qr_size) // 2
    standee.paste(qr_scaled, (qx, qy), qr_scaled)

    # 6. "Scan with Camera" Badge under QR
    f_scan = ImageFont.truetype(FONT_SANS_BOLD, 21)
    scan_badge = "SCAN WITH ANY SMARTPHONE CAMERA"
    b = f_scan.getbbox(scan_badge)
    sb_w = (b[2] - b[0]) + 56
    sb_h = 48
    sb_x = (card_w - sb_w) // 2
    sb_y = 1184
    draw.rounded_rectangle([sb_x, sb_y, sb_x + sb_w, sb_y + sb_h], radius=24, fill=COLOR_DARK_TEAL)
    draw.text(((card_w - (b[2] - b[0])) // 2, sb_y + 11), scan_badge, fill=COLOR_WHITE, font=f_scan)

    # 7. 3 Step Guidance Cards (Symmetrical 80px margin: 1040px total width)
    steps_y = 1270
    step_box_w = 328
    step_box_h = 162
    step_gap = 28
    total_w = (step_box_w * 3) + (step_gap * 2)  # 1040px
    start_x = (card_w - total_w) // 2            # Exactly 80px

    f_step_h = ImageFont.truetype(FONT_SANS_BOLD, 24)
    f_step_d = ImageFont.truetype(FONT_SANS, 18)
    f_num = ImageFont.truetype(FONT_SANS_BOLD, 15)

    steps = [
        ("Step 1", "Open Camera", "Point lens at the QR code above"),
        ("Step 2", "Tap Popup Link", "Opens Instagram profile directly"),
        ("Step 3", "Tap Follow", "Get reels & cancer guidance")
    ]

    for idx, (num, head, desc) in enumerate(steps):
        bx = start_x + (idx * (step_box_w + step_gap))
        draw.rounded_rectangle([bx, steps_y, bx + step_box_w, steps_y + step_box_h], radius=18, fill=COLOR_PINK_BG, outline=COLOR_PINK_BORDER, width=1)
        
        # Step num badge
        draw.rounded_rectangle([bx + 20, steps_y + 20, bx + 102, steps_y + 48], radius=9, fill=COLOR_BERRY)
        nb = f_num.getbbox(num)
        draw.text((bx + 20 + (82 - (nb[2] - nb[0])) // 2, steps_y + 24), num, fill=COLOR_WHITE, font=f_num)
        
        # Title & description
        draw.text((bx + 20, steps_y + 64), head, fill=COLOR_TEXT_MAIN, font=f_step_h)
        draw.text((bx + 20, steps_y + 108), desc, fill=COLOR_TEXT_MUTED, font=f_step_d)

    # 8. Symmetrical Footer Section
    # Divider line matching the exact 80px margins of the 3 step cards above
    foot_divider_y = 1485
    draw.line([start_x, foot_divider_y, start_x + total_w, foot_divider_y], fill=COLOR_BORDER, width=2)

    f_url = ImageFont.truetype(FONT_SANS_BOLD, 24)
    u_text = "Direct Profile Link:  https://www.instagram.com/oncologyinsightsbyjanki/"
    b = f_url.getbbox(u_text)
    draw.text(((card_w - (b[2] - b[0])) // 2, 1522), u_text, fill=COLOR_BERRY, font=f_url)

    f_footer_main = ImageFont.truetype(FONT_SANS_BOLD, 21)
    c_text1 = "American Oncology Institute • Aarvy Hospital, Sector 90, Gurugram"
    b = f_footer_main.getbbox(c_text1)
    draw.text(((card_w - (b[2] - b[0])) // 2, 1568), c_text1, fill=COLOR_DARK_TEAL, font=f_footer_main)

    f_footer_sub = ImageFont.truetype(FONT_SANS, 19)
    c_text2 = "Website: drjankichoudhary.com • OPD Consultations by Prior Appointment"
    b = f_footer_sub.getbbox(c_text2)
    draw.text(((card_w - (b[2] - b[0])) // 2, 1608), c_text2, fill=COLOR_TEXT_SLATE, font=f_footer_sub)

    # 9. Outer card border (Polished double-line frame)
    draw.rectangle([0, 0, card_w - 1, card_h - 1], outline=COLOR_DARK_TEAL, width=8)
    draw.rectangle([8, 8, card_w - 9, card_h - 9], outline=COLOR_PINK_STROKE, width=2)

    out_path = os.path.join(OUTPUT_DIR, "dr-janki-instagram-standee.png")
    standee.save(out_path)
    print("Saved refined desk standee:", out_path, standee.size)

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    qr = generate_clean_qr()
    generate_square_card(qr)
    generate_desk_standee(qr)
    
    # Save high-res JPEG copy to assets root for website modal
    jpg_path = os.path.abspath("assets/dr-janki-instagram-qr.jpg")
    card_img = Image.open(os.path.join(OUTPUT_DIR, "dr-janki-instagram-square-card.png")).convert("RGB")
    card_img.save(jpg_path, quality=95)
    print("Updated website QR modal asset:", jpg_path)
    print("All Instagram QR assets generated successfully!")
