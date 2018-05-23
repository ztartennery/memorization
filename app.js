let answer = Math.floor((Math.random() * 9) + 1);

let randomArray = function() {

    let arr = [];

    while (arr.length < 9) {
        let number = Math.floor((Math.random() * 9) + 1);
        if (!arr.includes(number)) {
            arr.push(number);
        }
    }

    return arr;
}


let arr = randomArray();

let markup = `
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[0]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[1]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[2]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[3]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[4]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[5]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[6]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[7]}.png" alt="" /></div>
</div>
<div class="cardCont">
  <div class="cardBack"><img src="img/question-mark.jpg" alt="" /></div>
  <div class="cardFront"><img src="img/${arr[8]}.png" alt="" /></div>
</div>
`


document.getElementById("pictures").innerHTML = markup;



TweenMax.set($(".cardBack"), {rotationY:-180});

$.each($(".cardCont"), function(i,element) {
  
	var frontCard = $(this).children(".cardFront"),
      backCard = $(this).children(".cardBack"),
      tl = new TimelineMax({paused:true});
	
	tl
		.to(frontCard, 1, {rotationY:180})
		.to(backCard, 1, {rotationY:0},0)
		// .to(element, .5, {z:50},0)
		// .to(element, .5, {z:0},.5);
	
	element.animation = tl;
  
setTimeout(function(){ element.animation.play();}, 1500);

});









$(".cardCont").click(elOut);

// function elOver() {
//     this.animation.play();
// }

function elOut() {
    this.animation.reverse();
}





console.log(randomArray());