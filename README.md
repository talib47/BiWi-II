# Bildungswissenschaften II – Lern-App (Psychologie, Heine)

Live: https://talib47.github.io/BiWi-II/

Modul BiWi II (UDE, Lehramt GyGe), Vorlesung „Psychologie im Lehramt“ bei Prof. Heine (Mi 8.15–11.45) mit vier Schwerpunkten:
Einführung in die Psychologie, Lehr-/Lernpsychologie, Pädagogisch-psychologische Diagnostik, Inklusion. Klausur: 17.02.2027, digital.

Eine Datei (`index.html`, Vanilla-JS, kein Framework), gebaut aus den Modulen in `src/`:

```
python3 build.py      # erzeugt index.html neu
```

## Klausurformat (Altklausur WiSe 24/25)

Vier Teile à 30 Punkte (120): Einführung, Lehr-Lernpsychologie, Diagnostik, Inklusion.
Jeder Teil: Kreuzaufgaben (drei Aussagen wahr/falsch, je richtiges Kreuz 1 P., alle drei richtig +1 Zusatzpunkt, keine Minuspunkte), danach eine offene Aufgabe (Fallbeispiel, Rechnung, Grafik; Teil 4: Fallanalyse nach ICD-10 F81, 14 P.).

## Aufbau von `src/`

| Datei | Inhalt |
|---|---|
| `head.html` | Kopf, Icons, Manifest, CSS (Farben als Tokens, Dunkelmodus, Akzent Pflaume), Zoom |
| `core.js` | Speicher (`localStorage`), Geräte-Abgleich über GitHub, Hilfsfunktionen, `judge()` |
| `content.js` | Kapitelliste nach Heines vier Schwerpunkten (`teil` = Klausurteil), Kapitel 16 Normwerte |
| `content1.js`, `content2.js` | Kapitel 1 (Psychologie als Wissenschaft) und 9 (Lernen, nicht-assoziatives Lernen), je mit Karten, Kreuz- und offenen Aufgaben |
| `cardinfo.js` | Kontextzeile (Vorderseite) und dezente i-Infos (Rückseite) je Karte |
| `diag.js` | Rechentrainer Diagnostik: z-Wert, Abweichungs-IQ, Normskalen, Normalverteilung, Prozentrang, Testvergleich |
| `gfx.js` | SVG-Grafiken (Normalverteilung) |
| `views.js` | Lernpfad, Kapitel, Lektionen mit „Verstehe ich nicht“, Karten mit Wiederholungsplan, Grafiken, Üben, Statistik |
| `kreuz.js` | Kreuzaufgaben im Klausurformat |
| `exam.js` | Offene Aufgaben (Schreiben mit Erwartungshorizont) und Probeklausur mit Timer |
| `task.js`, `start.js` | Aufgabenansicht (vorgerechnet, geführt, frei), Start, Zoom, Token aus dem Link |

## Geräte-Abgleich

- Fortschritt liegt als `fortschritt.json` im Zweig `fortschritt` dieses Repos.
- Gerät verbinden: `https://talib47.github.io/BiWi-II/#t=<GitHub-Schlüssel>` einmal öffnen.
- Eigene Schlüssel: `bw2-lernapp-v1`, `bw2-gh-token`, `bw2-zoom`.

## Stand der Inhalte

Grundlage: Folien Heine WiSe 26/27, Altklausuren (WiSe 17/18, 18/19, 22/23, 24/25), Fragenkatalog „Fragen Heine“. Studentische Unterlagen nur nach Prüfung.
Fertig: Kapitel 1 und 9 (Sitzungen 1–2) sowie Kapitel 16 (Normwerte). Übrige Kapitel stehen im Lernpfad als „folgt“.
