import spacy
import re
from spellchecker import Spellchecker

nlp = spacy.load("en_core_web_sm")
spell = Spellchecker()

KEYWORDS = [
    "strategic planning", "project management", "cross-functional leadership", 
    "data-driven", "team collaboration", "stakeholder engagement", "process improvement", 
    "analytical thinking", "innovation", "results-oriented", "cost optimization", 
    "effective communication", "time management", "problem-solving", "client satisfaction"
]

SOFT_SKILLS = [
    "leadership", "communication", "teamwork", "adaptability", 
    "problem-solving", "creativity", "work ethic", "interpersonal skills"
]

informal_to_formal = {
    "worked on": "contributed to",
    "helped": "supported",
    "got": "achieved",
    "a lot of": "significant",
    "use": "utilize",
    "dealt with": "managed",
    "fixed": "resolved",
    "made": "developed",
    "build": "construct",
    "try": "endeavor to",
    "show": "demonstrate",
    "more": "additional",
    "put together": "assembled",
}

def make_text_formal(text):
    for informal, formal in informal_to_formal.items():
        # Replace each informal term with the formal equivalent
        text = re.sub(r'\b{}\b'.format(informal), formal, text, flags=re.IGNORECASE)
    return text

# use spellchecker library for suggestions
def check_spelling(text):
    words = text.split()
    misspelled = spell.unknown(words)
    if misspelled:
        return f"Misspelled words: {', '.join(misspelled)}"

# get soft skills in text
def soft_skills(text, soft_skills):
    found_skills = [skill for skill in soft_skills if skill.lower() in text.lower()]
    return found_skills


def add_missing_keywords(text, keywords):
    missing_keywords = [kw for kw in keywords if kw.lower() not in text.lower()]
    if missing_keywords:
        text += "\n\nAdditional Skills:\n" + ", ".join(missing_keywords)
    return text

def suggest_improvements(text):
    suggestions = []
    doc = nlp(text)
    
    for sent in doc.sents:
        # check casual
        if any(informal in sent.text.lower() for informal in informal_to_formal.keys()):
            suggestions.append(f"Consider rephrasing for formality: '{sent.text.strip()}'")
        
        if len(sent) < 6:
            suggestions.append(f"Sentence may benefit from additional detail: '{sent.text.strip()}'")
    
    if suggestions:
        print("Improvement Suggestions:")
        for suggestion in suggestions:
            print(f"- {suggestion}")
    else:
        print("No suggestions. Your resume language looks formal and professional.")
    
    return "\n".join(suggestions)

# Main function to process and improve the resume
def process_resume(file_path):
    #read
    with open(file_path, "r") as file:
        original_text = file.read()

    formal_text = make_text_formal(original_text)

    enhanced_text = add_missing_keywords(formal_text, KEYWORDS)

    suggestions = suggest_improvements(enhanced_text)
    
    spelling = check_spelling(enhanced_text)
    print(spelling)

    # suggest different soft skills
    found_skills = soft_skills(enhanced_text, SOFT_SKILLS)
    print("soft skills: ", found_skills)
    for skill in found_skills:
        if skill in SOFT_SKILLS:
            print(f"consider adding: {skill}\n")

    updated_file = "updated_resume.txt"
    with open(updated_file, "w") as file:
        file.write(enhanced_text)
    
    #updated resume path and any suggestions for improvement
    print(f"Resume updated and saved as '{updated_file}'")
    if suggestions:
        with open("resume_suggestions.txt", "w") as suggest_file:
            suggest_file.write(suggestions)
        print("Suggestions for improvements saved in 'resume_suggestions.txt'.")

#run
process_resume("sample_resume.txt")