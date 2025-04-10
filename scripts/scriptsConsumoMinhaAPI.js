$(document).ready(function() {
    $('.btn-primary.cadastrar').click(function (){
        
        // Criando o objeto FormData
        var formData = new FormData();
        formData.append("id", $('#idFilme').val());
        formData.append("resenha", $('#resenha').val());


        // Fazendo a requisição POST ao serviço REST
        $.ajax({
            url: 'http://127.0.0.1:5000/filme',  // URL do serviço REST
            type: 'POST',  // Método da requisição
            data: formData,  // Dados enviados no corpo da requisição
            processData: false,  
            contentType: false,  
            success: function(response) {
                // Exibe a resposta na página
                alert('resenha cadastrada com sucesso')
                $('#exampleModalLong').modal('hide');

            },
            error: function(xhr, status, error) {
                // Caso haja erro na requisição
                alert(error)
            }
        });
    });

    $('.btn-primary.atualizar').click(function cadastraResenha(){
        // Criando o objeto FormData
        var formData = new FormData();
        
        formData.append("id", $('#idFilme').val());
        formData.append("resenha", $('#resenha').val());


        // Fazendo a requisição POST ao serviço REST
        $.ajax({
            url: 'http://127.0.0.1:5000/filme',  // URL do serviço REST
            type: 'PUT',  // Método da requisição
            data: formData,  // Dados enviados no corpo da requisição
            processData: false,  
            contentType: false,  
            success: function(response) {
                alert('resenha atualizada com sucesso')
                $('#exampleModalLong').modal('hide');
            },
            error: function(xhr, status, error) {
                // Caso haja erro na requisição
                alert("Ocorreu um erro na tentattiva de atualização desta resenha")
            }
        });
    });

    $('.btn-danger.excluir').click(function (){

        var id = $('#idFilme').val();

        // Realizando a requisição DELETE para o serviço REST
        $.ajax({
            url: 'http://127.0.0.1:5000/filme?id='+id,  // URL do serviço REST
            type: 'DELETE',  // Tipo de requisição DELETE
            success: function(response) {
                // Exibe a resposta do servidor, caso a requisição seja bem-sucedida
                alert("Resenha de filme removida com sucesso!")
                $('#exampleModalLong').modal('hide');

            },
            error: function(xhr, status, error) {
                // Caso haja erro na requisição
                alert("Ocorreu uma falha na tentativa de remoção do registro!")
            }
        });

    });
    
});