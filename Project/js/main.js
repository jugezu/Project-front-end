document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.content');

    faqContainer.addEventListener('click', function (e) {
        /*console.log(e.target);*/
        const groupHeader = e.target.closest('.about-us-group-header');
        
        if (!groupHeader) return;
        /*console.log(groupHeader); */

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.about-us-group-body');
        const icon = groupHeader.querySelector('i');

        // toggle icon + -
            //icon.classList.toggle('fa-plus');
            //icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');


    });
});