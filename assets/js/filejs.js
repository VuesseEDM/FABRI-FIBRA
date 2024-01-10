
var currentSectionIndex = 0; // Indice della sezione corrente

function scrollDown() {
  var sections = document.querySelectorAll('.section-to-scroll');
  if (sections && currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollUp() {
  var sections = document.querySelectorAll('.section-to-scroll');
  if (sections && currentSectionIndex > 0) {
    currentSectionIndex--;
    sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  }
}

function handleScrollIndicatorsVisibility() {
  var headerBox = document.getElementById('header-box');
  var footer = document.querySelector('.footer');
  var scrollIndicatorUp = document.getElementById('scrollIndicatorUp');
  var scrollIndicator = document.getElementById('scrollIndicator');

  if (headerBox && footer && scrollIndicatorUp && scrollIndicator) {
      var headerBoxBottom = headerBox.getBoundingClientRect().bottom;
      var footerTop = footer.getBoundingClientRect().top;

      // Nascondi entrambi gli indicatori nel footer
      if (footerTop <= window.innerHeight) {
          scrollIndicatorUp.style.display = 'none';
          scrollIndicator.style.display = 'none';
      } else {
          // Mostra solo lo scroll-indicator nell'header-box
          scrollIndicatorUp.style.display = headerBoxBottom <= 0 ? 'block' : 'none';
          scrollIndicator.style.display = headerBoxBottom <= 0 ? 'block' : 'none';
      }
  }
}

// Aggiungi un ascoltatore di evento per la funzione handleScrollIndicatorsVisibility
window.addEventListener('scroll', handleScrollIndicatorsVisibility);

// Esegui handleScrollIndicatorsVisibility all'inizio per inizializzare lo stato iniziale
handleScrollIndicatorsVisibility();





var scrolling = false;

  function scrollToHeaderBox2() {
    if (!scrolling) {
      scrolling = true;
      var headerBox2 = document.getElementById('header-box-2');
      if (headerBox2) {
        headerBox2.scrollIntoView({ behavior: 'smooth' });

        setTimeout(function () {
          scrolling = false;
        }, 3000);
      }
    }
  }

  var scrollButton = document.getElementById('scrollButton');
  if (scrollButton) {
    scrollButton.addEventListener('click', scrollToHeaderBox2);
  }
