let btn = document.querySelector(".toggle-div");

const theme = document.getElementById("dark-theme");

btn.addEventListener("click", function (e) {
    e.preventDefault
  if (theme.getAttribute("href") == "darkmode.css") {
    theme.href = "style.css";
  } else {
    theme.href = "darkmode.css";
  }
});
