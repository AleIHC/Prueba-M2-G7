//Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//Button Alert
$(document).ready(function(){
    $("#message-send").click(function(){
        alert("El correo fue enviado correctamente...");
    });
});