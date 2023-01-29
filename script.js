const toggleButton = Array.from(document.querySelectorAll('.toggle-button'))[0];
const navList = Array.from(document.querySelectorAll('.nav-list'))[0];

toggleButton.addEventListener('click', () => toggleNav());


// function toggleNav() {
//     const navClass = navList.classList;
    
//     if (navClass.classList.indexOf("kiscica") > -1) {
//         navClass.remove("kiscica");
//     } else {
//         navClass.add("kiscica");
//     }
// }

// function toggleNav() {
//     const navClass = navList.classList;
    
//     navClass.classList.indexOf("kiscica") ? navClass.remove("kiscica") : navClass.add("kiscica");

// }

const toggleNav = () => navList.classList.toggle('active');

