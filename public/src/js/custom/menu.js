/*----- Arquivo referente a resposividade e animação do component de menu e sidebar do site -----*/

function handleCloseMenu() {
  document.getElementById("menu").style.transform = "translateY(-100%)";
}

function handleOpenMenu() {
  document.getElementById("menu").style.transform = "translateY(0)";
}
