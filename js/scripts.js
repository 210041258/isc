
const pageContent = document.getElementById('pageContent');
const navButtons = document.querySelectorAll('nav button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.dataset.page;
    showPage(page);
  });
});

function showPage(page) {
  const pages = {
"view_sections_paper":`
<ul class="department-list">
  <li>BSC CSE</li>
  <li>MSC CSE</li>
  <li>BSC ME</li>
  <li>BSC EEE</li>
  <li>BSC TE</li>
  <li>BSC CEE</li>
</ul>

<style>
  .department-list {
    list-style: none;
    margin-top: 25px;
    padding: 0;
    width: 100%;
  }

  .department-list li {
    padding: 15px;
    margin: 10px 0;
    background: #f8f9fa;
    border-radius: 8px;
    font-weight: 600;
    color: orange;
    transition: transform 0.2s ease, background-color 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  .department-list li:hover {
    transform: translateX(10px);
    background: #e9ecef;
    border-color: #3498db;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
  }

  .department-list li:active {
    transform: translateX(5px);
    background: #dde1e4;
  }

  @media (max-width: 480px) {
    .department-list li {
      padding: 12px;
      font-size: 0.9rem;
    }
  }
</style>
`,
"view_sections_soruces":`
 
<ul class="department-list">
  <li>BSC CSE</li>
  <li>MSC CSE</li>
  <li>BSC ME</li>
  <li>BSC EEE</li>
  <li>BSC TE</li>
  <li>BSC CEE</li>
</ul>

<style>
  .department-list {
    list-style: none;
    margin-top: 25px;
    padding: 0;
    width: 100%;
  }

  .department-list li {
    padding: 15px;
    margin: 10px 0;
    background: #f8f9fa;
    border-radius: 8px;
    font-weight: 600;
    color: orange;
    transition: transform 0.2s ease, background-color 0.2s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  .department-list li:hover {
    transform: translateX(10px);
    background: #e9ecef;
    border-color: #3498db;
    box-shadow: 0 2px 8px rgba(52, 152, 219, 0.2);
  }

  .department-list li:active {
    transform: translateX(5px);
    background: #dde1e4;
  }

  @media (max-width: 480px) {
    .department-list li {
      padding: 12px;
      font-size: 0.9rem;
    }
  }
</style>
`,
     "educational_system": `
      <style>
.educational-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.educational-button {
  background-color: #f9f9f9;
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
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.educational-button:active {
  transform: translateY(0);
}
      </style>
      <h2>Educational System Guide</h2>
      <p>Content about educational system</p>
      <div class="educational-buttons">

        <button class="educational-button" onclick="window.location.href='senior-advices.html'">SENIOR ADVICES</button>
        <button class="educational-button" onclick="window.location.href='EDUCATION_SYSTEM_RULES.html'">EDUCATION SYSTEM RULES</button>
        <button class="educational-button" onclick="window.location.href='iut-routine-and-calendar.html'">IUT ROUTINE AND CALENDAR</button>
        <button class="educational-button" onclick="window.location.href='https://www.iutoic-dhaka.edu/uploads/pdf/1695099698_1824.pdf'">IUT GUIDE</button>
        <button class="educational-button" onclick="window.location.href='https://fet.iutoic-dhaka.edu/uploads/pdf/1713278609_1495.pdf'">CSE Academic Catalogue</button>
        <button class="educational-button" onclick="window.location.href='https://eee.iutoic-dhaka.edu/uploads/pdf/1594983565_1336.pdf'">EEE Academic Catalogue</button>
        <button class="educational-button" onclick="window.location.href='https://mpe.iutoic-dhaka.edu/uploads/pdf/1660834423_1194.pdf'">MPE Academic Catalogue</button>
      </div>
    `,
    "study_material": `

<style> 
.study-material {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.study-material h2 {
    color: orange;
    border-bottom: 2px solid orange;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.material-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.material-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
}

.material-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.material-item h3 {
    color: orange;
    margin-bottom: 10px;
}

.material-item p {
    color: #7f8c8d;
    margin-bottom: 15px;
}

.material-item button {
    background-color: orange;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.material-item button:hover {
    background-color: orange;
}
</style>

<div class="study-material">
    <h2>Studying Material</h2>
    <p>Content about study materials</p>
    <div class="material-grid">
        <div class="material-item">
            <h3>Past Papers</h3>
            <p>Access past exam papers to practice and prepare.</p>
            <button onclick="showPage('view_sections_paper')">View</button>
        </div>
        <div class="material-item">
            <h3>Reference</h3>
            <p>Find recommended books and resources for your courses.</p>
            <button onclick="showPage('view_sections_soruces')">Explore</button>
        </div>
    </div>
</div>

    `,
    "contact_isc": `
      <style>
.contact-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.contact-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
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
  margin-right: 5px;
}
      </style>
<h2 id="contact-isc">Contact ISC</h2>
<p>Get in touch with us:</p>
<ul class="contact-list">
  <li class="contact-item">
    <a style="color:orange;" href="mailto:isc.iut@gmail.com" target="_blank" class="contact-link">
      <span class="icon">📧</span> Gmail
    </a>
  </li>
  <li class="contact-item">
    <a style="color:orange;" href="https://www.facebook.com/profile.php?id=100095673931230" target="_blank" class="contact-link">
      <span class="icon">📘</span> Facebook
    </a>
  </li>
  <li class="contact-item">
    <a style="color:orange;" href="https://www.instagram.com/iut_isc" target="_blank" class="contact-link">
      <span class="icon">📸</span> Instagram
    </a>
  </li>
  <li class="contact-item">
    <a style="color:orange;" href="https://wa.me/+8801618515277" target="_blank" class="contact-link">
      <span class="icon">💬</span> WhatsApp
    </a>
  </li>
</ul>
    `,
    "app_guide": `
<div class="video-container" style="
  width: 80%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
">
<iframe src="https://www.youtube.com/embed/sHq87T5hvS0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 10px;
  aspect-ratio: 16/9;
  object-fit: cover;
"></iframe>
    </div>

<p style="text-align: center; margin-top: 20px; font-weight: bold;">
  <a style="color:white; background-color: ORANGE; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;" href="https://www.dropbox.com/scl/fi/kmunhpvq2u4e5dat729a1/student_support_release.apk" target="_blank">DOWNLOAD ANDROID APPLICATION</a>
</p>
    `,
    "default": `
<h2>Welcome to ISC</h2>
<p>Please select a section from the navigation menu to view the corresponding content.</p>
    `,
  };

  pageContent.innerHTML = pages[page] || pages["default"];
}
