# ArquiteturaDeSoftware_2019-2 - GesFute
Trabalho de Arquitetura de Software - 2019 / 2;

Este trabalho consite em duas aplicações, uma de Front-End e outra Back-End, cada uma em seu respectivo diretório.
A arquitetura da aplicação como um todo é baseada na ideia de MEAN stack. Uma MEAN stack tem como base as seguintes tecnologias:
- ***M**ongoDB*
- ***E**xpress*
- ***A**ngular*
- ***N**ode.js*


## Instalação
Para poder executar a aplicação, é necessário instalar algumas dependencias antes:
 - [Node.js and npm](https://nodejs.org/en/download/).
 - [Mongo](https://www.mongodb.com/download-center/community)

No caso de edição do projeto também sugere-se a utilização do Angular CLI:
  > npm install -g @angular/cli

## Execução

Para executar a aplicação, são necessários 4 terminais:
 - 2 para o MongoDB 
 - 1 para o Back-End do projeto 
 - 1 para o Front-End
### How-to 

  1. Abrir um terminal (em qualquer diretório) e rodar:
> mongod
  2. Abrir um terminal (em qualquer diretório) e rodar:
> mongo
  3. Abrir um terminal no diretório `<path_to_project>/ges-fute/backend` e rodar:
> node server.js
  4. Abrir um terminal no diretório `<path_to_project>/ges-fute/backend` e rodar:
> ng serve"

 - URL do Banco de Dados: `mongodb://localhost:27017/gesfute_backend`;
 - URL da API: `http://localhost:8080/api`;
 (A porta pode mudar caso a 8080 já esteja em uso. E as URLs da API podem ser verificadas no arquivo `constants`)
 - URL da aplicação Front-End: `http://localhost:4200/`;

