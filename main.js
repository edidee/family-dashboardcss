let btn = document.querySelector(".switch");

const theme = document.getElementById("dark-theme");

btn.addEventListener("click", function () {
    
  if (theme.getAttribute("href") == "style.css") {
    theme.href = "darkmode.css";
  } else {
    theme.href = "style.css";
  }
});
