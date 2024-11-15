document.addEventListener('DOMContentLoaded', function() {

    const signupForm = document.querySelector('.signup form');
    const usernameInput = document.querySelector('[name="Username"]');
    const errorMessage = document.querySelector('#l8');

    usernameInput.addEventListener('input', () => {

        const username = usernameInput.value;

        if (username.length > 9) {
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = "Username should be below 8 letters";
        }
        else if (username.length < 3 && username.length >=1) {
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = "Username should be above 3 letters";
        }
        else {
            errorMessage.style.display = 'none';
            errorMessage.innerHTML = "";
        }
    });

});
