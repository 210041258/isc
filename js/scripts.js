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
        pageContent.innerHTML = `<h2>Contact ISC</h2><p>Content about contact ISC </p> <a href="https://www.isc.ac.in/">Visit Website</a> `;
        break;
    case "app_guide":
        pageContent.innerHTML = `  <div class="video-container" style="
        width: 80%;
        max-width: 800px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        margin: 0 auto;
        text-align: center;
    ">
    <iframe src="https://www.youtube.com/embed/sHq87T5hvS0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
            width: 100%;
            height: 400px;
            border: none;
            border-radius: 10px;
        "></iframe>
</div>

<p style="text-align: center; margin-top: 20px;">
    FOR DOWNLOADING THE ANDROID APPLICATION CLICK <a style="color:white" href="https://drive.google.com/file/d/159sgJ00Y-vvY_tY3hqND1QrbW8CLzTj0/view" target="_blank">HERE</a>
</p>`;
        break;
    default:
      pageContent.innerHTML = `<h2>Welcome</h2><p>Select a section to view content.</p>`;

  }
}