document.querySelector('[data-mobile-nav]').addEventListener('click', (event) => {
    event.preventDefault();
    let dropdownMenu = document.querySelector('[data-mobile-nav]').nextElementSibling;
    dropdownMenu.getAttribute('style').includes('none') ? dropdownMenu.setAttribute('style', 'display:flex') : dropdownMenu.setAttribute('style', 'display:none');
})
