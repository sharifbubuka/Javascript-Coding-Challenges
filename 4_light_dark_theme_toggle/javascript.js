const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the website

    var element = document.body;
    element.classList.toggle('dark-mode');
});