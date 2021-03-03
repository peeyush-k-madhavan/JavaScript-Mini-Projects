const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function updateCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedCount = selectedSeats.length;
  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateCount();
  }
});

movieSelect.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  updateCount();
});
