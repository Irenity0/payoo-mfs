document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNum = document.getElementById('login-phone-number').value;
    const pinNum = document.getElementById('login-pin-number').value;

    if(phoneNum === '01911223344' && pinNum === '1234'){
        console.log(`you're logged in`);
        window.location.href = 'home.html';
    }
    else{
        alert(`Incorrect Number or Pin, please try again`);
    }
})