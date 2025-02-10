$( document ).ready(
  function() {
    console.log( "ready!" );

    
  $('#baseRectangleFront').draggable(); 
    
  $("#adBox").on('click', function(){
    
     $("#adBox").animate({left: '500px'});
    
  })
  }
);

//move adBox when clicked
$(document)
  .on(
    'click', 
      (event)=> 
      {
        // alert(event.target.id); 
        let $clicked = $('#'+event.target.id );  
        // alert($clicked.position().top);
        
        console.log(
          event.target.id, 
          $('#'+event.target.id)
          .position()
          .left);
       
})

//show the position of adbox 
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("adBox").addEventListener("click", getPoint);
});

function getPoint() {
  let adBox = document.getElementById("adBox");
  let output = document.getElementById("output");

  if (!adBox) {
    output.innerHTML = "Element not found!";
    return;
  }

  let rect = adBox.getBoundingClientRect();

  output.innerHTML =
    "Screen X: " + rect.left + "px<br>" +
    "Screen Y: " + rect.top + "px";
}