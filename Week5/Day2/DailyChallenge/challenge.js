
//Daily Challenge
//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
//Make sure the values are not empty
//Write a story that uses each of the values.
//Make sure you check the console for errors when playing the game.
//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could cli

const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const libButton = document.getElementById('lib-button');
const shuffleButton = document.getElementById('shuffle-button');

const stories = [
  'Once upon a time, there was a <adjective> <noun> named <person> who loved to <verb> in <place>.',
  'There was a <adjective> <noun> who met a <adjective> <noun> in <place> and they fell in love.',
  'In <place>, there was a <adjective> <noun> who wanted to <verb> and became a <adjective> <noun>.'
];

function getRandomStory() {
  const randomIndex = Math.floor(Math.random() * stories.length);
  return stories[randomIndex];
}

function generateStory(event) {
  event.preventDefault();

  const noun = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person = document.getElementById('person').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const place = document.getElementById('place').value.trim();

  if (noun && adjective && person && verb && place) {
    const story = getRandomStory()
      .replace('<noun>', noun)
      .replace('<adjective>', adjective)
      .replace('<person>', person)
      .replace('<verb>', verb)
      .replace('<place>', place);
    storySpan.textContent = story;
  }
}

function shuffleStory() {
  const noun = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person = document.getElementById('person').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const place = document.getElementById('place').value.trim();

  if (noun && adjective && person && verb && place) {
    let story = getRandomStory();
    while (storySpan.textContent === story) {
      story = getRandomStory();
    }
    storySpan.textContent = story;
  }
}

libButton.addEventListener('click', generateStory);
shuffleButton.addEventListener('click', shuffleStory);