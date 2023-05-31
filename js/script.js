window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
    
    if (window.pageYOffset > 0) {
      navbar.classList.add('sticky');
      content.style.marginTop = navbar.offsetHeight + 'px';
    } else {
      navbar.classList.remove('sticky');
      content.style.marginTop = '0';
    }
  };
  