// Vis knappen når brugeren scroller ned 100px fra toppen af dokumentet
window.onscroll = function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Funktion til at scrolle tilbage til toppen
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
