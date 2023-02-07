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

//navbar add classes
const toggleButton = document.querySelector('.toggle-button');

const addClasses = (target, clss) => {
    document.querySelector(`${target}`).classList.toggle(`${clss}`);    
}

if (window.innerWidth <= 768) {
    toggleButton.addEventListener('click', () => addClasses('.toggle-button', 'open'));
    toggleButton.addEventListener('click', () => addClasses('.nav-list', 'active'));
} 

//navbar remove classes fix
const navList = document.querySelector('.nav-list');

const removeClasses = (mirol, mit) => {
    document.querySelector(`${mirol}`).classList.remove(`${mit}`);    
}

if (window.innerWidth <= 768) {
    navList.addEventListener('click', () => removeClasses('.toggle-button', 'open'));
    navList.addEventListener('click', () => removeClasses('.nav-list', 'active'));
} 

//fooldal
const fooldalLogo = document.querySelector('.fooldal-logo');
const fooldalArrow = document.querySelector('.fooldal-arrow');


if (window.innerWidth >= 768) {
fooldalLogo.addEventListener('mouseover', () => addClasses ('.fooldal-ismerdmeg', 'bigger'));
fooldalLogo.addEventListener('mouseleave', () => removeClasses('.fooldal-ismerdmeg', 'bigger'));
fooldalLogo.addEventListener('mouseover', () => addClasses ('.fooldal-arrow', 'bigger'));
fooldalLogo.addEventListener('mouseleave', () => removeClasses('.fooldal-arrow', 'bigger'));
}


//rolam

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.rolam-text').classList.add('fadeinleft');
            document.querySelector('.rolam-cim').classList.add('fadeinleft');
            document.querySelector('.rolam-kep').classList.add('fadeinright');
            document.querySelector('.rolam-kep-bck').classList.add('fadeinright');
            document.querySelector('.arlista-jobb-hasab').classList.add('fadeinright');
            document.querySelector('.footer-right-top').classList.add('fadeinright');
            document.querySelector('.footer-right-bottom').classList.add('fadeinright');
            document.querySelector('.footer-nav-list').classList.add('fadeinleft');
        } else {
            document.querySelector('.rolam-text').classList.remove('fadeinleft');
            document.querySelector('.rolam-cim').classList.remove('fadeinleft');
            document.querySelector('.rolam-kep').classList.remove('fadeinright');
            document.querySelector('.rolam-kep-bck').classList.remove('fadeinright');
            document.querySelector('.arlista-jobb-hasab').classList.remove('fadeinright');
            document.querySelector('.footer-right-top').classList.remove('fadeinright');
            document.querySelector('.footer-right-bottom').classList.remove('fadeinright');
            document.querySelector('.footer-nav-list').classList.remove('fadeinleft');
        }
    })
})

observer.observe(document.querySelector('.rolam-text'));
observer.observe(document.querySelector('.rolam-cim'));
observer.observe(document.querySelector('.rolam-kep'));
observer.observe(document.querySelector('.rolam-kep-bck'));
observer.observe(document.querySelector('.arlista-jobb-hasab'));
observer.observe(document.querySelector('.footer-right-top'));
observer.observe(document.querySelector('.footer-right-bottom'));
observer.observe(document.querySelector('.footer-nav-list'));
