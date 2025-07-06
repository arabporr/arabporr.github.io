# Content Management Guide

This guide will help you keep your al-folio portfolio updated with your latest work and achievements.

## 📁 File Structure Overview

### Core Pages (`_pages/`)
- **`about.md`** - Your main landing page and biography
- **`cv.md`** - CV page (update `cv_pdf` to point to your latest CV)
- **`publications.md`** - Auto-generated from `_bibliography/papers.bib`
- **`projects.md`** - Showcases projects from `_projects/` folder
- **`blog.md`** - Lists all blog posts from `_posts/` folder

### Content Folders

#### 📰 News & Announcements (`_news/`)
Add new achievements, awards, or important updates:
```markdown
---
layout: post
date: YYYY-MM-DD HH:MM:SS-TIMEZONE
inline: true  # for short announcements
# inline: false  # for longer posts with details
related_posts: false
---

Your announcement text here.
```

#### 📝 Blog Posts (`_posts/`)
Share insights, research updates, or tutorials:
```markdown
---
layout: post
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS-TIMEZONE
description: Brief description
tags: tag1 tag2 tag3
categories: category1 category2
related_posts: false
---

Your post content in Markdown format.
```

#### 🚀 Projects (`_projects/`)
Showcase your research projects or software:
```markdown
---
layout: page
title: Project Name
description: Brief project description
img: assets/img/project_image.jpg  # optional
importance: 1  # determines display order
category: research  # or 'work', 'fun', etc.
related_publications: true  # shows related papers
---

Detailed project description in Markdown.
```

#### 📚 Publications (`_bibliography/papers.bib`)
Add your publications in BibTeX format:
```bibtex
@article{arabpour2024example,
  title={Your Paper Title},
  author={Arabpour, Reza and Others},
  journal={Journal Name},
  year={2024},
  selected={true}  # marks as selected paper for homepage
}
```

## 🔄 Regular Updates

### Monthly Tasks
- [ ] Add new publications to `papers.bib`
- [ ] Update CV PDF in `assets/pdf/`
- [ ] Add recent achievements to `_news/`
- [ ] Update project progress

### Quarterly Tasks
- [ ] Review and update your bio in `about.md`
- [ ] Add new blog posts about your research
- [ ] Update social media links in `_data/socials.yml`
- [ ] Review and update CV data in `_data/cv.yml`

### Annual Tasks
- [ ] Update profile picture (`assets/img/prof_pic.jpg`)
- [ ] Review all content for accuracy
- [ ] Archive old news items
- [ ] Update research interests and skills

## 🎨 Customization Tips

### Profile Picture
Replace `assets/img/prof_pic.jpg` with your professional photo.

### Project Images
- `assets/img/12.jpg` - Used for Project 1 (CPU-Efficient LLM Fine-Tuning)
- `assets/img/3.jpg` - Used for Project 2 (Volterra Processes)
- `assets/img/7.jpg` - Used for Project 3 (Financial Time Series)

You can replace these with relevant images for your projects.

### Color Scheme
Modify `_sass/_themes.scss` to change site colors.

### Social Media
Update `_data/socials.yml` with your social media handles:
```yaml
email: your.email@domain.com
github_username: yourusername
linkedin_username: yourusername
scholar_userid: yourscholarid
```

## 🚀 Deployment

Your site automatically deploys via GitHub Pages when you push to the main branch. Changes typically appear within 5-10 minutes.

### Local Development
To test changes locally:
```bash
bundle install
bundle exec jekyll serve
```

## 📋 Quick Checklist for New Content

### New Publication
1. Add BibTeX entry to `_bibliography/papers.bib`
2. Add `selected={true}` for homepage feature
3. Consider writing a blog post about the research

### New Project
1. Create new file in `_projects/` folder
2. Add project image to `assets/img/`
3. Link to GitHub repository if applicable
4. Mark related publications

### Achievement/News
1. Create new file in `_news/` with date format
2. Use `inline: true` for short updates
3. Use `inline: false` for detailed announcements

### Blog Post
1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add relevant tags and categories
3. Include images in `assets/img/` if needed

## 🔧 Troubleshooting

### Site Not Updating
- Check GitHub Actions tab for build errors
- Ensure file formats are correct
- Verify YAML front matter syntax

### Images Not Displaying
- Ensure images are in `assets/img/` folder
- Use correct relative paths
- Check file extensions and names

### Publications Not Showing
- Verify BibTeX syntax in `papers.bib`
- Check for missing commas or brackets
- Ensure author names are consistent

---

**Remember**: Keep your content professional, up-to-date, and relevant to your research interests. This portfolio is often the first impression potential collaborators, employers, or students will have of your work!
