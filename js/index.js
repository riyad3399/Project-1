// step 1: add click event handler with the Login button
document.getElementById('login-btn').addEventListener('click', function () {
    // step 2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // step 3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 4.c: get the value from the element
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // step 4: verify email and password
    if(email === 'farhadahmed2526@gmail.com' && password=== 'riyadkhan1122'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
})