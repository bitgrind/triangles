var triangleDraw = function(sideA, sideB, sideC) {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var x = 50;
  var y = 50;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + sideA,y);
  ctx.lineTo(x + (sideB / 2),y + (sideC / 2));
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

$(function(){

  $("#triangles").submit(function(event) {
    event.preventDefault();
    //creating triangle array
    var s = [];
    $('#triangle-type').hide();
    //making triangle side array
    $(".sides").each(function(){
      s.push(parseInt($(this).val()));
    });
    console.log('if structure');
    if(s[0] == s[1] || s[1] == s[2] || s[0] == s[2]){
      if(s[1] == s[2] && s[0] == s[2] && s[0] == s[1]){
        console.log('equilateral triangle');
        $('#equilateral').show(300);
      }
      if((s[0] == s[1] && s[0] != s[2]) || (s[1] == s[2] && s[1] != s[0])){
        console.log('isosceles triangle');
        $('#isosceles').show(300);
      }
    } else if(s[0] + s[1] <= s[2]){
      //no sides are equal
      console.log('not a triangle');
      $('#notatriangle').show(300);
    } else {
      // Scalene triangle
      console.log('scalene triangle');
      $("#scalene").show(300);
    }
    console.log('after if structure');

    triangleDraw(s[0],s[1],s[2]);
  });
});
