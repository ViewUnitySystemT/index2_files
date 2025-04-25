import os
import sys
from bs4 import BeautifulSoup

# === Konfiguration ===
directory = "./"
keep_files = {"index.html"}  # Geändert von index2.html zu index.html

def finde_verlinkte_dateien():
    verlinkte = set()
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            filepath = os.path.join(directory, filename)
            with open(filepath, "r", encoding="utf-8") as file:
                soup = BeautifulSoup(file, "html.parser")
                for link in soup.find_all("a", href=True):
                    href = link["href"].split("?")[0].split("#")[0]
                    if not href.startswith(("http://", "https://", "#")):
                        verlinkte.add(os.path.basename(href))
    return verlinkte

def finde_zu_loeschende_dateien(alle_links):
    loeschkandidaten = []
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath) and filename.endswith(".html") and filename not in alle_links and filename not in keep_files:
            loeschkandidaten.append(filepath)
    return loeschkandidaten

def trockenlauf(dateien):
    result = "\n🔍 Trockenlauf: Diese Dateien *würden* gelöscht werden:\n"
    result += "\n".join([f"  - {f}" for f in dateien])
    return result

def ausfuehren(dateien):
    result = "\n🚮 Lösche folgende Dateien:\n"
    for f in dateien:
        try:
            os.remove(f)
            result += f"✅ Gelöscht: {f}\n"
        except Exception as e:
            result += f"❌ Fehler bei {f}: {e}\n"
    return result

def main():
    alle_links = finde_verlinkte_dateien().union(keep_files)
    loeschkandidaten = finde_zu_loeschende_dateien(alle_links)

    # Terminal-Modus ohne GUI
    print("Bitte wählen Sie eine Option:")
    print("1. Trockenlauf (anzeigen, welche Dateien gelöscht werden)")
    print("2. Dateien wirklich löschen")
    print("3. Abbrechen")

    wahl = input("Wählen Sie eine Option (1/2/3): ").strip()

    if wahl == "1":
        print(trockenlauf(loeschkandidaten))
    elif wahl == "2":
        print(ausfuehren(loeschkandidaten))
    else:
        print("Vorgang abgebrochen.")

if __name__ == "__main__":
    main()
