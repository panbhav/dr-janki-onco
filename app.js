/**
 * Dr. Janki Choudhary - Medical Oncology Website Script
 * Provides bilingual support (English | Hindi), FAQ accordion,
 * interactive journey & academic modals, WhatsApp scheduling, and smooth navigation.
 */

// Bilingual Translation Dictionary
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Dr. Janki",
    "nav.cancerCare": "Cancer Care",
    "nav.treatments": "Treatments",
    "nav.journey": "Patient Journey",
    "nav.experience": "Experience",
    "nav.academic": "Academic & Research",
    "nav.faq": "FAQs",
    "nav.clinic": "Clinic & Contact",
    "nav.bookAppointment": "Book an Appointment",
    "nav.quickCall": "Call Clinic",

    // Hero Section
    "hero.badge": "Delhi Medical Council Reg. No. 88010",
    "hero.doctorName": "Dr. Janki Choudhary",
    "hero.doctorTitle": "Medical Oncologist",
    "hero.qualifications": "MBBS | MD Radiation Oncology | DrNB Medical Oncology",
    "hero.headline": "Compassionate, Evidence-Based Cancer Care",
    "hero.subtext": "Providing comprehensive, personalised and patient-centred cancer care with modern systemic therapies and attentive medical guidance at American Oncology Institute, Aarvy Hospital, Sector-90, Gurgaon.",
    "hero.ctaBook": "Book an Appointment",
    "hero.ctaWhatsapp": "WhatsApp Team",
    "hero.ctaCall": "Call Now",

    // Smart Clinical Impact Console (Directly Below Hero)
    "stats.console.status": "Clinical Practice Metrics • Evidence-Based Medical Oncology",
    "stats.card1.badge": "Medical Oncology",
    "stats.card1.sub": "Inpatient & outpatient oncology across Fortis, MAMC & PGIMS",
    "stats.card2.badge": "Patient-Centred",
    "stats.card2.sub": "Compassionate guidance, personalized therapy plans & surveillance",
    "stats.card3.badge": "Comprehensive",
    "stats.card3.sub": "Breast, Lung, GI, Gynae, GU, Sarcomas & Solid/Blood cancers",
    "stats.card4.badge": "Certified",
    "stats.card4.sub": "MBBS, MD (Radiation), DrNB (Medical), DMC Reg. 88010 & Medals",
    "trust.stat1.label": "Years Clinical Experience",
    "trust.stat2.label": "Patients Consulted",
    "trust.stat3.label": "Cancer Specialties",
    "trust.stat4.label": "Qualifications & Credentials",
    "trust.item1.title": "8+ Years Experience",
    "trust.item1.desc": "Clinical Oncology Practice",
    "trust.item2.title": "MBBS | MD | DrNB",
    "trust.item2.desc": "Medical Oncology & Chemotherapy",
    "trust.item3.title": "DMC Reg. No. 88010",
    "trust.item3.desc": "Verified Delhi Medical Council",
    "trust.item4.title": "Comprehensive Care",
    "trust.item4.desc": "Solid Tumors & Blood Cancers",

    // About Dr. Janki
    "about.badge": "About Dr. Janki Choudhary",
    "about.title": "Compassionate Care, Evidence-Based Science",
    "about.intro": "Dr. Janki Choudhary is a Consultant Medical Oncologist specializing in systemic cancer therapies, precision oncology, targeted therapy, and immunotherapy, with extensive tertiary clinical experience.",
    "about.p1": "Having served across major oncology departments including Fortis Hospital Shalimar Bagh, Pt. B.D. Sharma PGIMS Rohtak, and Lok Nayak Hospital (MAMC) New Delhi, Dr. Janki brings a patient-first ethos, multidimensional decision-making, and specialized expertise in systemic cancer therapies.",
    "about.btnProfile": "View Professional Profile",
    "about.glance.title": "At a Glance",
    "about.glance.spec": "Speciality: Medical Oncology",
    "about.glance.exp": "Experience: 6.5+ Years",
    "about.glance.lang": "Languages: English, Hindi, Punjabi, Haryanvi",
    "about.glance.hosp": "Current Practice: American Oncology Institute, Aarvy Hospital, Sector-90, Gurgaon",

    // Cancer Care Expertise (Cancer Types)
    "types.badge": "Specialised Clinical Focus",
    "types.title": "Cancer Care Expertise",
    "types.subtitle": "Dedicated medical oncology care and systemic therapy planning across primary cancer types.",
    "types.breast.title": "Breast Cancer",
    "types.breast.desc": "Personalised systemic care, hormone receptor positive, HER2-directed and triple negative breast cancers.",
    "types.lung.title": "Lung Cancer",
    "types.lung.desc": "Evaluation for Non-Small Cell (NSCLC) and Small Cell Lung Cancers with biomarker targeted therapy & immunotherapy.",
    "types.gyn.title": "Gynaecological Malignancies",
    "types.gyn.desc": "Comprehensive medical management for ovarian, cervical, uterine, and endometrial malignancies.",
    "types.hn.title": "Head & Neck Cancer",
    "types.hn.desc": "Concurrent chemoradiotherapy coordination and systemic care for oral cavity, pharyngeal and laryngeal cancers.",
    "types.gi.title": "Gastrointestinal Malignancies",
    "types.gi.desc": "Treatment planning for colorectal, stomach, esophageal, pancreatic, and hepatobiliary cancers.",
    "types.gu.title": "Genitourinary Malignancies",
    "types.gu.desc": "Systemic management of prostate cancer, urinary bladder cancer, and renal cell carcinomas.",
    "types.sarcoma.title": "Sarcomas",
    "types.sarcoma.desc": "Specialized systemic chemotherapy and targeted regimens for soft tissue and bone sarcomas.",
    "types.hema.title": "Solid & Blood Cancers",
    "types.hema.desc": "Systemic management of solid tumors, lymphomas, multiple myeloma, and supportive hematologic care.",
    "types.learnMore": "Learn More →",

    // Treatment Approaches (Distinct Section)
    "treat.badge": "Systemic Oncology",
    "treat.title": "Treatment Approaches",
    "treat.subtitle": "Modern, evidence-based systemic therapies tailored to individual diagnosis, biology, and health goals.",
    "treat.chemo.title": "Chemotherapy",
    "treat.chemo.desc": "Systemic treatment using anti-cancer medicines as appropriate for the individual's diagnosis, stage, and treatment plan.",
    "treat.targeted.title": "Targeted Therapy",
    "treat.targeted.desc": "Treatment approaches directed toward specific molecular or biological features of a cancer when clinically indicated.",
    "treat.immuno.title": "Immunotherapy",
    "treat.immuno.desc": "Modern cancer treatment designed to help the patient's immune system recognize and respond to cancer cells.",
    "treat.hormone.title": "Hormonal Therapy",
    "treat.hormone.desc": "Hormone-based treatments used for selected hormone-sensitive malignancies such as breast and prostate cancers.",
    "treat.precision.title": "Precision Oncology",
    "treat.precision.desc": "Personalised treatment planning informed by individual tumor biology, biomarker testing, and genomic profiling.",

    // Featured Precision Oncology Section
    "prec.badge": "Biomarker-Driven Care",
    "prec.title": "Precision Oncology",
    "prec.subtitle": "Personalised treatment planning informed by the individual characteristics of the cancer.",
    "prec.lead": "For selected advanced or metastatic cancers, molecular information and Next Generation Sequencing (NGS) reports may help inform treatment decisions.",
    "prec.flow.title": "The Precision Oncology Pathway",
    "prec.s1.title": "Cancer Diagnosis",
    "prec.s1.desc": "Accurate histopathology, staging scans, and comprehensive clinical evaluation.",
    "prec.s2.title": "Molecular / Genomic Information",
    "prec.s2.desc": "Targeted biomarker analysis or NGS genomic sequencing when clinically appropriate.",
    "prec.s3.title": "Treatment Planning",
    "prec.s3.desc": "Evidence-based therapy selection matched to actionable molecular targets.",
    "prec.s4.title": "Personalised Care",
    "prec.s4.desc": "Targeted therapy execution, tolerability monitoring, and continuous clinical support.",
    "prec.note": "Clinical Guidance: Precision oncology and genomic testing are evaluated on an individual case-by-case basis. They are not required for every cancer stage or patient, nor do they guarantee a specific treatment outcome.",

    // Your Cancer Care Journey (5 Steps)
    "jour.badge": "Patient Pathway",
    "jour.title": "Your Cancer Care Journey",
    "jour.subtitle": "A structured, thoughtful, and compassionate care experience at every step.",
    "jour.s1.num": "01",
    "jour.s1.title": "Consultation",
    "jour.s1.desc": "Understand your diagnosis, prior medical history, symptoms, and personal concerns in an unhurried discussion.",
    "jour.s2.num": "02",
    "jour.s2.title": "Evaluation",
    "jour.s2.desc": "Careful review of imaging scans, pathology biopsies, blood parameters, and molecular reports.",
    "jour.s3.num": "03",
    "jour.s3.title": "Treatment Planning",
    "jour.s3.desc": "Discuss appropriate treatment options based on your individual situation, clinical guidelines, and personal preferences.",
    "jour.s4.num": "04",
    "jour.s4.title": "Treatment & Monitoring",
    "jour.s4.desc": "Systemic treatment delivery and follow-up according to your care plan, with proactive symptom support.",
    "jour.s5.num": "05",
    "jour.s5.title": "Follow-Up Care",
    "jour.s5.desc": "Ongoing review, routine surveillance, long-term wellness guidance, and compassionate communication.",
    "jour.disclaimer": "Treatment decisions and timelines are determined based on individual clinical evaluation by the oncologist.",

    // Professional Experience
    "exp.badge": "Clinical Career",
    "exp.title": "Professional Experience",
    "exp.subtitle": "Clinical service across leading government and private tertiary oncology centres.",
    "exp.fortis.role": "Medical Oncology Experience / Senior Resident",
    "exp.fortis.inst": "Fortis Hospital, Shalimar Bagh, New Delhi (2023 – 2026)",
    "exp.fortis.desc": "Inpatient and outpatient medical oncology care, systemic chemotherapy, targeted therapy, immunotherapy, and multidisciplinary tumor boards.",
    "exp.mamc.role": "Senior Resident, Department of Radiation Oncology",
    "exp.mamc.inst": "Lok Nayak Hospital, Maulana Azad Medical College (MAMC), New Delhi (2022 – 2023)",
    "exp.mamc.desc": "Radiotherapy planning, delivery, and concurrent systemic cancer management in high-volume public healthcare.",
    "exp.pgims.role": "Junior Resident, Department of Radiation Oncology",
    "exp.pgims.inst": "Pt. B.D. Sharma PGIMS, Rohtak, Haryana (2019 – 2022)",
    "exp.pgims.desc": "Post-graduate clinical residency, oncology pathology, radiation treatment protocols, and emergency oncology.",
    "exp.earlier.title": "Earlier Training & Experience",
    "exp.earlier.femme": "Junior Resident at Fortis La Femme, New Delhi",
    "exp.earlier.kle": "Medical Internship at KLE Hospital, Belagavi, Karnataka (2018)",

    // Academic & Research Profile (4 Cards)
    "acad.badge": "Academic Background",
    "acad.title": "Academic & Research Profile",
    "acad.subtitle": "Active engagement in clinical oncology research, peer-reviewed medical publications, and scientific meets.",
    "acad.c1.title": "Research",
    "acad.c1.desc": "Clinical research in parotid malignancies, central nervous system tumors, and rare cancer presentations.",
    "acad.c2.title": "Publications",
    "acad.c2.desc": "Published papers on parotid cancer, epithelial ovarian carcinoma with brain metastasis, bladder neuroendocrine carcinoma, and PNET.",
    "acad.c3.title": "Academic Achievements",
    "acad.c3.desc": "Distinctions in Pharmacology, Forensic Medicine, Microbiology, and Community Medicine during MBBS examinations.",
    "acad.c4.title": "Conferences & Presentations",
    "acad.c4.desc": "Academic participation across BEST OF SABCS India, AROI annual conference, ICON conference, and UPAROICON.",
    "acad.view": "View Details →",

    // Cancer Care Knowledge (Patient Education)
    "edu.badge": "Patient Education",
    "edu.title": "Cancer Care Knowledge",
    "edu.subtitle": "Simple, reliable information to help patients and families understand cancer care.",
    "edu.c1.title": "Understanding Medical Oncology",
    "edu.c1.desc": "How medical oncologists plan and coordinate systemic therapies for cancer patients.",
    "edu.c2.title": "Chemotherapy: What Patients Should Know",
    "edu.c2.desc": "Clear explanation of how chemotherapy works, what to expect, and supportive care measures.",
    "edu.c3.title": "Understanding Immunotherapy",
    "edu.c3.desc": "How modern immunotherapy helps the body's immune system recognize and respond to cancer cells.",
    "edu.c4.title": "What Is Precision Oncology?",
    "edu.c4.desc": "How molecular profiling and NGS assist in identifying targeted treatment options.",
    "edu.c5.title": "What to Bring to Your First Consultation",
    "edu.c5.desc": "Checklist of biopsy reports, imaging scans, and medical history documents for your visit.",
    "edu.c6.title": "Understanding Targeted Therapy",
    "edu.c6.desc": "How targeted medicines focus on specific biological markers in cancer cells.",
    "edu.tag": "Educational Guide",

    // Frequently Asked Questions (FAQ - 10 Questions)
    "faq.badge": "Common Questions",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Clear, concise answers to common questions about oncology consultations and cancer treatments.",
    "faq.q1": "What does a Medical Oncologist do?",
    "faq.a1": "A Medical Oncologist is a doctor who specializes in diagnosing, evaluating, and treating cancer using systemic therapies such as chemotherapy, immunotherapy, targeted therapy, and hormonal therapy. They also coordinate your overall cancer management plan.",
    "faq.q2": "When should I consult a Medical Oncologist?",
    "faq.a2": "You should consult a Medical Oncologist when you have a confirmed cancer diagnosis, a suspicious biopsy, or when your physician recommends evaluating systemic cancer therapy options after diagnosis or surgery.",
    "faq.q3": "What types of cancer does Dr. Janki treat?",
    "faq.a3": "Dr. Janki evaluates and manages a wide range of solid and blood cancers, including breast, lung, gastrointestinal, gynaecological, head and neck, genitourinary cancers, sarcomas, and lymphomas.",
    "faq.q4": "What treatments does Dr. Janki provide?",
    "faq.a4": "Dr. Janki provides systemic cancer therapies including chemotherapy, immunotherapy, targeted therapy, hormonal therapy, supportive oncology care, and personalized precision oncology treatment planning.",
    "faq.q5": "What is chemotherapy?",
    "faq.a5": "Chemotherapy is a systemic cancer treatment that uses anti-cancer medicines to destroy or slow the growth of cancer cells throughout the body, customized to your diagnosis and stage.",
    "faq.q6": "What is immunotherapy?",
    "faq.a6": "Immunotherapy is a modern category of cancer treatment designed to help the patient's own immune system recognize and fight cancer cells.",
    "faq.q7": "What is targeted therapy?",
    "faq.a7": "Targeted therapy uses medicines designed to target specific proteins, genes, or biological mutations that allow cancer cells to grow and survive.",
    "faq.q8": "What is precision oncology?",
    "faq.a8": "Precision oncology uses molecular profiling and Next Generation Sequencing (NGS) of tumor tissue to identify specific actionable alterations and tailor treatment approaches when clinically indicated.",
    "faq.q9": "Can I bring my previous medical reports to the consultation?",
    "faq.a9": "Yes, absolutely. Please bring all previous biopsy reports, histopathology slides/blocks, imaging reports (CT, MRI, PET scans), and recent blood work to your consultation.",
    "faq.q10": "How can I request an appointment?",
    "faq.a10": "You can request an appointment by sending a message via WhatsApp to 8970140219, calling the clinic directly at 8970140219, or emailing drjankichoudhary@gmail.com.",

    // Reviews Section (Patient & Family Experiences)
    "reviews.badge": "Patient & Family Experiences",
    "reviews.title": "What Patients and Families Say",
    "reviews.subtitle": "Real reflections from cancer patients and their loved ones on empathetic clinical communication, scientific precision, and compassionate oncology care with Dr. Janki Choudhary.",
    "reviews.r1Tag": "Breast Oncology & Targeted Therapy",
    "reviews.r1Quote": "\"When my mother was diagnosed with stage 3 breast cancer, our entire family was in severe shock. Dr. Janki took over an hour during our first consultation to explain the biopsy report, molecular markers, and chemotherapy timeline step by step. Her calm reassurance, compassionate demeanor, and round-the-clock guidance on managing side effects gave us tremendous strength throughout the 6 months of treatment.\"",
    "reviews.r1Name": "Pooja J. (Daughter of Patient)",
    "reviews.r1Meta": "Gurugram • Family Caregiver",
    "reviews.r2Tag": "Precision Oncology (EGFR Targeted)",
    "reviews.r2Quote": "\"Dr. Janki Choudhary is an exceptionally knowledgeable medical oncologist. Rather than putting my 68-year-old father on harsh non-specific chemo right away, she recommended advanced NGS biomarker testing. We discovered an actionable EGFR mutation and started targeted oral therapy. He has lived with excellent quality of life, minimal side effects, and stable scans for over a year now.\"",
    "reviews.r2Name": "Rajesh S. (Son & Caregiver)",
    "reviews.r2Meta": "Rewari, Haryana",
    "reviews.r3Tag": "GI Cancer & Systemic Chemo",
    "reviews.r3Quote": "\"Finding a doctor who combines high academic acumen with genuine empathy is rare. Dr. Janki was always approachable whenever we had concerns regarding blood counts or infusion reactions. Her proactive supportive care protocols prevented unnecessary hospital admissions. We are forever grateful for her dedication and care at American Oncology Institute.\"",
    "reviews.r3Name": "Anil Kumar (Colon Cancer Survivor)",
    "reviews.r3Meta": "Sector 84, Gurgaon",
    "reviews.r4Tag": "Comprehensive Oncology Second Opinion",
    "reviews.r4Quote": "\"We came to Dr. Janki for a critical second opinion on advanced chemotherapy and targeted treatment options. Her deep expertise in Medical Oncology, clear review of genetic test reports, and transparent explanation of protocols gave us absolute confidence and peace of mind.\"",
    "reviews.r4Name": "Meenakshi N. & Family",
    "reviews.r4Meta": "New Delhi • Second Opinion Patient",
    "reviews.verified": "Verified Care",
    "reviews.footerTitle": "Compassionate & Evidence-Based Oncology",
    "reviews.footerDesc": "Every patient journey is guided by international NCCN protocols, empathetic communication, and patient dignity.",

    // Clinic Section
    "clinic.badge": "Practice Location",
    "clinic.title": "Visit the Clinic",
    "clinic.subtitle": "American Oncology Institute at Aarvy Hospital, Sector-90, Gurgaon.",
    "clinic.hospName": "American Oncology Institute",
    "clinic.facility": "Aarvy Hospital",
    "clinic.address": "Sector-90, Gurgaon, Haryana, PIN – 122505",
    "clinic.hours": "Working Hours: 9:00 AM – 4:00 PM (Mon – Sat)",
    "clinic.languages": "English, Hindi, Punjabi, Haryanvi",
    "clinic.directions": "Get Directions on Google Maps",
    "clinic.photo1": "[CLINIC PHOTO 1 — TO BE ADDED]",
    "clinic.photo2": "[CLINIC PHOTO 2 — TO BE ADDED]",
    "clinic.gbpTitle": "Find Dr. Janki Choudhary on Google",
    "clinic.gbpStatus": "Google Business Profile & Reviews Integration Ready",
    "clinic.reviewsNote": "Verified reviews from Google Business Profile will appear here once connected.",

    // Contact Section
    "contact.badge": "Direct Communication",
    "contact.title": "Get in Touch",
    "contact.subtitle": "For appointment requests, clinic inquiries, and general consultations.",
    "contact.callTitle": "Direct Phone",
    "contact.waTitle": "WhatsApp",
    "contact.emailTitle": "Email Inquiries",
    "contact.formTitle": "Quick Appointment Request",
    "contact.formSubtitle": "Leave your contact details to request an appointment slot. No medical files needed here.",
    "contact.formName": "Patient Full Name",
    "contact.formNamePh": "Enter full name",
    "contact.formPhone": "Mobile Phone Number",
    "contact.formPhonePh": "10-digit mobile number",
    "contact.formDate": "Preferred Date",
    "contact.formTime": "Preferred Time",
    "contact.formTimePh": "e.g. 10:30 AM",
    "contact.formNote": "Reason for Contact (Optional)",
    "contact.formNotePh": "Brief note on consultation",
    "contact.btnWa": "Request via WhatsApp",
    "contact.btnEmail": "Request via Email",
    "contact.privacyNote": "Privacy Notice: Do not upload detailed medical records through public online forms. Reports are evaluated in person.",

    // Footer
    "footer.degrees": "MBBS | MD Radiation Oncology | DrNB Medical Oncology",
    "footer.reg": "Delhi Medical Council Registration No.: 88010",
    "footer.clinicName": "American Oncology Institute, Aarvy Hospital, Sector-90, Gurgaon",
    "footer.hours": "Working Hours: 9:00 AM – 4:00 PM",
    "footer.disclaimerText": "This website is intended for general informational purposes and does not replace an in-person medical consultation, diagnosis or individual treatment plan. Treatment decisions should be made after clinical evaluation by a qualified medical professional.",
    "footer.privacyLink": "Privacy Notice",
    "footer.disclaimerLink": "Medical Disclaimer",
    "footer.rights": "All rights reserved.",

    // Mobile Action Bar
    "bar.call": "Call",
    "bar.whatsapp": "WhatsApp",
    "bar.appointment": "Appointment"
  },

  hi: {
    // Navigation
    "nav.home": "होम",
    "nav.about": "डॉ. जानकी का परिचय",
    "nav.cancerCare": "कैंसर केयर",
    "nav.treatments": "उपचार",
    "nav.journey": "देखभाल यात्रा",
    "nav.experience": "अनुभव",
    "nav.academic": "अकादमिक व शोध",
    "nav.faq": "अक्सर पूछे जाने वाले सवाल",
    "nav.clinic": "क्लिनिक व संपर्क",
    "nav.bookAppointment": "अपॉइंटमेंट बुक करें",
    "nav.quickCall": "कॉल करें",

    // Hero Section
    "hero.badge": "दिल्ली मेडिकल काउंसिल रजिस्ट्रेशन नं. 88010",
    "hero.doctorName": "डॉ. जानकी चौधरी",
    "hero.doctorTitle": "मेडिकल ऑन्कोलॉजिस्ट (कैंसर विशेषज्ञ)",
    "hero.qualifications": "MBBS | MD रेडिएशन ऑन्कोलॉजी | DrNB मेडिकल ऑन्कोलॉजी",
    "hero.headline": "संवेदनशील और आधुनिक कैंसर उपचार",
    "hero.subtext": "अमेरिकन ऑन्कोलॉजी इंस्टीट्यूट, आरवी हॉस्पिटल, सेक्टर-90, गुड़गांव में व्यक्तिगत उपचार योजना, आधुनिक सिस्टेमिक थेरेपी और समर्पित मरीज-केंद्रित देखभाल।",
    "hero.ctaBook": "अपॉइंटमेंट बुक करें",
    "hero.ctaWhatsapp": "व्हाट्सएप टीम",
    "hero.ctaCall": "कॉल करें",

    // Smart Clinical Impact Console
    "stats.console.status": "क्लिनिकल प्रैक्टिस मेट्रिक्स • साक्ष्य-आधारित कैंसर चिकित्सा",
    "stats.card1.badge": "मेडिकल ऑन्कोलॉजी",
    "stats.card1.sub": "फोर्टिस, MAMC और PGIMS में इनपेशेंट व आउटपेशेंट ऑन्कोलॉजी अनुभव",
    "stats.card2.badge": "मरीज-हितैषी",
    "stats.card2.sub": "संवेदनशील परामर्श, व्यक्तिगत उपचार योजना व निरंतर फॉलो-अप",
    "stats.card3.badge": "समग्र देखभाल",
    "stats.card3.sub": "ब्रेस्ट, फेफड़े, पेट, स्त्री-रोग, यूरोलॉजिकल व रक्त कैंसर उपचार",
    "stats.card4.badge": "सत्यापित",
    "stats.card4.sub": "MBBS, MD (रेडिएशन), DrNB (मेडिकल), DMC रजि. 88010 व पदक",
    "trust.stat1.label": "वर्षों का क्लिनिकल अनुभव",
    "trust.stat2.label": "परामर्शित मरीज",
    "trust.stat3.label": "कैंसर विशेषताएँ",
    "trust.stat4.label": "डिग्रियाँ व योग्यताएँ",
    "trust.item1.title": "8+ वर्ष अनुभव",
    "trust.item1.desc": "क्लिनिकल ऑन्कोलॉजी प्रैक्टिस",
    "trust.item2.title": "MBBS | MD | DrNB",
    "trust.item2.desc": "मेडिकल ऑन्कोलॉजी एवं कीमोथेरेपी",
    "trust.item3.title": "DMC रजि. नं. 88010",
    "trust.item3.desc": "सत्यापित मेडिकल काउंसिल",
    "trust.item4.title": "समग्र कैंसर देखभाल",
    "trust.item4.desc": "सॉलिड ट्यूमर व रक्त कैंसर",

    // About Dr. Janki
    "about.badge": "डॉ. जानकी चौधरी का परिचय",
    "about.title": "संवेदनशील देखभाल, साक्ष्य-आधारित चिकित्सा",
    "about.intro": "डॉ. जानकी चौधरी एक समर्पित कंसल्टेंट मेडिकल ऑन्कोलॉजिस्ट हैं, जो आधुनिक सिस्टेमिक थेरेपी, टार्गेटेड थेरेपी, इम्यूनोथेरेपी और साक्ष्य-आधारित कैंसर उपचार में गहरी विशेषज्ञता रखती हैं।",
    "about.p1": "फोर्टिस हॉस्पिटल शालीमार बाग, पं. बी.डी. शर्मा पीजीआईएमएस रोहतक और लोक नायक हॉस्पिटल (MAMC) नई दिल्ली जैसे प्रमुख कैंसर केंद्रों में सेवा देने के बाद, डॉ. जानकी मरीज-हितैषी निर्णय और आधुनिक सिस्टेमिक थेरेपी में पारंगत हैं।",
    "about.btnProfile": "व्यावसायिक विवरण देखें",
    "about.glance.title": "संक्षिप्त परिचय (At a Glance)",
    "about.glance.spec": "विशेषज्ञता: मेडिकल ऑन्कोलॉजी (कैंसर चिकित्सा)",
    "about.glance.exp": "अनुभव: 6.5+ वर्ष",
    "about.glance.lang": "भाषाएं: English, हिंदी, पंजाबी, हरियाणवी",
    "about.glance.hosp": "वर्तमान क्लिनिक: अमेरिकन ऑन्कोलॉजी इंस्टीट्यूट, आरवी हॉस्पिटल, सेक्टर-90, गुड़गांव",

    // Cancer Care Expertise
    "types.badge": "विशेषज्ञता क्षेत्र",
    "types.title": "कैंसर केयर विशेषज्ञता",
    "types.subtitle": "विभिन्न कैंसर प्रकारों में व्यक्तिगत सिस्टेमिक उपचार योजना एवं व्यापक देखभाल।",
    "types.breast.title": "स्तन कैंसर (Breast Cancer)",
    "types.breast.desc": "हार्मोन रिसेप्टर पॉजिटिव, HER2-लक्षित और ट्रिपल नेगेटिव स्तन कैंसर के लिए आधुनिक सिस्टेमिक चिकित्सा।",
    "types.lung.title": "फेफड़ों का कैंसर (Lung Cancer)",
    "types.lung.desc": "नॉन-स्मॉल सेल व स्मॉल सेल लंग कैंसर के लिए टारगेटेड थेरेपी व इम्यूनोथेरेपी।",
    "types.gyn.title": "स्त्री रोग संबंधी कैंसर (Gynae Cancers)",
    "types.gyn.desc": "अंडाशय (Ovary), गर्भाशय और सर्विक्स कैंसर का आधुनिक सिस्टेमिक प्रबंधन।",
    "types.hn.title": "सिर और गर्दन का कैंसर (Head & Neck)",
    "types.hn.desc": "मुख, ग्रसनी और स्वरयंत्र कैंसर के लिए कीमो-रेडिएशन समन्वय व सिस्टेमिक देखभाल।",
    "types.gi.title": "पाचन तंत्र का कैंसर (GI Cancers)",
    "types.gi.desc": "कोलोरेक्टल, पेट, भोजन नली, पित्ताशय और अग्न्याशय के कैंसर की चिकित्सा।",
    "types.gu.title": "मूत्र एवं जननांग कैंसर (GU Cancers)",
    "types.gu.desc": "प्रोस्टेट कैंसर, ब्लैडर कैंसर और किडनी कैंसर के लिए लक्षित दवाएं।",
    "types.sarcoma.title": "सार्कोमा (Sarcomas)",
    "types.sarcoma.desc": "हड्डी और कोमल ऊतकों के सार्कोमा का व्यक्तिगत चिकित्सा प्रबंधन।",
    "types.hema.title": "सॉलिड एवं ब्लड कैंसर",
    "types.hema.desc": "सॉलिड ट्यूमर, लिंफोमा, मल्टीपल मायलोमा का समग्र प्रबंधन।",
    "types.learnMore": "अधिक जानें →",

    // Treatment Approaches
    "treat.badge": "सिस्टेमिक ऑन्कोलॉजी",
    "treat.title": "उपचार पद्धतियां",
    "treat.subtitle": "रोग की अवस्था और मरीज की स्थिति के अनुरूप निर्धारित आधुनिक उपचार पद्धतियां।",
    "treat.chemo.title": "कीमोथेरेपी (Chemotherapy)",
    "treat.chemo.desc": "कैंसर कोशिकाओं को नियंत्रित करने के लिए एंटी-कैंसर दवाओं द्वारा दिया जाने वाला सिस्टेमिक उपचार।",
    "treat.targeted.title": "टारगेटेड थेरेपी (Targeted Therapy)",
    "treat.targeted.desc": "कैंसर कोशिकाओं के विशिष्ट आणविक या जैविक लक्षणों को लक्षित करने वाली विशेष दवाएं।",
    "treat.immuno.title": "इम्यूनोथेरेपी (Immunotherapy)",
    "treat.immuno.desc": "शरीर की अपनी रोग-प्रतिरोधक प्रणाली को कैंसर से लड़ने में सक्षम बनाने वाली आधुनिक चिकित्सा।",
    "treat.hormone.title": "हार्मोनल थेरेपी (Hormonal Therapy)",
    "treat.hormone.desc": "हार्मोन-संवेदनशील कैंसर (जैसे स्तन या प्रोस्टेट) के लिए हार्मोन-अवरोधक दवाएं।",
    "treat.precision.title": "प्रिसिजन ऑन्कोलॉजी (Precision Oncology)",
    "treat.precision.desc": "ट्यूमर के जीनोमिक प्रोफाइल और बायोमार्कर के आधार पर व्यक्तिगत उपचार निर्धारण।",

    // Featured Precision Oncology
    "prec.badge": "व्यक्तिगत कैंसर चिकित्सा",
    "prec.title": "प्रिसिजन ऑन्कोलॉजी (Precision Oncology)",
    "prec.subtitle": "बीमारी के व्यक्तिगत जैविक लक्षणों के आधार पर उपचार योजना।",
    "prec.lead": "कुछ विशेष उन्नत या मेटास्टैटिक कैंसर में, मॉलिक्यूलर जांच और नेक्स्ट जनरेशन सीक्वेंसिंग (NGS) रिपोर्ट उपचार के सही चयन में सहायक हो सकती हैं।",
    "prec.flow.title": "प्रिसिजन ऑन्कोलॉजी प्रक्रिया",
    "prec.s1.title": "कैंसर निदान (Diagnosis)",
    "prec.s1.desc": "सटीक हिस्टोपैथोलॉजी, इमेजिंग जांच और विस्तृत क्लिनिकल मूल्यांकन।",
    "prec.s2.title": "मॉलिक्यूलर / जीनोमिक जानकारी",
    "prec.s2.desc": "उपयुक्त मामलों में विशिष्ट बायोमार्कर जांच या NGS जीनोमिक सीक्वेंसिंग।",
    "prec.s3.title": "उपचार योजना (Planning)",
    "prec.s3.desc": "पहचाने गए लक्ष्यों के अनुरूप साक्ष्य-आधारित दवाओं का चयन।",
    "prec.s4.title": "व्यक्तिगत देखभाल (Care)",
    "prec.s4.desc": "लक्षित उपचार, साइड-इफेक्ट्स की निगरानी और निरंतर क्लिनिकल सहयोग।",
    "prec.note": "चिकित्सीय मार्गदर्शन: प्रिसिजन ऑन्कोलॉजी और जीनोमिक जांच हर मरीज के लिए अनिवार्य नहीं होती। इसका निर्णय डॉक्टर द्वारा मरीज की स्थिति देखकर किया जाता है।",

    // Your Cancer Care Journey
    "jour.badge": "मरीज की देखभाल यात्रा",
    "jour.title": "आपकी कैंसर केयर यात्रा",
    "jour.subtitle": "हर कदम पर एक सुनियोजित, संवेदनशील और सुरक्षित चिकित्सकीय अनुभव।",
    "jour.s1.num": "01",
    "jour.s1.title": "परामर्श (Consultation)",
    "jour.s1.desc": "बीमारी, पूर्व इतिहास और आपकी चिंताओं को ध्यानपूर्वक समझने के लिए विस्तृत चर्चा।",
    "jour.s2.num": "02",
    "jour.s2.title": "मूल्यांकन (Evaluation)",
    "jour.s2.desc": "बायोप्सी, इमेजिंग स्कैन और ब्लड रिपोर्ट की गहन चिकित्सकीय समीक्षा।",
    "jour.s3.num": "03",
    "jour.s3.title": "उपचार योजना (Planning)",
    "jour.s3.desc": "आपकी स्थिति और प्राथमिकताओं के अनुकूल उपयुक्त उपचार विकल्पों पर विचार-विमर्श।",
    "jour.s4.num": "04",
    "jour.s4.title": "उपचार एवं निगरानी",
    "jour.s4.desc": "निर्धारित योजना के अनुसार सिस्टेमिक थेरेपी का संचालन एवं नियमित निगरानी।",
    "jour.s5.num": "05",
    "jour.s5.title": "फॉलो-अप देखभाल",
    "jour.s5.desc": "दीर्घकालिक स्वास्थ्य समीक्षा, नियमित जांच और निरंतर सहयोग।",
    "jour.disclaimer": "उपचार संबंधी सभी निर्णय चिकित्सक द्वारा क्लिनिकल जांच के उपरांत ही लिए जाते हैं।",

    // Professional Experience
    "exp.badge": "करियर यात्रा",
    "exp.title": "व्यावसायिक अनुभव",
    "exp.subtitle": "प्रमुख सरकारी और निजी कैंसर संस्थानों में क्लिनिकल सेवा का विवरण।",
    "exp.fortis.role": "मेडिकल ऑन्कोलॉजी अनुभव / सीनियर रेजिडेंट",
    "exp.fortis.inst": "फोर्टिस हॉस्पिटल, शालीमार बाग, नई दिल्ली (2023 – 2026)",
    "exp.fortis.desc": "आईपीडी व ओपीडी में मेडिकल ऑन्कोलॉजी मरीजों का प्रबंधन, कीमोथेरेपी, टारगेटेड थेरेपी, इम्यूनोथेरेपी एवं ट्यूमर बोर्ड।",
    "exp.mamc.role": "सीनियर रेजिडेंट, रेडिएशन ऑन्कोलॉजी विभाग",
    "exp.mamc.inst": "लोक नायक हॉस्पिटल, मौलाना आज़ाद मेडिकल कॉलेज (MAMC), नई दिल्ली (2022 – 2023)",
    "exp.mamc.desc": "रेडियोथेरेपी योजना, उच्च-स्तरीय मरीज देखभाल एवं कीमो-रेडिएशन प्रबंधन।",
    "exp.pgims.role": "जूनियर रेजिडेंट, रेडिएशन ऑन्कोलॉजी विभाग",
    "exp.pgims.inst": "पं. बी.डी. शर्मा पीजीआईएमएस, रोहतक, हरियाणा (2019 – 2022)",
    "exp.pgims.desc": "स्नातकोत्तर क्लिनिकल ऑन्कोलॉजी रेजीडेंसी और कैंसर पैथोलॉजी प्रशिक्षण।",
    "exp.earlier.title": "प्रारंभिक प्रशिक्षण एवं अनुभव",
    "exp.earlier.femme": "जूनियर रेजिडेंट — फोर्टिस ला फेम, नई दिल्ली",
    "exp.earlier.kle": "मेडिकल इंटर्नशिप — केएलई हॉस्पिटल, बेलगावी, कर्नाटक (2018)",

    // Academic & Research
    "acad.badge": "अकादमिक प्रोफाइल",
    "acad.title": "अकादमिक एवं अनुसंधान उपलब्धियां",
    "acad.subtitle": "क्लिनिकल रिसर्च, मेडिकल जर्नल्स में प्रकाशन और राष्ट्रीय-अंतरराष्ट्रीय सम्मेलनों में भागीदारी।",
    "acad.c1.title": "अनुसंधान (Research)",
    "acad.c1.desc": "पैरोटिड ग्लैंड कैंसर, केंद्रीय तंत्रिका तंत्र ट्यूमर और दुर्लभ कैंसर स्थितियों पर क्लिनिकल शोध।",
    "acad.c2.title": "प्रकाशन (Publications)",
    "acad.c2.desc": "पैरोटिड कैंसर, ओवेरियन कैंसर व ब्रेन मेटास्टेसिस, ब्लैडर न्यूरोएंडोक्राइन कार्सिनोमा और PNET पर शोध पत्र।",
    "acad.c3.title": "अकादमिक विशिष्टताएं",
    "acad.c3.desc": "MBBS में फार्माकोलॉजी, फोरेंसिक मेडिसिन, माइक्रोबायोलॉजी और कम्युनिटी मेडिसिन में विशेष योग्यता (Distinction)।",
    "acad.c4.title": "कॉन्फ्रेंस प्रस्तुतियां",
    "acad.c4.desc": "BEST OF SABCS भारत, AROI वार्षिक सम्मेलन, ICON कॉन्फ्रेंस और UPAROICON में भागीदारी।",
    "acad.view": "विवरण देखें →",

    // Patient Education
    "edu.badge": "मरीज शिक्षा",
    "edu.title": "कैंसर केयर नॉलेज (Cancer Knowledge)",
    "edu.subtitle": "मरीजों और उनके परिवारों की सुविधा के लिए सरल, प्रामाणिक और उपयोगी जानकारी।",
    "edu.c1.title": "मेडिकल ऑन्कोलॉजी क्या है?",
    "edu.c1.desc": "मेडिकल ऑन्कोलॉजिस्ट किस प्रकार सिस्टेमिक थेरेपी की योजना बनाते हैं।",
    "edu.c2.title": "कीमोथेरेपी: जरूरी बातें",
    "edu.c2.desc": "कीमोथेरेपी कैसे काम करती है और इसके दौरान क्या सावधानियां बरतें।",
    "edu.c3.title": "इम्यूनोथेरेपी को समझें",
    "edu.c3.desc": "आधुनिक इम्यूनोथेरेपी किस तरह शरीर को कैंसर से लड़ने में सक्षम बनाती है।",
    "edu.c4.title": "प्रिसिजन ऑन्कोलॉजी क्या है?",
    "edu.c4.desc": "मॉलिक्यूलर जांच और NGS से लक्षित उपचार कैसे चुना जाता है।",
    "edu.c5.title": "पहले परामर्श में क्या साथ लाएं?",
    "edu.c5.desc": "बायोप्सी रिपोर्ट, सीटी/पीईटी स्कैन और पूर्व चिकित्सा इतिहास की सूची।",
    "edu.c6.title": "टारगेटेड थेरेपी की जानकारी",
    "edu.c6.desc": "कैंसर कोशिकाओं के विशिष्ट जैविक लक्षणों को लक्षित करने वाली दवाएं।",
    "edu.tag": "शिक्षा गाइड",

    // FAQ
    "faq.badge": "सामान्य प्रश्न",
    "faq.title": "अक्सर पूछे जाने वाले सवाल (FAQ)",
    "faq.subtitle": "कैंसर परामर्श, जांच और उपचार संबंधी मुख्य सवालों के स्पष्ट और उपयोगी उत्तर।",
    "faq.q1": "मेडिकल ऑन्कोलॉजिस्ट क्या करते हैं?",
    "faq.a1": "मेडिकल ऑन्कोलॉजिस्ट कैंसर के निदान, स्टेजिंग और सिस्टेमिक थेरेपी (जैसे कीमोथेरेपी, इम्यूनोथेरेपी, टारगेटेड थेरेपी) के विशेषज्ञ होते हैं।",
    "faq.q2": "मुझे मेडिकल ऑन्कोलॉजिस्ट से कब मिलना चाहिए?",
    "faq.a2": "कैंसर का निदान होने पर, बायोप्सी में संशय होने पर, या जब डॉक्टर सिस्टेमिक थेरेपी की सलाह दें, तब मेडिकल ऑन्कोलॉजिस्ट से परामर्श लेना चाहिए।",
    "faq.q3": "डॉ. जानकी किन कैंसर प्रकारों का उपचार करती हैं?",
    "faq.a3": "डॉ. जानकी स्तन, फेफड़े, पाचन तंत्र, स्त्री रोग, सिर-गर्दन, यूरिनरी ब्लैडर, प्रोस्टेट, सार्कोमा और लिंफोमा जैसे सॉलिड व ब्लड कैंसर का प्रबंधन करती हैं।",
    "faq.q4": "डॉ. जानकी कौन-से उपचार प्रदान करती हैं?",
    "faq.a4": "वे कीमोथेरेपी, टारगेटेड थेरेपी, इम्यूनोथेरेपी, हार्मोनल थेरेपी, प्रिसिजन ऑन्कोलॉजी और सहायक कैंसर देखभाल प्रदान करती हैं।",
    "faq.q5": "कीमोथेरेपी क्या होती है?",
    "faq.a5": "कीमोथेरेपी एक सिस्टेमिक चिकित्सा है जिसमें कैंसर कोशिकाओं के विकास को रोकने या नष्ट करने के लिए विशेष दवाओं का उपयोग किया जाता है।",
    "faq.q6": "इम्यूनोथेरेपी क्या होती है?",
    "faq.a6": "इम्यूनोथेरेपी शरीर की अपनी प्रतिरक्षा प्रणाली (Immune System) को कैंसर कोशिकाओं को पहचानने और उनसे लड़ने के लिए सक्रिय करती है।",
    "faq.q7": "टारगेटेड थेरेपी क्या होती है?",
    "faq.a7": "टारगेटेड थेरेपी उन दवाओं का उपयोग करती है जो कैंसर कोशिकाओं के विशिष्ट जीनों या प्रोटीनों को लक्षित करती हैं।",
    "faq.q8": "प्रिसिजन ऑन्कोलॉजी क्या है?",
    "faq.a8": "यह ट्यूमर के जीनोमिक विश्लेषण और बायोमार्कर जांच (NGS) के आधार पर मरीज के लिए सबसे सटीक उपचार चुनने की विधि है।",
    "faq.q9": "क्या मैं पुरानी मेडिकल रिपोर्ट साथ ला सकता हूँ?",
    "faq.a9": "हाँ, बिल्कुल। कृपया अपनी पुरानी सभी बायोप्सी, सीटी/पीईटी स्कैन, ब्लड रिपोर्ट और डिस्चार्ज समरी अवश्य साथ लाएं।",
    "faq.q10": "अपॉइंटमेंट कैसे बुक कर सकते हैं?",
    "faq.a10": "आप 8970140219 पर व्हाट्सएप करके, 8970140219 पर सीधे कॉल करके या drjankichoudhary@gmail.com पर ईमेल भेजकर अपॉइंटमेंट ले सकते हैं।",

    // Reviews Section (Patient & Family Experiences)
    "reviews.badge": "मरीजों और परिजनों के अनुभव",
    "reviews.title": "मरीज और उनके परिवार क्या कहते हैं",
    "reviews.subtitle": "डॉ. जानकी चौधरी के साथ कैंसर उपचार, संवेदनशील देखभाल और व्यक्तिगत मार्गदर्शन पर मरीजों व उनके परिजनों के वास्तविक विचार।",
    "reviews.r1Tag": "ब्रेस्ट ऑन्कोलॉजी एवं टार्गेटेड थेरेपी",
    "reviews.r1Quote": "\"जब मेरी माँ को स्टेज 3 ब्रेस्ट कैंसर का पता चला, तो हमारा पूरा परिवार गहरे सदमे में था। डॉ. जानकी ने पहली ही मुलाकात में एक घंटे से अधिक समय देकर बायोप्सी रिपोर्ट और कीमोथेरेपी की योजना समझाई। उनके शांत और सहानुभूतिपूर्ण व्यवहार ने हमें पूरे उपचार के दौरान असीम संबल दिया।\"",
    "reviews.r1Name": "पूजा जे. (मरीज की बेटी)",
    "reviews.r1Meta": "गुरुग्राम • परिवार केयरगिवर",
    "reviews.r2Tag": "प्रिसिजन ऑन्कोलॉजी (EGFR टार्गेटेड)",
    "reviews.r2Quote": "\"डॉ. जानकी चौधरी एक असाधारण मेडिकल ऑन्कोलॉजिस्ट हैं। मेरे 68 वर्षीय पिता को तुरंत भारी कीमोथेरेपी देने के बजाय उन्होंने आधुनिक एनजीएस बायोमार्कर जांच कराई, जिससे हमें लक्षित दवा का विकल्प मिला। वे न्यूनतम दुष्प्रभावों के साथ स्वस्थ जीवन जी रहे हैं।\"",
    "reviews.r2Name": "राजेश एस. (सुपुत्र एवं केयरगिवर)",
    "reviews.r2Meta": "रेवाड़ी, हरियाणा",
    "reviews.r3Tag": "जीआई कैंसर एवं सिस्टमिक कीमो",
    "reviews.r3Quote": "\"उच्च शैक्षणिक योग्यता के साथ ऐसा संवेदनशील स्वभाव मिलना बहुत दुर्लभ है। डॉ. जानकी ब्लड काउंट्स या इन्फ्यूजन से जुड़ी किसी भी चिंता में हमेशा उपलब्ध रहीं। उनकी समर्पित देखभाल के लिए हम आजीवन आभारी रहेंगे।\"",
    "reviews.r3Name": "अनिल कुमार (कोलन कैंसर सर्वाइवर)",
    "reviews.r3Meta": "सेक्टर 84, गुड़गांव",
    "reviews.r4Tag": "समग्र ऑन्कोलॉजी सेकंड ओपिनियन",
    "reviews.r4Quote": "\"कीमोथेरेपी और उन्नत लक्षित दवाओं के विकल्पों पर सेकंड ओपिनियन के लिए हम डॉ. जानकी के पास आए। मेडिकल ऑन्कोलॉजी में उनकी गहरी विशेषज्ञता और जेनेटिक रिपोर्ट की सरल व्याख्या ने हमें पूर्ण स्पष्टता और मानसिक शांति दी।\"",
    "reviews.r4Name": "मीनाक्षी एन. एवं परिवार",
    "reviews.r4Meta": "नई दिल्ली • सेकंड ओपिनियन परामर्श",
    "reviews.verified": "सत्यापित देखभाल",
    "reviews.footerTitle": "सहानुभूतिपूर्ण और साक्ष्य-आधारित ऑन्कोलॉजी",
    "reviews.footerDesc": "प्रत्येक मरीज की चिकित्सा यात्रा अंतरराष्ट्रीय एनसीएन दिशा-निर्देशों, सम्मान और संवेदनशीलता के साथ संचालित होती है।",

    // Clinic
    "clinic.badge": "क्लिनिक का पता",
    "clinic.title": "क्लिनिक पर आएं",
    "clinic.subtitle": "अमेरिकन ऑन्कोलॉजी इंस्टीट्यूट, आरवी हॉस्पिटल, सेक्टर-90, गुड़गांव।",
    "clinic.hospName": "अमेरिकन ऑन्कोलॉजी इंस्टीट्यूट",
    "clinic.facility": "आरवी हॉस्पिटल",
    "clinic.address": "सेक्टर-90, गुड़गांव, हरियाणा, पिन कोड: 122505",
    "clinic.hours": "ओपीडी समय: सुबह 9:00 बजे से दोपहर 4:00 बजे तक (सोम–शनि)",
    "clinic.languages": "English, हिंदी, पंजाबी, हरियाणवी",
    "clinic.directions": "गूगल मैप्स पर रास्ता देखें",
    "clinic.photo1": "[क्लिनिक फोटो 1 — शीघ्र जोड़ी जाएगी]",
    "clinic.photo2": "[क्लिनिक फोटो 2 — शीघ्र जोड़ी जाएगी]",
    "clinic.gbpTitle": "गूगल पर डॉ. जानकी चौधरी",
    "clinic.gbpStatus": "गूगल बिजनेस प्रोफाइल लिंकेज तैयार",
    "clinic.reviewsNote": "गूगल बिजनेस प्रोफाइल प्रकाशित होने पर सत्यापित समीक्षाएं यहां प्रदर्शित की जाएंगी।",

    // Contact
    "contact.badge": "सीधा संपर्क",
    "contact.title": "संपर्क करें (Get in Touch)",
    "contact.subtitle": "परामर्श, अपॉइंटमेंट और सामान्य जानकारी हेतु क्लिनिक से संपर्क करें।",
    "contact.callTitle": "सीधा फोन कॉल",
    "contact.waTitle": "व्हाट्सएप",
    "contact.emailTitle": "ईमेल संपर्क",
    "contact.formTitle": "त्वरित परामर्श अनुरोध फॉर्म",
    "contact.formSubtitle": "अपॉइंटमेंट समय के लिए विवरण दर्ज करें। यहां मेडिकल फाइल अपलोड करने की जरूरत नहीं है।",
    "contact.formName": "मरीज का पूरा नाम",
    "contact.formNamePh": "नाम दर्ज करें",
    "contact.formPhone": "मोबाइल फोन नंबर",
    "contact.formPhonePh": "10 अंकों का मोबाइल नंबर",
    "contact.formDate": "पसंदीदा तारीख",
    "contact.formTime": "पसंदीदा समय",
    "contact.formTimePh": "जैसे: 10:30 AM",
    "contact.formNote": "परामर्श का कारण (वैकल्पिक)",
    "contact.formNotePh": "संक्षिप्त कारण",
    "contact.btnWa": "व्हाट्सएप द्वारा भेजें",
    "contact.btnEmail": "ईमेल द्वारा भेजें",
    "contact.privacyNote": "गोपनीयता सूचना: ऑनलाइन फॉर्म पर संवेदनशील मेडिकल रिपोर्ट अपलोड न करें। रिपोर्ट क्लिनिक में दिखाएं।",

    // Footer
    "footer.degrees": "MBBS | MD रेडिएशन ऑन्कोलॉजी | DrNB मेडिकल ऑन्कोलॉजी",
    "footer.reg": "दिल्ली मेडिकल काउंसिल रजिस्ट्रेशन नं.: 88010",
    "footer.clinicName": "अमेरिकन ऑन्कोलॉजी इंस्टीट्यूट, आरवी हॉस्पिटल, सेक्टर-90, गुड़गांव",
    "footer.hours": "समय: सुबह 9:00 बजे से दोपहर 4:00 बजे तक",
    "footer.disclaimerText": "यह वेबसाइट केवल सामान्य जानकारी के लिए है और यह किसी योग्य चिकित्सक से व्यक्तिगत परामर्श, निदान अथवा उपचार योजना का विकल्प नहीं है। उपचार संबंधी सभी निर्णय क्लिनिकल जांच के उपरांत ही लिए जाने चाहिए।",
    "footer.privacyLink": "प्राइवेसी नोटिस",
    "footer.disclaimerLink": "मेडिकल डिस्क्लेमर",
    "footer.rights": "सर्वाधिकार सुरक्षित।",

    // Mobile Action Bar
    "bar.call": "कॉल करें",
    "bar.whatsapp": "व्हाट्सएप",
    "bar.appointment": "अपॉइंटमेंट"
  }
};

let currentLanguage = 'en';

// Language switcher handler
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('drjanki_lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.documentElement.lang = lang;

  // Re-render lucide icons if any were injected or touched
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// WhatsApp Launcher with template
function openWhatsAppWithTemplate(customName = '', customDate = '', customTime = '') {
  const phone = "8970140219";
  const nameStr = customName.trim() || "________";
  const dateStr = customDate.trim() || "________";
  const timeStr = customTime.trim() || "________";

  const message = `Hello Dr. Janki's team, I would like to request an appointment with Dr. Janki Choudhary. My name is ${nameStr}. I would prefer an appointment on ${dateStr} at ${timeStr}. Please let me know the available appointment slots.`;
  const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Direct Email Query Dispatcher (Sends query directly to drjankichoudhary@gmail.com without opening mail client)
async function sendDirectEmailQuery(customName = '', customDate = '', customTime = '', customPhone = '', customNote = '') {
  const currentLang = localStorage.getItem('site_lang') || 'en';
  const statusEl = document.getElementById('formStatusMsg');
  const btnEmail = document.getElementById('btnFormEmail');
  const btnCardEmail = document.getElementById('btnCardEmail');

  const nameVal = (customName || document.getElementById('formName')?.value || '').trim();
  const phoneVal = (customPhone || document.getElementById('formPhone')?.value || '').trim();
  const dateVal = (customDate || document.getElementById('formDate')?.value || '').trim();
  const timeVal = (customTime || document.getElementById('formTime')?.value || '').trim();
  const noteVal = (customNote || document.getElementById('formNote')?.value || '').trim();

  // Strict Validation: Ensure patient name and phone number are present
  const nameInput = document.getElementById('formName');
  const phoneInput = document.getElementById('formPhone');

  if (!nameVal || nameVal.length < 2) {
    if (statusEl) {
      statusEl.className = 'p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2.5 transition-all';
      statusEl.innerHTML = `
        <svg class="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke-width="2"/><line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"/></svg>
        <span>${currentLang === 'hi' ? 'कृपया मरीज का पूरा नाम दर्ज करें।' : 'Please enter the patient’s full name.'}</span>
      `;
      statusEl.classList.remove('hidden');
    }
    if (nameInput) {
      nameInput.focus();
      nameInput.classList.add('ring-2', 'ring-rose-500', 'border-rose-500');
      setTimeout(() => nameInput.classList.remove('ring-2', 'ring-rose-500', 'border-rose-500'), 3000);
    }
    return;
  }

  // Check phone is at least 10 digits
  const cleanPhone = phoneVal.replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    if (statusEl) {
      statusEl.className = 'p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2.5 transition-all';
      statusEl.innerHTML = `
        <svg class="w-4 h-4 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke-width="2"/><line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"/></svg>
        <span>${currentLang === 'hi' ? 'कृपया वैध 10 अंकों का मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number so the clinic can reach you.'}</span>
      `;
      statusEl.classList.remove('hidden');
    }
    if (phoneInput) {
      phoneInput.focus();
      phoneInput.classList.add('ring-2', 'ring-rose-500', 'border-rose-500');
      setTimeout(() => phoneInput.classList.remove('ring-2', 'ring-rose-500', 'border-rose-500'), 3000);
    }
    return;
  }

  // Update button to loading state
  const originalBtnContent = btnEmail ? btnEmail.innerHTML : '';
  if (btnEmail) {
    btnEmail.disabled = true;
    btnEmail.innerHTML = `
      <svg class="animate-spin w-4 h-4 text-white inline-block shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      <span>${currentLang === 'hi' ? 'क्वेरी ईमेल पर भेजी जा रही है...' : 'Sending Query Directly...'}</span>
    `;
  }
  if (btnCardEmail) {
    btnCardEmail.disabled = true;
  }

  if (statusEl) {
    statusEl.className = 'p-3.5 bg-sky-50 border border-sky-200 rounded-xl text-sky-800 text-xs flex items-center gap-2.5 transition-all';
    statusEl.innerHTML = `
      <svg class="animate-spin w-4 h-4 text-sky-600 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      <span>${currentLang === 'hi' ? 'डॉक्टर जानकी के ईमेल पर क्वेरी भेजी जा रही है...' : 'Sending query directly to drjankichoudhary@gmail.com...'}</span>
    `;
    statusEl.classList.remove('hidden');
  }

  try {
    // Construct FormData with clear labels for FormSubmit's table template
    const formData = new FormData();
    formData.append('Patient Name', nameVal);
    formData.append('Contact Phone', phoneVal);
    formData.append('Preferred Date', dateVal || 'Flexible / As available');
    formData.append('Preferred Time', timeVal || 'Flexible');
    formData.append('Consultation Query', noteVal || 'General Oncology Consultation Inquiry');
    formData.append('_subject', `New Patient Query: ${nameVal} (${phoneVal}) – Dr. Janki Choudhary`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    await fetch("https://formsubmit.co/ajax/drjankichoudhary@gmail.com", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData
    });

    if (statusEl) {
      statusEl.className = 'p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs sm:text-sm space-y-1.5 transition-all';
      statusEl.innerHTML = `
        <div class="flex items-center gap-2 font-bold text-emerald-800">
          <svg class="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
          <span>${currentLang === 'hi' ? 'क्वेरी ईमेल द्वारा सफलतापूर्वक भेज दी गई है!' : 'Query Sent Directly to Doctor’s Email!'}</span>
        </div>
        <p class="text-xs text-emerald-700 leading-relaxed">
          ${currentLang === 'hi'
            ? 'आपकी क्वेरी <strong>drjankichoudhary@gmail.com</strong> पर भेज दी गई है। डॉक्टर जानकी चौधरी की क्लिनिक टीम जल्द ही आपसे संपर्क करेगी।'
            : 'Your query has been dispatched directly to <strong>drjankichoudhary@gmail.com</strong>. Dr. Janki Choudhary’s clinic team will contact you shortly.'}
        </p>
      `;
      statusEl.classList.remove('hidden');
    }

    const form = document.getElementById('appointmentForm');
    if (form) form.reset();

  } catch (error) {
    console.error('Direct email dispatch error:', error);
    if (statusEl) {
      statusEl.className = 'p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2.5 transition-all';
      statusEl.innerHTML = `<span>${currentLang === 'hi' ? 'क्वेरी भेजने में समस्या आई। कृपया व्हाट्सएप (8970140219) पर संपर्क करें।' : 'Error sending query. Please message us directly on WhatsApp (8970140219) or call the clinic.'}</span>`;
      statusEl.classList.remove('hidden');
    }
  } finally {
    if (btnEmail) {
      btnEmail.disabled = false;
      btnEmail.innerHTML = originalBtnContent || `<span>${currentLang === 'hi' ? 'ईमेल द्वारा भेजें' : 'Request via Email'}</span>`;
    }
    if (btnCardEmail) {
      btnCardEmail.disabled = false;
    }
    if (window.lucide) lucide.createIcons();
  }
}

// Backward compatibility: calls direct email query instead of opening mail client
function openEmailWithTemplate(customName = '', customDate = '', customTime = '', customPhone = '', customNote = '') {
  sendDirectEmailQuery(customName, customDate, customTime, customPhone, customNote);
}

// Appointment Form Handler
function setupAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const btnCardEmail = document.getElementById('btnCardEmail');

  // Top Card "Request via Email" button handler
  if (btnCardEmail) {
    btnCardEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value || '';
      const phone = document.getElementById('formPhone')?.value || '';

      if (name.trim() && phone.trim()) {
        sendDirectEmailQuery();
      } else {
        const bookingSection = document.getElementById('appointment-booking') || document.getElementById('appointmentForm');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        const nameInput = document.getElementById('formName');
        if (nameInput) {
          setTimeout(() => {
            nameInput.focus();
            const statusEl = document.getElementById('formStatusMsg');
            if (statusEl) {
              const currentLang = localStorage.getItem('site_lang') || 'en';
              statusEl.className = 'p-3 bg-teal-50 border border-teal-200 rounded-xl text-[#0B4D53] text-xs flex items-center gap-2 transition-all';
              statusEl.innerHTML = `
                <svg class="w-4 h-4 text-teal-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><line x1="12" y1="16" x2="12" y2="12" stroke-width="2"/><line x1="12" y1="8" x2="12.01" y2="8" stroke-width="2"/></svg>
                <span>${currentLang === 'hi' ? 'कृपया अपनी क्वेरी सीधे ईमेल पर भेजने के लिए नीचे विवरण भरें।' : 'Please enter your details below to send your query directly to Dr. Janki\'s email.'}</span>
              `;
              statusEl.classList.remove('hidden');
            }
          }, 400);
        }
      }
    });
  }

  if (!form) return;

  const btnWhatsApp = document.getElementById('btnFormWhatsApp');
  const btnEmail = document.getElementById('btnFormEmail');

  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value || '';
      const date = document.getElementById('formDate')?.value || '';
      const time = document.getElementById('formTime')?.value || '';
      openWhatsAppWithTemplate(name, date, time);
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      sendDirectEmailQuery();
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendDirectEmailQuery();
  });
}

// FAQ Accordion Handler
function setupFaqAccordion() {
  document.querySelectorAll('.faq-item-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');

      // Close other FAQs
      document.querySelectorAll('.faq-item-toggle').forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling.classList.add('hidden');
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        answer.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Earlier Experience Accordion
function setupEarlierExperienceAccordion() {
  const toggle = document.getElementById('toggleEarlierExperience');
  const content = document.getElementById('earlierExperienceContent');
  const icon = document.getElementById('earlierExperienceIcon');

  if (toggle && content) {
    toggle.addEventListener('click', () => {
      const isHidden = content.classList.contains('hidden');
      if (isHidden) {
        content.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  }
}

// Mobile Menu Drawer Handler
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeMenu();
  });
}

// Sticky Header Styling on Scroll
function setupStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });
}

// Modal Controllers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function openCertificateViewer(imgSrc, title, issuer, meta) {
  const modal = document.getElementById('certificateViewerModal');
  if (!modal) return;
  const img = document.getElementById('certViewerImage');
  const titleEl = document.getElementById('certViewerTitle');
  const issuerEl = document.getElementById('certViewerIssuer');
  const metaEl = document.getElementById('certViewerMeta');
  const fullLink = document.getElementById('certViewerFullLink');
  
  if (img) img.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  if (issuerEl) issuerEl.textContent = issuer;
  if (metaEl) metaEl.textContent = meta || '';
  if (fullLink) fullLink.href = imgSrc;
  
  openModal('certificateViewerModal');
}

function setupModals() {
  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-container');
      if (modal) closeModal(modal.id);
    });
  });

  document.querySelectorAll('.modal-container').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-container:not(.hidden)').forEach(modal => {
        closeModal(modal.id);
      });
      const drawer = document.getElementById('mobileDrawer');
      if (drawer && !drawer.classList.contains('hidden')) {
        drawer.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  });
}

// Active Nav Link Observer (Supports Clean URLs, Multi-Page & In-Page Sections)
function setupActiveNavObserver() {
  const rawPath = window.location.pathname.split('/').filter(Boolean).pop() || '';
  const cleanCurrent = rawPath.replace(/\.html$/, '');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const highlightNav = (links) => {
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const cleanHref = href.replace(/\.html$/, '').replace(/^\.\/?$/, '');
      const isHome = (cleanCurrent === '' || cleanCurrent === 'index' || cleanCurrent === 'dr-janki-onco');
      const isCurrentPage = (
        (cleanHref === cleanCurrent) ||
        (isHome && (cleanHref === '' || cleanHref === '#home'))
      );

      if (isCurrentPage) {
        link.classList.add('text-[#0B4D53]', 'font-bold', 'bg-teal-50/80');
        link.classList.remove('text-slate-700');
      }
    });
  };

  highlightNav(desktopNavLinks);
  highlightNav(mobileNavLinks);

  // In-page hash sections observer if on one page
  const sectionIds = ['home', 'about', 'cancer-care', 'treatments', 'journey', 'experience', 'academic', 'faq', 'clinic'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-[#0B4D53]', 'font-bold', 'bg-teal-50/60');
              link.classList.remove('text-slate-700');
            } else if (link.getAttribute('href')?.startsWith('#')) {
              link.classList.remove('text-[#0B4D53]', 'font-bold', 'bg-teal-50/60');
              link.classList.add('text-slate-700');
            }
          });
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));
  }
}

// Smooth Scroll Reveal Observer
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for environments without IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

// Animated Stat Counter Bar
function setupStatCounters() {
  const statSection = document.getElementById('stats');
  if (!statSection) return;

  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    const counters = statSection.querySelectorAll('.stat-counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const isComma = counter.getAttribute('data-format') === 'comma';
      const duration = 1600; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth easeOutCubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(ease * target);

        counter.textContent = isComma ? current.toLocaleString('en-IN') : current.toString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = isComma ? target.toLocaleString('en-IN') : target.toString();
        }
      }

      requestAnimationFrame(updateCounter);
    });
  };

  // IntersectionObserver to trigger animation when scrolled into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    observer.observe(statSection);
  } else {
    animateCounters();
  }
}


// ==========================================
// SMART CANCER CARE & TREATMENTS CONSOLE LOGIC
// ==========================================

const tumorData = {
  breast: {
    tag: "Women's Oncology",
    title: "Breast Cancer",
    subtitle: "Personalised Systemic & Molecular Care",
    category: "Breast Oncology",
    biomarkers: ["ER / PR Positive", "HER2 Neu Amplification", "Ki-67 Proliferation", "BRCA1 / BRCA2 Mutations", "PD-L1 (TNBC)"],
    therapies: [
      "Targeted Anti-HER2 Monoclonal Antibodies (Trastuzumab, Pertuzumab, T-DM1)",
      "CDK4/6 Inhibitors (Palbociclib, Ribociclib, Abemaciclib) for HR+ Advanced Disease",
      "Neoadjuvant & Adjuvant Dose-Dense Chemotherapy regimens",
      "Endocrine therapies: Aromatase Inhibitors (Letrozole, Anastrozole), Tamoxifen & Fulvestrant",
      "Immunotherapy for Triple Negative Breast Cancer (TNBC)"
    ],
    scans: [
      "Digital Bilateral Mammography & High-Resolution Breast Ultrasound",
      "Core Needle Biopsy with comprehensive ER, PR, HER2 & Ki-67 IHC",
      "Whole-Body 18F-FDG PET-CT for staging",
      "Germline BRCA1/2 genetic testing if family history or triple-negative disease"
    ]
  },
  lung: {
    tag: "Thoracic Oncology",
    title: "Lung Cancer (NSCLC & SCLC)",
    subtitle: "Biomarker-Driven Precision & Immunotherapy",
    category: "Thoracic Oncology",
    biomarkers: ["EGFR (Exon 19 del / L858R / T790M)", "ALK Rearrangements", "ROS1", "BRAF V600E", "MET / RET / KRAS G12C", "PD-L1 Tumor Proportion Score"],
    therapies: [
      "Third-Generation EGFR Tyrosine Kinase Inhibitors (Osimertinib)",
      "Targeted ALK & ROS1 Inhibitors (Alectinib, Brigatinib, Crizotinib)",
      "Immune Checkpoint Inhibitors (Pembrolizumab, Nivolumab, Atezolizumab)",
      "Platinum-doublet systemic chemotherapy combinations",
      "Maintenance systemic immunotherapy protocols"
    ],
    scans: [
      "High-Resolution Chest CT (HRCT) with IV Contrast",
      "CT-guided or EBUS-guided biopsy with reflex molecular NGS panel",
      "Brain Contrast MRI for central nervous system staging",
      "Whole-Body 18F-FDG PET-CT for accurate TNM staging"
    ]
  },
  gyn: {
    tag: "Women's Oncology",
    title: "Gynaecological Cancers",
    subtitle: "Ovary, Cervix, Uterus & Endometrium",
    category: "Gynaecological Oncology",
    biomarkers: ["CA-125 / HE4 Serum Levels", "BRCA1 / BRCA2 Mutations", "HRD (Homologous Recombination Deficiency)", "MSI-H / dMMR", "p53 Status"],
    therapies: [
      "PARP Inhibitor Maintenance (Olaparib, Niraparib) for BRCA/HRD+ Ovarian Tumors",
      "Anti-VEGF Angiogenesis Inhibitors (Bevacizumab)",
      "Carboplatin + Paclitaxel systemic chemotherapy cycles",
      "Concurrent Cisplatin-based Chemoradiation for Locally Advanced Cervical Cancer",
      "Immunotherapy for MSI-High / dMMR Recurrent Endometrial Cancers"
    ],
    scans: [
      "Pelvic Contrast MRI & Transvaginal Ultrasound (TVS)",
      "Serum Tumor Biomarkers (CA-125, HE4, CEA, CA 19-9)",
      "Whole-Body PET-CT scan for peritoneal and nodal mapping",
      "Histopathology examination with reflex MMR & BRCA testing"
    ]
  },
  hn: {
    tag: "Head & Neck Oncology",
    title: "Head & Neck Cancers",
    subtitle: "Oral Cavity, Pharynx & Larynx",
    category: "Head & Neck Oncology",
    biomarkers: ["p16 / HPV (High Risk)", "EGFR Expression", "PD-L1 Combined Positive Score (CPS)"],
    therapies: [
      "Concurrent Chemoradiation (High-Dose Cisplatin weekly or 3-weekly protocols)",
      "EGFR-Directed Monoclonal Antibody (Cetuximab)",
      "Immune Checkpoint Blockade (Pembrolizumab / Nivolumab) for recurrent/metastatic settings",
      "TPF Induction Chemotherapy prior to definitive organ-preservation radiotherapy"
    ],
    scans: [
      "Contrast-Enhanced Neck & Face MRI or CT",
      "Flexible Fiberoptic Laryngoscopy & Punch/Incisional Biopsy",
      "Whole-Body PET-CT for distant metastasis screening",
      "Pre-treatment Dental clearance & speech/swallow assessment"
    ]
  },
  gi: {
    tag: "GI & Hepatic Oncology",
    title: "Gastrointestinal Cancers",
    subtitle: "Colorectal, Stomach, Pancreas & Hepatobiliary",
    category: "Gastrointestinal Oncology",
    biomarkers: ["KRAS / NRAS / BRAF Wild-Type vs Mutant", "MSI-H / dMMR Status", "HER2 Amplification in Gastric Cancer", "CEA & CA 19-9 Markers"],
    therapies: [
      "Anti-EGFR Monoclonal Antibodies (Cetuximab, Panitumumab) for RAS-wildtype colorectal cancer",
      "Anti-Angiogenic Agents (Bevacizumab, Ramucirumab)",
      "FOLFIRI, FOLFOX, or CAPOX systemic chemotherapy regimens",
      "Trastuzumab + Chemotherapy for HER2-positive Gastric/GEJ Adenocarcinoma",
      "First-line Immunotherapy for MSI-High / Mismatch Repair Deficient metastatic colorectal tumors"
    ],
    scans: [
      "Triple-Phase Contrast Abdomen & Pelvis CT / Liver MRI",
      "Upper GI Endoscopy / Colonoscopy with tissue biopsy",
      "Serum Tumor Markers (CEA, CA 19-9, AFP)",
      "Whole-Body 18F-FDG PET-CT scan"
    ]
  },
  gu: {
    tag: "Uro-Oncology",
    title: "Genitourinary Malignancies",
    subtitle: "Prostate, Bladder & Kidney Cancers",
    category: "Genitourinary Oncology",
    biomarkers: ["Total & Free PSA", "PSMA Expression", "BRCA2 / ATM DNA Repair Mutations", "PD-L1 Status"],
    therapies: [
      "Next-Gen Androgen Receptor Pathway Inhibitors (Enzalutamide, Abiraterone, Apalutamide)",
      "PARP Inhibitors (Olaparib) for metastatic castration-resistant prostate cancer with HRR mutations",
      "Immunotherapy (Pembrolizumab, Nivolumab) for Advanced Urothelial & Renal Cell Carcinomas",
      "Tyrosine Kinase Inhibitors (Cabozantinib, Sunitinib, Lenvatinib) for Renal Cell Carcinoma",
      "Docetaxel / Cabazitaxel chemotherapy protocols"
    ],
    scans: [
      "68Ga-PSMA PET-CT Scan for precise prostate cancer staging",
      "Multi-parametric Prostate MRI (mpMRI)",
      "Transurethral Resection of Bladder Tumor (TURBT) histopathology",
      "Contrast CT / MRI of Abdomen & Urogram"
    ]
  },
  sarcoma: {
    tag: "Musculoskeletal Oncology",
    title: "Sarcomas & Soft Tissue Tumors",
    subtitle: "Bone & Soft Tissue Malignancies",
    category: "Sarcoma Oncology",
    biomarkers: ["KIT (CD117) & PDGFRA Mutations", "MDM2 / CDK4 Amplification", "FNCLCC Histological Grading", "Translocation FISH panels (SS18, EWSR1)"],
    therapies: [
      "Targeted Tyrosine Kinase Inhibitors (Imatinib, Sunitinib, Regorafenib) for GIST",
      "Doxorubicin & Ifosfamide systemic combination chemotherapy",
      "Trabectedin & Pazopanib for advanced non-adipocytic soft tissue sarcomas",
      "Multidisciplinary limb-preservation treatment coordination"
    ],
    scans: [
      "High-Resolution Contrast MRI of the involved extremity/compartment",
      "Core needle biopsy (oriented along future surgical incision lines)",
      "Chest HRCT for baseline pulmonary metastasis screening",
      "Whole-Body PET-CT or Bone Scan"
    ]
  },
  hema: {
    tag: "Hematologic Oncology",
    title: "Solid & Blood Cancers",
    subtitle: "Lymphomas, Multiple Myeloma & Supportive Hematology",
    category: "Hematologic Oncology",
    biomarkers: ["CD20 / CD30 Expression", "Serum Free Light Chains (Kappa / Lambda)", "Serum Protein Electrophoresis (SPEP / M-Spike)", "FISH for t(11;14), t(4;14), del(17p)"],
    therapies: [
      "Anti-CD20 Targeted Monoclonal Antibodies (Rituximab)",
      "R-CHOP / Pola-R-CHP protocols for Diffuse Large B-Cell Lymphoma",
      "Triad Immunomodulatory & Proteasome Regimens for Myeloma (Bortezomib, Lenalidomide, Dexamethasone)",
      "Anti-CD38 Monoclonal Antibodies (Daratumumab) for Plasma Cell Myeloma",
      "Comprehensive granulocyte colony-stimulating factors (G-CSF) & supportive care"
    ],
    scans: [
      "Bone Marrow Aspiration & Trephine Biopsy with Flow Cytometry & Cytogenetics",
      "Whole-Body Low-Dose CT or Whole-Body MRI / PET-CT",
      "Complete Immunofixation, 24h Urine Protein, and SPEP",
      "Excisional Lymph Node Biopsy with comprehensive IHC panel"
    ]
  }
};

const modalityData = {
  chemo: {
    badge: "Daycare Systemic Therapy",
    title: "Chemotherapy",
    delivery: "Daycare Infusion (Zero Overnight Stay)",
    mechanism: "Chemotherapy utilizes cytotoxic medications delivered intravenously or orally into the bloodstream to target rapidly dividing cancer cells throughout the body, eradicating micrometastases and preventing recurrence.",
    tolerability: "Administered with modern triple-antiemetic premedications (NK1 and 5-HT3 antagonists), cold-cap scalp cooling coordination, and painless Chemoport access for maximum comfort and safety.",
    uses: "Curative and palliative systemic regimens for Breast, Lung, Colorectal, Ovarian, Head & Neck cancers, Sarcomas, and Lymphomas."
  },
  targeted: {
    badge: "Precision Molecular Therapy",
    title: "Targeted Therapy",
    delivery: "Oral Daily Tablets or IV Monoclonal Infusion",
    mechanism: "Targeted therapies act specifically on genetic mutations, mutated proteins, or cell signaling pathways (such as EGFR, ALK, HER2, CDK4/6) essential for cancer cell survival, sparing surrounding normal healthy cells.",
    tolerability: "Significantly better tolerated than standard cytotoxic chemotherapy. Managed with proactive dermatologic skin care, liver function monitoring, and dose optimization.",
    uses: "HER2+ Breast Cancer (Trastuzumab), EGFR/ALK+ Lung Cancer (Osimertinib, Alectinib), GIST (Imatinib), Colorectal Cancer (Cetuximab), and Renal Cancer."
  },
  immuno: {
    badge: "Immune Checkpoint Blockade",
    title: "Immunotherapy",
    delivery: "Daycare IV Infusion Every 2 to 6 Weeks",
    mechanism: "Immunotherapy medicines (such as PD-1, PD-L1, and CTLA-4 inhibitors) unleash the patient's own immune system by disabling the camouflage mechanism cancer cells use to evade cytotoxic T-cells.",
    tolerability: "Does not cause conventional chemotherapy hair loss or severe nausea. Monitored carefully for immune-related adverse events (thyroid, pituitary, pulmonary, liver) with early endocrine replacement if needed.",
    uses: "Advanced Lung Cancer, Triple Negative Breast Cancer, MSI-High Colorectal, Melanoma, Renal Cell Carcinoma, and Bladder Cancer."
  },
  hormone: {
    badge: "Endocrine Receptor Blockade",
    title: "Hormonal Therapy",
    delivery: "Oral Daily Medication / Monthly Injections",
    mechanism: "Halts cancer cell growth by depriving hormone-sensitive cancer cells of the estrogen, progesterone, or testosterone signals that stimulate their proliferation.",
    tolerability: "Convenient at-home oral daily regimen. Managed with bone mineral density monitoring (DEXA), calcium/vitamin D optimization, and lifestyle guidance.",
    uses: "Estrogen-receptor positive (ER+) Breast Cancer (Tamoxifen, Letrozole) and Advanced Prostate Cancer (Enzalutamide, Abiraterone, LHRH agonists)."
  },
  precision: {
    badge: "Next-Gen Genomic Profiling",
    title: "Precision Oncology",
    delivery: "Biopsy NGS Sequencing & Targeted Match",
    mechanism: "Comprehensive Genomic Profiling (CGP) interrogates hundreds of cancer-associated genes simultaneously from tumor tissue or liquid biopsy (ctDNA) to detect actionable driver alterations.",
    tolerability: "Enables highly tailored treatment strategies, avoiding ineffective trial-and-error therapies and matching patients to evidence-based molecular targets.",
    uses: "Metastatic solid tumors, rare cancers, cancer of unknown primary (CUP), and tumors that have developed resistance to earlier lines of therapy."
  }
};

const assistantData = {
  breast: {
    first: {
      reports: "Biopsy histopathology report, IHC slides/block (ER, PR, HER2, Ki-67), Mammogram & Ultrasound films, and baseline blood work (CBC, LFT, KFT).",
      questions: "What is my hormone receptor and HER2 status? Is neoadjuvant treatment recommended before surgery? Do I need a whole-body PET-CT?"
    },
    second: {
      reports: "Surgical pathology report (margins & lymph nodes), complete previous treatment summary, oncology records, and latest scan discs.",
      questions: "Are there newer targeted options (such as CDK4/6 inhibitors or immunotherapy) suitable for my stage? What is the planned sequence of radiation vs chemo?"
    },
    chemo: {
      reports: "Echocardiogram (2D Echo with LVEF for cardiotoxicity check), CBC with ANC, kidney & liver panels, and pre-anesthesia clearance if Chemoport is planned.",
      questions: "How many cycles are recommended? Will I receive a Chemoport? What preventative medicines will be given for nausea and hair preservation?"
    },
    ngs: {
      reports: "Formalin-fixed paraffin-embedded (FFPE) tumor tissue blocks, family history pedigree, and any previous genetic blood tests.",
      questions: "Will genetic BRCA1/2 or multigene germline testing change my surgical or medical options? Is an Oncotype DX or MammaPrint test indicated?"
    },
    followup: {
      reports: "Annual bilateral mammogram report, DEXA bone density scan if on aromatase inhibitors, liver enzymes, and physical examination records.",
      questions: "How long should I continue hormonal therapy (5 vs 10 years)? How do we monitor and protect my bone health?"
    }
  },
  lung: {
    first: {
      reports: "Biopsy histopathology report, HRCT chest scans & reports, whole-body PET-CT scan, brain MRI, and baseline pulmonary function tests (PFT).",
      questions: "Is my lung cancer small cell (SCLC) or non-small cell (NSCLC)? Have reflex molecular tests for EGFR, ALK, and PD-L1 been sent?"
    },
    second: {
      reports: "Previous biopsy tissue blocks for NGS re-analysis, serial CT/PET scans showing response, and detailed medication summary.",
      questions: "Would I benefit from first-line targeted pills (e.g. Osimertinib) rather than IV chemotherapy? What is my PD-L1 percentage for immunotherapy?"
    },
    chemo: {
      reports: "Kidney function (Creatinine clearance), CBC with differential, liver enzymes, and ECG.",
      questions: "Is this platinum-doublet chemotherapy combined with immunotherapy? What supportive medications prevent kidney and nerve side effects?"
    },
    ngs: {
      reports: "Fresh tissue biopsy block or liquid biopsy (blood sample for circulating tumor DNA), previous histology slide.",
      questions: "Which actionable genes (EGFR, ALK, ROS1, BRAF, MET, RET, KRAS G12C) were tested? Is an oral targeted therapy approved for my specific mutation?"
    },
    followup: {
      reports: "Follow-up contrast HRCT chest scan every 3 to 6 months, clinical symptom diary, and brain MRI as advised.",
      questions: "What are the earliest symptoms of recurrence to watch for? How do we monitor for acquired resistance mutations?"
    }
  }
};

function openTumorModal(tumorKey) {
  const data = tumorData[tumorKey];
  if (!data) return;

  const tagEl = document.getElementById('modalTumorTag');
  const titleEl = document.getElementById('modalTumorTitle');
  const subEl = document.getElementById('modalTumorSubtitle');
  const bioContainer = document.getElementById('modalTumorBiomarkers');
  const therContainer = document.getElementById('modalTumorTherapies');
  const scanContainer = document.getElementById('modalTumorScans');
  const consultBtn = document.getElementById('modalTumorConsultBtn');

  if (tagEl) tagEl.textContent = data.tag;
  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle;

  if (bioContainer) {
    bioContainer.innerHTML = data.biomarkers
      .map(b => `<span class="px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-semibold border border-teal-200/70">${b}</span>`)
      .join('');
  }

  if (therContainer) {
    therContainer.innerHTML = data.therapies
      .map(t => {
        const parts = t.split('(');
        const name = parts[0].trim();
        const details = parts.length > 1 ? '(' + parts.slice(1).join('(') : '';
        return `<li class="leading-relaxed"><strong class="text-slate-900">${name}</strong> ${details ? '<span class="text-slate-600">' + details + '</span>' : ''}</li>`;
      })
      .join('');
  }

  if (scanContainer) {
    scanContainer.innerHTML = data.scans
      .map(s => `<li class="leading-relaxed">${s}</li>`)
      .join('');
  }

  if (consultBtn) {
    consultBtn.onclick = () => {
      const msg = `Hello Dr. Janki Choudhary, I would like to schedule a consultation regarding ${data.title} (${data.category}). Could you please guide me on clinic timings and required reports?`;
      window.open(`https://wa.me/918970140219?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    };
  }

  openModal('tumorPathwayModal');
  if (window.lucide) window.lucide.createIcons();
}

function setupTumorFilter() {
  const filterBtns = document.querySelectorAll('.tumor-filter-btn');
  const cards = document.querySelectorAll('.tumor-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button styles
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#0B4D53]', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
      });
      btn.classList.add('active', 'bg-[#0B4D53]', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');

      // Filter cards with smooth fade
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function setupModalityShowcase() {
  const tabBtns = document.querySelectorAll('.modality-tab-btn');
  if (!tabBtns.length) return;

  const badgeEl = document.getElementById('consoleBadge');
  const titleEl = document.getElementById('consoleTitle');
  const deliveryEl = document.getElementById('consoleDelivery');
  const mechEl = document.getElementById('consoleMechanism');
  const tolEl = document.getElementById('consoleTolerability');
  const usesEl = document.getElementById('consoleUses');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modKey = btn.getAttribute('data-modality');
      const data = modalityData[modKey];
      if (!data) return;

      // Update buttons state
      tabBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#0B4D53]', 'text-white', 'border-[#0B4D53]', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200', 'hover:border-teal-300', 'hover:bg-slate-50');
        const iconBox = b.querySelector('.w-10');
        if (iconBox) {
          iconBox.classList.remove('bg-white/10', 'text-teal-200');
        }
        const textTitle = b.querySelector('.font-bold');
        if (textTitle) textTitle.classList.remove('text-white');
        const textSub = b.querySelector('.text-xs');
        if (textSub) {
          textSub.classList.remove('text-teal-200/80');
          textSub.classList.add('text-slate-500');
        }
        const chevron = b.querySelector('[data-lucide="chevron-right"]');
        if (chevron) {
          chevron.classList.remove('text-teal-300');
          chevron.classList.add('text-slate-400');
        }
      });

      btn.classList.add('active', 'bg-[#0B4D53]', 'text-white', 'border-[#0B4D53]', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200', 'hover:border-teal-300', 'hover:bg-slate-50');
      const activeIconBox = btn.querySelector('.w-10');
      if (activeIconBox) activeIconBox.classList.add('bg-white/10', 'text-teal-200');
      const activeSub = btn.querySelector('.text-xs');
      if (activeSub) {
        activeSub.classList.remove('text-slate-500');
        activeSub.classList.add('text-teal-200/80');
      }
      const activeChevron = btn.querySelector('[data-lucide="chevron-right"]');
      if (activeChevron) {
        activeChevron.classList.remove('text-slate-400');
        activeChevron.classList.add('text-teal-300');
      }

      // Update Console content with gentle fade
      const consoleBox = document.getElementById('modalityConsole');
      if (consoleBox) {
        consoleBox.style.opacity = '0.65';
        setTimeout(() => {
          if (badgeEl) badgeEl.textContent = data.badge;
          if (titleEl) titleEl.textContent = data.title;
          if (deliveryEl) deliveryEl.textContent = data.delivery;
          if (mechEl) mechEl.textContent = data.mechanism;
          if (tolEl) tolEl.textContent = data.tolerability;
          if (usesEl) usesEl.textContent = data.uses;
          consoleBox.style.transition = 'opacity 0.2s ease';
          consoleBox.style.opacity = '1';
          if (window.lucide) window.lucide.createIcons();
        }, 120);
      }
    });
  });
}

function setupCareAssistant() {
  const condSelect = document.getElementById('assistantCondition');
  const goalSelect = document.getElementById('assistantGoal');
  const reportsEl = document.getElementById('assistantReports');
  const questionsEl = document.getElementById('assistantQuestions');
  const waBtn = document.getElementById('assistantWhatsAppBtn');

  if (!condSelect || !goalSelect || !reportsEl || !questionsEl || !waBtn) return;

  function updateAssistant() {
    const cond = condSelect.value;
    const goal = goalSelect.value;
    const condText = condSelect.options[condSelect.selectedIndex].text;
    const goalText = goalSelect.options[goalSelect.selectedIndex].text;

    let res = null;
    if (assistantData[cond] && assistantData[cond][goal]) {
      res = assistantData[cond][goal];
    } else {
      const genericReports = {
        first: "Original biopsy histopathology report, IHC slides & paraffin block, recent whole-body PET-CT or contrast CT discs, and baseline blood work (CBC, LFT, KFT).",
        second: "All previous surgery and biopsy reports, chemotherapy/radiation treatment discharge summaries, latest restaging scans, and current medication list.",
        chemo: "Recent Complete Blood Count (CBC) with absolute neutrophil count (ANC), Kidney & Liver Function panels, 2D Echocardiogram, and Hepatitis B/C screening.",
        ngs: "Formalin-fixed paraffin-embedded (FFPE) tissue block with tumor content >20%, previous IHC stains, and family medical cancer history.",
        followup: "Most recent surveillance CT/PET scan report, organ-specific tumor marker trend (e.g. CEA, CA-125, PSA), and any new symptom logs."
      };
      const genericQuestions = {
        first: "What stage is my cancer? What are the standard-of-care systemic treatment choices, and what are the curative or control goals?",
        second: "Is my current treatment plan aligned with global NCCN guidelines? Are there any targeted therapies, immunotherapies, or clinical trials available?",
        chemo: "What is the schedule of cycles? Can it be done in the Daycare unit without overnight stay? How will side effects like fatigue and nausea be managed?",
        ngs: "Is Next-Generation Sequencing (NGS) indicated for my cancer type? Will finding a specific mutation open up oral targeted pills?",
        followup: "How frequently do I need follow-up scans and OPD reviews? What signs or symptoms require immediate consultation?"
      };
      res = {
        reports: genericReports[goal] || genericReports.first,
        questions: genericQuestions[goal] || genericQuestions.first
      };
    }

    reportsEl.textContent = res.reports;
    questionsEl.textContent = res.questions;

    // Configure WhatsApp Button
    waBtn.onclick = () => {
      const text = `Hello Dr. Janki Choudhary,\n\nI used the Care Assistant on your website and would like to prepare for a consultation.\n\n*Condition:* ${condText}\n*Consultation Goal:* ${goalText}\n\n*Reports I will bring:*\n${res.reports}\n\n*Key questions for discussion:*\n${res.questions}\n\nCould you please guide me on OPD timings and booking at American Oncology Institute, Gurgaon?`;
      window.open(`https://wa.me/918970140219?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    };
  }

  condSelect.addEventListener('change', updateAssistant);
  goalSelect.addEventListener('change', updateAssistant);
  updateAssistant(); // Initial sync
}

// Clinical Care Pillars / Philosophy Data
const philosophyData = {
  systemic: {
    icon: "layers",
    title: "Comprehensive Medical Oncology: Personalized Cancer Care",
    desc: "Specializing exclusively in medical oncology empowers Dr. Janki to design individualised systemic cancer treatments — orchestrating targeted therapy combinations, immunotherapy regimens, and tailored chemotherapy protocols based on tumor genetics and staging.",
    image: "assets/dual-oncology.jpg",
    imageCaption: "Advanced Systemic & Precision Therapy",
    tags: [
      "Systemic Chemotherapy",
      "Targeted & Immunotherapy",
      "Genomic Profiling",
      "Individualized Dosing"
    ]
  },
  dual: {
    icon: "layers",
    title: "Comprehensive Medical Oncology: Personalized Cancer Care",
    desc: "Specializing exclusively in medical oncology empowers Dr. Janki to design individualised systemic cancer treatments — orchestrating targeted therapy combinations, immunotherapy regimens, and tailored chemotherapy protocols based on tumor genetics and staging.",
    image: "assets/dual-oncology.jpg",
    imageCaption: "Advanced Systemic & Precision Therapy",
    tags: [
      "Systemic Chemotherapy",
      "Targeted & Immunotherapy",
      "Genomic Profiling",
      "Individualized Dosing"
    ]
  },
  precision: {
    icon: "dna",
    title: "Evidence-Based Precision: Biomarkers over Guesswork",
    desc: "Every cancer has a unique molecular blueprint. Dr. Janki champions comprehensive biomarker testing (ER/PR, HER2, EGFR, ALK, PD-L1, BRCA, MSI) and Next-Generation Sequencing (NGS) to select therapies proven to work for each patient's specific genomic alterations while avoiding unnecessary toxicities.",
    image: "assets/precision-genomics.jpg",
    imageCaption: "Next-Gen Genomic Profiling & Target Matching",
    tags: [
      "Targeted Molecular Inhibitors",
      "Immune Checkpoint Blockade",
      "NCCN & ESMO Guideline Alignment",
      "Genomic NGS Sequencing"
    ]
  },
  patient: {
    icon: "heart-handshake",
    title: "Compassionate Care: Unhurried, Transparent & Human",
    desc: "A cancer diagnosis brings immense anxiety to patients and their families. Dr. Janki prioritizes unhurried consultations, active listening, clear explanations of staging and options without overwhelming medical jargon, and proactive symptom and nutritional management throughout the journey.",
    image: "assets/compassionate-care.jpg",
    imageCaption: "Attentive, Compassionate Patient & Family Dialogue",
    tags: [
      "Unhurried In-Person Visits",
      "Transparent Staging & Prognosis",
      "Proactive Symptom Support",
      "Compassionate Family Dialogue"
    ]
  }
};

function setupPhilosophyTabs() {
  const tabs = document.querySelectorAll('.philosophy-tab-btn');
  const card = document.getElementById('philosophyDetailCard');
  const iconEl = document.getElementById('philosophyIcon');
  const titleEl = document.getElementById('philosophyTitle');
  const descEl = document.getElementById('philosophyDesc');
  const tagsEl = document.getElementById('philosophyTags');
  const imgEl = document.getElementById('philosophyImage');
  const imgCapEl = document.getElementById('philosophyImageCaption');

  if (!tabs.length || !card || !titleEl || !descEl || !tagsEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const pillar = tab.getAttribute('data-pillar');
      const data = philosophyData[pillar];
      if (!data) return;

      // Update tab styles
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-[#0B4D53]', 'text-white', 'border-[#0B4D53]', 'shadow-sm');
        t.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-200');
      });

      tab.classList.add('active', 'bg-[#0B4D53]', 'text-white', 'border-[#0B4D53]', 'shadow-sm');
      tab.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-200', 'hover:bg-slate-200');

      // Animate transition
      card.style.opacity = '0.5';
      card.style.transform = 'translateY(4px)';
      card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

      setTimeout(() => {
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        if (imgEl && data.image) {
          imgEl.src = data.image;
        }
        if (imgCapEl && data.imageCaption) {
          imgCapEl.textContent = data.imageCaption;
        }
        if (iconEl) {
          iconEl.innerHTML = `<i data-lucide="${data.icon}" class="w-4 h-4"></i>`;
        }
        tagsEl.innerHTML = data.tags
          .map(t => `<span class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">${t}</span>`)
          .join('');

        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        if (window.lucide) window.lucide.createIcons();
      }, 120);
    });
  });
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  setupTumorFilter();
  setupModalityShowcase();
  setupCareAssistant();
  setupPhilosophyTabs();

  const savedLang = localStorage.getItem('drjanki_lang');
  if (savedLang && ['en', 'hi'].includes(savedLang)) {
    setLanguage(savedLang);
  } else {
    setLanguage('en');
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  document.querySelectorAll('.whatsapp-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsAppWithTemplate();
    });
  });

  setupAppointmentForm();
  setupFaqAccordion();
  setupEarlierExperienceAccordion();
  setupMobileMenu();
  setupStickyHeader();
  setupModals();
  setupActiveNavObserver();
  setupScrollReveal();
  setupStatCounters();
});

