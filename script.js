document.querySelector(".search-bar button").addEventListener("click", function () {
  const query = document.querySelector(".search-bar input").value.toLowerCase();
  alert(`Search for: ${query}`);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


