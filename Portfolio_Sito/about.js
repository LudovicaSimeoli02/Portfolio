document.addEventListener('DOMContentLoaded', function () {
  
  const accordions = document.querySelectorAll('.accordion-card');
  accordions.forEach(card => {
    const header = card.querySelector('.accordion-header');
    header.addEventListener('click', function (e) {
    
      accordions.forEach(c => {
        if (c !== card) c.classList.remove('open');
      });
      
      card.classList.toggle('open');
    });
  });


  const tabBtns = document.querySelectorAll('.about-tab-btn');
  const tabContents = document.querySelectorAll('.about-tab-content');
  const tabCard = document.querySelector('.about-tab-content-card');

  
  function activateTab(idx) {
    tabBtns.forEach((b, i) => {
      if(i === idx) b.classList.add('active', 'selected');
      else b.classList.remove('active', 'selected');
    });
    tabContents.forEach((c, i) => {
      if(i === idx) c.style.display = 'block';
      else c.style.display = 'none';
    });
    tabCard.classList.add('active');
  }

  
  if(tabBtns.length && tabContents.length) activateTab(0);

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
      activateTab(idx);
    });
  });
});
