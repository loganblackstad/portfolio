const displayItems = (event) => {
    event.preventDefault();
    const menu = document.querySelector('[data-menu]');
    menu.style.display = 'block';
    // document.querySelector('[data-project-dropdown').setAttribute("style", "border: 2px solid #96c8da; border-bottom: none; border-radius: 0px;");
    // menu.lastElementChild.setAttribute("style", "border: 2px solid #96c8da; border-top: none;");
    // menu.firstElementChild.setAttribute("style", "border: 2px solid #96c8da; border-top: none; border-bottom: none;");
    // document.querySelector('[data-value="1"]').setAttribute("style", "border: 2px solid #96c8da; border-top: none; border-bottom: none;");
    // document.querySelector('[data-project-dropdown]').style.border = '1px solid #96c8da';
    // document.querySelector('[data-menu]').lastChild.style.border = '1px solid #96c8da';

   
}


document.querySelector('[data-project-dropdown]').addEventListener('click', displayItems);

// 

