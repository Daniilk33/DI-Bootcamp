document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');
    let timeout;

    function onMouseEnter() {
        clearTimeout(timeout);
        square.style.backgroundColor = 'red';
    }

    function onMouseLeave() {
        timeout = setTimeout(() => {
            square.style.backgroundColor = 'pink';
        }, 5000);
    }

    square.addEventListener('mouseenter', onMouseEnter);
    square.addEventListener('mouseleave', onMouseLeave);
});