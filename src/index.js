//Variables//

const allProfessions = `http://localhost:3000/professions`
const allTests =`http://localhost:3000/tests`
const questions = `http://localhost:3000/questions`
//Dom Elements

const mainContent = document.getElementById('main-content')

//fetches
fetch(allProfessions)
.then((response) => {
    return response.json();
})
.then((professions) => {
//  renderProfessions(professions);
console.log(professions);
});

//test-fetch
fetch(allTests)
.then(res => res.json())
.then((data) => console.log(data));

//question-fetch
fetch(questions)
.then(res => res.json())
.then((json) => console.log(json));

//renders
function renderProfessions(professions){
    professions.forEach(renderOneProfession)
}

function renderOneProfession(profession) {
    const sectionDiv = document.createElement('div')
    sectionDiv.className = "section"
    sectionDiv.dataset.id = profession.id
    mainContent.innerHTML += `
     <h2 class="name">${profession.field}</h2>
  `
  mainContent.append(sectionDiv)
}

// function popSelect(){
//     let professions = fetch(allProfessions)
//     let element = document.getElementById("professions")
//     for (var i = 0; i < birds.length; i++) {
//         // POPULATE SELECT ELEMENT WITH JSON.
//         element.innerHTML = element.innerHTML +
//             '<option value="' + professions[i]['id'] + '">' + professions[i]['field'] + '</option>';
//     }
// }

// function show(element) {
//     // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
//     var msg = document.getElementById('msg');
//     msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
//         'id: <b>' + ele.value + '</b>';
// }