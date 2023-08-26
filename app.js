document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    window.location.href = `mailto:${"miguelrichter99@hotmail.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

document.addEventListener('DOMContentLoaded', function () {
    var navbarNavLinks = document.querySelectorAll('.navbar-nav>li>a');
    navbarNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            document.querySelector('.navbar-collapse').classList.remove('show');
        });
    });
});