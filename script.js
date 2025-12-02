let addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");



addBtn.addEventListener("click",()=>{
     let name = prompt("Ism kiriting")
      let age = prompt("yosj")
      let info = prompt("ma'lumot")
})

Array


const heroes = [
  {
    name: "Spiderman",
    age: 18,
    power: "To'r Chiqarish",
    info: "Marvel qahramoni. Juda chaqqon.",
    likes: 0,
  },
  {
    name: "Betman",
    age: 32,
    power: "Aql va texnologiya",
    info: "Gotham shahrini himoya qiladi.",
    likes: 0,
  },
  {
    name: "Flash",
    age: 21,
    power: "Juda tez yugurish",
    info: "Dunyodagi eng tez qahramon.",
    likes: 0,
  },
];

function likePlus(btn) {

}



function renderData() {
  for (let i = 0; i < heroes.length; i++) {
    let div = document.createElement("div");
    div.className = "card";

    let h2 = document.createElement("h2");
    h2.textContent = heroes[i].name;

    let  power = document.createElement("p");
    power.textContent = "Kuchi" + heroes[i].power;

    let age = document.createElement("p");
    age.textContent = "Yoshi" + heroes[i].age;

    let info = document.createElement("p");
    info.textContent = heroes[i].info;

    let btn = document.createElement("button");
    btn.textContent = "Like bosish" + heroes[i].likes;


    btn.addEventListener("click",()=>{
      // let name = prompt("Ism kiriting")
      // let age = prompt("yosj")
      // let info = prompt("ma'lumot")

  let number = parseInt(heroes[i].likes);
  number++;
  btn.textContent = "Like " + number;
    })

    div.appendChild(h2);
    div.appendChild(power);
    div.appendChild(age);
    div.appendChild(info);
    div.appendChild(btn)

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let currentLikes = Number(btn.dataset.like); // data-like dagi raqamni olamiz
        currentLikes++; // +1 qilamiz
        btn.dataset.like = currentLikes; // yana saqlaymiz
        btn.textContent = "Like bosish: " + currentLikes; // tugmaga yozamiz
    });
});


    container.appendChild(div)
  }
}

renderData()

