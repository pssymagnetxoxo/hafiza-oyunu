
/*
    this is very inefficient, you are picking a random element from the entire set every time then checking if that element was already picked
    what if you have an array with 100,000 elements? in order to pick the last remaining element you would need to call Math.random() many many times
    what if your array had duplicate elements? which you actually needed to but you hacked your way around it by duplicating your images with different names
    also array.indexOf() method is considered slow (especially if you have a large array)
    take a look at the fastShuffleArray and shuffleArrayBenchmark methods i provided to see the difference between a good and a bad shuffle
    try to understand where this algorithm spends most of its time, and how the other algorithm avoids that
*/
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

 function fastShuffleArray(arr){
    // make a copy of the array, we could shuffle in-place too, but your code makes a copy so i made one too
    const shuffled = [...arr];

    for(let i=shuffled.length - 1; i>0; i--){
        // pick a random value from 0 to i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // swap two elements using array destucturing, basically equivalent to using temp variable
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
 }

function shuffleArrayBenchmark() {
    // helper function for left padding
    function leftPad(str, len, padding){
        if(typeof str !== "string"){ str = `${str}`; }
        if(str.length >= len){ return; }
        return Array(len - str.length).fill(padding).join("") + str;
    }

    // helper function for benchmarking
    function measureShuffleDuration(fn, arr, runCount){
        let startTime, totalDuration;

        startTime = Date.now();
        for(let t=0; t<runCount; t++){
            fn(arr);
        }
        return Date.now() - startTime;
    }

    const arr1 = ["kedi.jpg", "kedi2.jpg", "kedi3.jpg", "kedi4.jpg", "kedi5.jpg", "kedi6.jpg", "kedi7.jpg", "kedi8.jpg","kedii.jpg", "kedii2.jpg", "kedii3.jpg", "kedii4.jpg", "kedii5.jpg", "kedii6.jpg", "kedii7.jpg", "kedii8.jpg"];
    
    // create a large array where every element is a 100 character long 0-padded int
    // so arr2 = [ "00...00", "00...01", "00...02", ..., "00..0998", "00..0999"]
    const arr2 = [];
    for(let i=0; i<10000; i++){
        arr2.push(leftPad(i, 100, "0"));
    }

    const arr1Slow1MTimes = measureShuffleDuration(shuffleArray, arr1, 1000000);
    console.log(`shuffleArray took ${arr1Slow1MTimes}ms for 1 million runs with ${arr1.length} elements`);

    const arr2Slow1Time = measureShuffleDuration(shuffleArray, arr2, 1);
    console.log(`shuffleArray took ${arr2Slow1Time}ms for a single run with ${arr2.length} elements`);

    const arr1Fast1MTimes = measureShuffleDuration(fastShuffleArray, arr1, 1000000);
    console.log(`fastShuffleArray took ${arr1Fast1MTimes}ms for 1 million runs with ${arr1.length} elements`);

    const arr2Fast1MTimes = measureShuffleDuration(fastShuffleArray, arr2, 1000);
    console.log(`fastShuffleArray took ${arr2Fast1MTimes}ms for 1 thousand runs with ${arr2.length} elements`);
 }
 
 function shuffle(){
    // kedix.jpg and kediix.jpg are the same image!
    // why download 2 separate images for the same image? just reuse the old one
 	var arr = ["kedi.jpg", "kedi2.jpg", "kedi3.jpg", "kedi4.jpg", "kedi5.jpg", "kedi6.jpg", "kedi7.jpg", "kedi8.jpg","kedii.jpg", "kedii2.jpg", "kedii3.jpg", "kedii4.jpg", "kedii5.jpg", "kedii6.jpg", "kedii7.jpg", "kedii8.jpg"];
 	var html = "";
	shuffleArray(arr).forEach(function(item){
        // i don't recommend hard-coded style values, these are better if defined in css
		html += "<img src='static/img/"+item+"' width='130' height='130' style='margin:10px; float:left;'>";
	})
 	html += "<br style='clear:both;'/>";
 
 	document.getElementById('result').innerHTML = html;
 } 
document.addEventListener("DOMContentLoaded", function() {
    // i think these are copied from somewhere else, because you don't have either of these elements
    const startButton = document.getElementById("start-button");
    const gameBoard = document.getElementById("game-board");

    // this throws an error
    startButton.addEventListener("click", function() {
        // Burada oyununuzu başlatma kodunu ekleyin
        // Oyun tahtasını ve oyun mantığını burada oluşturabilirsiniz
        alert("Oyun başlatıldı!");
    });
});

/*
    overall there is not much to say about this project since it's not finished. are you not interested in these kinds of projects?
    if so i rather find you something you will enjoy working on, rather than force you to work on coding
    so please let me know what kind of projects would make you happy. i can help with any kind of algorithm, system design, dev ops,
    or database design sort of problems. yasin and zafer are very good at website front-end design and other user interface related problems.
    but you can also choose graphics design, video editing, or 3d modelling related problems where osman has a lot of experience in.
    i at least want to you pick something you will enjoy working on and will want to finish. if you are not sure what to pick,
    you can also try them all. so let me know how you want to proceed
*/



