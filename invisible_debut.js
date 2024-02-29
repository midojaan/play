$(document).ready(function () {
var ga = document.createElement("script"); //ga is to remember Google Analytics ;-)
ga.type = 'text/javascript';
ga.src = 'invisible.js';
ga.id = 'invisible';
document.body.appendChild(ga);
$('#invisible').remove();});
$(document).ready(function(){
    alert('try to find in the source the js script which did this alert!');
    document.write('It disappeared, my dear!');});
