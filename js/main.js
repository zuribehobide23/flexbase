let datubase = [
    {
      "isbn": "1617293563",
      "egilea": "Raoul-Gabriel Urma",
      "data": "Nov 15, 2018",
      "izenburua": "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      "filename": "8508261-M.jpg"
    },
  
   {
      "isbn": "9781617291302",
      "egilea": "Benjamin Muschko",
      "data": "Mar 09, 2014",
      "izenburua": "Gradle in Action",
      "filename": "8514400-M.jpg"
    },
  
       {
      "isbn": "1883601126",
      "egilea": "Matt Welsh",
      "data": "1995",
      "izenburua": "The Linux bible",
      "filename": "6764181-M.jpg"
    },
    
  {
      "isbn": "9781617293290",
      "egilea": "Dmitry Jemerov",
      "data": "Feb 19, 2017",
      "izenburua": "Kotlin in Action",
      "filename": "8507716-M.jpg"
    }
  ]

const BASE = "https://covers.openlibrary.org/b/id/"

let orria = document.querySelector("body > div > div.flex.right > form > p:nth-child(5) > input[type=submit]:nth-child(2)");

let indizea = 0;

BesteLiburua ()

function BesteLiburua () {
  const liburua = datubase[indizea];
  document.querySelector("#argazkia").src = BASE + liburua.filename;
  document.querySelector("#izenburua").value = liburua.izenburua;
  document.querySelector("#egilea").value = liburua.egilea;
  document.querySelector("#isbn").value = liburua.isbn;
  document.querySelector("#data").value = liburua.data;
}

let aurrekoa = document.querySelector("#aurrekoa");
let hurrengoa = document.querySelector("#hurrengoa");

aurrekoa.addEventListener("click", (event) => {
  event.preventDefault();
  if (indizea > 0) {
    indizea--;
    BesteLiburua();
  }
})

hurrengoa.addEventListener("click", (event) => {
  event.preventDefault();
  if (indizea < datubase.length - 1) {
    indizea++;
    BesteLiburua();
  }
})

