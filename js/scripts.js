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
      pageContent.innerHTML = `
          <style>
              .educational-buttons {
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  margin-top: 20px;
              }
              .educational-button {
                  background-color:#f9f9f9;
                  color: orange;
                  padding: 15px 20px;
                  border: none;
                  border-radius: 8px;
                  text-align: left;
                  font-size: 16px;
                  cursor: pointer;
                  font-weight: bold;
                  transition: background-color 0.3s ease, transform 0.2s ease;
              }
              .educational-button:hover {
                  background-color: #f9f9f9;
                  transform: translateY(-2px);
              }
              .educational-button:active {
                  transform: translateY(0);
              }
          </style>
          <h2>Educational System Guide</h2>
          <p>Content about educational system</p>
          <div class="educational-buttons">
              <button class="educational-button">SENIOR ADVICES</button>
              <button class="educational-button">EDUCATION SYSTEM RULES</button>
              <button class="educational-button">IUT ROUTINE AND CALENDAR</button>
              <button class="educational-button">IUT GUIDE</button>
              <button class="educational-button">ACADEMIC CATALOGUE</button>
          </div>
      `;
      break;
    case "study_material":
        pageContent.innerHTML = `<h2>Studying Material</h2><p>Content about study materials</p>`;
        break;
        case "contact_isc":
          pageContent.innerHTML = `
              <style>
                  .contact-list {
                      list-style-type: none;
                      padding: 0;
                      margin: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 10px;
                      font-weight: bold;
                  }
                  .contact-item {
                      background-color: #f9f9f9;
                      border-radius: 8px;
                      padding: 10px;
                      transition: background-color 0.3s ease;
                  }
                  .contact-item:hover {
                      background-color: #e0e0e0;
                  }
                  .contact-link {
                      text-decoration: none;
                      color: #333;
                      display: flex;
                      align-items: center;
                      gap: 10px;
                  }
                  .icon {
                      font-size: 1.2em;
                  }
              </style>
              <h2>Contact ISC</h2>
              <p>Connect with us:</p>
              <ul class="contact-list">
                  <li class="contact-item">
                      <a href="mailto:isc.iut@gmail.com" target="_blank" class="contact-link">
                          <span class="icon">📧</span> Gmail
                      </a>
                  </li>
                  <li class="contact-item">
                      <a href="https://www.facebook.com/profile.php?id=100095673931230" target="_blank" class="contact-link">
                          <span class="icon">📘</span> Facebook
                      </a>
                  </li>
                  <li class="contact-item">
                      <a href="https://www.instagram.com/iut_isc" target="_blank" class="contact-link">
                          <span class="icon">📸</span> Instagram
                      </a>
                  </li>
                  <li class="contact-item">
                      <a href="https://wa.me/008801618515277" target="_blank" class="contact-link">
                          <span class="icon">💬</span> WhatsApp
                      </a>
                  </li>
              </ul>
          `;
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

<p style="text-align: center; margin-top: 20px;                  font-weight: bold;
">
    FOR DOWNLOADING THE ANDROID APPLICATION CLICK <a style="color:white" href="https://drive.google.com/file/d/159sgJ00Y-vvY_tY3hqND1QrbW8CLzTj0/view" target="_blank">HERE</a>
</p>`;
        break;
    default:
      pageContent.innerHTML = `<h2>Welcome</h2><p>Select a section to view content.</p>`;

  }
}