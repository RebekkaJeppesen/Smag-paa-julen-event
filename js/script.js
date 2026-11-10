// Interaktiv SVG-side

// const huset = document.querySelector(".svg-hus");

// document.querySelector("#advent-1").addEventListener("toggle", lys);
// document.querySelector("#advent-2").addEventListener("toggle", lys);
// document.querySelector("#advent-3").addEventListener("toggle", lys);
// document.querySelector("#advent-4").addEventListener("toggle", lys);

// function lys() {
//   const aaben = document.querySelector(".accordion-item[open]");
//   if (aaben) {
//     huset.dataset.position = aaben.dataset.position;
//   } else {
//     delete huset.dataset.position;
//   }
// }
// lys();

const huset = document.querySelector(".svg-hus");
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  item.addEventListener("toggle", () => {
    if (item.open) {
      huset.dataset.position = item.dataset.position;
      huset.classList.add("vindue-aabent");
    } else {
      huset.classList.remove("vindue-aabent");

      console.log("lyset flyttes til:", item.dataset.position);
    }
  });
});

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
