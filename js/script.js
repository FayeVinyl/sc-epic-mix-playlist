//Skills practiced: functions, forEach, let, createElement, classList, innerHTML, append, template literals

const epicMix = [
  "Flowers By the Door",
  "Cruelty Brought Thee Orchids",
  "Flowers and You",
  "Two Coffins",
  "Tears Don't Fall",
  "Black Masks & Gasoline",
  "Do I Wanna Know?",
  "Love Will Tear Us Apart",
  "Spellbound",
  "I Will Follow You into the Dark",
  "I Write Sins Not Tragedies",
  "Scavengers"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo();
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  epicMix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
