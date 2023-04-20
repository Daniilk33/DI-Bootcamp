 // Exercise 1: Change The Article
 const h1 = document.querySelector('h1');
 const article = document.querySelector('article');
 const lastParagraph = article.querySelector('p:last-of-type');
 article.removeChild(lastParagraph);

 const h2 = document.querySelector('h2');
 h2.addEventListener('click', () => {
     h2.style.backgroundColor = 'red';
 });

 const h3 = document.querySelector('h3');
 h3.addEventListener('click', () => {
     h3.style.display = 'none';
 });

 const boldButton = document.getElementById('bold-btn');
 boldButton.addEventListener('click', () => {
     const paragraphs = document.querySelectorAll('article p');
     paragraphs.forEach(paragraph => {
         paragraph.style.fontWeight = paragraph.style.fontWeight === 'bold' ? 'normal' : 'bold';
     });
 });

 // Exercise 2: Work With Forms
 const form = document.getElementById('name-form');
 const fnameInput = document.getElementById('fname');
 const lnameInput = document.getElementById('lname');

 form.addEventListener('submit', (event) => {
     event.preventDefault();

     const firstName = fnameInput.value.trim();
     const lastName = lnameInput.value.trim();

     if (firstName && lastName) {
         const usersAnswerList = document.querySelector('.usersAnswer');
         const firstNameLi = document.createElement('li');
         const lastNameLi = document.createElement('li');
         firstNameLi.textContent = firstName;
         lastNameLi.textContent = lastName;
         usersAnswerList.appendChild(firstNameLi);
         usersAnswerList.appendChild(lastNameLi);
     }
 });

 // Exercise 3: Transform The Sentence
let allBoldItems;

function getBold_items() {
    allBoldItems = document.querySelectorAll('p strong');
}

function highlight() {
    getBold_items();
    allBoldItems.forEach((boldItem) => {
        boldItem.style.color = 'blue';
    });
}

function return_normal() {
    getBold_items();
    allBoldItems.forEach((boldItem) => {
        boldItem.style.color = 'black';
    });
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseenter', highlight);
paragraph.addEventListener('mouseleave', return_normal);

// Exercise 4: Volume Of A Sphere
function calculateSphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

const sphereForm = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const volumeInput = document.getElementById('volume');

sphereForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const radius = parseFloat(radiusInput.value);
    if (isNaN(radius) || radius <= 0) {
        alert('Please enter a valid radius.');
        return;
    }

    const volume = calculateSphereVolume(radius);
    volumeInput.value = volume.toFixed(2);
});

// Exercise 5: Event Listeners
const example = document.getElementById('example');

example.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - example.clientWidth));
    example.style.left = `${randomX}px`;
});

example.addEventListener('mouseover', () => {
    const randomY = Math.floor(Math.random() * (window.innerHeight - example.clientHeight));
    example.style.top = `${randomY}px`;
});

example.addEventListener('mouseout', () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    example.style.backgroundColor = randomColor;
});

example.addEventListener('dblclick', () => {
    const randomFontSize = Math.floor(Math.random() * 20) + 16;
    example.style.fontSize = `${randomFontSize}px`;
});

