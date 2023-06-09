function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  document.getElementById('quoteForm').reset();
  document.getElementById('response-message').style.display = 'none';
}

function closeResponsePopup() {
  var responsePopup = document.getElementById('response-popup');
  responsePopup.style.display = 'none';
}

function submitForm(event) {
  event.preventDefault();

  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var companyName = document.getElementById("companyName").value;
  var enquiry = document.getElementById("enquiry").value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit_form.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        handleFormSubmissionResponse(xhr.responseText);
      } else {
        handleFormSubmissionResponse('error');
      }
    }
  };
  xhr.send('fullName=' + encodeURIComponent(fullName) +
    '&email=' + encodeURIComponent(email) +
    '&companyName=' + encodeURIComponent(companyName) +
    '&enquiry=' + encodeURIComponent(enquiry));

  closePopup();
}

function handleFormSubmissionResponse(response) {
  var responsePopup = document.getElementById('response-popup');
  var responseStatus = document.getElementById('response-status');

  if (response === 'success') {
    responseStatus.innerHTML = 'Your request has been submitted successfully. You will hear from us soon.';
    responseStatus.style.color = 'green';
  } else {
    responseStatus.innerHTML = 'Oops! There was an error submitting the form. Please try again.';
    responseStatus.style.color = 'red';
  }

  responsePopup.style.display = 'block';
}
















window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  if (window.scrollY === 0) {
    header.style.transform = "scale(1)";
  } else {
    header.style.transform = "scale(0.9)";
  }
});



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


