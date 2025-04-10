$(document).ready(function() {

    // Cabeçalhos da API IMDb
    const headers = {
        'x-rapidapi-key': '7569bf5122msh673e56a04d45445p133f41jsn274e36a3016f',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    };

    // URL da API para pegar os Top 250 filmes
    const url = 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies';

    // Função para fazer a requisição e carregar os filmes
    $.ajax({
        url: url,
        method: 'GET',
        headers: headers,
        success: function(data) {
            // Recuperar a lista de filmes da resposta da API
            const movies = data;
            
            // Iterar e de itens recuperados e criação dos cards de filmes
            movies.forEach(movie => {
                const movieCard = `
                    <div class="col-md-3 mb-4">
                        <div class="card">
                            <img src="${movie.primaryImage}" class="card-img-top" alt="${movie.primaryTitle}" data-toggle="modal" data-target="#exampleModalLong">
                            <div class="card-body">
                                <h5 class="card-title">${movie.primaryTitle}</h5>
                                <p class="card-text">${movie.startYear}</p>
                                <p class="card-text">${movie.genres[0]}</p>
                                <input type= "hidden" value =${movie.id} >
                            </div>
                        </div>
                    </div>
                `;

                // Adicionar o card ao container de filmes
                $('#movies-list').append(movieCard);
                
            });

            //Consumo da rota get da API que armazena as resenhas. 
            //A mesma precisa ser chamada neste trecho por conta do momento de definição dos cards.
            
            $('.card-img-top').click( function(){

                    $('.modal-title').html($('.card-title').html())
                    
                    var id = $(this).parent().children('.card-body').children('input').val();
                    $('#idFilme').val(id)
                    $('#resenha').val(null)

                    $.ajax({
                        url: 'http://127.0.0.1:5000/filme?id='+id,  // URL do serviço 
                        type: 'GET',  // Tipo de requisição 
                        success: function(response) {

                            if($('#resenha').val() != null){
                                $('button.cadastrar').addClass('hidden')
                                $('.atualizar, .excluir').removeClass('hidden')

                            }
                            
                            $('#resenha').val(`${response.resenha}`);
                        },
                        error: function(xhr, status, error) {
                            // Caso haja falha na requisição
                            $('#resenha').val('');
                            $('button.cadastrar').removeClass('hidden')
                            $('button.btn-primary.atualizar, .excluir').addClass('hidden')
                        }
                    });

                });
        },
        error: function(error) {
            alert("Erro ao carregar os filmes do IMDb:", error);
        }
    });


});