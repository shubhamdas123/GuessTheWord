function addUser() {
    player1 = document.getElementById("player1Name").value;
    player2 = document.getElementById("player2Name").value;
    console.log(player1);
    console.log(player2);
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location = "gamePage.html";
}