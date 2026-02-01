const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

// Open modal when page loads
window.onload = function () {
  modal.style.display = "block";
};

// Close modal when clicking the X
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the box
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
