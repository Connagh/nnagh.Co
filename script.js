// List of projects
let projects = [
  {
    title: 'Bio',
    description: '',
    image: 'assets/bio.jpg',
  },
  {
    title: 'DS Lite / 3DS',
    description: 'Through my professional work I fell in love with Design Systems. These are my personal Design Systems which will feature the cutting edge of my Figma passion and creativity. Developed using a two-sizes-fits-all approach, for both single and multi-brand needs, this aims to be the end-all for designs systems. With features such as: Design Tokens with Semantic layer for Dark/Light modes, easy-to-use "explain like im five" documentation, and more. I cant promise you the world on the stick, because this is more like two worlds on two sticks.',
    image: 'assets/ds.jpg',
  },
  {
    title: 'Pokémon Card Builder',
    description: 'This is a description for Project 1.',
    image: 'assets/pokecard.jpg',
  },
  {
    title: 'Sneaker Builder: Air Force 1',
    description: 'This is a description for Project 2.',
    image: 'assets/nikeair.jpg',
  },
  {
    title: 'Not Another Wireframe Kit',
    description: 'This is a description for Project 3.',
    image: 'assets/wireframe.jpg',
  },
  {
    title: 'WiFi-Hacking Game Boy',
    description: 'This is a description for Project 4.',
    image: 'assets/gameboy.jpg',
  },
  {
    title: 'Real Life Subtitles',
    description: 'This is a description for Project 5.',
    image: 'assets/rls.jpg',
  },
  {
    title: 'Super Kindle (AR e-Reader)',
    description: 'This is a description for Project 6.',
    image: 'assets/ereader.jpg',
  },
  {
    title: 'Smart Car Simulator VR',
    description: 'This is a description for Project 7.',
    image: 'assets/carsim.jpg',
  },
  {
    title: 'Last Project',
    description: 'This is the last project.',
    image: 'assets/contact.jpg',
  },
];

// Fisher-Yates (aka Knuth) Shuffle
function shuffleArray(array) {
  let currentIndex = array.length - 2,
    temporaryValue,
    randomIndex;

  while (1 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let firstProject = projects.shift();
let lastProject = projects.pop();
projects = shuffleArray(projects);
projects.unshift(firstProject);
projects.push(lastProject);

const projectGrid = document.getElementById('project-grid');
const modal = document.getElementById('myModal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementsByClassName('close')[0];

let modalOpen = false;

// Add delay to re-enable clicks on project covers
function enableProjectClicks() {
  setTimeout(() => {
    projectElements.forEach((projectElement, index) => {
      // Check if the current project is not the first one or the last one
      if (index !== 0 && index !== projectElements.length - 1) {
        projectElement.style.pointerEvents = 'auto';
      }
    });
  }, 300); // Delay of 300ms
}

let projectElements = [];

projects.forEach((project, index) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  if (index === 0 || index === projects.length - 1) { 
    projectDiv.classList.add('no-shadow');
    projectDiv.style.pointerEvents = 'none';
  }

  projectDiv.style.backgroundImage = `url(${project.image})`;

  projectDiv.addEventListener('click', () => {
    if (index === 0 || index === projects.length - 1 || modalOpen) return;

    modalOpen = true;
    modalTitle.innerText = project.title;
    modalDescription.innerText = project.description;
    modalImage.src = project.image;
    modal.style.display = 'block';

    projectElements.forEach((projectElement) => {
      projectElement.style.pointerEvents = 'none';
    });

    enableProjectClicks();
  });

  projectElements.push(projectDiv); 
  projectGrid.appendChild(projectDiv);
});

closeBtn.onclick = closeBtn.ontouchstart = function (event) {
  event.stopPropagation();
  modal.style.display = 'none';
  modalOpen = false;
};

window.onclick = window.ontouchstart = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    modalOpen = false;
  }
};