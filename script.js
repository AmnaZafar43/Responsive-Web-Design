let search = document.querySelector(".searchBar");
let navbar = document.querySelector(".navbar");
let menuIcon = document.querySelector("#menu-icon");

document.querySelector("#search-icon").onclick = () => {
  navbar.classList.remove("active");
};

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

function checkDocumentFocus(e) {
  if (document.hasFocus()) {
    document.title = "Coffee Shop";
    // body.style.background = "white";
  } else {
    document.title = "Come Back";
    // body.style.background = "gray";
  }
}

window.addEventListener("focus", checkDocumentFocus);
window.addEventListener("blur", checkDocumentFocus);
