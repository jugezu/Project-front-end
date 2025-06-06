
// Crown icon in Rapid section
document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.crown');

    faqContainer.addEventListener('click', function (e) {
        const groupHeader = e.target.closest('.crown-header');
        
        if (!groupHeader) return;


        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.crown-text');
        const icon = groupHeader.querySelector('i');

        groupBody.classList.toggle('open');


    });
});

// About Us text
document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.content');

    faqContainer.addEventListener('click', function (e) {
        const groupHeader = e.target.closest('.about-us-group-header');
        
        if (!groupHeader) return;


        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.about-us-group-body');
        const icon = groupHeader.querySelector('i');

        groupBody.classList.toggle('open');


    });
});