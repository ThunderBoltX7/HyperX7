// Example: Adding a simple interactive alert when a link is clicked
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        alert('You clicked on a link!');
    });
});