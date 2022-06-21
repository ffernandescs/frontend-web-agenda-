# Projeto Fron End - WebAgenda

💻 Projeto Desafio deste projeto que se resume em uma aplicação de uma webagenda, onde o usuario tem como a finalidade inserir dados como:

```
  - Nome
  - Sobrenome
  - Data de Nascimento
  - Email
  - Endereço
  - Telefone
 ```
 
 Projeto Criado com React utilizando suas dependencias e dependencias de terceiros para criação da aplicação.
 ```
 A Primeira pagina consistem na pagina de Login, onde o usuario falar login e sua autenticação ira passar por um processo de criptografia, onde toda essa confiuração
 foi foita no Projeto "backend-agenda-web" que se encontra em meu Repositorio no GitHub.
 ```
 Para este projeto utlizei dependecias como:
 ```
  - React-Icones- para Estruturar o ambientes com incones
  - React-router-dom, para realizar todo roteamento das paginas.
  - Utilizei as ferramentas AuthContex e useContex para iniciar um preocesso de validação da senha,
tambem utilizei a funcção localstorage para salvar o token do usuario em sua maquina.
  - Este processo de validação teve sua confiração de Token para expirar com 7 diass.
```

Para rodar este projeto em ambiente de desenvolvimento, basta instalar as dependencias que se encontram no package.json

Foram Criado a tela pricipal onde ira constar uma tabela que ira listar todos os contatos inseridos no MongoDB,
foi incrementado um botao para iniciar um preenchimento de um formulario que ira adicionar novos contatos e em seguida ja sera listados.

#Pagina de Login:

### Para acessar a Pagina de Login, bastar informar os seguintes usuarios:
```
  - Usuario: web@teste.com
  - Senha: 123456
 ```

Este login automaticamente fica com o token salvo no localStorage do navegador, e tem sua expiração em 7 dias.
A pagina incial so ira funcionar caso o token esteja no salvo no Browser, caso contrario automaticamente a pagina redireciona para a pagina de Login.

 <img src="https://uploaddeimagens.com.br/images/003/910/013/full/05.png?1655809266">
 
 ###Pagina inicial
 
 A pagina inicial ira listar todos os contatos em uma tabela inserida, foi incrementado um botão para que seja possivel crescentar novos contatos
 
 <img src="https://uploaddeimagens.com.br/images/003/910/014/original/06.png?1655809365">

### Pagina inicial, a mesma ira listar os dados que constam no banco de dados do MongoDB, ao adicionar contatos, automaticamente sera inserido na tela pricipal

 <img src="https://uploaddeimagens.com.br/images/003/910/015/full/07.png?1655809477">
 
 ### Adicionar novos contatos, função que ira listar estes novos contatos na pagina inicial
 
  <img src="https://uploaddeimagens.com.br/images/003/910/015/full/07.png?1655809477">
  
  
  #Conclusão.
  
  Estou concluindo este projeto que foi um grande desafiador para mim. A cada projeto vivencio novas experiencias e irei adiquirindo novas oportunidades, espero que gostem e estarei disposição de todos para quaisquer eventualidades.



