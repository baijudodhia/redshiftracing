document.getElementById("navigation").innerHTML =
    '<div class="fixed-top">' +
    '<nav class="navbar navbar-expand-lg navbar-light" style="background-color:white;max-height:64px;padding:6px;">' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<a class="navbar-brand py-0 mx-auto" href="/index.html" style="max-height:100%;">' +
    '<img src="rsr-logo.jpg" alt="Logo" style="max-height:48px;" class="rounded" />' +
    '</a>' +
    '<div class="collapse navbar-collapse" id="navbarSupportedContent" style="padding:10px;">' +
    '<ul class="navbar-nav mx-auto" id="navul">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="sponsors.html">Sponsors</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="gallery.html">Gallery</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="team.html">Team</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="contact.html">Contact</a>' +
    '</li>' +
    '</ul>' +
    '<div class="d-flex justify-content-around" style="padding:8px;">' +
    '<a href="https://kjsce.somaiya.edu/en" target="_blank">' +
    '<img src="media/images/logos/kjsce-svu.svg" alt="KJSCE-SVU" style="max-height:48px;">' +
    '</a>' +
    '<a href="https://svv.somaiya.edu/en">' +
    '<img src="media/images/logos/SomaiyaTrust_Logo.jpg" alt="Somaiya Trust" style="max-height:48px;padding-left:5px;">' +
    '</a>' +
    '</div>' +
    '</div>' +
    '</nav>' +
    '</div>';

function setActive() {
    aObj = document.getElementById('navul').getElementsByTagName('a');
    for (i = 0; i < aObj.length; i++) {
        if (document.location.href.indexOf(aObj[i].href) >= 0) {
            aObj[i].className += ' active';
        }
    }
}
window.onload = setActive;