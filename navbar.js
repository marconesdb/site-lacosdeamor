
document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });

  // Para abrir o dropdown no clique em telas menores
  var dropdownToggle = document.querySelectorAll('.relative');
  dropdownToggle.forEach(function(item) {
    item.addEventListener('click', function() {
      var submenu = item.querySelector('ul');
      submenu.classList.toggle('hidden');
    });
  });
