export const modalCloseOptions = {
    onBind(instance) {
      this.handleCallback = onClose.bind(instance);
      document.addEventListener('keydown', this.handleCallback);
    },
  
    onBackdropClick() {
      document.addEventListener('click', this.handleCallback);
    },
  
    onRemoveListener() {
      document.removeEventListener('keydown', this.handleCallback);
      document.removeEventListener('click', this.handleCallback);
    },
  };
  
  function onClose(e) {
    const isCloseAction =
      e.code === 'Escape' ||
      e.target === this ||
      e.target.closest('button[data-modal-close]');
  
    if (isCloseAction) {
      this.classList.remove('is-open');
      modalCloseOptions.onRemoveListener();
      scrollOptions.enableScroll();
    }
    if (e.code === 'Tab') {
      return false;
    }
  }
  
  export const scrollOptions = {
  
    disableScroll() {
      document.body.style.overflow = 'hidden';
    },
  
    enableScroll() {
      document.body.style.overflow = 'visible';
    },
  };
  