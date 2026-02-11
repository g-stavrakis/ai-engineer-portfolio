# 🚀 AI Engineer Portfolio Template

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This template is designed specifically for AI Engineers and Data Scientists to showcase their work experience, projects, and articles in a beautiful, professional format.

Porfolio Website: https://g-stavrakis.github.io/ai-engineer-portfolio/

## ✨ Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Easy Customization**: Configure all content through JSON files
- **Tech Stack Showcase**: Display your technical skills with customizable icons
- **Project Gallery**: Showcase your AI/ML projects with images and descriptions
- **Work Experience**: Highlight your professional journey
- **Articles Section**: Share your technical writing and publications
- **Mobile Responsive**: Looks great on all devices
- **GitHub Pages Ready**: Easy deployment with included scripts

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Tailwind CSS Animate
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Lottie React
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-engineer-portfolio.git
cd ai-engineer-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Customize Your Content

Edit the JSON files in `src/data/` to personalize your portfolio:

- `home.json` - Personal info, about section, and navigation
- `work.json` - Work experience and freelancing
- `projects.json` - Your AI/ML projects
- `articles.json` - Your published articles and blog posts

### 4. Add Your Images

Place your images in `src/assets/images/` and update the image references in the JSON files.

### 5. Update Package Configuration

Edit `package.json` to update:
- `name`: Your project name
- `homepage`: Your GitHub Pages URL (format: `https://your-username.github.io/repo-name`)

### 6. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 7. Deploy to GitHub Pages

```bash
npm run deploy
```

## 📝 Configuration Guide

### Home Page (`src/data/home.json`)

```json
{
  "intro": {
    "avatar": "your-avatar.png",
    "headline": "Your compelling headline",
    "tagline": "Your tagline"
  },
  "navigation": [
    {
      "label": "Work Experience",
      "desc": "Description of work section",
      "to": "/work",
      "bg": "bg-cyan-50",
      "border": "border-cyan-100",
      "iconBg": "bg-cyan-100",
      "tags": [
        { "label": "Work", "color": "bg-cyan-200 text-cyan-900" }
      ],
      "phoneImg": "phone-work.png"
    }
  ],
  "about": {
    "image": "your-image.jpg",
    "headline": "About Me",
    "subheadline": "Your greeting",
    "bio": "Your bio text with \n for line breaks"
  },
  "contact": {
    "headline": "Your contact headline",
    "email": "your-email@example.com",
    "location": "Your location"
  }
}
```

### Work Experience (`src/data/work.json`)

```json
[
  {
    "type": "work",
    "title": "Your Job Title",
    "company": "Company Name",
    "tech": ["python", "tensorflow", "git"],
    "logo": "company-logo.png",
    "dates": "Jan 2023 - Present",
    "bullets": [
      "Your achievement 1",
      "Your achievement 2"
    ]
  }
]
```

### Projects (`src/data/projects.json`)

```json
[
  {
    "title": "Project Name",
    "images": ["project-image1.png", "project-image2.png"],
    "description": "Detailed project description",
    "tech": ["python", "tensorflow", "streamlit"],
    "tags": ["Machine Learning", "NLP"],
    "github": "https://github.com/your-username/project-repo"
  }
]
```

### Articles (`src/data/articles.json`)

```json
[
  {
    "title": "Article Title",
    "image": "article-image.png",
    "publisher": "Publication Name",
    "date": "2024-01-15",
    "summary": "Brief article summary",
    "tags": ["AI", "Machine Learning"],
    "url": "https://medium.com/your-article-url"
  }
]
```

## 🎨 Customization Options

### Colors and Styling

The template uses Tailwind CSS classes for styling. You can customize colors by modifying the color classes in the JSON files:

- `bg-{color}-{shade}` for backgrounds
- `border-{color}-{shade}` for borders
- `text-{color}-{shade}` for text colors

### Tech Icons

Available tech icons (place in `src/assets/icons/`):
- `python.svg`, `tensorflow.svg`, `pytorch.svg`
- `git.svg`, `github.svg`, `docker.svg`
- `openai.svg`, `huggingface.svg`, `langchain.svg`
- `azure.svg`, `aws.svg`, `gcp.svg`
- And many more...

### Adding New Sections

To add new sections, you can:
1. Create new JSON files in `src/data/`
2. Add new page components in `src/pages/`
3. Update the navigation in `home.json`
4. Add routes in `App.tsx`

## 📱 Mobile Optimization

The template is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Smooth scrolling and animations

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Update homepage URL** in `package.json`:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Other Platforms

The built files in the `dist/` folder can be deployed to:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### Project Structure

```
src/
├── components/     # Reusable UI components
├── data/          # JSON configuration files
├── pages/         # Page components
├── assets/        # Images and icons
├── lib/           # Utility functions
└── App.tsx        # Main app component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Lottie](https://lottiefiles.com/)

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.

---

**Happy coding! 🎉**
