// main.js - SPA + mobile nav + gallery popup + contact -> WhatsApp
(function () {
  const WHATSAPP_NUMBER = "254735249622"; // no plus sign for wa.me

  /* ---------------- Pages HTML (injected) ---------------- */
  const pages = {
    home: `...`, // small placeholder; we'll inject via same content used earlier below
  };

  // Instead of repeating, load the same markup as in your supplied code.
  // For readability here I'll assign the actual page HTML used in your code:
  pages.home = `
    <section class="hero-section" style="background-image:url('Back.jpg')">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-title">BCakes</div>
        <div class="hero-subtitle">Creating memorable moments with our artisanal cakes and pastries</div>
        <div class="hero-buttons">
          <button class="hero-btn" onclick="loadPage('gallery')">View Our Cakes</button>
          <button class="hero-btn secondary" onclick="loadPage('contact')">Order Now</button>
        </div>
      </div>
    </section>
    <section class="section-why">
      <h2>Why Choose BCakes?</h2>
      <p>We combine different baking techniques with creative designs to deliver exceptional cakes for every occasion.</p>
      <div class="why-cards">
        <div class="why-card">
          <div class="why-icon">★</div>
          <div class="why-title">Premium Quality</div>
          <div>Using only the finest ingredients and recipes for exceptional taste.</div>
        </div>
        <div class="why-card">
          <div class="why-icon">🏅</div>
          <div class="why-title">Custom Designs</div>
          <div>Personalized cake designs tailored to your special moments and celebrations.</div>
        </div>
        <div class="why-card">
          <div class="why-icon">♡</div>
          <div class="why-title">Made with Love</div>
          <div>Every cake is crafted with passion and attention to detail for your perfect day.</div>
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="cta-title">Ready to Order Your Dream Cake?</div>
      <div class="cta-text">Contact us today to discuss your custom cake requirements and make your celebration special.</div>
      <div class="cta-buttons">
        <button class="cta-btn" onclick="loadPage('contact')">Contact</button>
        <button class="cta-btn secondary" onclick="loadPage('gallery')">Browse Gallery</button>
      </div>
    </section>
  `;

  pages.about = `<section class="about-hero">
  <h1 class="about-title">About BCakes</h1>
  <p class="about-subtitle">
    Founded with a passion for creating exceptional cakes and sweet memories, BCakes has been serving the community with artisanal baked goods for over a decade.
  </p>
</section>

<section class="about-story-mission">
  <div class="about-story">
    <h2>Our Story</h2>
    <p>
      BCakes began as a small family bakery with a simple mission: to create beautiful, delicious cakes that bring joy to life's special moments. What started in a home kitchen has grown into a beloved bakery that serves customers throughout the region.<br><br>
      Our master bakers combine different baking techniques with innovative designs, using only the finest ingredients to craft cakes that not only look stunning but taste incredible.
    </p>
  </div>
  <div class="about-mission">
    <h2>Our Mission</h2>
    <ul>
      <li>
        <span class="about-mission-icon">🧑‍🍳</span>
        <span>Create exceptional cakes using premium ingredients and artisanal techniques</span>
      </li>
      <li>
        <span class="about-mission-icon">🎯</span>
        <span>Provide personalized service that exceeds customer expectations</span>
      </li>
      <li>
        <span class="about-mission-icon">⏰</span>
        <span>Deliver fresh, beautiful cakes on time for every special occasion</span>
      </li>
    </ul>
  </div>
</section>

<section class="about-stats">
  <div class="about-stat">
    <span class="about-stat-number">10+</span>
    <span class="about-stat-label">Years of Experience</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-number">5000+</span>
    <span class="about-stat-label">Cakes Created</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-number">500+</span>
    <span class="about-stat-label">Happy Couples</span>
  </div>
  <div class="about-stat">
    <span class="about-stat-number">50+</span>
    <span class="about-stat-label">Cake Flavors</span>
  </div>
</section>

<section class="about-values">
  <h2 class="values-title">Our Values</h2>
  <div class="values-cards">
    <div class="values-card">
      <div class="values-icon">🧑‍🍳</div>
      <div class="values-label">Quality</div>
      <div class="values-desc">We never compromise on ingredients or craftsmanship, ensuring every cake meets our standards.</div>
    </div>
    <div class="values-card">
      <div class="values-icon">👥</div>
      <div class="values-label">Service</div>
      <div class="values-desc">Personal attention and care for every customer, making their experience special.</div>
    </div>
    <div class="values-card">
      <div class="values-icon">📍</div>
      <div class="values-label">Community</div>
      <div class="values-desc">Supporting local suppliers and being an active part of the community we serve.</div>
    </div>
  </div>
</section>`;    
  pages.services = `<section class="services-section">
      <h2>Our Services</h2>
      <p class="intro">From intimate celebrations to grand events, we offer a complete range of cake services to make your special moments even sweeter.</p>

      <div class="service-cards">
        <div class="service-card">
          <div class="icon">
            🎂
          </div>
          <h3>Custom Cakes<br><span>Starting from $15</span></h3>
          <p>Personalized cakes designed to your specifications for any occasion.</p>
          <ul>
            <li>Any size and shape</li>
            <li>Custom flavors</li>
            <li>Personalized decorations</li>
            <li>Professional consultation</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="icon">
            💍
          </div>
          <h3>Wedding Cakes<br><span>Starting from $20</span></h3>
          <p>Elegant wedding cakes that make your special day unforgettable.</p>
          <ul>
            <li>Multi-tier designs</li>
            <li>Fresh flowers</li>
            <li>Tasting sessions</li>
            <li>Setup service</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="process-section">
      <h2>Our Process</h2>
      <div class="process-steps">
        <div class="step">
          <div class="step-circle">1</div>
          <h4>Consultation</h4>
          <p>Discuss your vision, preferences, and requirements</p>
        </div>
        <div class="step">
          <div class="step-circle">2</div>
          <h4>Design</h4>
          <p>Create custom design and flavor recommendations</p>
        </div>
        <div class="step">
          <div class="step-circle">3</div>
          <h4>Creation</h4>
          <p>Handcraft your cake with premium ingredients</p>
        </div>
        <div class="step">
          <div class="step-circle">4</div>
          <h4>Delivery</h4>
          <p>Professional delivery and setup for your event</p>
        </div>
      </div>
    </section>`;  
  pages.gallery = `<main>
        <h1 class="gallery-title">Our Gallery</h1>
        <p class="gallery-desc">
          Explore our collection of beautiful cakes and discover the perfect design for your special occasion.
        </p>

        <div class="gallery-tabs">
          <button class="gallery-tab active" onclick="showGallery('all', this)">All Cakes</button>
          <button class="gallery-tab" onclick="showGallery('cupcakes', this)">Cupcakes</button>
          <button class="gallery-tab" onclick="showGallery('birthday', this)">Birthday Cakes</button>
          <button class="gallery-tab" onclick="showGallery('wedding', this)">Wedding Cakes</button>
          
        </div>

        <section class="gallery-section">
          <h2 class="gallery-section-title" id="section-title">All Cakes</h2>
          <div class="gallery-images" id="gallery-images"></div>
        </section>
      </main>
      <section class="custom-request">
  <h2>Don't See What You're Looking For?</h2>
  <p>
    We specialize in custom designs! Contact us to discuss your unique vision and let us
    create the perfect cake for your celebration.
  </p>
  <a 
    href="https://wa.me/254735249622" 
    target="_blank" 
    class="whatsapp-button"
    title="Contact us on WhatsApp"
  >
    Contact Us on WhatsApp
  </a>
</section>`;   

  pages.contact = `<main class="contact-main">
    <h1 class="contact-title">Contact Us</h1>
    <p class="contact-subtitle">
      Ready to order your dream cake? Get in touch with us to discuss your requirements<br>
      and receive a personalized quote.
    </p>
    <div class="contact-grid">
      <!-- Left: Contact Form -->
   <div class="contact-form-panel">
  <h2>Send Us a Message</h2>
  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
  <form class="contact-form" id="contactForm">
    <div class="form-row">
      <div class="form-group">
        <label>Full Name *</label>
        <input type="text" name="name" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <label>Email Address *</label>
        <input type="email" name="email" placeholder="you@email.com" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="e.g. +2547 123 456 789">
      </div>
      <div class="form-group">
        <label>Event Type</label>
        <input type="text" name="eventType" placeholder="Birthday, Wedding, etc.">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Event Date</label>
        <input type="date" name="eventDate">
      </div>
    </div>
    <div class="form-group">
      <label>Message *</label>
      <textarea name="message" rows="3" placeholder="Tell us about your dream cake - flavor preferences, design ideas, number of servings, budget, etc." required></textarea>
    </div>
    <button type="submit" class="contact-whatsapp-btn">Send Message via WhatsApp</button>
  </form>
</div>
      <!-- Center: Quick Contact -->
      <div class="contact-quick-panel">
        <h3 class="quick-title">Quick Contact</h3>
        <a href="https://wa.me/0735249622" target="_blank" class="quick-whatsapp-btn">
          <span class="whatsapp-icon">&#128241;</span> Message us on WhatsApp
        </a>
        <div class="quick-desc">Get instant responses to your cake inquiries</div>
      </div>
      <!-- Right: Business Info and FAQ -->
      <div class="contact-info-faq">
        <div class="contact-info">
          <h3>Business Information</h3>
          <div class="info-item"><span class="info-icon">&#127968;</span>
            <b>Address</b><br>
            Nakuru City<br>
            HOME<br>
            City, Kenya
          </div>
          <div class="info-item"><span class="info-icon">&#128222;</span>
            <b>Phone</b><br>
            (+254) 735249622
          </div>
          <div class="info-item"><span class="info-icon">&#128231;</span>
            <b>Email</b><br>
           <a href="https://mail.google.com" target="_blank">benasher2023@gmail.com</a>
          </div>
          <div class="info-item"><span class="info-icon">&#128337;</span>
            <b>Business Hours</b><br>
            Monday - Friday: 8:00 AM – 6:00 PM<br>
            Saturday: 9:00 AM – 5:00 PM<br>
            Sunday: 10:00 AM – 4:00 PM
          </div>
        </div>
        <div class="contact-faq">
          <h3>Frequently Asked Questions</h3>
          <p><b>How far in advance should I order?</b><br>
            We recommend ordering at least 1-2 weeks in advance, especially for wedding cakes and custom designs.
          </p>
          <p><b>Do you offer delivery?</b><br>
            Yes! We offer delivery and setup services within a 25-mile radius of our bakery.
          </p>
          <p><b>Can I schedule a tasting?</b><br>
            Absolutely! Contact us to schedule a tasting appointment for wedding cakes or large orders.
          </p>
        </div>
      </div>
    </div>
  </main>

  `;   

  

  /* ---------------- Small helper to inject pages ---------------- */
  const contentDiv = document.getElementById('main-content');

  window.loadPage = function(page) {
    // fall back to home if missing
    const html = pages[page] || pages.home;
    contentDiv.innerHTML = html;
    // after injection, wire page-specific behaviors:
    if (page === 'gallery') initGallery();
    if (page === 'contact') initContactForm();
    // close mobile nav when navigating
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveNav(page);
  };

  function setActiveNav(page) {
    document.querySelectorAll('.nav-item').forEach(link => {
      link.classList.toggle('active', (link.dataset.page === page));
    });
  }

  /* ---------------- Mobile nav toggling ---------------- */
  const menuBtn = document.getElementById('menu-toggle');
  const navList = document.getElementById('primary-nav');
  menuBtn?.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
    navList.setAttribute('aria-hidden', String(expanded));
  });

  function closeMobileNav() {
    menuBtn?.setAttribute('aria-expanded', 'false');
    navList?.classList.remove('show');
    navList?.setAttribute('aria-hidden', 'true');
  }

  // Nav item clicks (delegation)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('.nav-item');
    if (!a) return;
    e.preventDefault();
    const page = a.dataset.page;
    loadPage(page);
  });

  // logo click -> home
  document.getElementById('logo-home')?.addEventListener('click', (e) => {
    e.preventDefault();
    loadPage('home');
  });

  /* ---------------- Gallery logic ---------------- */
  const galleryImages = {
    cupcakes: ["images/Capcake1.jpg","images/Capcake2.jpg"],
    birthday: ["images/Cake.jpg","images/Capcake2.jpg"],
    wedding:  ["images/Capcake1.jpg","images/Cake.jpg"]
  };

  function getAllImages() {
    return [...new Set([].concat(galleryImages.cupcakes, galleryImages.birthday, galleryImages.wedding))];
  }

  function initGallery() {
    // render initial gallery
    showGallery('all', document.querySelector('.gallery-tab.active') || null);
    // attach click-to-open for images
    document.getElementById('gallery-images')?.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) return;
      openPopup([img.src]);
    });
  }

  window.showGallery = function(category, btn) {
    // set active tab
    document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const titles = { all: 'All Cakes', cupcakes: 'Cupcakes', birthday: 'Birthday Cakes', wedding: 'Wedding Cakes' };
    const titleText = titles[category] || 'Gallery';
    const sectionTitle = document.getElementById('section-title');
    if (sectionTitle) sectionTitle.textContent = titleText;

    const images = category === 'all' ? getAllImages() : (galleryImages[category] || []);
    const galleryDiv = document.getElementById('gallery-images');
    if (!galleryDiv) return;

    galleryDiv.innerHTML = images.length
      ? images.map(src => `<img data-src="${src}" src="${src}" loading="lazy" alt="Cake" class="gallery-img">`).join('')
      : `<p>No ${titleText.toLowerCase()} to display.</p>`;
  };

  /* ---------------- Popup (gallery) ---------------- */
  const popup = document.getElementById('popup');
  const popupClose = document.getElementById('popup-close');
  const popupImages = document.getElementById('popup-images');

  function openPopup(srcList) {
    if (!popup) return;
    popupImages.innerHTML = srcList.map(s => `<img src="${s}" alt="Cake">`).join('');
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
    popupClose?.focus();
  }
  function closePopup() {
    if (!popup) return;
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupImages.innerHTML = '';
  }
  popup?.addEventListener('click', (e) => { if (e.target === popup) closePopup(); });
  popupClose?.addEventListener('click', closePopup);
  window.showPopup = function(type) {
    const imgs = galleryImages[type] || [];
    if (imgs.length) openPopup(imgs);
  };

  /* ---------------- Contact form -> WhatsApp ---------------- */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name') || '';
      const email = fd.get('email') || '';
      const phone = fd.get('phone') || '';
      const eventType = fd.get('eventType') || '';
      const eventDate = fd.get('eventDate') || '';
      const message = fd.get('message') || '';

      let msg = `Hello!%0A%0AMy name is ${encodeURIComponent(name)}.%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AEvent Type: ${encodeURIComponent(eventType)}%0AEvent Date: ${encodeURIComponent(eventDate)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
      // Use wa.me link without + sign
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener');
    });
  }

  /* ---------------- Lazy-load small enhancement (optional) ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          const data = img.getAttribute('data-src');
          if (data) img.src = data;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        });
      }, { rootMargin: '200px' });
      document.querySelectorAll('img[data-src]').forEach(img => io.observe(img));
    }
  });

  /* ---------------- Init: load home ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    // if you filled pages.about/services/gallery/contact above with the full HTML, use them.
    // For now, fallback load home:
    if (!pages.about.includes('...')) {
      loadPage('home');
    } else {
      // If you pasted content into pages.about etc, uncomment this:
      loadPage('home');
    }
  });
})();
