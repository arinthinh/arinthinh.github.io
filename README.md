# Portfolio Website - Thinh PP

A modern, responsive portfolio website showcasing my skills, experience, and projects as a software developer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Animated skill bars, counters, and scroll effects
- **Project Showcase**: Grid layout for displaying portfolio projects
- **Contact Form**: Functional contact form for inquiries
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Navigation**: Hamburger menu for mobile devices

## Sections

1. **Hero Section**: Introduction with name, title, and social links
2. **About**: Personal information and statistics
3. **Skills**: Technical skills with progress bars and technology icons
4. **Experience**: Professional timeline with job history
5. **Projects**: Portfolio of completed projects with descriptions
6. **Contact**: Contact information and message form

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, and Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Setup Instructions

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Customize** the content:
   - Update personal information in `index.html`
   - Modify colors in `styles.css` (CSS variables in `:root`)
   - Add your own project images and links
   - Update social media links

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors */
}
```

### Adding Projects

Add new project cards in the projects section of `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Tech1</span>
            <span class="tag">Tech2</span>
        </div>
    </div>
</div>
```

### Updating Skills

Modify the skill items in `index.html` and adjust the `data-progress` attribute:

```html
<div class="skill-item">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

- Lazy loading for images
- Debounced scroll events
- CSS animations using GPU acceleration
- Minimal external dependencies

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Testimonials slider
- [ ] Backend integration for contact form
- [ ] Multilingual support
- [ ] Accessibility improvements

## Contact Form Setup

To make the contact form functional, you'll need to:

1. Set up a backend API endpoint
2. Replace the setTimeout in `script.js` with actual API call
3. Add proper form validation
4. Implement email service (e.g., SendGrid, EmailJS)

Example API integration:

```javascript
try {
    const response = await fetch('https://your-api.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    
    if (response.ok) {
        // Success handling
    }
} catch (error) {
    // Error handling
}
```

## Deployment

You can deploy this portfolio website to:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with continuous integration
- **Vercel**: Fast and optimized hosting
- **Firebase Hosting**: Google's hosting solution

### GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select your branch and save
4. Your site will be available at `https://yourusername.github.io/repository-name`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Thinh PP**
- GitHub: [@thinhpp](https://github.com/thinhpp)
- LinkedIn: [thinhpp](https://linkedin.com/in/thinhpp)
- Email: thinh.pp@example.com

## Acknowledgments

- Font Awesome for icons
- Placeholder images from placeholder.com (replace with your own)
- Inspiration from modern portfolio designs

---

**Note**: Remember to update all placeholder content, links, and images with your actual information before deploying!
