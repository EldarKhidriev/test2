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