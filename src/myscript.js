
function myFunction() {
  var x = document.getElementById("frm1");

  var first = x.elements[0].value;
  var second =  x.elements[1].value;
  
  document.getElementById("demo").innerHTML = "Area is  " + parseInt(first) * parseInt(second) + "sq.mtr.";  
  document.getElementById("demo1").innerHTML = "Perimeter is  "+ 2*(parseInt(first) + parseInt(second)) + "sq.mtr.";
  
}
