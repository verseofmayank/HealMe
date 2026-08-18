/* Auto-generated from dfs.py's SymptomChecker.symptom_database */
const SYMPTOM_DB = {
  "fever": {
    "Influenza": 0.9,
    "COVID-19": 0.85,
    "Malaria": 0.7,
    "Typhoid fever": 0.8,
    "Lyme disease": 0.65,
    "Urinary tract infection": 0.6
  },
  "cough": {
    "Common cold": 0.9,
    "Pneumonia": 0.85,
    "Bronchitis": 0.75,
    "Tuberculosis": 0.7,
    "Lung cancer": 0.6,
    "Whooping cough": 0.65
  },
  "headache": {
    "Migraine": 0.95,
    "Tension headache": 0.85,
    "Sinusitis": 0.8,
    "Meningitis": 0.7,
    "Brain tumor": 0.65,
    "Cluster headache": 0.75
  },
  "fatigue": {
    "Mononucleosis": 0.9,
    "Chronic fatigue syndrome": 0.85,
    "Anemia": 0.8,
    "Hypothyroidism": 0.75,
    "Fibromyalgia": 0.7,
    "Sleep apnea": 0.65
  },
  "sore throat": {
    "Strep throat": 0.9,
    "Common cold": 0.85,
    "Flu": 0.8,
    "Epiglottitis": 0.7,
    "Laryngitis": 0.75,
    "Measles": 0.6
  },
  "shortness of breath": {
    "Asthma": 0.9,
    "Pneumonia": 0.85,
    "Chronic obstructive pulmonary disease (COPD)": 0.8,
    "Pulmonary embolism": 0.75,
    "Interstitial lung disease": 0.7,
    "Pleurisy": 0.65
  },
  "nausea": {
    "Gastroenteritis": 0.9,
    "Food poisoning": 0.85,
    "Pregnancy": 0.8,
    "Motion sickness": 0.75,
    "Peptic ulcer disease": 0.7,
    "Gastroparesis": 0.65
  },
  "abdominal pain": {
    "Appendicitis": 0.9,
    "Gastritis": 0.85,
    "Gallstones": 0.8,
    "Pancreatitis": 0.75,
    "Diverticulitis": 0.7,
    "Hepatitis": 0.65
  },
  "back pain": {
    "Muscle strain": 0.9,
    "Herniated disc": 0.85,
    "Kidney stones": 0.8,
    "Spinal stenosis": 0.75,
    "Ankylosing spondylitis": 0.7,
    "Osteoporosis": 0.65
  },
  "dizziness": {
    "Vertigo": 0.9,
    "Inner ear infection": 0.85,
    "Dehydration": 0.8,
    "Meniere's disease": 0.75,
    "Orthostatic hypotension": 0.7,
    "Benign paroxysmal positional vertigo": 0.65
  },
  "joint pain": {
    "Arthritis": 0.9,
    "Lupus": 0.85,
    "Gout": 0.8,
    "Rheumatoid arthritis": 0.75,
    "Fibromyalgia": 0.7,
    "Bursitis": 0.65
  },
  "rash": {
    "Contact dermatitis": 0.9,
    "Eczema": 0.85,
    "Psoriasis": 0.8,
    "Lupus": 0.75,
    "Scabies": 0.7,
    "Ringworm": 0.65
  },
  "weakness": {
    "Multiple sclerosis": 0.9,
    "Myasthenia gravis": 0.85,
    "Lyme disease": 0.8,
    "ALS": 0.75,
    "Guillain-Barre syndrome": 0.7,
    "Muscular dystrophy": 0.65
  },
  "vomiting": {
    "Gastroenteritis": 0.9,
    "Appendicitis": 0.85,
    "Migraine": 0.8,
    "Pancreatitis": 0.75,
    "Liver disease": 0.7,
    "Kidney infection": 0.65
  },
  "diarrhea": {
    "Gastroenteritis": 0.9,
    "Food poisoning": 0.85,
    "Irritable bowel syndrome": 0.8,
    "Crohn's disease": 0.75,
    "Ulcerative colitis": 0.7,
    "Celiac disease": 0.65
  },
  "chest pain": {
    "Heart attack": 0.9,
    "Angina": 0.85,
    "Panic attack": 0.8,
    "Pericarditis": 0.75,
    "Costochondritis": 0.7,
    "Aortic dissection": 0.65
  },
  "sweating": {
    "Hyperthyroidism": 0.9,
    "Menopause": 0.85,
    "Anxiety": 0.8,
    "Hypoglycemia": 0.75,
    "Hyperhidrosis": 0.7,
    "Heat exhaustion": 0.65
  },
  "constipation": {
    "Irritable bowel syndrome": 0.9,
    "Colon cancer": 0.85,
    "Hemorrhoids": 0.8,
    "Diverticulitis": 0.75,
    "Parkinson's disease": 0.7,
    "Multiple sclerosis": 0.65
  },
  "frequent urination": {
    "Urinary tract infection": 0.9,
    "Diabetes": 0.85,
    "Overactive bladder": 0.8,
    "Interstitial cystitis": 0.75,
    "Kidney stones": 0.7,
    "Prostate enlargement": 0.65
  },
  "blurred vision": {
    "Myopia": 0.9,
    "Hyperopia": 0.85,
    "Diabetic retinopathy": 0.8,
    "Glaucoma": 0.75,
    "Macular degeneration": 0.7,
    "Cataracts": 0.65
  },
  "difficulty swallowing": {
    "Gastroesophageal reflux disease (GERD)": 0.9,
    "Esophageal cancer": 0.85,
    "Thyroid enlargement": 0.8,
    "Scleroderma": 0.75,
    "Stroke": 0.7,
    "Multiple sclerosis": 0.65
  },
  "muscle weakness": {
    "Muscular dystrophy": 0.9,
    "Myasthenia gravis": 0.85,
    "Multiple sclerosis": 0.8,
    "ALS": 0.75,
    "Polymyositis": 0.7,
    "Lambert-Eaton myasthenic syndrome": 0.65
  },
  "swollen glands": {
    "Mononucleosis": 0.9,
    "HIV/AIDS": 0.85,
    "Strep throat": 0.8,
    "Rubella": 0.75,
    "Hodgkin lymphoma": 0.7,
    "Sarcoidosis": 0.65
  },
  "chest tightness": {
    "Asthma": 0.9,
    "Panic attack": 0.85,
    "Heart attack": 0.8,
    "Gastroesophageal reflux disease (GERD)": 0.75,
    "Pulmonary embolism": 0.7,
    "Anxiety": 0.65
  },
  "bloating": {
    "Gastritis": 0.9,
    "Irritable bowel syndrome": 0.85,
    "Ovarian cancer": 0.8,
    "Pancreatic cancer": 0.75,
    "Celiac disease": 0.7,
    "Gallstones": 0.65
  },
  "itchy skin": {
    "Allergic reaction": 0.9,
    "Eczema": 0.85,
    "Psoriasis": 0.8,
    "Scabies": 0.75,
    "Hives": 0.7,
    "Dermatitis herpetiformis": 0.65
  },
  "abnormal vaginal bleeding": {
    "Menstrual disorders": 0.9,
    "Uterine fibroids": 0.85,
    "Cervical cancer": 0.8,
    "Endometriosis": 0.75,
    "Pelvic inflammatory disease": 0.7,
    "Ovarian cysts": 0.65
  },
  "hair loss": {
    "Androgenetic alopecia": 0.9,
    "Alopecia areata": 0.85,
    "Thyroid disorders": 0.8,
    "Lupus": 0.75,
    "Chemotherapy": 0.7,
    "Telogen effluvium": 0.65
  },
  "unexplained weight loss": {
    "Hyperthyroidism": 0.9,
    "Celiac disease": 0.85,
    "Cancer": 0.8,
    "HIV/AIDS": 0.75,
    "Crohn's disease": 0.7,
    "Addison's disease": 0.65
  },
  "blood in stool": {
    "Hemorrhoids": 0.9,
    "Colon cancer": 0.85,
    "Diverticulitis": 0.8,
    "Ulcerative colitis": 0.75,
    "Crohn's disease": 0.7,
    "Anal fissure": 0.65
  },
  "increased thirst": {
    "Diabetes": 0.9,
    "Dehydration": 0.85,
    "Kidney disease": 0.8,
    "Hyperparathyroidism": 0.75,
    "Diabetes insipidus": 0.7,
    "Sickle cell disease": 0.65
  },
  "feeling cold": {
    "Hypothyroidism": 0.9,
    "Anemia": 0.85,
    "Raynaud's disease": 0.8,
    "Peripheral artery disease": 0.75,
    "Hypothermia": 0.7,
    "Sepsis": 0.65
  },
  "muscle cramps": {
    "Dehydration": 0.9,
    "Electrolyte imbalance": 0.85,
    "Peripheral artery disease": 0.8,
    "Muscle fatigue": 0.75,
    "Hypothyroidism": 0.7,
    "Restless legs syndrome": 0.65
  },
  "excessive hunger": {
    "Diabetes": 0.9,
    "Hyperthyroidism": 0.85,
    "Stress": 0.8,
    "Bulimia nervosa": 0.75,
    "Hyperinsulinemia": 0.7,
    "Prader-Willi syndrome": 0.65
  },
  "throat clearing": {
    "Postnasal drip": 0.9,
    "Gastroesophageal reflux disease (GERD)": 0.85,
    "Laryngopharyngeal reflux": 0.8,
    "Chronic bronchitis": 0.75,
    "Allergies": 0.7,
    "Smoking": 0.65
  },
  "ear pain": {
    "Ear infection": 0.9,
    "Earwax buildup": 0.85,
    "Temporomandibular joint (TMJ) syndrome": 0.8,
    "Sinusitis": 0.75,
    "Tooth infection": 0.7,
    "Perforated eardrum": 0.65
  },
  "frequent hiccups": {
    "Gastroesophageal reflux disease (GERD)": 0.9,
    "Esophagitis": 0.85,
    "Gastritis": 0.8,
    "Peptic ulcer disease": 0.75,
    "Hiatal hernia": 0.7,
    "Diaphragmatic irritation": 0.65
  },
  "cold intolerance": {
    "Hypothyroidism": 0.9,
    "Anemia": 0.85,
    "Raynaud's disease": 0.8,
    "Peripheral artery disease": 0.75,
    "Hypothermia": 0.7,
    "Frostbite": 0.65
  },
  "skin discoloration": {
    "Vitiligo": 0.9,
    "Eczema": 0.85,
    "Psoriasis": 0.8,
    "Melasma": 0.75,
    "Lichen planus": 0.7,
    "Contact dermatitis": 0.65
  },
  "increased appetite": {
    "Diabetes": 0.9,
    "Hyperthyroidism": 0.85,
    "Stress": 0.8,
    "Bulimia nervosa": 0.75,
    "Hyperinsulinemia": 0.7,
    "Prader-Willi syndrome": 0.65
  },
  "excessive sweating": {
    "Hyperhidrosis": 0.9,
    "Menopause": 0.85,
    "Anxiety": 0.8,
    "Hyperthyroidism": 0.75,
    "Obesity": 0.7,
    "Diabetes": 0.65
  },
  "facial swelling": {
    "Allergic reaction": 0.9,
    "Angioedema": 0.85,
    "Dental abscess": 0.8,
    "Salivary gland infection": 0.75,
    "Cellulitis": 0.7,
    "Sjogren's syndrome": 0.65
  },
  "cramping abdominal pain": {
    "Menstrual cramps": 0.9,
    "Irritable bowel syndrome": 0.85,
    "Crohn's disease": 0.8,
    "Ulcerative colitis": 0.75,
    "Endometriosis": 0.7,
    "Diverticulitis": 0.65
  },
  "runny nose": {
    "Common cold": 0.9,
    "Allergies": 0.85,
    "Sinusitis": 0.8,
    "Influenza": 0.75,
    "Environmental irritants": 0.7,
    "Rhinitis": 0.65
  },
  "sneezing": {
    "Allergic rhinitis": 0.9,
    "Common cold": 0.85,
    "Flu": 0.8,
    "Sinusitis": 0.75,
    "COVID-19": 0.7,
    "Hay fever": 0.65
  },
  "watery eyes": {
    "Allergic conjunctivitis": 0.9,
    "Common cold": 0.85,
    "Flu": 0.8,
    "Sinusitis": 0.75,
    "COVID-19": 0.7,
    "Hay fever": 0.65
  },
  "loss of smell": {
    "Sinusitis": 0.9,
    "COVID-19": 0.85,
    "Nasal polyps": 0.8,
    "Head injury": 0.75,
    "Parkinson's disease": 0.7,
    "Alzheimer's disease": 0.65
  },
  "loss of taste": {
    "COVID-19": 0.9,
    "Sinusitis": 0.85,
    "Viral infections": 0.8,
    "Zinc deficiency": 0.75,
    "Chemotherapy": 0.7,
    "Dental problems": 0.65
  },
  "joint swelling": {
    "Rheumatoid arthritis": 0.9,
    "Osteoarthritis": 0.85,
    "Gout": 0.8,
    "Lupus": 0.75,
    "Psoriatic arthritis": 0.7,
    "Infectious arthritis": 0.65
  },
  "muscle twitching": {
    "Benign fasciculation syndrome": 0.9,
    "Muscle cramps": 0.85,
    "Amyotrophic lateral sclerosis (ALS)": 0.8,
    "Peripheral neuropathy": 0.75,
    "Multiple sclerosis": 0.7,
    "Hypothyroidism": 0.65
  },
  "painful joints": {
    "Osteoarthritis": 0.9,
    "Rheumatoid arthritis": 0.85,
    "Gout": 0.8,
    "Lupus": 0.75,
    "Psoriatic arthritis": 0.7,
    "Fibromyalgia": 0.65
  },
  "bloodshot eyes": {
    "Conjunctivitis": 0.9,
    "Eye strain": 0.85,
    "Allergies": 0.8,
    "Subconjunctival hemorrhage": 0.75,
    "Dry eyes": 0.7,
    "Uveitis": 0.65
  },
  "frequent infections": {
    "HIV/AIDS": 0.9,
    "Chronic granulomatous disease": 0.85,
    "Leukemia": 0.8,
    "Diabetes": 0.75,
    "Immunodeficiency disorders": 0.7,
    "Lymphoma": 0.65
  },
  "hoarse voice": {
    "Laryngitis": 0.9,
    "Vocal cord nodules": 0.85,
    "Thyroid disorders": 0.8,
    "Gastroesophageal reflux disease (GERD)": 0.75,
    "Vocal cord paralysis": 0.7,
    "Smoking": 0.65
  },
  "toothache": {
    "Tooth decay": 0.9,
    "Gum disease": 0.85,
    "Dental abscess": 0.8,
    "Tooth fracture": 0.75,
    "Sinusitis": 0.7,
    "Bruxism": 0.65
  },
  "gum bleeding": {
    "Gingivitis": 0.9,
    "Periodontitis": 0.85,
    "Leukemia": 0.8,
    "Hemophilia": 0.75,
    "Vitamin K deficiency": 0.7,
    "Scurvy": 0.65
  },
  "bad breath": {
    "Halitosis": 0.9,
    "Poor oral hygiene": 0.85,
    "Dental infections": 0.8,
    "Gum disease": 0.75,
    "Dry mouth": 0.7,
    "Sinusitis": 0.65
  },
  "frequent urination at night": {
    "Nocturia": 0.9,
    "Enlarged prostate": 0.85,
    "Urinary tract infection": 0.8,
    "Diabetes": 0.75,
    "Chronic kidney disease": 0.7,
    "Overactive bladder": 0.65
  },
  "dry skin": {
    "Xerosis": 0.9,
    "Eczema": 0.85,
    "Psoriasis": 0.8,
    "Hypothyroidism": 0.75,
    "Dehydration": 0.7,
    "Atopic dermatitis": 0.65
  },
  "brittle nails": {
    "Iron deficiency anemia": 0.9,
    "Hypothyroidism": 0.85,
    "Psoriasis": 0.8,
    "Fungal nail infection": 0.75,
    "Lichen planus": 0.7,
    "Raynaud phenomenon": 0.65
  },
  "swollen legs": {
    "Venous insufficiency": 0.9,
    "Deep vein thrombosis": 0.85,
    "Heart failure": 0.8,
    "Kidney disease": 0.75,
    "Liver disease": 0.7,
    "Lymphedema": 0.65
  },
  "frequent nosebleeds": {
    "Nasal trauma": 0.9,
    "Dry air": 0.85,
    "Allergic rhinitis": 0.8,
    "High blood pressure": 0.75,
    "Leukemia": 0.7,
    "Blood clotting disorders": 0.65
  },
  "trouble breathing": {
    "Asthma": 0.9,
    "Chronic obstructive pulmonary disease (COPD)": 0.85,
    "Pneumonia": 0.8,
    "Bronchitis": 0.75,
    "Anxiety": 0.7,
    "Heart failure": 0.65
  },
  "wheezing": {
    "Asthma": 0.9,
    "Bronchiolitis": 0.85,
    "Chronic obstructive pulmonary disease (COPD)": 0.8,
    "Allergic reaction": 0.75,
    "Bronchitis": 0.7,
    "Heart failure": 0.65
  },
  "swollen lymph nodes": {
    "Viral infection": 0.9,
    "Bacterial infection": 0.85,
    "Lupus": 0.8,
    "Mononucleosis": 0.75,
    "Lymphoma": 0.7,
    "Leukemia": 0.65
  },
  "stiffness": {
    "Arthritis": 0.9,
    "Fibromyalgia": 0.85,
    "Muscle strain": 0.8,
    "Lyme disease": 0.75,
    "Polymyalgia rheumatica": 0.7,
    "Ankylosing spondylitis": 0.65
  },
  "problems with coordination": {
    "Multiple sclerosis": 0.9,
    "Stroke": 0.85,
    "Cerebral palsy": 0.8,
    "Parkinson's disease": 0.75,
    "Brain injury": 0.7,
    "Alcohol intoxication": 0.65
  },
  "changes in bowel habits": {
    "Irritable bowel syndrome": 0.9,
    "Inflammatory bowel disease": 0.85,
    "Colon cancer": 0.8,
    "Diverticulitis": 0.75,
    "Crohn's disease": 0.7,
    "Ulcerative colitis": 0.65
  },
  "dry eyes": {
    "Dry eye syndrome": 0.9,
    "Sjogren's syndrome": 0.85,
    "Allergies": 0.8,
    "Medication side effects": 0.75,
    "Environmental factors": 0.7,
    "LASIK surgery": 0.65
  },
  "changes in menstrual cycle": {
    "Menstrual disorders": 0.9,
    "Polycystic ovary syndrome (PCOS)": 0.85,
    "Endometriosis": 0.8,
    "Thyroid disorders": 0.75,
    "Stress": 0.7,
    "Perimenopause": 0.65
  },
  "facial drooping": {
    "Stroke": 0.9,
    "Bell's palsy": 0.85,
    "Brain tumor": 0.8,
    "Facial nerve paralysis": 0.75,
    "Guillain-Barre syndrome": 0.7,
    "Multiple sclerosis": 0.65
  },
  "unexplained bruising": {
    "Vitamin deficiency": 0.9,
    "Clotting disorders": 0.85,
    "Leukemia": 0.8,
    "Liver disease": 0.75,
    "Medication side effects": 0.7,
    "Hemophilia": 0.65
  },
  "unexplained weight gain": {
    "Hypothyroidism": 0.9,
    "Cushing's syndrome": 0.85,
    "Polycystic ovary syndrome (PCOS)": 0.8,
    "Heart failure": 0.75,
    "Insulin resistance": 0.7,
    "Medication side effects": 0.65
  },
  "increased urination": {
    "Diabetes": 0.9,
    "Diuretic use": 0.85,
    "Chronic kidney disease": 0.8,
    "Hypercalcemia": 0.75,
    "Hyperparathyroidism": 0.7,
    "Urinary tract infection": 0.65
  },
  "fainting": {
    "Vasovagal syncope": 0.9,
    "Orthostatic hypotension": 0.85,
    "Heart arrhythmia": 0.8,
    "Anemia": 0.75,
    "Dehydration": 0.7,
    "Seizure": 0.65
  },
  "unsteady gait": {
    "Peripheral neuropathy": 0.9,
    "Parkinson's disease": 0.85,
    "Vertigo": 0.8,
    "Cerebellar ataxia": 0.75,
    "Inner ear disorder": 0.7,
    "Brain injury": 0.65
  },
  "skin lesions": {
    "Skin cancer": 0.9,
    "Psoriasis": 0.85,
    "Eczema": 0.8,
    "Ringworm": 0.75,
    "Impetigo": 0.7,
    "Contact dermatitis": 0.65
  },
  "unpleasant breath odor": {
    "Halitosis": 0.9,
    "Poor oral hygiene": 0.85,
    "Dental infections": 0.8,
    "Dry mouth": 0.75,
    "Gum disease": 0.7,
    "Smoking": 0.65
  },
  "bleeding gums": {
    "Gingivitis": 0.9,
    "Periodontitis": 0.85,
    "Leukemia": 0.8,
    "Hemophilia": 0.75,
    "Vitamin K deficiency": 0.7,
    "Scurvy": 0.65
  },
  "painful swallowing": {
    "Strep throat": 0.9,
    "Esophagitis": 0.85,
    "Tonsillitis": 0.8,
    "GERD": 0.75,
    "Pharyngitis": 0.7,
    "Swollen tonsils": 0.65
  },
  "decreased urine output": {
    "Dehydration": 0.9,
    "Kidney failure": 0.85,
    "Acute tubular necrosis": 0.8,
    "Urinary tract obstruction": 0.75,
    "Shock": 0.7,
    "Hepatorenal syndrome": 0.65
  },
  "facial pain": {
    "Sinusitis": 0.9,
    "Dental abscess": 0.85,
    "Trigeminal neuralgia": 0.8,
    "Migraine": 0.75,
    "Temporomandibular joint disorder (TMJ)": 0.7,
    "Cluster headache": 0.65
  },
  "nasal congestion": {
    "Common cold": 0.9,
    "Sinusitis": 0.85,
    "Allergies": 0.8,
    "Nasal polyps": 0.75,
    "Hay fever": 0.7,
    "Rhinitis": 0.65
  },
  "numbness or tingling": {
    "Peripheral neuropathy": 0.9,
    "Multiple sclerosis": 0.85,
    "Pinched nerve": 0.8,
    "Migraine": 0.75,
    "Raynaud's disease": 0.7,
    "Guillain-Barre syndrome": 0.65
  },
  "jaw pain": {
    "Dental problems": 0.9,
    "Temporomandibular joint disorder (TMJ)": 0.85,
    "Sinusitis": 0.8,
    "Trigeminal neuralgia": 0.75,
    "Heart attack": 0.7,
    "Cluster headache": 0.65
  },
  "burning sensation": {
    "Peripheral neuropathy": 0.9,
    "Heartburn": 0.85,
    "Nerve damage": 0.8,
    "Urinary tract infection": 0.75,
    "Sunburn": 0.7,
    "Diabetic neuropathy": 0.65
  },
  "palpitations": {
    "Heart arrhythmia": 0.9,
    "Anxiety": 0.85,
    "Hyperthyroidism": 0.8,
    "Heart failure": 0.75,
    "Caffeine intake": 0.7,
    "Anemia": 0.65
  },
  "blood clots": {
    "Deep vein thrombosis": 0.9,
    "Pulmonary embolism": 0.85,
    "Atrial fibrillation": 0.8,
    "Stroke": 0.75,
    "Thrombophilia": 0.7,
    "Antiphospholipid syndrome": 0.65
  },
  "blood in urine": {
    "Urinary tract infection": 0.9,
    "Kidney stones": 0.85,
    "Bladder cancer": 0.8,
    "Interstitial cystitis": 0.75,
    "Glomerulonephritis": 0.7,
    "Polycystic kidney disease": 0.65
  },
  "blood in vomit": {
    "Peptic ulcer": 0.9,
    "Gastroesophageal reflux disease (GERD)": 0.85,
    "Esophageal varices": 0.8,
    "Gastritis": 0.75,
    "Mallory-Weiss tear": 0.7,
    "Stomach cancer": 0.65
  },
  "persistent cough": {
    "Chronic obstructive pulmonary disease (COPD)": 0.9,
    "Asthma": 0.85,
    "Bronchitis": 0.8,
    "Gastroesophageal reflux disease (GERD)": 0.75,
    "Lung cancer": 0.7,
    "Postnasal drip": 0.65
  },
  "pain or discomfort during intercourse": {
    "Vaginismus": 0.9,
    "Endometriosis": 0.85,
    "Pelvic inflammatory disease (PID)": 0.8,
    "Ovarian cysts": 0.75,
    "Vulvodynia": 0.7,
    "Sexually transmitted infections (STIs)": 0.65
  },
  "dizziness or lightheadedness": {
    "Inner ear disorders": 0.9,
    "Low blood pressure": 0.85,
    "Dehydration": 0.8,
    "Anemia": 0.75,
    "Medication side effects": 0.7,
    "Vertebrobasilar insufficiency": 0.65
  },
  "loss of bladder control": {
    "Urinary incontinence": 0.9,
    "Overactive bladder": 0.85,
    "Urinary tract infection": 0.8,
    "Neurological disorders": 0.75,
    "Pelvic organ prolapse": 0.7,
    "Stroke": 0.65
  },
  "painful or frequent urination": {
    "Urinary tract infection (UTI)": 0.9,
    "Interstitial cystitis": 0.85,
    "Bladder stones": 0.8,
    "Prostatitis": 0.75,
    "Sexually transmitted infections (STIs)": 0.7,
    "Urethritis": 0.65
  },
  "craving for non-food items (pica)": {
    "Iron deficiency anemia": 0.9,
    "Pregnancy": 0.85,
    "Obsessive-compulsive disorder (OCD)": 0.8,
    "Dietary deficiencies": 0.75,
    "Stress": 0.7,
    "Schizophrenia": 0.65
  },
  "persistent sadness or hopelessness": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Seasonal affective disorder (SAD)": 0.8,
    "Postpartum depression": 0.75,
    "Dysthymia": 0.7,
    "Adjustment disorder": 0.65
  },
  "feeling of impending doom": {
    "Panic disorder": 0.9,
    "Anxiety disorders": 0.85,
    "Heart attack": 0.8,
    "Panic attack": 0.75,
    "Asthma attack": 0.7,
    "Acute stress reaction": 0.65
  },
  "unexplained aches and pains": {
    "Fibromyalgia": 0.9,
    "Chronic fatigue syndrome (CFS)": 0.85,
    "Depression": 0.8,
    "Anxiety disorders": 0.75,
    "Hypothyroidism": 0.7,
    "Lyme disease": 0.65
  },
  "recurrent nightmares": {
    "Post-traumatic stress disorder (PTSD)": 0.9,
    "Anxiety disorders": 0.85,
    "Depression": 0.8,
    "Sleep disorders": 0.75,
    "Bipolar disorder": 0.7,
    "Substance use disorders": 0.65
  },
  "difficulty concentrating": {
    "Attention deficit hyperactivity disorder (ADHD)": 0.9,
    "Anxiety disorders": 0.85,
    "Depression": 0.8,
    "Stress": 0.75,
    "Chronic fatigue syndrome (CFS)": 0.7,
    "Thyroid disorders": 0.65
  },
  "increased irritability or anger": {
    "Intermittent explosive disorder (IED)": 0.9,
    "Bipolar disorder": 0.85,
    "Depression": 0.8,
    "Stress": 0.75,
    "Anxiety disorders": 0.7,
    "Attention deficit hyperactivity disorder (ADHD)": 0.65
  },
  "withdrawal from social activities": {
    "Social anxiety disorder": 0.9,
    "Depression": 0.85,
    "Substance use disorders": 0.8,
    "Anxiety disorders": 0.75,
    "Agoraphobia": 0.7,
    "Autism spectrum disorder (ASD)": 0.65
  },
  "preoccupation with weight or appearance": {
    "Anorexia nervosa": 0.9,
    "Bulimia nervosa": 0.85,
    "Body dysmorphic disorder (BDD)": 0.8,
    "Depression": 0.75,
    "Substance use disorders": 0.7,
    "Obsessive-compulsive disorder (OCD)": 0.65
  },
  "fear of gaining weight": {
    "Anorexia nervosa": 0.9,
    "Bulimia nervosa": 0.85,
    "Body dysmorphic disorder (BDD)": 0.8,
    "Depression": 0.75,
    "Substance use disorders": 0.7,
    "Obsessive-compulsive disorder (OCD)": 0.65
  },
  "disordered eating habits": {
    "Anorexia nervosa": 0.9,
    "Bulimia nervosa": 0.85,
    "Binge-eating disorder": 0.8,
    "Depression": 0.75,
    "Anxiety disorders": 0.7,
    "Substance use disorders": 0.65
  },
  "suicidal thoughts or behaviors": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Borderline personality disorder (BPD)": 0.75,
    "Substance use disorders": 0.7,
    "Schizophrenia": 0.65
  },
  "feelings of worthlessness or guilt": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Borderline personality disorder (BPD)": 0.75,
    "Substance use disorders": 0.7,
    "Schizophrenia": 0.65
  },
  "insomnia or hypersomnia": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Generalized anxiety disorder (GAD)": 0.75,
    "Substance use disorders": 0.7,
    "Schizophrenia": 0.65
  },
  "psychomotor agitation or retardation": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Generalized anxiety disorder (GAD)": 0.75,
    "Substance use disorders": 0.7,
    "Schizophrenia": 0.65
  },
  "fatigue or loss of energy": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Chronic fatigue syndrome (CFS)": 0.75,
    "Hypothyroidism": 0.7,
    "Anemia": 0.65
  },
  "problems with concentration or decision-making": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Attention deficit hyperactivity disorder (ADHD)": 0.75,
    "Substance use disorders": 0.7,
    "Schizophrenia": 0.65
  },
  "decreased sex drive": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Post-traumatic stress disorder (PTSD)": 0.8,
    "Chronic fatiguesyndrome (CFS)": 0.75,
    "Hypothyroidism": 0.7,
    "Medication side effects": 0.65
  },
  "changes in appetite or weight": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Anorexia nervosa": 0.8,
    "Bulimia nervosa": 0.75,
    "Substance use disorders": 0.7,
    "Hyperthyroidism": 0.65
  },
  "psychotic symptoms": {
    "Schizophrenia": 0.9,
    "Bipolar disorder": 0.85,
    "Major depressive disorder with psychotic features": 0.8,
    "Schizoaffective disorder": 0.75,
    "Brief psychotic disorder": 0.7,
    "Substance-induced psychotic disorder": 0.65
  },
  "paranoia or suspiciousness": {
    "Schizophrenia": 0.9,
    "Schizoaffective disorder": 0.85,
    "Paranoid personality disorder": 0.8,
    "Delusional disorder": 0.75,
    "Substance use disorders": 0.7,
    "Psychotic depression": 0.65
  },
  "delusions or hallucinations": {
    "Schizophrenia": 0.9,
    "Schizoaffective disorder": 0.85,
    "Psychotic depression": 0.8,
    "Brief psychotic disorder": 0.75,
    "Substance-induced psychotic disorder": 0.7,
    "Postpartum psychosis": 0.65
  },
  "social withdrawal or isolation": {
    "Schizophrenia": 0.9,
    "Social anxiety disorder": 0.85,
    "Depression": 0.8,
    "Substance use disorders": 0.75,
    "Autism spectrum disorder (ASD)": 0.7,
    "Avoidant personality disorder": 0.65
  },
  "behavioral changes or agitation": {
    "Bipolar disorder": 0.9,
    "Schizophrenia": 0.85,
    "Delirium": 0.8,
    "Dementia": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "difficulty with memory or thinking": {
    "Alzheimers disease": 0.9,
    "Vascular dementia": 0.85,
    "Parkinsons disease dementia": 0.8,
    "Huntingtons disease": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "changes in personality or behavior": {
    "Frontotemporal dementia": 0.9,
    "Traumatic brain injury (TBI)": 0.85,
    "Substance use disorders": 0.8,
    "Depression": 0.75,
    "Schizophrenia": 0.7,
    "Alzheimers disease": 0.65
  },
  "difficulty with problem-solving or planning": {
    "Alzheimers disease": 0.9,
    "Vascular dementia": 0.85,
    "Frontotemporal dementia": 0.8,
    "Huntingtons disease": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "disorientation or confusion": {
    "Alzheimers disease": 0.9,
    "Vascular dementia": 0.85,
    "Delirium": 0.8,
    "Substance intoxication or withdrawal": 0.75,
    "Medication side effects": 0.7,
    "Sleep deprivation": 0.65
  },
  "changes in mood or behavior": {
    "Bipolar disorder": 0.9,
    "Major depressive disorder (MDD)": 0.85,
    "Personality disorders": 0.8,
    "Substance use disorders": 0.75,
    "Schizophrenia": 0.7,
    "Medication side effects": 0.65
  },
  "reduced ability to perform daily tasks": {
    "Alzheimers disease": 0.9,
    "Vascular dementia": 0.85,
    "Parkinsons disease dementia": 0.8,
    "Huntingtons disease": 0.75,
    "Traumatic brain injury (TBI)": 0.7,
    "Substance use disorders": 0.65
  },
  "struggling to recognize familiar faces or objects": {
    "Alzheimers disease": 0.9,
    "Vascular dementia": 0.85,
    "Parkinsons disease dementia": 0.8,
    "Huntingtons disease": 0.75,
    "Traumatic brain injury (TBI)": 0.7,
    "Substance use disorders": 0.65
  },
  "decreased ability to focus or pay attention": {
    "Attention deficit hyperactivity disorder (ADHD)": 0.9,
    "Alzheimers disease": 0.85,
    "Vascular dementia": 0.8,
    "Delirium": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "loss of interest or pleasure in activities": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Dysthymia": 0.8,
    "Substance use disorders": 0.75,
    "Schizophrenia": 0.7,
    "Medication side effects": 0.65
  },
  "changes in sleep patterns or appetite": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Anorexia nervosa": 0.8,
    "Bulimia nervosa": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "feelings of worthlessness or excessive guilt": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Dysthymia": 0.8,
    "Postpartum depression": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "difficulty concentrating or making decisions": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Dysthymia": 0.8,
    "Attention deficit hyperactivity disorder (ADHD)": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "thoughts of death or suicide": {
    "Major depressive disorder (MDD)": 0.9,
    "Bipolar disorder": 0.85,
    "Dysthymia": 0.8,
    "Postpartum depression": 0.75,
    "Substance use disorders": 0.7,
    "Medication side effects": 0.65
  },
  "Tremor": {
    "Parkinsons disease": 0.9,
    "Essential tremor": 0.85,
    "Dystonia": 0.8,
    "Multiple sclerosis": 0.75,
    "Medication side effects": 0.7,
    "Hyperthyroidism": 0.65
  },
  "Balance problems": {
    "Vertigo": 0.9,
    "Menieres disease": 0.85,
    "Labyrinthitis": 0.8,
    "Stroke": 0.75,
    "Parkinsons disease": 0.7,
    "Multiple sclerosis": 0.65
  },
  "Slurred speech": {
    "Stroke": 0.9,
    "Transient ischemic attack (TIA)": 0.85,
    "Brain injury": 0.8,
    "Multiple sclerosis": 0.75,
    "Medication side effects": 0.7,
    "Alcohol intoxication": 0.65
  },
  "Weakness on one side of the body": {
    "Stroke": 0.9,
    "Transient ischemic attack (TIA)": 0.85,
    "Multiple sclerosis": 0.8,
    "Guillain-Barre syndrome": 0.75,
    "Brain tumor": 0.7,
    "Peripheral neuropathy": 0.65
  },
  "Loss of consciousness": {
    "Syncope (fainting)": 0.9,
    "Seizure": 0.85,
    "Stroke": 0.8,
    "Cardiac arrhythmia": 0.75,
    "Hypoglycemia": 0.7,
    "Hypotension": 0.65
  },
  "Double vision": {
    "Strabismus": 0.9,
    "Brain injury": 0.85,
    "Multiple sclerosis": 0.8,
    "Brain tumor": 0.75,
    "Myasthenia gravis": 0.7,
    "Stroke": 0.65
  },
  "Changes in vision": {
    "Refractive errors (myopia, hyperopia, astigmatism)": 0.9,
    "Cataracts": 0.85,
    "Macular degeneration": 0.8,
    "Glaucoma": 0.75,
    "Diabetic retinopathy": 0.7,
    "Retinal detachment": 0.65
  },
  "Loss of vision": {
    "Retinal detachment": 0.9,
    "Glaucoma": 0.85,
    "Macular degeneration": 0.8,
    "Diabetic retinopathy": 0.75,
    "Stroke": 0.7,
    "Optic neuritis": 0.65
  },
  "Eye pain": {
    "Conjunctivitis": 0.9,
    "Corneal abrasion": 0.85,
    "Foreign body in the eye": 0.8,
    "Uveitis": 0.75,
    "Glaucoma": 0.7,
    "Optic neuritis": 0.65
  },
  "Ear pain": {
    "Otitis media (middle ear infection)": 0.9,
    "Otitis externa (swimmers ear)": 0.85,
    "Earwax buildup": 0.8,
    "Temporomandibular joint (TMJ) syndrome": 0.75,
    "Sinusitis": 0.7,
    "Toothache": 0.65
  },
  "Ringing in the ears (tinnitus)": {
    "Exposure to loud noise": 0.9,
    "Age-related hearing loss": 0.85,
    "Earwax buildup": 0.8,
    "Menieres disease": 0.75,
    "Otosclerosis": 0.7,
    "Temporomandibular joint (TMJ) syndrome": 0.65
  },
  "Nasal congestion": {
    "Common cold": 0.9,
    "Allergic rhinitis (hay fever)": 0.85,
    "Sinusitis": 0.8,
    "Nasal polyps": 0.75,
    "Upper respiratory tract infection": 0.7,
    "Environmental irritants (smoke, pollution)": 0.65
  },
  "Runny or stuffy nose": {
    "Common cold": 0.9,
    "Allergic rhinitis (hay fever)": 0.85,
    "Sinusitis": 0.8,
    "Nasal polyps": 0.75,
    "Upper respiratory tract infection": 0.7,
    "Environmental irritants (smoke, pollution)": 0.65
  },
  "Sneezing": {
    "Allergic rhinitis (hay fever)": 0.9,
    "Common cold": 0.85,
    "Influenza (flu)": 0.8,
    "Upper respiratory tract infection": 0.75,
    "Allergy to dust, pollen, or pet dander": 0.7,
    "Nasal irritation": 0.65
  },
  "Loss of smell": {
    "Upper respiratory tract infection": 0.9,
    "Sinusitis": 0.85,
    "Nasal polyps": 0.8,
    "Common cold": 0.75,
    "Allergic rhinitis (hay fever)": 0.7,
    "Head injury": 0.65
  },
  "Loss of taste": {
    "Upper respiratory tract infection": 0.9,
    "Sinusitis": 0.85,
    "Nasal polyps": 0.8,
    "Common cold": 0.75,
    "Oral thrush": 0.7,
    "Head injury": 0.65
  },
  "Nosebleeds": {
    "Dry air": 0.9,
    "Nasal irritation (picking, blowing nose)": 0.85,
    "Trauma": 0.8,
    "Nasal polyps": 0.75,
    "High blood pressure": 0.7,
    "Blood clotting disorders": 0.65
  }
};
