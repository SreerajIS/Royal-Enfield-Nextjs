# Royal Enfield Hunter 350 - SEO Optimized Showcase

A modern, responsive Next.js application showcasing the Royal Enfield Hunter 350 motorcycle with advanced SEO optimization, 3D interactive elements, and immersive user experience.

## 🏍️ Project Overview

This project is a premium motorcycle showcase website featuring the Royal Enfield Hunter 350. It combines modern web technologies with stunning visual design to create an engaging, interactive experience that highlights the motorcycle's features, specifications, and brand heritage.

## ✨ Features

### 🎯 Core Features
- **Interactive 3D Motorcycle Display** - Hover effects with 3D transformations and modal view
- **Responsive Design** - Maintains 16:9 aspect ratio across all devices
- **Animated Elements** - Marquee text animations and smooth transitions
- **Product Gallery** - Showcase of motorcycle accessories (helmet, gloves, jacket)
- **Dynamic Navigation** - Interactive tabs and smooth scrolling

### 🔍 SEO Optimization
- **Next.js SEO Integration** - Using `next-seo` for comprehensive meta tags
- **Structured Data** - Schema.org markup for search engines
- **Dynamic Sitemap** - Auto-generated XML sitemap
- **Web Manifest** - PWA-ready with app manifest
- **Open Graph & Twitter Cards** - Social media optimization
- **Canonical URLs** - Proper URL structure for SEO

### 🎨 Design & UX
- **Custom Typography** - Multiple Google Fonts (Bebas Neue, Quicksand, Monomaniac One, Stencil)
- **Tailwind CSS** - Utility-first CSS framework with custom theming
- **Dark Theme** - Professional dark color scheme
- **Micro-interactions** - Hover states and smooth animations
- **Visual Hierarchy** - Clear content organization and layout

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **class-variance-authority** - Component variant management
- **clsx** - Conditional className utility

### SEO & Meta
- **next-seo 6.8.0** - Complete SEO solution
- **schema-dts** - TypeScript types for structured data
- **@next/third-parties** - Third-party script optimization

### Development Tools
- **ESLint 9** - Code linting and quality
- **Prettier** - Code formatting
- **Turbopack** - Fast bundler for development and build

## 📁 Project Structure

```
nextjs-seo-app/
├── public/
│   ├── images/                 # Motorcycle and product images
│   │   ├── bike.png           # Main motorcycle image
│   │   ├── logo-43d0f5.png    # Royal Enfield logo
│   │   ├── helmet.png         # Accessory images
│   │   ├── gloves-58db9b.png
│   │   └── jacket.png
│   ├── robots.txt             # Search engine directives
│   └── *.svg                  # Icon assets
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts
│   │   ├── page.tsx           # Main showcase page
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   ├── manifest.ts        # PWA manifest
│   │   └── globals.css        # Global styles and themes
│   ├── components/            # Reusable components (if any)
│   ├── constants/
│   │   └── config.ts          # Site configuration
│   ├── lib/
│   │   ├── seo.ts             # SEO utilities and defaults
│   │   └── utils.ts           # Utility functions
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── package.json               # Dependencies and scripts
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-seo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Available Scripts

| Script | Description | Command |
|--------|-------------|---------|
| `dev` | Start development server with Turbopack | `npm run dev` |
| `build` | Build production application | `npm run build` |
| `start` | Start production server | `npm run start` |
| `lint` | Run ESLint for code quality | `npm run lint` |

## 🎨 Design Features

### Typography
- **Bebas Neue** - Headers and navigation
- **Quicksand** - Body text and descriptions
- **Monomaniac One** - Large decorative letters
- **Stencil** - Vertical text elements
- **Times New Roman** - Marquee text

### Color Palette
- **Primary Background**: `#212121` (Dark gray)
- **Card Background**: `#000000` / `#0A0A0A` (Black variants)
- **Accent Orange**: `#FF9900` (Interactive elements)
- **Accent Red**: `#FF0000` (Call-to-action buttons)
- **Text Colors**: White, light gray gradients

### Interactive Elements
- **3D Motorcycle Image** - Scale, rotate, and shadow effects on hover
- **Modal View** - Full-screen 3D motorcycle display
- **Product Cards** - Hover animations for accessories
- **Animated Marquee** - Continuous scrolling brand text

## 🔧 Configuration

### SEO Configuration
Update `src/lib/seo.ts` to customize:
- Site title and description
- Domain and canonical URLs
- Open Graph images
- Social media handles

### Site Configuration
Modify `src/constants/config.ts` for:
- Site metadata
- Social links
- Brand information

### Styling
Customize `src/app/globals.css` for:
- Color schemes
- Typography
- Custom CSS variables

## 🌐 SEO Features

### Meta Tags
- Dynamic title and description generation
- Open Graph tags for social sharing
- Twitter Card optimization
- Viewport and theme-color meta tags

### Structured Data
- Website schema markup
- Product information structure
- Brand and organization data

### Performance
- Optimized images and fonts
- Efficient CSS and JavaScript
- Fast loading times

## 📱 Responsive Design

- **Desktop First** - Optimized for large screens
- **16:9 Aspect Ratio** - Consistent across devices
- **Responsive Typography** - Scales with viewport
- **Mobile Friendly** - Touch-optimized interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain configuration available

### Other Platforms
- **Netlify** - Static site deployment
- **AWS Amplify** - Full-stack deployment
- **Railway** - Container-based deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Royal Enfield Official](https://www.royalenfield.com)

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ for Royal Enfield enthusiasts**