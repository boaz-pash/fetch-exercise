/** @type {Document['createElement']} */
const el = document.createElement.bind(document);
let clickButton = document.getElementById("click-me");
let foreMoreFive = document.getElementById("more-five");
async function getData() {
  const response = await fetch("https://randomuser.me/api");
  if (response.ok) {
    const data = await response.json();
    console.log(data.results[0]);
    return data;
  } else {
    throw new Error("Error! the response status is: " + response.status);
  }
}
async function moreFiveMale() {
  const response = await fetch(
    "https://randomuser.me/api?gender=male&results=5"
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data.results[0]);
    return data;
  } else {
    throw new Error("Error! the response status is: " + response.status);
  }
}
clickButton.addEventListener("click", async () => {
  const userObj = await getData();
  printData(userObj.results[0]);
});
foreMoreFive.addEventListener("click", async () => {
  const userObj = await moreFiveMale();
  for (let i = 0; i < userObj.results.length; i++) {
    const element = userObj.results[i];
    printData(userObj.results[i]);
  }
});
function printData(userObj) {
  let container = el("h1");
  let name = el("li");
  let age = el("li");
  let email = el("li");
  let photo = el("img");
  name.innerText = userObj.name.first;
  age.innerText = userObj.dob.age;
  email.innerText = userObj.email;
  photo.src = userObj.picture.medium;
  document.body.appendChild(container);
  container.append(name, age, email, photo);
}
