# Twin Piks Interiors website

Static site hosted on GitHub Pages: https://petarkarov.github.io/twin-piks/

## Pages
- `index.html` — home
- `projects.html` — all project albums
- `project.html?p=<slug>` — one album with lightbox
- `contact.html` — contact details and enquiry form (Web3Forms)

## Where things live
- `assets/site.js` — all Macedonian/English text (the `T` object) and shared page logic.
  The Macedonian text is also written directly in each HTML file so search engines can read it; keep both in sync when editing copy.
- `assets/projects.js` — project list: names, descriptions, category and photos.
- `assets/style.css` — styles.
- `images/` — covers; album photos go in `images/projects/<slug>/`.

## Contact form
Paste the Web3Forms access key into the `access_key` field in `contact.html`.

## Run locally
```
python3 -m http.server 8765
```
then open http://localhost:8765
