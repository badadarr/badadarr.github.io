# 🎨 Portfolio CMS Setup Guide

## 🚀 Quick Start

Your portfolio now has a CMS! You can edit content without touching code.

### Access Admin Panel
1. Push all changes to GitHub
2. Visit: `https://badadarr.github.io/admin`
3. Click "Login with GitHub"
4. Authorize the app
5. Start editing! 🎉

## 📝 What You Can Edit

### 1. **Personal Info**
- Name, title, bio
- Email, phone, social links
- Profile image
- CV file

### 2. **About Stats**
- Years of experience
- Projects completed
- Technologies mastered

### 3. **Experience**
- Add/edit/delete work experience
- Position, company, duration
- Achievements list
- Custom icons

### 4. **Portfolio Projects**
- Add/edit/delete projects
- Upload project images
- Add tags
- Reorder projects

### 5. **Tech Stack**
- Add/edit technologies
- Categorize by type
- Custom icons
- Reorder items

## 🔧 How It Works

1. **Edit via UI** → Changes saved to JSON files in `/data` folder
2. **Auto Commit** → CMS commits changes to GitHub
3. **Auto Deploy** → GitHub Pages automatically updates your site

## 📁 File Structure

```
badadarr.github.io/
├── admin/
│   ├── index.html          # CMS admin panel
│   └── config.yml          # CMS configuration
├── data/
│   ├── personal.json       # Your personal info
│   ├── stats.json          # About stats
│   ├── experience/         # Work experience files
│   ├── projects/           # Portfolio projects
│   └── tech/               # Tech stack items
```

## 🎯 Next Steps

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add CMS setup"
   git push origin main
   ```

2. **Enable GitHub OAuth:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Create new OAuth App
   - Homepage URL: `https://badadarr.github.io`
   - Callback URL: `https://api.netlify.com/auth/done`
   - Copy Client ID to `admin/config.yml`

3. **Access Admin:**
   - Visit `https://badadarr.github.io/admin`
   - Login with GitHub
   - Start editing!

## 💡 Tips

- **Preview before publish** - CMS shows preview of changes
- **Drag to reorder** - Use order field to sort items
- **Upload images** - Drag & drop images directly in CMS
- **Rich text editor** - Format text with markdown
- **Auto save** - Changes saved automatically

## 🔒 Security

- Only you can access admin (GitHub authentication)
- All changes tracked in Git history
- Easy to revert if needed

## 📚 Documentation

- [Decap CMS Docs](https://decapcms.org/docs/)
- [GitHub Pages Docs](https://docs.github.com/pages)

---

**Need help?** Check the documentation or create an issue on GitHub.
