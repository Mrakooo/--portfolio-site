// Отримання посилань на кнопки та вміст
var aboutMeButton = document.getElementById("about_me_Button");
var skillsButton = document.getElementById("skills_Button");
var educationButton = document.getElementById("education_Button");

var aboutMeContent = document.getElementById("about_me_Content");
var skillsContent = document.getElementById("skills_Content");
var educationContent = document.getElementById("education_Content");

// Додавання обробників подій для кнопок
aboutMeButton.addEventListener("click", function () {
	setActiveButton(this);
	displayContent(aboutMeContent);
});

skillsButton.addEventListener("click", function () {
	setActiveButton(this);
	displayContent(skillsContent);
});

educationButton.addEventListener("click", function () {
	setActiveButton(this);
	displayContent(educationContent);
});

// Функція для виділення активної кнопки
function setActiveButton(button) {
	var buttons = document.getElementsByClassName("active_button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("active_button");
	}
	button.classList.add("active_button");
}

// Функція для відображення відповідного вмісту
function displayContent(content) {
	var contents = document.getElementsByClassName("active-content");
	for (var i = 0; i < contents.length; i++) {
		contents[i].classList.remove("active-content");
	}
	content.classList.add("active-content");
}


document.getElementById("goToPage").addEventListener("click", function() {
  window.location.href = "index2.html";
});

document.getElementById("goToPage_2").addEventListener("click", function() {
  window.location.href = "index2.html";
});




document.querySelector('a[href="#section_contacts"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('section_contacts').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#section_about_me"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('section_about_me').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('a[href^="index.html#section_about_me"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('index.html#section_about_me')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

