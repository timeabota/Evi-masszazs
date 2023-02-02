const toggleButton = document.querySelector('.toggle-button');

const hamburgerIcon = (target, clss) => {
    document.querySelector(`${target}`).classList.toggle(`${clss}`);    
}

if (window.innerWidth <= 768) {
    toggleButton.addEventListener('click', () => hamburgerIcon('.toggle-button', 'open'));
    toggleButton.addEventListener('click', () => hamburgerIcon('.nav-list', 'active'));
} 

// const Button = [
//     {
//         "target" : ".toggle-button",
//         "class" : "open"
//     },
//     {
//         "target" : ".nav-list",
//         "class" : "active"
//     }
// ]
