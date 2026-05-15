const tabButtons = document.querySelectorAll(".tab-btn");
const menuCards = document.querySelectorAll(".menu-card");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    menuCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "212699890818";

    const text =
      `Bonjour, je veux réserver une table.%0A%0A` +
      `Nom : ${encodeURIComponent(name)}%0A` +
      `Téléphone : ${encodeURIComponent(phone)}%0A` +
      `Date : ${encodeURIComponent(date)}%0A` +
      `Heure : ${encodeURIComponent(time)}%0A` +
      `Nombre de personnes : ${encodeURIComponent(people)}%0A` +
      `Message : ${encodeURIComponent(message || "Aucun message")}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  });
}