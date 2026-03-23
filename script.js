/* =========================================
   1. SLIDING COVER PHOTO (HERO SLIDER)
========================================= */
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const slideIntervalTime = 5000; // Change slide every 5 seconds

// Function to show a specific slide
function showSlide(index) {
    // Wrap around logic
    if (index >= totalSlides) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = totalSlides - 1;

    // 1. Remove 'active' class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 2. Add 'active' class to current slide and dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Function to move to the next slide automatically
function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

// Function to move to a slide manually via dots
function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    // Restart the timer so it doesn't immediately change after a manual click
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideIntervalTime);
}

// Start the automatic slider
let slideInterval = setInterval(nextSlide, slideIntervalTime);


/* =========================================
   2. BRANCH POPUP MODALS
========================================= */

// Function to open the correct popup
function openPopup(branchId) {
    const popupId = 'popup-' + branchId;
    const popup = document.getElementById(popupId);
    
    if (popup) {
        popup.classList.add('show');
        document.body.classList.add('modal-open'); // Prevent scrolling
    }
}

// Function to close the correct popup
function closePopup(branchId) {
    const popupId = 'popup-' + branchId;
    const popup = document.getElementById(popupId);
    
    if (popup) {
        popup.classList.remove('show');
        document.body.classList.remove('modal-open'); // Restore scrolling
    }
}

// Optional: Close popup if user clicks outside the content area
window.onclick = function(event) {
    if (event.target.classList.contains('popup-modal')) {
        event.target.classList.remove('show');
        document.body.classList.remove('modal-open');
    }
}