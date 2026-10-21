# Bildungswissenschaften II – Lern-App (Psychologie, Heine)

Live: https://talib47.github.io/BiWi-II/

Modul BiWi II (UDE, Lehramt GyGe), beide Vorlesungen bei Prof. Heine:
„Einführung in die Psychologie / Lehr-Lernpsychologie“ (Mi 8–10) und „Pädagogisch-psychologische Diagnostik / Inklusion“ (Mi 10–12).

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
| `content.js` | Kapitel (mit Vorlesung `vl` und Klausurteil `teil`), Lektionen, Karten, Rechentypen je Kapitel |
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

Grundlage bisher: Altklausuren (WiSe 17/18, 18/19, 22/23, 24/25) und der Fragenkatalog „Fragen Heine“. Folien folgen.
Fertig: Kapitel 10 (Normwerte und Standardisierung) als Muster. Übrige Kapitel stehen im Lernpfad als „folgt“.
