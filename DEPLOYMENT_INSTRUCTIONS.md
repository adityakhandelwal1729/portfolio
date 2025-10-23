# GitHub Pages Deployment Instructions

## Quick Start

Your portfolio website is ready to deploy! Follow these steps:

### Step 1: Prepare Files

You need these 3 files for deployment:
- `portfolio.html` → Rename to `index.html`
- `styles.css` → Keep as is
- `script.js` → Keep as is

### Step 2: Deploy to GitHub Pages

1. **Create a new GitHub repository**
   - Go to github.com and create a new repository
   - Name it something like `portfolio` or `your-username.github.io`
   - Keep it public

2. **Upload files**
   - Click "uploading an existing file"
   - Rename `portfolio.html` to `index.html` before uploading
   - Upload `index.html`, `styles.css`, and `script.js`
   - Also upload the `.nojekyll` file (important!)
   - Commit the files

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

4. **Wait for deployment**
   - GitHub will build your site (takes 1-2 minutes)
   - Your site will be live at: `https://your-username.github.io/repository-name/`

### Important Notes

- The `.nojekyll` file tells GitHub Pages not to use Jekyll processing
- Make sure `portfolio.html` is renamed to `index.html`
- All files must be in the root directory (not in subfolders)
- If you see a blank page, check that index.html is complete and properly formatted

### Testing Locally

Before deploying, you can test locally by:
1. Opening `portfolio.html` directly in your browser
2. OR using a local server: `python -m http.server 8000`

### Troubleshooting

**Blank page on GitHub Pages?**
- Make sure you renamed `portfolio.html` to `index.html`
- Check that `.nojekyll` file is present
- Wait 5 minutes and hard refresh (Ctrl+Shift+R)
- Check browser console for errors

**Styles not loading?**
- Verify `styles.css` is in the same directory as `index.html`
- Check for typos in the filename
- Clear browser cache

**JavaScript not working?**
- Verify `script.js` is in the same directory as `index.html`
- Open browser console to check for errors
