// List of projects
let projects = [
  {
    title: 'Bio',
    description: '',
    image: 'assets/bio.jpg',
  },
  {
    title: 'DS Lite / 3DS',
    description: 'Design systems are like.. lego sets for designing stuff. I think theyre brill so I made my own! 🎉',
    image: 'assets/ds.jpg',
  },
  {
    title: 'Pokémon Card Builder',
    description: 'A fully customisable Pokémon card template. Gotta customise em all!',
    image: 'assets/pokecard.jpg',
  },
  {
    title: 'Sneaker Builder: Air Force 1',
    description: 'This template allows you to design your own Air Force 1s. Please share your designs with me I get very excited',
    image: 'assets/nikeair.jpg',
  },
  {
    title: 'Not Another Wireframe Kit',
    description: 'This helps people produce design stuff with minimal effort. This one is special because its hand-drawn and that makes it looks pretty',
    image: 'assets/wireframe.jpg',
  },
  {
    title: 'WiFi-Hacking Game Boy',
    description: 'I put a nerd toy inside a gameboy case and it looks really heckin cool I hope you like it as much as I do',
    image: 'assets/gameboy.jpg',
  },
  {
    title: 'Real Life Subtitles',
    description: 'I collaborated with 20 hard-of-hearing participants over 6 months to produce the best "Real Life Subtitles" design. I reckon I could build this in a year or two 😍',
    image: 'assets/rls.jpg',
  },
  {
    title: 'Super Kindle (AR e-Reader)',
    description: 'A working prototype for if you could have unlimited books in one, that you read using smart glasses',
    image: 'assets/ereader.jpg',
  },
  {
    title: 'Smart Car Simulator VR',
    description: 'I cant think of how to describe this excitingly but the title sounds COOL',
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
