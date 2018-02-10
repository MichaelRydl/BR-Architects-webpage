let sizeOfTheMenu = window.innerWidth;

if (sizeOfTheMenu >= 961) {
  function openNav() {
    document.getElementById("sideNav").style.width = "30vw";
  }
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }
} else {
  function openNav() {
    document.getElementById("sideNav").style.width = "100%";
}
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }
}