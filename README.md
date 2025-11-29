# 🚀 Gautham Prabhu - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React, featuring dark/light theme toggle, smooth animations, and optimized performance.

**🌐 Live Demo:** [https://gauthammanuruprabhu.netlify.app](https://gauthammanuruprabhu.netlify.app)

---

## ✨ Key Features

### 🎨 Design & UX
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Dark/Light Theme**: Toggle between dark and light modes (persisted in localStorage)
- **Smooth Animations**: Particle effects and animated typewriter text
- **Performance Optimized**: Fast loading, lazy-loaded components

### 📱 Responsive Layout
- **Mobile (<640px)**: Optimized single-column layout with hamburger menu
- **Tablet (640px-1024px)**: 2-column grid layouts
- **Desktop (>1024px)**: Full multi-column layouts with advanced features

### 🧭 Navigation Features
- Sticky header with smooth scrolling
- Hash-link navigation for single-page experience
- Mobile hamburger menu
- Quick navigation to all sections

### 📂 Portfolio Sections
1. **Home/Landing** - Hero section with animated introduction
2. **About** - Personal bio and resume download
3. **Skills** - Tech stack with interactive carousel
4. **Projects** - Featured projects with GitHub/Live links
5. **Work Experience** - Detailed experience at Cisco, Ridecell, APT, Santanet
6. **Research** - Academic publications and research work
7. **Positions** - Leadership and volunteer positions
8. **Contact** - Social links and contact information

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18.2.0** - UI library
- **React Router v6** - Client-side routing
- **React DOM 18.2.0** - React rendering

### Styling & Animation
- **CSS3** - Custom component styles
- **Bootstrap 5.2.0** - Responsive grid system
- **Framer Motion** - Animation library (for future enhancements)
- **GSAP 3.11.0** - Animation library

### UI Components & Icons
- **React Bootstrap** - Bootstrap components
- **React Icons** - Icon library (Font Awesome, Bootstrap, Ant Design)
- **React Animated Cursor** - Custom cursor animation
- **React Slick** - Carousel component
- **Typewriter Effect** - Animated text effect

### Particles & Effects
- **React TSParticles** - Animated particle background
- **TSParticles** - Particle engine

### Development
- **Create React App** - Build tool
- **Prettier** - Code formatter
- **ESLint** - Code quality

### Deployment
- **Netlify** - Hosting & CI/CD

---

## 📋 Project Structure

```
PortfolioSite/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   ├── logo.png            # Favicon & logo
│   └── robots.txt          # SEO robots file
│
├── src/
│   ├── Components/
│   │   ├── About/          # About section
│   │   ├── Contact/        # Contact & social links
│   │   ├── Header/         # Navigation header
│   │   ├── Landing/        # Hero section
│   │   ├── Main/           # Main page with particle effects
│   │   ├── Positions/      # Leadership positions
│   │   ├── Projects/       # Featured projects
│   │   ├── ProjectsPage/   # All projects page
│   │   ├── Research/       # Research publications
│   │   ├── Skills/         # Skills carousel
│   │   ├── SkillsPage/     # Detailed skills
│   │   └── Work/           # Work experience
│   │
│   ├── WorkPages/
│   │   ├── APT/            # APT work details
│   │   ├── PEFO/           # PEFO work details
│   │   ├── Ridecell/       # Ridecell work details
│   │   └── Santanet/       # Santanet work details
│   │
│   ├── Assets/
│   │   ├── Skills/         # Technology logos
│   │   ├── Work/           # Company logos
│   │   └── *.png           # Profile images
│   │
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── App.jsx             # Main app component
│   └── package.json        # Dependencies
│
├── netlify.toml            # Netlify configuration
├── README.md               # This file
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v16+ 
- **npm** v8+ or **yarn**

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/GauthamPrabhuM/PortfolioSite.git
   cd PortfolioSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Opens http://localhost:3000 automatically

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Commands

```bash
npm start          # Start dev server with hot reload
npm run build      # Create production build
npm test           # Run tests
npm run format     # Format code with Prettier
npm run eject      # Eject from Create React App (irreversible)
```

---

## 🎨 Customization Guide

### Update Personal Information

#### 1. Header Navigation
Edit `src/Components/Header/Header.jsx`:
- Update navigation links
- Change logo images

#### 2. Landing Section
Edit `src/Components/Landing/Landing.jsx`:
- Update typewriter text
- Change hero image
- Modify tagline

#### 3. About Section
Edit `src/Components/About/About.jsx`:
- Update bio text
- Replace profile images (me.png, me2.png)
- Update resume link (change PDF file path)

#### 4. Projects
Edit `src/Components/Projects/Projects.jsx`:
- Add/remove project cards
- Update GitHub and live demo links
- Change project images

#### 5. Contact Section
Edit `src/Components/Contact/Contact.jsx`:
- Update social media links
- Change email address
- Add more contact methods

#### 6. Skills & Experience
Edit component files in:
- `src/Components/Skills/Skills.jsx` - Tech stack
- `src/Components/Work/Work.jsx` - Work history
- `src/WorkPages/*/` - Company-specific pages

### Change Theme Colors

Edit CSS files in component folders:
- `src/Components/*/ComponentName.css`

Look for color variables like:
```css
#lightid { /* Light mode styles */ }
background: linear-gradient(...); /* Gradients */
color: rgb(...); /* Text colors */
```

### Add New Pages/Sections

1. Create new component in `src/Components/NewSection/`
2. Create CSS file `NewSection.css`
3. Import component in `src/index.js`
4. Add route in `BrowserRouter`
5. Add navigation link in Header

---

## 📱 Responsive Design Details

### Mobile Optimization (< 640px)
✓ Single column layout
✓ Hamburger menu navigation
✓ Large touch targets
✓ Optimized font sizes
✓ Stacked cards and grids

### Tablet Optimization (640px - 1024px)
✓ 2-column grids
✓ Balanced spacing
✓ Medium font sizes
✓ Optimized padding

### Desktop Features (> 1024px)
✓ Multi-column layouts
✓ Hover effects
✓ Advanced animations
✓ Full-featured experience

---

## 🚀 Deployment

### Netlify (Recommended)

The site is pre-configured for Netlify deployment.

**Configuration**: `netlify.toml`

```toml
[build]
  command = "CI=false npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Automatic Deployment**:
1. Connect GitHub to Netlify
2. Select this repository
3. Netlify automatically deploys on push to main

**Manual Deployment**:
```bash
npm run build
# Upload 'build' folder to Netlify
```

### Other Platforms

**Vercel**:
```bash
npm install -g vercel
vercel
```

**GitHub Pages**:
```bash
# Add to package.json: "homepage": "https://username.github.io/PortfolioSite"
npm run build
# Push 'build' folder to gh-pages branch
```

---

## 🔧 Environment Variables

Create `.env` file (optional):

```
REACT_APP_SITE_NAME=Gautham Prabhu
REACT_APP_SITE_DESCRIPTION=Full Stack Developer Portfolio
REACT_APP_GITHUB_URL=https://github.com/GauthamPrabhuM
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/gautham-prabhu-5b2342192
```

Access in components:
```javascript
const siteName = process.env.REACT_APP_SITE_NAME;
```

---

## 📊 Performance Optimization

### Code Splitting
- Components split by route
- Lazy loading for better initial load

### Image Optimization
- Compressed PNG/JPG images
- Responsive image sizing
- WebP support ready

### Bundle Size
- ~150KB gzipped (with deps)
- Optimized CSS and JavaScript
- Minified production build

### Metrics
- **Lighthouse Score**: 90+
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1

---

## 📝 SEO Optimization

### Meta Tags
Located in `public/index.html`:
- Title: Clear, descriptive
- Description: Concise summary
- Keywords: Relevant search terms
- Author: Personal attribution

### Best Practices
✓ Semantic HTML structure
✓ Proper heading hierarchy (H1 → H2 → H3)
✓ Alt text on images
✓ Mobile-friendly design
✓ Fast loading performance
✓ Structured data (Schema.org)

### Social Sharing (Optional)
Add Open Graph tags to `public/index.html`:
```html
<meta property="og:title" content="Gautham Prabhu - Portfolio" />
<meta property="og:description" content="Full Stack Developer" />
<meta property="og:image" content="URL_TO_IMAGE" />
<meta property="og:url" content="https://gauthammanuruprabhu.netlify.app" />
```

---

## 🐛 Troubleshooting

### Build Issues

**Port 3000 already in use**
```bash
PORT=3001 npm start
```

**Dependencies conflict**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not loading**
- Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- Rebuild: `npm run build`

### Deployment Issues

**Netlify build fails**
- Check `netlify.toml` configuration
- Verify Node version: `node --version`
- Check build logs in Netlify dashboard

**Routes not working**
- Ensure `netlify.toml` has redirect configuration
- All routes must redirect to `/index.html`

**Images not showing**
- Check image paths are correct
- Verify images exist in `src/Assets/`
- Clear browser cache

---

## 🤝 Contributing & Customization

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Modify colors, fonts, and layout
- Add/remove sections
- Update content
- Deploy to your own domain

### Steps to Customize

1. **Fork** the repository
2. **Update** personal information
3. **Replace** images and assets
4. **Modify** colors and branding
5. **Test** locally with `npm start`
6. **Deploy** to your platform

---

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

See LICENSE file for details.

---

## 📧 Contact

**Gautham Prabhu M**
- **Email**: [gauthamprabhu9@gmail.com](mailto:gauthamprabhu9@gmail.com)
- **LinkedIn**: [gautham-prabhu-5b2342192](https://www.linkedin.com/in/gautham-prabhu-5b2342192/)
- **GitHub**: [GauthamPrabhuM](https://github.com/GauthamPrabhuM)
- **Instagram**: [@gotham424242](https://instagram.com/gotham424242)

---

## 🙏 Credits & Acknowledgments

### Original Template
Inspired by [Suryaansh's Portfolio](https://github.com/suryaansh2002/Portfolio_3.0)

### Libraries & Tools
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [GSAP](https://gsap.com/)
- [TSParticles](https://tsparticles.js.org/)
- [Netlify](https://www.netlify.com/)

### Community
Thanks to the open-source community for amazing tools and libraries!

---

## 📈 Future Roadmap

- [ ] Blog section with markdown support
- [ ] Contact form with email notifications
- [ ] Testimonials section
- [ ] Dark mode preference detection
- [ ] PWA offline support
- [ ] Google Analytics integration
- [ ] More interactive project showcase
- [ ] Video testimonials
- [ ] Client testimonials section
- [ ] Newsletter signup

---

## 📞 Support

Having issues? 
1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/GauthamPrabhuM/PortfolioSite/issues)
3. Create a new issue with detailed information

---

**Last Updated**: November 2025 | Version 3.0 | [Website](https://gauthammanuruprabhu.netlify.app)

