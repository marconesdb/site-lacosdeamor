document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(this);
    emailjs.sendForm('service_ib4lax8', 'template_n4sjb28', this)
        .then(function(result) {
            alert("Success!! Your query is generated in our system.");
            console.log(result.text);
            document.getElementById('myForm').reset();
        }, function(error) {
            alert("Error! Something went wrong.");
            console.log(error.text);
        });
});