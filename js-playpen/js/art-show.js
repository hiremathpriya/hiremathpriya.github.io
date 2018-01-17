var count = 0;

var timer;

var trump;
var drums;

document.addEventListener("DOMContentLoaded", function(evt) {

  timer = window.setInterval(addImage, 500);
  trump = document.getElementById('trump');
  drums = document.getElementById('drums');

});

var addImage = function() {

  var posx = (Math.random() * (document.documentElement.clientWidth - 50)).toFixed();
  var posy = (Math.random() * (document.documentElement.clientHeight - 150));

  if (posy < 140) {

    console.log('top', posy);
    console.log('adjusting height', (140 - posy) + 5);

    posy += (140 - posy) + 5;

    console.log('adjusted to ', posy);

  }

  posy = posy.toFixed();

    
    var magic = document.getElementById('magic')
    var img =  document.createElement("img");
    img.src="../images/dancingTrump.GIF";

    document.getElementById('body').appendChild(img);

    count++;

    if (count % 10 === 0) {
      drum.pause();
      dancingTrump.play();
    } else {
      dancingTrump.pause();
      drum.play();
    }

    if (count > 1000) {
      window.clearInterval(timer);
      dancingTrump.pause();
      drum.pause();
    }









    img.className="trump";



    //magic.appendChild(img);
    img.style.position="absolute";
    img.style.left=posx.toString() + "px";
    img.style.top=posy.toString() +  "px";

    //console.dir('left', img.style.left);
    console.log('after setting', posy);


    //document.appendChild(img);

    document.getElementById('body').appendChild(img);

    count++;

    if (count % 10 === 0) {
      drums.pause();
      trump.play();
    } else {
      trump.pause();
      drums.play();
    }

    if (count > 1000) {
      window.clearInterval(timer);
      trump.pause();
      drums.pause();
    }



}

var c=document.getElementById("magic");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
imageObj1.src = "../images/drum.GIF"
imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 328, 526);
   imageObj2.src = "../images/dancingTrump.GIF";
   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 15, 85, 300, 300);
      var img = c.toDataURL("image/GIF");
      document.write('<img src="' + img + '" width="328" height="526"/>');
   }
};
