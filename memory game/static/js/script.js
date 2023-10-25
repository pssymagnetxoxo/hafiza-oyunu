
function shuffleArray(arr) {
     for (var i = 0, shuffled = [], randomIndex = 0; i < arr.length; i++) {
         randomIndex = Math.floor(Math.random() *  arr.length);
         while (shuffled.indexOf(arr[randomIndex]) !== -1) {
             randomIndex = Math.floor(Math.random() *  arr.length);
       }
        shuffled.push(arr[randomIndex]);
     }
 
 	return shuffled;
 }
 
 function shuffle(){
 	var arr = ["kedi.jpg", "kedi2.jpg", "kedi3.jpg", "kedi4.jpg", "kedi5.jpg", "kedi6.jpg", "kedi7.jpg", "kedi8.jpg","kedii.jpg", "kedii2.jpg", "kedii3.jpg", "kedii4.jpg", "kedii5.jpg", "kedii6.jpg", "kedii7.jpg", "kedii8.jpg"];
 	var html = "";
	shuffleArray(arr).forEach(function(item){
		html += "<img src='static/img/"+item+"' width='130' height='130' style='margin:10px; float:left;'>";
	})
 	html += "<br style='clear:both;'/>";
 
 	document.getElementById('result').innerHTML = html;
 } 
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const gameBoard = document.getElementById("game-board");

    startButton.addEventListener("click", function() {
        // Burada oyununuzu başlatma kodunu ekleyin
        // Oyun tahtasını ve oyun mantığını burada oluşturabilirsiniz
        alert("Oyun başlatıldı!");
    });
});