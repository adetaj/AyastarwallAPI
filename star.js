// //CONST fetch = require("node-fetch")
// API:https://swapi.dev/
// fetch('https://swapi.dev/api/people')
//         .then(res => {
//             if (res.ok) {
//                 console.log ("REQUUEST SUCCESSFUL")
//             }
//             else {
//                 console.log("REQUEST NOT SUCCESSFUL")
//             }
//             return res
//         })
//         .then(res => res.json())
//         .then(data => console.log(data())
//             .catch(error => console.log(error))

const charholder = document.querySelector(".charholder");
const starpic = document.querySelector(".starpic");
// select the characters container
const main = document.querySelector(".main--actors__container");
let actorsArray = [];

// function to load api data on html document loaded into the browser
const handleSwapiApi = async () => {
  main.innerHTML = "";
  main.classList.remove("main");
  main.classList.add("main--actors");
  main.innerHTML = `<h3 class="load" syle="text-align: center;">Loading...</h3>`;
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
// copy the loaded swapi api data results into an empty array
  actorsArray = [...data.results];

//   create a html elements and insert it into the main class container
  const html = data.results
    .map((item, i) => {
      return `   <div class="actors" data-id="">
        <div class="card" >
            <div class="card--desc">
            <h4 class="card--title">${item.name}</h4>
            <button class="btn" data-id=${i}>Details</button>
        </div>
    </div> 
    </div>`;
    })
    .join("");
  main.innerHTML = html;
};

//  function to handle each of the various characters by providing each character details
const handleEachCharacter = async (url) => {
  main.innerHTML = "";
  main.innerHTML = `<h3 class="load" >Loading...</h3>`;
  main.classList.add("main");
  main.classList.remove("main--actors");

  const response = await fetch(url);
  const data = await response.json();

  main.classList.add("main--actors");
  const html = ` <div class="actor">
    <p class="actor-name">name  <span> ${data.name}</span></p>
<p class="actor-dob">Date of birth <span> ${data.birth_year}</span></p>
<p class="actor-gender">Gender <span> ${data.gender}</span></p>
<p class="actor-eye">Eye color <span> ${data.eye_color}</span></p>
<p class="actor-height">height <span> ${data.height}</span></p>
<p class="actor-mass">Mass <span> ${data.mass}</span></p>
<p class="actor-color">Skin color <span> ${data.skin_color}</span></p>
<div class="back">Characters</div>
</div>`;
  main.innerHTML = html;
  console.log(data);
  document.querySelector(".back").addEventListener("click", handleSwapiApi);
};
main.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.classList.contains("btn")) return;
  const id = +target.dataset.id;
  const character = actorsArray[id];
  handleEachCharacter(character.url);
});

window.addEventListener("DOMContentLoaded", handleSwapiApi);

// let starData = []
// fetch("https://swapi.dev/api/people")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         starData = data["results"]
//         starData.map(({ name }, i) => starholder.innerHTML +=
//             <div class="card" role="${i}" >
//             <img src="https://random.imagecdn.app/500/150" />
//                <h1 role="${i}"> ${name}</h1>
//             </div>
//         )
//     })
//     .catch(err => console.log(err))
// console.log(charholder)
