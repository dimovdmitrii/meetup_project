# Meet Up

![Logo](assetc/svg/main-logo.svg)

A responsive event discovery platform inspired by Meetup — browse events near you, filter by type/distance/category, and explore a map view.

**Live demo:** [https://dimovdmitrii.github.io/meetup_project/](https://dimovdmitrii.github.io/meetup_project/)

---

## Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Markup** | HTML5 (semantic structure, forms, meta/viewport) |
| **Styling** | CSS3 (custom stylesheet, no frameworks) |
| **Scripting** | Vanilla JavaScript (ES6+) — no frameworks |

---

## Features & Technologies Used

### CSS Layout

- **CSS Grid** — event cards grid (`grid-template-columns`, responsive columns), categories section, footer layout; `repeat(auto-fit, minmax())` for flexible layouts
- **Flexbox** — header, search bar, buttons, hero section, cards content, footer; `flex-direction`, `align-items`, `justify-content` for alignment
- **Responsive design** — multiple `@media` breakpoints (e.g. 864px, 680px, 425px, 378px) for mobile-first and tablet views
- **Positioning** — `position: absolute`, `position: relative` for overlays and dropdowns
- **Units & functions** — `calc()` for dynamic widths; `rem`/`em`/`px` for typography and spacing

### Styling & Interactions

- **Transitions** — `transition` for hover effects (background-color, opacity, transform, box-shadow)
- **Transforms** — `scale()`, `rotate()`, `translate()` for card hover effects and dropdown arrows
- **Google Fonts** — Roboto, Inter, Montserrat, Open Sans, Oswald, Dancing Script

### JavaScript

- **DOM API** — `querySelector`, `querySelectorAll`, `createElement`, `appendChild`, `classList`
- **Event handling** — `addEventListener`, click handlers, `resize` listener for responsive logic
- **Intl API** — `Intl.DateTimeFormat` for date formatting
- **In-memory filtering** — filter events by type (online/offline), distance, category with dropdowns
- **Dynamic content** — render event cards from a data store; “Show More / Hide” for events list and grid

### Third-Party Libraries

- **Leaflet** — interactive map on the events page (OpenStreetMap tiles, markers)

---

## Project Structure

```
meetup_project/
├── index.html          # Homepage with event cards & hero
├── events.html         # Events list with filters & map
├── styles/
│   └── style.css       # Main stylesheet
├── scripts/
│   └── script.js       # Event logic, filters, map, show more/hide
└── assetc/             # SVG/PNG assets
```

---

## How to Run

1. Clone the repo
2. Open `index.html` in a browser, or serve via a local server
3. For the map to work, `events.html` must be loaded (Leaflet requires an HTTP context)
