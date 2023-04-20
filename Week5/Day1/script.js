            //Exercise 1

document.addEventListener('DOMContentLoaded', function () {
    // 1. Use the firstElementChild / firstChild property to access an element
    const page = document.getElementById('page');
    const firstElement = page.firstElementChild;
    console.log('First Element:', firstElement);
  
    // 2. Use the lastElementChild / lastChild property to access an element
    const lastElement = page.lastElementChild;
    console.log('Last Element:', lastElement);
  
    // 3. Use the nextElementSibling / nextSibling property to access an element
    const header = document.getElementById('header');
    const nextElement = header.nextElementSibling;
    console.log('Next Element:', nextElement);
  
    // 4. Use the previousElementSibling / previousSibling property to access an element
    const content = document.getElementById('content');
    const previousElement = content.previousElementSibling;
    console.log('Previous Element:', previousElement);
  
    // 5. Use the parentNode property to access an element
    const parentNode = content.parentNode;
    console.log('Parent Node:', parentNode);
  
    // 6. Use the childNodes property to access a group of child elements
    const childNodes = page.childNodes;
    console.log('Child Nodes:', childNodes);
  });





          //Exercise 2



          document.addEventListener('DOMContentLoaded', function () {
            // 1. Retrieve the value of a node using nodeValue / innerText / innerHTML
            const title = document.getElementById('title');
            console.log('Title innerText:', title.innerText);
          
            // 2. Change the value of a node using nodeValue / innerText / innerHTML
            title.innerText = 'Updated Page Title';
            console.log('Updated Title innerText:', title.innerText);
          
            // 3. Retrieve the value of a node attribute
            const contentDiv = document.getElementById('content');
            const contentId = contentDiv.getAttribute('id');
            console.log('Content ID:', contentId);
          
            // 4. Change the value of a node attribute
            contentDiv.setAttribute('id', 'newContent');
            console.log('Updated Content ID:', contentDiv.getAttribute('id'));
          });

          
          //Exercise 3

          document.addEventListener('DOMContentLoaded', function () {
            const content = document.getElementById('content');
          
            // 1. Use the appendChild method to add a node
            const newParagraph = document.createElement('p');
            newParagraph.innerText = 'Appended paragraph';
            content.appendChild(newParagraph);
          
            // 2. Use the insertBefore method to add a node
            const newHeader = document.createElement('h2');
            newHeader.innerText = 'Inserted content title';
            content.insertBefore(newHeader, newParagraph);
          
            // 3. Use the removeChild method to remove a node
            const firstParagraph = content.getElementsByTagName('p')[0];
            content.removeChild(firstParagraph);
          
            // 4. Use the replaceChild method to replace a node
            const replacementParagraph = document.createElement('p');
            replacementParagraph.innerText = 'Replacement paragraph';
            content.replaceChild(replacementParagraph, newParagraph);
          });