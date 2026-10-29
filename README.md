# PDF Studio app

Works on PC, Mac, Android and iPhone. Every library is included, so it runs fully offline.

## Quick start (PC or Mac, no install)
Unzip the folder and double-click `index.html`. Everything works offline. (Opening it this way
cannot be installed as an app; use the steps below for that.)

## Install it as an app (PC and phone)
Installing needs the folder to be served over https, which any free static host does:
1. Upload the whole folder to Netlify Drop (app.netlify.com/drop), GitHub Pages or Cloudflare Pages.
2. Open the address you get in Chrome or Edge (PC or Android) and click Install app,
   or use the install icon in the address bar.
3. iPhone/iPad: open it in Safari, tap Share, then Add to Home Screen.
After the first visit it works offline. On Chrome/Edge desktop it can also be set as the
"Open with" app for PDF files.

## Test locally
    python3 -m http.server 8000     (then open http://localhost:8000)

## Updating
When you change any file, edit VERSION in sw.js (for example pdfstudio-v2) so installed
copies pick up the new files.

## Notes
- Your files never leave your device.
- Features that need a server (OCR, high-quality Office conversion) are not part of this package.
