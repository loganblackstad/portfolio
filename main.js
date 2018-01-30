// Toggle navbar
document.querySelector('[data-mobile-nav]').addEventListener('click', (event) => {
    event.preventDefault();
    let dropdownMenu = document.querySelector('[data-mobile-nav]').nextElementSibling;
    dropdownMenu.getAttribute('style').includes('none') ? dropdownMenu.setAttribute('style', 'display:block') : dropdownMenu.setAttribute('style', 'display:none');
});
//Add smooth scrolling
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click((event) => {
        let targetHash = event.currentTarget.hash;
        event.preventDefault();
        $('.dropdown-menu').attr('style', 'display: none;');
        $('html, body').animate({
          scrollTop: $(targetHash).offset().top
        }, 1500);
  });

