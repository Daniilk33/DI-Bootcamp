                                  // 🌟Exercise 1

//Using Javascript
//Retrieve the div and console.log it
//Change the name “Pete” to “Richard”.
//Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
//Change each first name of the two <ul>'s to your name. (Hint : use a loop)

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.

const container = document.getElementById('container');
console.log(container);

const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    if (item.textContent === 'Pete') {
        item.textContent = 'Richard';
    }
});

listItems.forEach(item => {
    if (item.textContent === 'Sarah') {
        item.remove();
    }
});

const lists = document.querySelectorAll('.list');
lists.forEach((list, index) => {
    list.children[0].textContent = 'YourName';
});

// Bonus
lists.forEach(list => {
    list.classList.add('student_list');
});

lists[0].classList.add('university', 'attendance');



                           //🌟 Exercise 2🌟

//Add a “light blue” background color and some padding to the <div>.
//Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
//Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
//Change the font size of the whole body.
//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

const div = document.querySelector('div');
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

listItems.forEach(item => {
    if (item.textContent === 'John') {
        item.style.display = 'none';
    }
});

listItems.forEach(item => {
    if (item.textContent === 'Pete') {
        item.style.border = '2px solid black';
    }
});

// Bonus
if (div.style.backgroundColor === 'lightblue') {
    const visibleUsers = Array.from(listItems).filter(item => item.style.display !== 'none');
    const userNames = visibleUsers.map(item => item.textContent);
    alert(`Hello ${userNames.join(' and ')}`);


}

                       // 🌟Exercise 🌟3


//Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
//We are going to add a new <li> to the <ul>.
//First, create a new <li> tag (use the createElement method).
//Create a new text node with “Logout” as its specified text.
//Append the text node to the newly created list node (<li>).
//Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
//use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).




const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const newLi = document.createElement('li');
const newText = document.createTextNode('Logout');
newLi.appendChild(newText);
navBar.querySelector('ul').appendChild(newLi);

const firstElement = navBar.querySelector('ul').firstElementChild;
const lastElement = navBar.querySelector('ul').lastElementChild;
console.log(`First element: ${firstElement.textContent}, Last element: ${lastElement.textContent}`);




             
                       //🌟 Exercise 4 🌟


//The point of this challenge is to display a list of two books on your browser.
//In the body of the HTML page, create an empty div: 
//<div class="listBooks"></div>
//In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
//title,author,image : a url,alreadyRead : which is a boolean (true or false).
//Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
//Requirements : All the instructions below need to be coded in the js file:
//Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
//For each book :
//You have to display the book’s title and the book’s author.
//Example: HarryPotter written by JKRolling.
//The width of the image has to be set to 100px.
//If the book is already read. Set the color of the book’s details to red.


const allBooks = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        image: 'https://example.com/to-kill-a-mockingbird.jpg',
        alreadyRead: true,
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        image: 'https://example.com/pride-and-prejudice.jpg',
        alreadyRead: false,
    },
];

const listBooksDiv = document.querySelector('.listBooks');
const table = document.createElement('table');

allBooks.forEach((book) => {
    const tr = document.createElement('tr');

    const titleAndAuthor = document.createElement('td');
    titleAndAuthor.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        titleAndAuthor.style.color = 'red';
    }

    const imageTd = document.createElement('td');
    const image = document.createElement('img');
    image.src = book.image;
    image.width = 100;
    imageTd.appendChild(image);

    tr.appendChild(titleAndAuthor);
    tr.appendChild(imageTd);
    table.appendChild(tr);
});

listBooksDiv.appendChild(table);