// Define images for each category
const galleryData = {
  cupcakes: [
    "images/Capcake1.jpg",
    "images/Capcake2.jpg"
  ],
  birthday: [
    "images/Cake.jpg",
    "images/Capcake2.jpg"
  ],
  wedding: [
    "images/Capcake1.jpg",
    "images/Cake.jpg"
  ]
};

// Get all images
function getAllImages() {
  return [
    ...galleryData.cupcakes,
    ...galleryData.birthday,
    ...galleryData.wedding
  ];
}

function showGallery(category, btn) {
  // Activate clicked tab
  document.querySelectorAll('.gallery-tab').forEach(tab => tab.classList.remove('active'));
  btn.classList.add('active');

  // Update title
  const titles = {
    all: "All Cakes",
    cupcakes: "Cupcakes",
    birthday: "Birthday Cakes",
    wedding: "Wedding Cakes"
  };
  document.getElementById('section-title').textContent = titles[category] || "Gallery";

  // Get images
  const images = category === 'all' ? getAllImages() : galleryData[category] || [];

  // Render
  const galleryDiv = document.getElementById('gallery-images');
  galleryDiv.innerHTML = '';

  if (images.length === 0) {
    galleryDiv.innerHTML = `<p>No ${titles[category].toLowerCase()} to display.</p>`;
  } else {
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'gallery-img';
      img.alt = titles[category];
      galleryDiv.appendChild(img);
    });
  }
}

// Load default
document.addEventListener('DOMContentLoaded', () => {
  showGallery('all', document.querySelector('.gallery-tab.active'));
});
