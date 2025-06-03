function goToSlide(index) {
      const slides = document.getElementById('slides');
      slides.style.transform = `translateX(-${index * 100}vw)`;
    }