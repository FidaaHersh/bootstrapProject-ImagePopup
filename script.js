function popUp() {
      var person = prompt("Please enter your name");

      return("Hello!" + person + "! How are you today?");
      return("Sup");
    }



// Jquery section

// var h3Text = $("#Feelings").text("Happy")
 $("#Feelings").append("<h3 id="feel1" class="feel"> + "Happy" +</h3>")

 var h3 = $("<h3></h3>");
$('#Feelings').append(h3);
h3.attr('id', 'feel1');
$(function(){
   $("#feel1").css({
     "padding": "5px",
     "margin": "5px",
     "border-radius": "8px",
     "color": "green"
 });
 });
