// after the dom loads, add an event listener to label with content "Button One"
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorByID("btnoneborder").addEventListener("click", function() {
    console.log("Button One was clicked");
    });
});
