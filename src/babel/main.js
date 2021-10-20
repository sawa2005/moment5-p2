"use strict"; // Variabler

var coursesEl = document.getElementById("courses");
var addButton = document.getElementById("submit");
var codeInput = document.getElementById("code");
var nameInput = document.getElementById("name");
var progInput = document.getElementById("progression");
var syllInput = document.getElementById("syllabus"); // Funktioner

function getCourses() {
  // Återställ kurslistan
  coursesEl.innerHTML = '<tr><th><strong>Kurskod:</strong></th><th><strong>Kursnamn:</strong></th><th><strong>Progression:</strong></th><th><strong>Kursplan:</strong></th></tr>';
  fetch('http://samuelwarduppgifter.one/rest/rest.php').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (course) {
      coursesEl.innerHTML += "<tr>\n                    <td>".concat(course.code, "</td>\n                    <td>").concat(course.name, "</td>\n                    <td>").concat(course.progression, "</td>\n                    <td><a href=\"").concat(course.syllabus, "\">Webbl\xE4nk</a></td>\n                    <td><button id=\"").concat(course.code, "\" onClick=\"deleteCourse('").concat(course.code, "')\">Radera</button></td>\n                </tr>");
    });
  });
}

function deleteCourse(code) {
  fetch("http://samuelwarduppgifter.one/rest/rest.php?code=" + code, {
    method: 'DELETE'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    getCourses();
  })["catch"](function (error) {
    console.log('Error:', error);
  });
}

function addCourse() {
  var code = codeInput.value;
  var name = nameInput.value;
  var progression = progInput.value;
  var syllabus = syllInput.value;
  var course = {
    'code': code,
    'name': name,
    'progression': progression,
    'syllabus': syllabus
  };
  fetch("http://samuelwarduppgifter.one/rest/rest.php", {
    method: 'POST',
    body: JSON.stringify(course)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    getCourses();
  })["catch"](function (error) {
    console.log('Error:', error);
  });
} // Eventlyssnare


window.addEventListener('load', getCourses);
addButton.addEventListener('click', addCourse);