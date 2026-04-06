// Data for informational blog posts
const posts = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    excerpt: "Exploring the evolution of framework-less development, WebAssembly, and the rise of AI-assisted coding in modern web standards.",
    date: "April 5, 2026",
    category: "Technology",
    image: "https://picsum.photos/seed/tech/600/400"
  },
  {
    id: 2,
    title: "Mastering Modern CSS: Beyond Flexbox",
    excerpt: "A deep dive into Container Queries, Cascade Layers, and the power of the :has() selector for building resilient, future-proof layouts.",
    date: "April 3, 2026",
    category: "Design",
    image: "https://picsum.photos/seed/design/600/400"
  },
  {
    id: 3,
    title: "The Impact of Minimalist Design on User UX",
    excerpt: "How reducing cognitive load and focusing on essential elements can create a more engaging and effective digital experience.",
    date: "April 1, 2026",
    category: "UX Research",
    image: "https://picsum.photos/seed/ux/600/400"
  },
  {
    id: 4,
    title: "WebAssembly: High Performance for Everyone",
    excerpt: "Why WASM is no longer just for complex simulations and how it's becoming a core part of the standard web platform.",
    date: "March 28, 2026",
    category: "Development",
    image: "https://picsum.photos/seed/wasm/600/400"
  }
];

// Blog Header Component
class BlogHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 70px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        header {
          max-width: 1100px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, oklch(65.57% 0.19 252.73), oklch(62.42% 0.19 14.93));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }
        nav ul {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        nav a {
          text-decoration: none;
          font-weight: 500;
          color: oklch(25% 0.02 250);
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        nav a:hover {
          color: oklch(65.57% 0.19 252.73);
        }
      </style>
      <header>
        <div class="logo">ProductBuilder.</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

// Blog Post Card Component
class BlogPostCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const post = JSON.parse(this.getAttribute('data-post'));
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          container-type: inline-size;
        }
        .card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .image {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          background: #f0f0f0;
        }
        .content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: oklch(65.57% 0.19 252.73);
          margin-bottom: 0.75rem;
        }
        h2 {
          font-size: 1.25rem;
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
          color: oklch(20% 0.02 250);
        }
        p {
          font-size: 0.95rem;
          color: oklch(45% 0.02 250);
          margin: 0 0 1.5rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.6;
        }
        .footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: oklch(60% 0.02 250);
        }
      </style>
      <div class="card">
        <img class="image" src="${post.image}" alt="${post.title}">
        <div class="content">
          <span class="category">${post.category}</span>
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
          <div class="footer">
            <span>${post.date}</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>
    `;
  }
}

// Blog Footer Component
class BlogFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 4rem 0 2rem 0;
          background: oklch(98.5% 0.01 250);
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .copyright {
          font-size: 0.9rem;
          color: oklch(45% 0.02 250);
        }
        .social {
          display: flex;
          gap: 1.5rem;
        }
        .social a {
          color: oklch(45% 0.02 250);
          text-decoration: none;
          font-size: 0.9rem;
        }
        .social a:hover {
          color: oklch(65.57% 0.19 252.73);
        }
      </style>
      <div class="footer-container">
        <div class="copyright">© 2026 ProductBuilder. All rights reserved.</div>
        <div class="social">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    `;
  }
}

// Define Custom Elements
customElements.define('blog-header', BlogHeader);
customElements.define('blog-post-card', BlogPostCard);
customElements.define('blog-footer', BlogFooter);

// Initialize Blog Feed
function initBlog() {
  const feed = document.getElementById('blog-feed');
  if (feed) {
    posts.forEach(post => {
      const card = document.createElement('blog-post-card');
      card.setAttribute('data-post', JSON.stringify(post));
      feed.appendChild(card);
    });
  }
}

// Run on load
window.addEventListener('DOMContentLoaded', initBlog);
