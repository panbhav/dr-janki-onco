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

    // Trust Strip & Animated Counter (Directly Below Hero)
    "trust.stat1.label": "Years Experience",
    "trust.stat2.label": "Patients Consulted",
    "trust.stat3.label": "Cancer Specialties",
    "trust.stat4.label": "Qualifications",
    "trust.item1.title": "8+ Years Experience",
    "trust.item1.desc": "Clinical Oncology Practice",
    "trust.item2.title": "MBBS | MD | DrNB",
    "trust.item2.desc": "Medical & Radiation Oncology",
    "trust.item3.title": "DMC Reg. No. 88010",
    "trust.item3.desc": "Verified Delhi Medical Council",
    "trust.item4.title": "Comprehensive Care",
    "trust.item4.desc": "Solid Tumors & Blood Cancers",

    // About Dr. Janki
    "about.badge": "About Dr. Janki Choudhary",
    "about.title": "Compassionate Care, Evidence-Based Science",
    "about.intro": "Dr. Janki Choudhary is a Medical Oncologist with dual oncology training (MD Radiation Oncology & DrNB Medical Oncology) and extensive clinical experience in comprehensive cancer management.",
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
    "faq.a10": "You can request an appointment by sending a message via WhatsApp to 8970140219, calling the clinic directly at 8970140219 / 9350226061, or emailing jankichoudhary26@gmail.com.",

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

    // Trust Strip & Animated Counter
    "trust.stat1.label": "वर्षों का अनुभव",
    "trust.stat2.label": "परामर्शित मरीज",
    "trust.stat3.label": "कैंसर विशेषताएँ",
    "trust.stat4.label": "डिग्रियाँ व योग्यताएँ",
    "trust.item1.title": "8+ वर्ष अनुभव",
    "trust.item1.desc": "क्लिनिकल ऑन्कोलॉजी प्रैक्टिस",
    "trust.item2.title": "MBBS | MD | DrNB",
    "trust.item2.desc": "मेडिकल व रेडिएशन ऑन्कोलॉजी",
    "trust.item3.title": "DMC रजि. नं. 88010",
    "trust.item3.desc": "सत्यापित मेडिकल काउंसिल",
    "trust.item4.title": "समग्र कैंसर देखभाल",
    "trust.item4.desc": "सॉलिड ट्यूमर व रक्त कैंसर",

    // About Dr. Janki
    "about.badge": "डॉ. जानकी चौधरी का परिचय",
    "about.title": "संवेदनशील देखभाल, साक्ष्य-आधारित चिकित्सा",
    "about.intro": "डॉ. जानकी चौधरी एक समर्पित मेडिकल ऑन्कोलॉजिस्ट हैं, जिनके पास ऑन्कोलॉजी में दोहरी विशेषज्ञता (MD रेडिएशन ऑन्कोलॉजी और DrNB मेडिकल ऑन्कोलॉजी) तथा कैंसर प्रबंधन का समृद्ध अनुभव है।",
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
    "faq.a10": "आप 8970140219 पर व्हाट्सएप करके, 8970140219 / 9350226061 पर सीधे कॉल करके या jankichoudhary26@gmail.com पर ईमेल भेजकर अपॉइंटमेंट ले सकते हैं।",

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

// Email Launcher with pre-filled subject and body
function openEmailWithTemplate(customName = '', customDate = '', customTime = '', customPhone = '', customNote = '') {
  const email = "jankichoudhary26@gmail.com";
  const subject = "Appointment Request – Dr. Janki Choudhary";
  const body = `Dear Dr. Janki's Team,

I would like to request an appointment with Dr. Janki Choudhary at American Oncology Institute, Aarvy Hospital, Sector-90, Gurgaon.

Patient Details:
- Name: ${customName || '[Patient Name]'}
- Contact Phone: ${customPhone || '[Phone Number]'}
- Preferred Date: ${customDate || '[Preferred Date]'}
- Preferred Time: ${customTime || '[Preferred Time]'}
- Notes: ${customNote || '[Any notes regarding consultation]'}

Kindly confirm the available appointment slots.

Thank you.`;

  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

// Appointment Form Handler
function setupAppointmentForm() {
  const form = document.getElementById('appointmentForm');
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
      const name = document.getElementById('formName')?.value || '';
      const phone = document.getElementById('formPhone')?.value || '';
      const date = document.getElementById('formDate')?.value || '';
      const time = document.getElementById('formTime')?.value || '';
      const note = document.getElementById('formNote')?.value || '';
      openEmailWithTemplate(name, date, time, phone, note);
    });
  }
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

// Active Nav Link Observer
function setupActiveNavObserver() {
  const sectionIds = ['home', 'about', 'cancer-care', 'treatments', 'journey', 'experience', 'academic', 'faq', 'clinic'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-[#0B4D53]', 'font-bold', 'bg-teal-50/60');
            link.classList.remove('text-slate-700');
          } else {
            link.classList.remove('text-[#0B4D53]', 'font-bold', 'bg-teal-50/60');
            link.classList.add('text-slate-700');
          }
        });
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
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

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
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

