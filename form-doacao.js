
(function () {
    emailjs.init("service_ib4lax8"); // Substitua "service_ib4lax8" pelo seu ID de serviço correto do EmailJS

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);

        emailjs.sendForm('service_ib4lax8', 'template_n4sjb28', formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
            });
    });
})();