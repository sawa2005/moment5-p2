"use strict"

// Variabler
let coursesEl = document.getElementById("courses");
let addButton = document.getElementById("submit");
let codeInput = document.getElementById("code");
let nameInput = document.getElementById("name");
let progInput = document.getElementById("progression");
let syllInput = document.getElementById("syllabus");

// Funktioner
function getCourses() {
    // Återställ kurslistan
    coursesEl.innerHTML = '<tr><th><strong>Kurskod:</strong></th><th><strong>Kursnamn:</strong></th><th><strong>Progression:</strong></th><th><strong>Kursplan:</strong></th></tr>';

    fetch('http://samuelwarduppgifter.one/rest/rest.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(course => {
                coursesEl.innerHTML +=
                `<tr>
                    <td>${course.code}</td>
                    <td>${course.name}</td>
                    <td>${course.progression}</td>
                    <td><a href="${course.syllabus}">Webblänk</a></td>
                    <td><button id="${course.code}" onClick="deleteCourse('${course.code}')">Radera</button></td>
                </tr>`
            })
        })
}

function deleteCourse(code) {
    fetch("http://samuelwarduppgifter.one/rest/rest.php?code=" + code, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error:', error);
        })
}

function addCourse() {
    let code = codeInput.value;
    let name = nameInput.value;
    let progression = progInput.value;
    let syllabus = syllInput.value;

    let course = {'code': code, 'name': name, 'progression': progression, 'syllabus': syllabus};

    fetch("http://samuelwarduppgifter.one/rest/rest.php", {
        method: 'POST',
        body: JSON.stringify(course),
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error:', error);
        })
}

// Eventlyssnare
window.addEventListener('load', getCourses);
addButton.addEventListener('click', addCourse);