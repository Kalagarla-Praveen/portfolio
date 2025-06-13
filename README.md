# Eco AI Media Portfolio

A modern, responsive portfolio website showcasing sustainable digital solutions and AI-powered innovations. Built with React, TypeScript, Tailwind CSS, and Three.js.

## 🌟 Features

- **Interactive 3D Hero Section**: Powered by Three.js with animated geometric shapes
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Sustainable Focus**: Eco-friendly design principles and green technology showcase
- **Advanced Contact Form**: Comprehensive validation with real-time feedback
- **Modern Animations**: Smooth transitions and micro-interactions
- **Performance Optimized**: Fast loading with efficient asset management
- **Accessibility**: WCAG compliant with proper contrast ratios and navigation

## 🚀 Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom color system
- **3D Graphics**: Three.js for interactive visualizations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint, Hot Module Replacement

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Navigation with scroll-based styling
│   ├── Hero.tsx          # 3D interactive hero section
│   ├── About.tsx         # Skills and achievements showcase
│   ├── Projects.tsx      # Portfolio project gallery
│   ├── Contact.tsx       # Contact form with validation
│   └── Footer.tsx        # Footer with social links
├── App.tsx               # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Design System

### Color Palette
- **Primary**: Emerald green (#059669) for sustainability theme
- **Secondary**: Sage green (#84CC16) for natural accents
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success, warning, and error states

### Typography
- **Font**: Inter for modern, readable typography
- **Hierarchy**: Clear heading structure with proper spacing
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- **8px Grid System**: Consistent spacing throughout
- **Responsive Breakpoints**: Mobile-first approach
- **Container**: Max-width 7xl (1280px) with proper padding

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eco-ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Key Components

### Hero Section
- Interactive 3D model using Three.js
- Animated geometric shapes with orbital motion
- Responsive design with proper aspect ratios
- Call-to-action buttons with smooth scrolling

### Projects Showcase
- Featured projects with detailed cards
- Grid layout for additional projects
- External links for demos and source code
- Technology tags with consistent styling

### Contact Form
- Comprehensive validation (name, email, subject, message)
- Real-time error feedback
- Success/error state handling
- Professional styling with accessibility features

### Navigation
- Smooth scrolling between sections
- Active section highlighting
- Mobile-responsive hamburger menu
- Scroll-based header styling

## 🌱 Sustainability Features

- **Green Hosting Ready**: Optimized for carbon-neutral hosting
- **Performance Optimized**: Minimal bundle size and fast loading
- **Efficient Assets**: Compressed images and optimized resources
- **Energy Conscious**: Reduced computational overhead

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column grid
- **Desktop**: > 1024px - Full multi-column layout
- **Large Screens**: > 1280px - Centered with max-width

## 🔧 Customization

### Adding New Projects
1. Update the `projects` array in `src/components/Projects.tsx`
2. Include title, description, image URL, and technology tags
3. Set `featured: true` for highlighted projects

### Modifying 3D Scene
1. Edit `src/components/Hero.tsx`
2. Customize geometries, materials, and animations
3. Adjust camera position and lighting

### Updating Color Scheme
1. Modify `tailwind.config.js` color definitions
2. Update component classes to use new colors
3. Ensure accessibility compliance

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment with Git integration

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📊 Performance Optimizations

- **Code Splitting**: Dynamic imports for better loading
- **Image Optimization**: Compressed images from Pexels
- **Tree Shaking**: Unused code elimination
- **Bundle Analysis**: Optimized dependency management

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant ratios
- **Focus Management**: Visible focus indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper documentation
4. Test across different devices and browsers
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🌍 Environmental Impact

This portfolio is designed with environmental consciousness:
- Optimized for green hosting providers
- Minimal resource consumption
- Efficient rendering and animations
- Sustainable development practices

---

Built with 💚 for a sustainable digital future.