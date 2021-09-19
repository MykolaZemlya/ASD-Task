
window.onload = function() {
   window.setInterval(function() {
      var a = moment.locale("ua");
      var c = moment().format("ddd D MMM HH:mm");
      document.getElementById("datedisplay").innerHTML = c;
   }
   );
}
  
function changeBackground() { 
   document.body.style.backgroundImage = `url(${event.target.src})` 
 }


    
