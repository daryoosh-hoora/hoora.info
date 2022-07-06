// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.onload = function () {
    const darktoggle = document.getElementById("darkmode")

    darktoggle.addEventListener("change", function (e) {
        document.body.classList.toggle("hoora-darkmode", e.target.checked)
    })
}