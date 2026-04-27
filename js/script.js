function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            hideSidebar();
        });
    });
});




const boxes = document.querySelectorAll('.about-us .box-container .box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Каждый блок появляется с небольшой задержкой
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3 // активируется когда 30% элемента видно
});

boxes.forEach(box => observer.observe(box));






const priceTextBoxes = document.querySelectorAll('.price .main-text');

const priceTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

priceTextBoxes.forEach(box => priceTextObserver.observe(box));




const priceBoxes = document.querySelectorAll('.price .box-container .box');

const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

priceBoxes.forEach(box => priceObserver.observe(box));



const galleryTextBoxes = document.querySelectorAll('.gallery .main-text');

const galleryTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

galleryTextBoxes.forEach(box => galleryTextObserver.observe(box));





const galleryImageBoxes = document.querySelectorAll('.gallery .images');

const galleryImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.1
});

galleryImageBoxes.forEach(box => galleryImageObserver.observe(box));




const conviniencesTextBoxes = document.querySelectorAll('.conviniences .main-text');

const conviniencesTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

conviniencesTextBoxes.forEach(box => conviniencesTextObserver.observe(box));




const conviniencesBoxes = document.querySelectorAll('.conviniences .box-container');

const conviniencesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

conviniencesBoxes.forEach(box => conviniencesObserver.observe(box));


const contactsTextBoxes = document.querySelectorAll('.contacts .main-text');

const contactsTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

contactsTextBoxes.forEach(box => contactsTextObserver.observe(box));


const contactsBoxes = document.querySelectorAll('.contacts .context');

const contactsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

contactsBoxes.forEach(box => contactsObserver.observe(box));



const footerBoxes = document.querySelectorAll('.footer');

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.3
});

footerBoxes.forEach(box => footerObserver.observe(box));