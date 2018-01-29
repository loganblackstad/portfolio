const catlendlyText = `Catlendly is a 2d "space evader" game where the player gains points by flying through an asteroid belt for as long as possible.`
const zendeskText = `The Calendly Zendesk Dashboard provides a realtime visual display of each support rep's progress on ticket requests and completions.`
const digitalTasksText = `DigitalTasks is a task management chrome extension that aggregates both personal and business tasks (via our Salesforce integration).`

const toggleMenu = (event) => {
    event.preventDefault();
    const menu = document.querySelector('[data-menu]');
    menu.style.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
}

const openProject = (event) => {
    let projectDiv = document.querySelector('.project');
    let title = document.querySelector('[data-project-title]');
    let description = document.querySelector('[data-project-description]');
    title.textContent = event.target.textContent;
    switch (event.target.textContent) {
        case 'Catlendly':
        description.textContent = catlendlyText;
            break;
        case 'Zendesk-Dashboard':
        description.textContent = zendeskText;
            break;
        case 'DigitalTasks':
        description.textContent = digitalTasksText;
            break;
    }
    projectDiv.classList.remove('hide');
    document.querySelector('[data-menu]').style.display = 'none';
}


document.querySelector('[data-project-dropdown]').addEventListener('click', toggleMenu);
document.querySelectorAll('[data-item]').forEach((item) => {
    item.addEventListener('click', openProject);
});
