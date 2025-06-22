# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a dark theme, smooth animations, and interactive components.

## Features

- 🎨 Modern and clean design with dark theme
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 📊 Interactive skill bars
- 🎯 Project showcase with filtering
- 📝 Contact form
- 🔍 SEO optimized
- ⚡ Fast performance

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── projects/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

1. Update personal information:
   - Edit the content in each component file
   - Replace project images in the `public/projects` directory
   - Update social media links in the components

2. Modify styling:
   - Edit `tailwind.config.js` to change colors and theme
   - Modify `globals.css` for custom styles
   - Update component-specific styles in each component file

## Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js and set up the build configuration automatically

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 