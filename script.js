const toggleButton = Array.from(document.querySelectorAll('.toggle-button'))[0];
const navList = Array.from(document.querySelectorAll('.nav-list'))[0];

toggleButton.addEventListener('click', () => toggleNav());

const toggleNav = () => navList.classList.toggle('active');

