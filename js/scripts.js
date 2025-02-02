const pageContent = document.getElementById('pageContent');
const navButtons = document.querySelectorAll('nav button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.dataset.page;
    showPage(page);
  });
});


function showPage(page) {
  switch(page){
    case "educational_system":
        pageContent.innerHTML = `<h2>Educational System Guide</h2><p>Content about educational system</p>`;
        break;
    case "study_material":
        pageContent.innerHTML = `<h2>Studying Material</h2><p>Content about study materials</p>`;
        break;
    case "contact_isc":
        pageContent.innerHTML = `<h2>Contact ISC</h2><p>Contact information for ISC</p>`;
        break;
    case "app_guide":
        pageContent.innerHTML = `<h2>App Guide</h2><p>Guide on how to use the app</p>`;
        break;
    default:
      pageContent.innerHTML = `<h2>Welcome</h2><p>Select a section to view content.</p>`;

  }
}