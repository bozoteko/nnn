// JavaScript for smooth fade-in and fade-out of dropdown content
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-content').classList.remove('fade-out');
        this.querySelector('.dropdown-content').classList.add('fade-in');
    });

    dropdown.addEventListener('mouseleave', function() {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.remove('fade-in');
        dropdownContent.classList.add('fade-out');
    });
});
