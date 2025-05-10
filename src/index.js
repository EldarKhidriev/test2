import './styles/main.scss';

const modal = document.getElementById('modal');
  const openModalButtons = document.querySelectorAll('.openModal');
  const closeModal = document.getElementById('closeModal') || modal.querySelector('.modal__close');
  const modalOverlay = document.getElementById('modalOverlay');


  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.add('modal--active');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  modalOverlay.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });


  const consentCheckbox = document.getElementById('consent');
  const submitBtn = document.getElementById('submitBtn');

 
  submitBtn.disabled = true;

  consentCheckbox.addEventListener('change', function () {
    submitBtn.disabled = !this.checked;
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const consentError = document.getElementById('consentError');

    let isValid = true;

    // Имя
    if (nameInput.value.trim().length < 2) {
      nameError.textContent = 'Введите имя (минимум 2 символа)';
      nameError.style.display = 'block';
      nameInput.classList.add('modal__input--invalid');
      isValid = false;
    } else {
      nameError.textContent = '';
      nameError.style.display = 'none';
      nameInput.classList.remove('modal__input--invalid');
    }

    // Телефон
    const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
      phoneError.textContent = 'Введите корректный номер';
      phoneError.style.display = 'block';
      phoneInput.classList.add('modal__input--invalid');
      isValid = false;
    } else {
      phoneError.textContent = '';
      phoneError.style.display = 'none';
      phoneInput.classList.remove('modal__input--invalid');
    }

    // Согласие
    if (!consentCheckbox.checked) {
      consentError.textContent = 'Необходимо согласие на обработку данных';
      consentError.style.display = 'block';
      isValid = false;
    } else {
      consentError.textContent = '';
      consentError.style.display = 'none';
    }

    if (isValid) {
      alert('Заявка отправлена!');
      this.reset();
      submitBtn.disabled = true; 
      modal.classList.remove('modal--active');
    }
  });

  window.onload = function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop: false,
        grabCursor: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        initialSlide: 0, 
    });
};


const video = document.getElementById('video');
const overlay = document.getElementById('videoOverlay');

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.play();
});


// Маска для телефона в формате +X (XXX) XXX-XXXX
document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#phone");

  phoneInput.addEventListener("input", function (e) {
    let inputValue = e.target.value.replace(/\D/g, ""); 


    if (inputValue.length > 0 && inputValue[0] !== "+") {
      inputValue = `+${inputValue}`;
    }

    if (inputValue.length <= 2) {
      inputValue = `+${inputValue}`;
    } else if (inputValue.length <= 5) {
      inputValue = `+${inputValue.slice(1, 2)} (${inputValue.slice(2)}`;
    } else if (inputValue.length <= 8) {
      inputValue = `+${inputValue.slice(1, 2)} (${inputValue.slice(2, 5)}) ${inputValue.slice(5)}`;
    } else if (inputValue.length <= 12) {
      inputValue = `+${inputValue.slice(1, 2)} (${inputValue.slice(2, 5)}) ${inputValue.slice(5, 8)}-${inputValue.slice(8)}`;
    } else {
      inputValue = `+${inputValue.slice(1, 2)} (${inputValue.slice(2, 5)}) ${inputValue.slice(5, 8)}-${inputValue.slice(8, 12)}-${inputValue.slice(12, 15)}`;
    }


    if (inputValue.length > 16) {
      inputValue = inputValue.slice(0, 17);
    }

    e.target.value = inputValue; 
  });


  const contactForm = document.querySelector("#contactForm");
  const submitButton = document.querySelector("#submitBtn");

  contactForm.addEventListener("input", function () {
    const isValid = contactForm.checkValidity();
    submitButton.disabled = !isValid;
  });
});