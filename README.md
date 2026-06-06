# Portfolio

Personal portfolio website for Abubacker Siddiq J.

## Stack

- React
- Vite
- Tailwind CSS
- Lucide React
- Git LFS for large project preview videos

## Project Structure

```txt
Portfolio/
|-- index.html                 # Current live single-page portfolio
|-- script.js                  # Scroll state, active nav, counters, FAQ, certificate modal
|-- public/
|   `-- assets/
|       |-- certificates/      # Internship certificate
|       |-- documents/         # Resume and documents
|       |-- images/            # Logo, profile, and brand images
|       `-- videos/            # Project preview videos tracked with Git LFS
|-- src/
|   |-- components/
|   |   |-- layout/            # Header/navigation components
|   |   `-- sections/          # Portfolio section components
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- eslint.config.js
|-- .gitattributes             # Git LFS rules
|-- .gitignore
`-- _redirects                 # Hosting redirects
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Repository Notes

- `node_modules/` and `dist/` are generated folders and are ignored.
- The live portfolio currently uses `index.html` and `script.js`.
- React section components are kept in `src/components` for maintainable structure.
- MP4 files under `public/assets/videos/` are tracked with Git LFS because they are larger than GitHub's normal file limit.
