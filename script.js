const projects = [
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/carsim.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ereader.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/ereader.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/rls.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/rls.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
  {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    {frontImage: 'https://assets.codepen.io/10192999/bio.jpg', 
      backImage: 'https://assets.codepen.io/10192999/ds.jpg'},
    // add more projects here
];

const gallery = document.getElementById('gallery');

projects.forEach((project, index) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'col-xxl-2');
    colDiv.innerHTML = `
        <div class="card" id="card${index}">
            <img class="card-img card-img-front" src="${project.frontImage}" alt="Front Image">
            <img class="card-img card-img-back" src="${project.backImage}" alt="Back Image">
        </div>
    `;
    gallery.appendChild(colDiv);

    // Event listener for click/tap
    document.getElementById(`card${index}`).addEventListener('click', function() {
        this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
});
