document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Optional: Validate inputs here

  // Simulate success
  document.getElementById("orderForm").reset();
  document.getElementById("thankYou").classList.remove("hidden");
});
