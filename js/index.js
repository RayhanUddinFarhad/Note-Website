document.getElementById('bold').addEventListener ('click', function () {

    const textArea = document.getElementById('input');

    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
      } else {
        textArea.style.fontWeight = 'bold';
      }

    








})






document.getElementById ('italic').addEventListener ('click', function () {

    const textArea = document.getElementById('input');

    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
      } else {
        textArea.style.fontStyle = 'italic';
      }








 } );

document.getElementById ('underline').addEventListener ('click', function () {

    const textArea = document.getElementById('input');

    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = 'none';
      } else {
        textArea.style.textDecoration = 'underline';
      }







 } );
document.getElementById ('text-center').addEventListener ('click', function () {

    document.getElementById("input").style.textAlign = "center";








 } );
document.getElementById ('text-left').addEventListener ('click', function () {

    document.getElementById("input").style.textAlign = "left";








 } );
document.getElementById ('text-right').addEventListener ('click', function () {

    document.getElementById("input").style.textAlign = "right";








 } );




document.getElementById ('font-case').addEventListener ('click', function () {

    document.getElementById("input").style.textTransform = "lowercase";








 } );
document.getElementById ('text-size').addEventListener ('keyup', function (e) {
    document.getElementById("input").style.fontSize = e.target.value + "px";

   









 } );








 const fontColorImg = document.getElementById('font-color');
 const textArea = document.getElementById('input');
 
 fontColorImg.addEventListener('click', () => {
   const colorPicker = document.createElement('input');
   colorPicker.type = 'color';
   colorPicker.addEventListener('input', () => {
     textArea.style.color = colorPicker.value;
   });
   colorPicker.click();
 });
 