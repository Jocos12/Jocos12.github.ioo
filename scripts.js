document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Get the target section's ID from the data-section attribute
            const targetSectionId = link.getAttribute("data-section");

            // Hide all sections
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Display the target section
            const targetSection = document.getElementById(targetSectionId);
            targetSection.style.display = "block";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "photo/cours5.jpg",
        "photo/Cours1.jpg",
        "photo/cours12.jpg",
        "photo/cours10.jpg",
        "photo/cours6.jpg",
        "photo/cours8.jpg",
        "photo/cours7.jpg",
        "photo/cours3.jpg"
    ];
    const images = document.querySelectorAll('.image-carousel img');
    let currentIndex = 0;

    function showImage(index) {
        images[index].style.opacity = '1';
    }

    function hideImage(index) {
        images[index].style.opacity = '0';
    }

    function changeImage() {
        hideImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Preload images
    for (let i = 0; i < images.length; i++) {
        images[i].src = imagePaths[i];
    }

    // Initial call to show the first image
    showImage(currentIndex);

    // Set interval to change the image every 4 seconds
    setInterval(changeImage, 4000);
});





// const searchBtn = document.getElementById("searchBtn");
// const closeBtn = document.getElementById("closeBtn");
// const searchBox = document.getElementById("searchBox");

// // Toggle search box visibility when the search icon is clicked
// searchBtn.addEventListener("click", function () {
//     searchBox.style.display = "block";
// });

// // Close the search box when the close icon is clicked
// closeBtn.addEventListener("click", function () {
//     searchBox.style.display = "none";
// });








// JavaScript code to handle the image gallery and enlargement
const imageSources = [
  "photo/G1.png",
  "photo/G10.png",
  "photo/G11.png",
  "photo/G11.png",
  // Add more image URLs here
  "photo/G12.png",
  "photo/G2.png",
  "photo/G3.png",
  "photo/G4.png",
  "photo/G5.png",
  "photo/G6.png",
  "Photo/G7.png",
  "photo/G8.png",
  "image/img409.jpg",
  "image/img36.jpg",
  "image/img4.jpg",
  "image/img44.jpg",
  "image/img52.jpg",
  "image/img53.jpg",
  "image/img57.jpg",
  "image/img63.jpg",
  "image/img64.jpg",
  "image/img69.jpg",
  "image/img65.jpg",
  "image/img7.jpg",
];

let currentImageIndex = 0;

function enlargeImage(src) {
  const enlargedImage = document.getElementById('enlarged-image');
  const enlargedContainer = document.getElementById('enlarged-image-container');

  enlargedImage.src = src;
  enlargedImage.style.maxWidth = '70%'; // Adjust the maximum width
  enlargedImage.style.maxHeight = '70%';
  enlargedContainer.style.display = 'flex';
}

function closeImage() {
  const enlargedContainer = document.getElementById('enlarged-image-container');
  enlargedContainer.style.display = 'none';
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
  const prevImageSrc = imageSources[currentImageIndex];
  enlargeImage(prevImageSrc);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  const nextImageSrc = imageSources[currentImageIndex];
  enlargeImage(nextImageSrc);
}

// Add event listeners to open the image modal
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    const clickedImageSrc = imageSources[currentImageIndex];
    enlargeImage(clickedImageSrc);
  });
});

// Add event listeners for the navigation buttons
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);








