FROM node:14.19.3-slim

# tomar cuidado com o usuario do sistema - não use o usuario root
# por padrão o usuario do sistema é root
# usando o usuario node, usando o padrão minimo privilegios, que o padrão é 1000
USER node

# informa qual o diretorio que será o diretorio de trabalho do usuario
WORKDIR /home/node/app

#commando tail vai ler um arquivo, e como estou passando null
#ele vai ler o arquivo, porem não tem nada, e vai ficar travando na tela.
CMD ["sh", "-c", "npm install && tail -f /dev/null"]