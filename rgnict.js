document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById('imageGallery');
  const scrollBtn = document.getElementById("scrollTopBtn");
  const scrollAmount = 320;

  function scrollGallery(direction) {
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  setInterval(() => {
    const endReached = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth;
    gallery.scrollTo({ left: endReached ? 0 : gallery.scrollLeft + scrollAmount, behavior: 'smooth' });
  }, 3000);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.scrollGallery = scrollGallery;
});

/*director Image And thoughts*/
document.addEventListener("DOMContentLoaded", () => {
  const directorImg = document.querySelector('.director-img');
  const directorThought = document.querySelector('.director-thought');
  setTimeout(() => {
    if (directorImg) {
      directorImg.style.opacity = '1';
      directorImg.style.animation = 'slideDown 1s ease-out forwards';
    }

    if (directorThought) {
      directorThought.style.opacity = '1';
      directorThought.style.animation = 'slideRight 1.2s ease-out forwards';
    }
  }, 300);  
});



function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

/*director Image And thoughts*/



// === Image Popup Modal ===
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageLinks = Array.from(document.querySelectorAll('#imageGallery a'));
let currentImageIndex = 0;

imageLinks.forEach((link, index) => {
  const img = link.querySelector('img');
  img.addEventListener('click', function (e) {
    e.preventDefault(); // prevent new tab
    openImageModal(index);
  });
});

function openImageModal(index) {
  currentImageIndex = index;
  modalImage.src = imageLinks[currentImageIndex].href;
  imageModal.style.display = "block";
}

function closeImageModal() {
  imageModal.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = imageLinks.length - 1;
  if (currentImageIndex >= imageLinks.length) currentImageIndex = 0;
  modalImage.src = imageLinks[currentImageIndex].href;
}

window.addEventListener('click', function (e) {
  if (e.target === imageModal) {
    closeImageModal();
  }
});
  /*course popup*/
 function toggleDropdown(id) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(d => {
      if (d.id === id) {
        d.style.display = d.style.display === 'block' ? 'none' : 'block';
      } else {
        d.style.display = 'none';
      }
    });
    event.stopPropagation();
  }

  function openModal(id) {
    document.getElementById(id).style.display = "block";
    event.stopPropagation();
  }

  function closeModal(id){
    document.getElementById(id).style.display = "none";
  }

  window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    const dropdowns = document.querySelectorAll('.dropdown-content');
    let insideDropdown = false;
    dropdowns.forEach(d => {
      if (d.contains(event.target)) {
        insideDropdown = true;
      }
    });
    if (!insideDropdown && !event.target.classList.contains('course-title')) {
      dropdowns.forEach(d => d.style.display = 'none');
    }
  };



function showDropdown(id) {
  document.getElementById(id).style.display = 'block';
}

function hideDropdown(id) {
  document.getElementById(id).style.display = 'none';
}


   /*After pop up */
  document.addEventListener("DOMContentLoaded", () => {
  // === Image Popup Modal ===
  const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const imageLinks = Array.from(document.querySelectorAll('#imageGallery a'));
  let currentImageIndex = 0;

  imageLinks.forEach((link, index) => {
    const img = link.querySelector('img');
    img.addEventListener('click', function (e) {
      e.preventDefault(); // prevent new tab
      openImageModal(index);
    });
  });

  function openImageModal(index) {
    currentImageIndex = index;
    modalImage.src = imageLinks[currentImageIndex].href;
    imageModal.style.display = "block";
  }

  function closeImageModal() {
    imageModal.style.display = "none";
  }

  function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = imageLinks.length - 1;
    if (currentImageIndex >= imageLinks.length) currentImageIndex = 0;
    modalImage.src = imageLinks[currentImageIndex].href;
  }

  window.addEventListener('click', function (e) {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });

  // Attach to global for modal buttons
  window.closeImageModal = closeImageModal;
  window.changeImage = changeImage;
});


// for Form
document.addEventListener("DOMContentLoaded", () => {
  let currentCaptcha = "";

  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    currentCaptcha = code;
    const codeSpan = document.getElementById("captchaCode");
    if (codeSpan) codeSpan.innerText = code;
  }

  window.sendWhatsAppMessage = function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const userCaptcha = document.getElementById("captchaInput").value.trim().toUpperCase();
    const error = document.getElementById("captchaError");

    if (!name || !email || !message || !userCaptcha) {
      alert("Please fill out all fields.");
      return;
    }

    if (userCaptcha !== currentCaptcha) {
      error.style.display = "block";
      generateCaptcha();
      return;
    }

    error.style.display = "none";

    const phoneNumber = "9454680014"; // Replace with your number
    const text = `Hello, my name is *${name}*.\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  generateCaptcha();
});

//endForm