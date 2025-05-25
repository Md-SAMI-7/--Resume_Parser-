import pandas as pd
import os

df = pd.read_csv("Fake.csv")  

os.makedirs("converted_resumes", exist_ok=True)

for i, row in df.iterrows():
    content = row[0] if len(row) == 1 else " ".join(str(x) for x in row if pd.notnull(x))
    with open(f"converted_resumes/resume_{i+1}.txt", "w", encoding="utf-8") as f:
        f.write(content)
print("CSV converted to .txt resumes in 'converted_resumes/' folder.")
