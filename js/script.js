// Interaktiv SVG-side

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
// const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");
const eventPass = document.querySelector(".event-pass");

if (eventPass) {
  const params = new URLSearchParams(window.location.search);
  const nicknameInput = document.querySelector("#nickname");
  const nickname = params.get("nickname");
  nicknameInput.textContent = nickname;

  const emailSelect = document.querySelector("#email");
  const email = params.get("email");
  emailSelect.textContent = email;

  const ageSelect = document.querySelector("#alder");
  const alder = params.get("alder");
  ageSelect.textContent = alder;

  const nationalSelect = document.querySelector("#nationalitet");
  const nationalitet = params.get("nationalitet");
  nationalSelect.textContent = nationalitet;

  const deltagelseSelect = document.querySelector("#deltagelse");
  const deltagelse = params.getAll("deltagelse");

  if (deltagelse.length > 0) {
    deltagelseSelect.innerHTML = deltagelse.map((valg) => `<li>${valg}</li>`).join("");
  }
}
const checkboxes = document.querySelectorAll('input[name="deltagelse"]');

function validateCheckboxes() {
  const mindstEnValgt = [...checkboxes].some((checkbox) => checkbox.checked);

  checkboxes.forEach((checkbox) => {
    checkbox.required = !mindstEnValgt;
  });
}

if (checkboxes.length > 0) {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", validateCheckboxes);
  });

  validateCheckboxes();
}
// deltagelseSelect.textContent = "Ingen valgt";

// if (opsamlingPlaceholder) {
//   const params = new URLSearchParams(window.location.search);
// Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
