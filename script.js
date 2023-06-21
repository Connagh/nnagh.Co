// An array of project objects, each representing a card in the gallery.
// Each object contains properties for the type (image or video) and source URL of both the front and back of the card.
const projects = [
  {frontType: 'img', frontImage: 'assets/front/hi-front.jpg', backType: 'img', backImage: 'assets/back/hi-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/apple-front.jpg', backType: 'img', backImage: 'assets/back/apple-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/ar-front.jpg', backType: 'img', backImage: 'assets/back/ar-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/blender-front.jpg', backType: 'img', backImage: 'assets/back/blender-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/car-front.jpg', backType: 'img', backImage: 'assets/back/car-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/ds-front.jpg', backType: 'img', backImage: 'assets/back/ds-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/gameboy-front.jpg', backType: 'img', backImage: 'assets/back/gameboy-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/kindle-front.jpg', backType: 'img', backImage: 'assets/back/kindle-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/nike-front.jpg', backType: 'img', backImage: 'assets/back/nike-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/planimals-front.jpg', backType: 'img', backImage: 'assets/back/planimals-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/pokemon-front.jpg', backType: 'img', backImage: 'assets/back/pokemon-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/poster-front.jpg', backType: 'img', backImage: 'assets/back/poster-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/printing-front.jpg', backType: 'img', backImage: 'assets/back/printing-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/rls-front.jpg', backType: 'img', backImage: 'assets/back/rls-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/satan-front.jpg', backType: 'img', backImage: 'assets/back/satan-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/site-front.jpg', backType: 'img', backImage: 'assets/back/site-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/wheel-front.jpg', backType: 'img', backImage: 'assets/back/wheel-back.jpg'},
  {frontType: 'img', frontImage: 'assets/front/wireframe-front.jpg', backType: 'img', backImage: 'assets/back/wireframe-back.jpg'},
];

// Iterate over each project in the projects array
projects.forEach((project, index) => {
  // Create a new 'div' element for the project
  const colDiv = document.createElement('div');
  // Add Bootstrap grid classes to the div
  colDiv.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'col-xxl-2');

  // Determine the HTML for the front of the card based on its type
  let cardMediaFront;
  if(project.frontType === 'video') {
      cardMediaFront = `<video class="card-img card-img-front" src="${project.frontImage}" autoplay loop muted playsinline></video>`;
  } else {
      cardMediaFront = `<img class="card-img card-img-front" src="${project.frontImage}" alt="Front Image">`;
  }

  // Determine the HTML for the back of the card based on its type
  let cardMediaBack;
  if(project.backType === 'video') {
      cardMediaBack = `<video class="card-img card-img-back" src="${project.backImage}" autoplay loop muted playsinline></video>`;
  } else {
      cardMediaBack = `<img class="card-img card-img-back" src="${project.backImage}" alt="Back Image">`;
  }

  // Set the inner HTML of the colDiv to include the card HTML
  colDiv.innerHTML = `
      <div class="card">
          <div class="card-img-container" id="card${index}" data-rotation="0">
              ${cardMediaFront}
              ${cardMediaBack}
          </div>
      </div>
  `;
  // Append the colDiv to the gallery div in the HTML
  gallery.appendChild(colDiv);

  // Add an event listener to rotate the card when it is clicked
  document.getElementById(`card${index}`).addEventListener('click', function() {
      let rotation = parseInt(this.getAttribute('data-rotation'));
      rotation += 180; // add 180 degrees to current rotation
      this.style.transform = `rotateY(${rotation}deg)`;
      this.setAttribute('data-rotation', rotation.toString());
  });
});
