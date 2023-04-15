const planetsData = [
    { name: 'Mercury', color: 'gray', moons: 0 },
    { name: 'Venus', color: 'yellow', moons: 0 },
    { name: 'Earth', color: 'blue', moons: 1 },
    { name: 'Mars', color: 'red', moons: 2 },
    { name: 'Jupiter', color: 'orange', moons: 79 },
    { name: 'Saturn', color: 'goldenrod', moons: 82 },
    { name: 'Uranus', color: 'lightblue', moons: 27 },
    { name: 'Neptune', color: 'darkblue', moons: 14 },
];

const listPlanetsSection = document.querySelector('.listPlanets');

planetsData.forEach(planetData => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planetData.color;
    planetDiv.textContent = planetData.name;
    listPlanetsSection.appendChild(planetDiv);

    // Bonus: Add moons
    for (let i = 0; i < planetData.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.style.left = `${Math.random() * 80}px`;
        moonDiv.style.top = `${Math.random() * 80}px`;
        planetDiv.appendChild(moonDiv);
    }
});