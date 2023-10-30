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

/*
// Отримуємо всі кнопки
const buttons = document.querySelectorAll('.button_text');

// Отримуємо всі контент-секції
const contentSections = document.querySelectorAll('.content_section');

// Додаємо обробник події для кожної кнопки
buttons.forEach(button => {
button.addEventListener('click', () => {
  // Знайдіть ID контенту, який відповідає цій кнопці
  const targetContentId = button.getAttribute('data-target');

  // Знайдіть контент-секцію, яка відповідає цьому ID
  const targetContent = document.getElementById(targetContentId);

  // Видаляємо клас "active" з усіх кнопок
  buttons.forEach(btn => btn.classList.remove('active'));

  // Додаємо клас "active" до натиснутої кнопки
  button.classList.add('active');

  // Приховуємо всі контент-секції
  contentSections.forEach(section => section.style.display = 'none');

  // Показуємо контент, відповідний обраній кнопці
  targetContent.style.display = 'block';
});
});

// За замовчуванням показуємо вміст для кнопки "About me"
document.getElementById('about_me_Content').style.display = 'block';
document.getElementById('about_me_Button').classList.add('active');

*/
/*
document.getElementById("about_me_Button").addEventListener("click", function() {
  setActiveButton(this);
  displayContent("about_me_Content");
});

document.getElementById("skills_Button").addEventListener("click", function() {
  setActiveButton(this);
  displayContent("skills_Content");
});

document.getElementById("education_Button").addEventListener("click", function() {
  setActiveButton(this);
  displayContent("education_Content");
});

function setActiveButton(button) {
  var buttons = document.querySelectorAll(".button_text");
  for (var i = 0; i < buttons.length; i++) {
	 buttons[i].classList.remove("active_button");
  }
  button.classList.add("active_button");
}

function displayContent(contentId) {
  var contents = document.querySelectorAll(".content_section");
  for (var i = 0; i < contents.length; i++) {
	 contents[i].style.display = "none";
  }
  document.getElementById(contentId).style.display = "block";
}

// За замовчуванням показуємо вміст для кнопки "About me"
document.getElementById("about_me_Content").style.display = "block";

*/