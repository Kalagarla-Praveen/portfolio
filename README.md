
# Portfolio Website

## 🌐 Live Demo
[https://portfolio-red-chi-87.vercel.app/](https://portfolio-red-chi-87.vercel.app/)

## 📌 Overview
This project is a responsive, single-page portfolio website built using **React**, **Vite**, and **Tailwind CSS**, with a mandatory **3D interactive model** integration. The site highlights professional skills, projects, and includes a functional contact form with validation.

Designed and developed as part of the **Eco AI Media Internship Assignment**.

## 🛠️ Technologies Used

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **3D Rendering**: Three.js
- **Form Validation**: Vanilla JavaScript with Regex
- **Deployment**: Vercel

## 🧩 Features

- Fully responsive layout
- Smooth scrolling navigation
- 3D spinning cube in Hero section (Three.js)
- About section with profile and intro
- Projects section with screenshots and links
- Contact form with validation
- Clean, modern UI with consistent structure
- Live deployed version

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
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports

````

## 🎨 Website Sections

### ✨ Hero Section
- Displays name, role, call-to-action button
- Integrates an animated 3D cube (Three.js)
- Provides strong visual impact on load

### 👤 About Section
- Short personal introduction
- Profile image

### 💼 Projects Section
- Showcases 2–3 sample projects with:
  - Title
  - Image
  - Description
  - GitHub/demo link

### 📬 Contact Section
- Contact form with:
  - Name
  - Email (with regex validation)
  - Message
- Displays error messages for invalid inputs

## 🧪 3D Integration

- **Library**: Three.js
- **Implementation**: 
  - A spinning cube rendered via WebGL inside the Hero section.
  - OrbitControls included for user interaction (zoom/rotate).
- **Responsiveness**: Canvas scales dynamically across devices.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation & Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kalagarla-Praveen/portfolio.git
   cd portfolio
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## 🌍 Deployment

* **Platform**: Vercel
* **Live URL**: [https://portfolio-red-chi-87.vercel.app/](https://portfolio-red-chi-87.vercel.app/)

## 🧪 Form Validation Details

* JavaScript-based client-side validation
* Regex used for email:

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

* Input fields must not be empty before submission

## 📹 (Optional) Walkthrough Video

> You can include a Loom or screen recording here to showcase:
>
> * Section navigation
> * 3D model interactions
> * Form validation
> * Mobile responsiveness

## 🧩 Accessibility & Best Practices

* Semantic HTML elements
* `alt` tags for all images
* Keyboard navigable form inputs and buttons
* Mobile-first responsive design
* Optimized performance with Vite

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Three.js](https://threejs.org/)
* [Vercel](https://vercel.com/)

---




