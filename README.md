# Mayimunah Nagayi · Personal portfolio

This is my personal site for selected research, software projects and a little about my background. It is deliberately made with **HTML, CSS and plain JavaScript**, so I can edit it without having to maintain a framework or build pipeline.

## Run locally

Open this folder in VS Code and use **Live Server** on `index.html`. Or use Python from this folder:

```bash
python -m http.server 5500
```

Open `http://localhost:5500`. There is no `npm install` step.

## File structure

- `index.html` — short homepage, with previews of research and software.
- `research.html` — research studies and exact publication titles.
- `projects.html` — software projects and working status filters.
- `about.html` — personal introduction and experience.
- `contact.html` — public profiles and, later, a CV download.
- `js/content.js` — **edit this first** for papers, projects, labels and links.
- `js/app.js` — controls project lists, filters, themes, navigation and contact buttons.
- `css/styles.css` — typography, page layouts and four colour palettes.
- `cv/` — put the public PDF you want visitors to download here.

I kept project data in one file to avoid editing individual pages every time I finish something new. The HTML files share a header and footer style, but each page has its own URL.

## Adding a new software project

In `js/content.js`, add an object to `software`:

```js
{
  number: '04',
  category: 'Personal project',
  title: 'Project title',
  summary: 'What it does and what I worked on.',
  stack: ['Python', 'Streamlit'],
  url: 'https://example.com',
  status: 'live'
}
```

If the project isn't online yet, use `url: ''` and `status: 'in-progress'`. The site won't pretend there is a live demo.

## The four themes

Use the **Palette** button in the top right of the site. The selection is saved in the browser. The default is Cream & Plum. To adjust a palette, change the CSS variables at the beginning of `css/styles.css`.

## How to add my CV

1. Export the CV I want public as a PDF.
2. Copy it into `cv/`, for example `cv/Mayimunah_Nagayi_CV.pdf`.
3. Open `js/content.js` and set `contact.cv` to that path.
4. Check that **Download PDF** works locally and after deployment.

I prefer hosting the PDF inside the repository instead of making visitors open a Google Drive link. I should check the PDF for private contact details before publishing.

## Before I publish

- Confirm the exact description of my contribution to the collaborative Ace Group website.
- Replace the Honours Streamlit placeholder with a real description and deployment link.
- Verify that the application tracker, publication links and LinkedIn link work.
- Add a public GitHub URL and email if I want them visible.
- Upload an updated CV only when I'm happy for it to be publicly downloadable.
- Replace any copy that no longer reflects how I would describe myself.

## Deploy

This is a static website. Commit the **contents** of this folder to a new GitHub repository. In Vercel, import the repository and use **Other** or **no framework**, with the output directory left at the repository root. GitHub Pages also works.

No paid service is needed to host the first version.
