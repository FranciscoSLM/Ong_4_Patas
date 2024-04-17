// script.js

const items = document.querySelectorAll('.carousel-item');
let index = 0;

function nextItem() {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
}

setInterval(nextItem, 5000); // Troca a cada 5 segundos

const app = function(){
    $('#submit-newsletter').on('click',function(){
        console.log('submit-newsletter');
        $.ajax({
            url:"localhost:3000/submitemail",
            method:"POST",
            data:{ email: $('#submit-newsletter').val()},
            success: function(response) {
                // Limpa o campo de email após o envio bem-sucedido
                $('#email').val('');

                // Exibe uma mensagem de sucesso para o usuário
                alert('Inscrição na newsletter realizada com sucesso!');
            },
            error: function(xhr, status, error) {
                // Exibe uma mensagem de erro se ocorrer um problema durante o envio
                alert('Ocorreu um erro ao tentar se inscrever na newsletter. Por favor, tente novamente mais tarde.');
                console.error(error);
            }
        })
    });

    $('#submit-message').on('click',function(){
        console.log('submit-message');
        $.ajax({
            url:"localhost:3000/submitmessage",
            method:"POST",
            data:{ email: $('#Email').val(),
                   name : $('#Name').val(),
                   phone : $('#Phone').val(),
                   message : $('#Message').val()
                 },
                 success: function(response) {
                    // Limpa o campo após o envio bem-sucedido
                    $('#Email').val('');
                    $('#Name').val('');
                    $('#Phone').val('');
                    $('#Message').val('');

                    // Exibe uma mensagem de sucesso para o usuário
                    alert('Mensagem enviada com sucesso!');
                },
                error: function(xhr, status, error) {
                    // Exibe uma mensagem de erro se ocorrer um problema durante o envio
                    alert('Ocorreu um erro ao tentar enviar a mensagem. Por favor, tente novamente mais tarde.');
                    console.error(error);
                }
        })
    });

    $('#contact').on('click',function(){
        window.scrollTo(0, document.body.scrollHeight);
    });
}();