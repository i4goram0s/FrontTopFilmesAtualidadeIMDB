# Front-End listagem elencada pelo IMDB dos Filmes mais populares da atualidade

Este projeto disponibiliza uma tela simples com a listagem dos filmes mais populares da atualidade, classificados pelo IMDB;

Esta listagem é recuperada por meio do consumo da api do [IMDb](https://rapidapi.com/octopusteam-octopusteam-default/api/imdb236/playground/apiendpoint_ed134c5d-a3e2-42a3-b52b-f659563f0e70).

A página também faz o cosumo de uma api para armazenamento de resenhas que o usuário pode cadastrar, atualizar e remover.

Para ter acesso a area de visualização/edição das resenhas, basta clicar na imagem do filme desejado.

---
## Como executar em modo de desenvolvimento

Basta fazer o download do projeto e abrir o arquivo index.html em seu navegador.

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
docker build -t nome_da_sua_imagem .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
docker run -d -p 8080:80 nome_da_sua_imagem
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:8080/#/) no navegador.

### Alguns comandos úteis do Docker

>**Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
>```
>$ docker images
>```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>```
>$ docker rmi <IMAGE ID>
>```
>Subistituindo o `IMAGE ID` pelo código da imagem
>
>**Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
>```
>$ docker container ls --all
>```
>
> Caso queira **parar um conatiner**, basta executar o comando:
>```
>$ docker stop <CONTAINER ID>
>```
>Subistituindo o `CONTAINER ID` pelo ID do conatiner
>
>
> Caso queira **destruir um conatiner**, basta executar o comando:
>```
>$ docker rm <CONTAINER ID>
>```
>Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).