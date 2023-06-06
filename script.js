window.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const captions = document.querySelectorAll('.slide-caption');
  let currentSlide = 0;

  // Function to show slide and caption
  function showSlide(index) {
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    captions.forEach(function(caption) {
      caption.classList.remove('active');
    });

    slides[index].classList.add('active');
    captions[index].classList.add('active');
  }

  // Function to show next slide
  function showNextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  // Function to show previous slide
  function showPrevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  // Show the initial slide
  showSlide(currentSlide);

  // Auto slide to next slide every 10 seconds
  setInterval(function() {
    showNextSlide();
  }, 8000);
});




// Detect when the feature section is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function() {
  var aboutSection = document.getElementById('about');
  var aboutContent = document.querySelector('.about-content');
  var aboutPosition = aboutSection.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (aboutPosition < windowHeight / 1.5) {
    aboutSection.classList.add('inscription-visible');
  } else {
    aboutSection.classList.remove('inscription-visible');
  }
});


