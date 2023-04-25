let menuDiv = document.getElementById("menu");
let logbookDiv = document.getElementById("logbook");
let summaryDiv = document.getElementById("summary");

let menub = document.getElementById("menub");
let dzienniki = document.getElementById("dzienniki");
let pod = document.getElementById("pod");

menub.onclick = function () {
  menuDiv.classList.remove("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.add("hidden");
};
dzienniki.onclick = function () {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.remove("hidden");
  summaryDiv.classList.add("hidden");
};
pod.onclick = function () {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.remove("hidden");
};

let subDataDiv = document.getElementById("subData");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (evt) => {
  menuDiv.classList.add("hidden");
  subDataDiv.classList.remove("hidden");
  evt.preventDefault();
});

const editBtn = document.getElementById("edit");

editBtn.onclick = function () {
  menuDiv.classList.remove("hidden");
  subDataDiv.classList.add("hidden");
};
const select = document.querySelector("#topics");
console.log(select);
console.log(teachingProgram);
teachingProgram.forEach((element) => {
  const optGr = document.createElement("optgroup");
  optGr.label = `${element.name}`;
  element.topic.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.innerText = option;
    optGr.append(opt);
  });
  select.appendChild(optGr);
});
