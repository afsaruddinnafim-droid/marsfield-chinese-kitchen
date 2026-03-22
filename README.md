# 寶多利 Marsfield Chinese Kitchen — Website

A responsive, production-ready website for **Marsfield Chinese Kitchen**, a family-owned Chinese restaurant located in Marsfield, NSW, Australia.

🌐 **Live site:** [afsaruddinnafim-droid.github.io/marsfield-chinese-kitchen](https://afsaruddinnafim-droid.github.io/marsfield-chinese-kitchen)

---

## 📸 About the Restaurant

Marsfield Chinese Kitchen (寶多利) is a family-run, community-loved Chinese restaurant at 6/1 Trafalgar Place, Marsfield NSW 2122. Known for classic Chinese comfort food, generous portions, and warm service — a Marsfield institution.

- 📞 **(02) 9868 5252**
- 📍 **6/1 Trafalgar Place, Marsfield NSW 2122**
- ✉️ **hello@marsfieldchinesekitchen.com**

---

## 🗂 Project Structure

```
marsfield-chinese-kitchen/
├── index.html       # Main HTML — all sections in one page
├── styles.css       # All styling, CSS variables, responsive layout
├── script.js        # Interactivity — tabs, nav, form, animations
└── README.md        # This file
```

---

## ✨ Features

- **Responsive & mobile-first** — works on all screen sizes
- **Sticky header** with mobile hamburger navigation
- **Announcement banner** for specials and promotions
- **Hero section** with Today's Special highlight block
- **About section** with family story and values
- **Tabbed menu** across 6 categories:
  - Entrées, Noodles & Rice, Stir-Fries, Chef's Specials, Vegetarian, Lunch Specials
- **Popular dishes** cards with hover animations
- **Customer reviews** section
- **Location & hours** with styled map placeholder
- **Contact form** with front-end validation
- **Back to top** button
- **Scroll-triggered fade-in** animations
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, focus states
- **No frameworks** — pure HTML, CSS and vanilla JavaScript

---

## 🎨 Design

| Element | Value |
|---|---|
| Primary colour | Deep Lacquer Red `#C0392B` |
| Accent colour | Aged Gold `#C9A84C` |
| Background | Warm Cream `#FAF6EE` |
| Display font | Noto Serif SC |
| Body font | Lora |
| UI font | Source Sans 3 |

---

## 🚀 Running Locally

No build tools or dependencies required. Just open the file:

```bash
# Clone the repo
git clone https://github.com/afsaruddinnafim-droid/marsfield-chinese-kitchen.git

# Open in browser
cd marsfield-chinese-kitchen
open index.html        # Mac
start index.html       # Windows
```

Or use the **Live Server** extension in VS Code for auto-reload on save.

---

## ✏️ Making Updates

### Changing menu prices or text
Open `index.html` in any text editor and use **Find** (`Ctrl+F` / `Cmd+F`) to search for the item name, then edit the text directly.

### Changing colours
Open `styles.css` and edit the CSS variables at the top of the file under `:root { }`:

```css
:root {
  --red:   #C0392B;   /* Main brand red */
  --gold:  #C9A84C;   /* Accent gold */
  --cream: #FAF6EE;   /* Background */
}
```

### Updating the announcement banner
In `index.html`, find the `.announcement-banner` section near the top and edit the text inside the `<p>` tag.

### Updating opening hours
Search for `hours-table` in `index.html` and edit the text in the relevant rows.

---

## 📤 Deploying Updates

After making any changes, push to GitHub and the live site updates automatically:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 🌐 Hosting

Hosted for free via **GitHub Pages**.

To enable GitHub Pages on a fresh fork:
1. Go to repository **Settings → Pages**
2. Set Branch to `main` → click **Save**
3. Site goes live at `https://YOUR_USERNAME.github.io/marsfield-chinese-kitchen`

---

## 📄 License

This project was built for Marsfield Chinese Kitchen. All rights reserved © 2025 Marsfield Chinese Kitchen.
