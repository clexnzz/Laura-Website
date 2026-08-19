# Laura Birthday Website – V1

Eine kleine, persönliche Geburtstagswebsite für Laura. Die V1 verwendet ausschließlich HTML, CSS und Vanilla JavaScript und ist so aufgebaut, dass sie lokal sowie später über GitHub Pages funktioniert.

## Projektstruktur

```text
laura-birthday/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── music/
│   └── icons/
└── README.md
```

## Lokal starten

Am einfachsten öffnest du `index.html` direkt im Browser.

Wenn du Visual Studio Code verwendest, kannst du optional die Erweiterung **Live Server** installieren und anschließend `index.html` über **Open with Live Server** starten.

## Bilder ergänzen

Lege eure Bilder unter `assets/images/` ab.

Die V1 verwendet noch Platzhalter-Karten. In `index.html` findest du den Bereich `Unsere Momente ❤️`. Dort kannst du später die Platzhalter durch `<img>`-Elemente mit relativen Pfaden ersetzen, zum Beispiel:

```html
<img src="assets/images/laura-und-manuel-01.jpg" alt="Laura und Manuel">
```

## Musik ergänzen

Lege eine MP3-Datei unter folgendem Namen ab:

```text
assets/music/laura-song.mp3
```

Danach funktioniert der Musik-Button oben rechts automatisch. Die Musik startet bewusst erst nach einem Klick des Nutzers.

Falls du einen anderen Dateinamen verwenden möchtest, passe die `<source>`-Zeile in `index.html` an.

## Geschenke bearbeiten

Die Geschenk-Inhalte befinden sich am Anfang von `js/script.js` im Array `gifts`.

Beispiel:

```javascript
{
  id: 1,
  title: "Dinner zusammen",
  icon: "🍣",
  teaser: "Für einen schönen Abend zu zweit.",
  content: "Gutschein für einen gemeinsamen Sushi-Abend ❤️"
}
```

Weitere Geschenke können als zusätzliche Objekte im Array ergänzt werden. Die Karten werden automatisch erzeugt.

## Easter Eggs

In V1 sind mehrere kleine Easter Eggs enthalten:

- Ein verstecktes Herz im Hero-Bereich.
- Der runde Stern-Button reagiert nach mehreren Klicks mit einer geheimen Überraschung.
- Auch das Herz im Footer hat eine kleine Reaktion.

Neue Easter Eggs können in `js/script.js` als eigene Funktionen ergänzt und anschließend über Event Listener mit HTML-Elementen verbunden werden.

## Texte anpassen

In `index.html` und `js/script.js` findest du mehrere `TODO`-Kommentare. Diese markieren die wichtigsten Stellen, an denen später persönliche Texte, echte Geschenke, Fotos und Musik ergänzt werden sollen.

## GitHub Pages

Die Website verwendet nur relative Pfade und kann deshalb direkt über GitHub Pages veröffentlicht werden.

Grundsätzlich:

1. Projekt in ein GitHub Repository pushen.
2. Im Repository **Settings → Pages** öffnen.
3. Als Quelle den gewünschten Branch, meistens `main`, auswählen.
4. Als Ordner `/ (root)` wählen.
5. Speichern.

Danach stellt GitHub eine öffentliche URL für die Website bereit.

## V1 Features

- Responsive Hero Section
- Überraschungs-Button
- Konfetti ohne externe Library
- Scroll-Reveal Animationen
- Bilder-Platzhalter mit Lightbox/Modal
- Dynamisch erzeugte Geschenkboxen
- Geschenk-Animation und Modal
- Mehrere Easter Eggs
- Vorbereiteter Musik-Player
- Persönlicher Brief-Bereich
- Mobile-, Tablet- und Desktop-Layout
- `prefers-reduced-motion` Unterstützung
- Keine Frameworks, Datenbank oder externen APIs
