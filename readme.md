
# ItMizer


## Guia rapido para utilização do projeto.


<h4 align="center"> 
	🚧  Passos para utilização  🚧
</h4>

* Faça um clone do projeto.
git clone git@github.com:itmizer/multitenant.git   

* Instale do docker e docker compose em sua maquina.
execulte os comandos abaixo que ele ira buildar uma imagem docker com a versão node que estamos utilizando.
docker compose up --build 

Os comandos abaixo servem para iniciar e parar uma aplicação depois de buildar.
docker compose up   
docker compose stop   

Comando para abrir o bash de comando dentro da imagem docker, para instalação de alguma lib etc.
docker compose exec app bash  

## Possiveis erros.
Caso apos buildar a aplicação talvez seja necessário entrar no bash de comando e rodar o comando npm install para instalar as dependencias do projeto.

<h4 align="center"> 
 🚀 Projeto em construção...
</h4>