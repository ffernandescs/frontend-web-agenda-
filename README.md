# Projeto Fron End - WebAgenda

💻 Projeto Desafio deste projeto que se resume em uma aplicação de uma web agenda, onde o usuário tem como a finalidade inserir dados como:
  - Nome
  - Sobrenome
  - Data de Nascimento
  - E-mail
  - Endereço
  - Telefone

Foi feito o deploy deste Projeto que está hospedado em: https://webagenda.netlify.app/ Projeto está funcionando e em comunicação perfeita com o Back End que se encontra hospedado em Link da API :https://web-agenda.herokuapp.com/
Projeto Criado com React utilizando suas dependências e dependências de terceiros para criação da aplicação onde foi feito o consumo da API que foi criada no projeto do Back End.
A Primeira página consiste na página de Login, onde o usuário falar login e sua autenticação irá passar por um processo de criptografia, onde toda essa configuração
foi feita no Projeto "backend-agenda-web" que se encontra em meu Repositório no GitHub.
Para este projeto utilizei dependências como:
 - React-Icones- para estruturar os ambientes com ícones
 - React-router-dom, para realizar todo roteamento das páginas.
 - Utilizei as ferramentas AuthContex e useContex para iniciar um processo de validação da senha,
também utilizei a função localstorage para salvar o token do usuário em sua máquina.
 - Este processo de validação teve sua configuração de Token para expirar com 7 dias.

Para rodar este projeto será necessário clonar os arquivos do meu repositório no Github. No ambiente de desenvolvimento, basta instalar as dependências que se encontram no package.json
Foram Criado a tela principal onde irá constar uma tabela que irá listar todos os contatos inseridos no MongoDB, foi incrementado um botão para iniciar um preenchimento de um formulario que irá adicionar novos contatos e em seguida já será listado.
#Página de Login:


### Para acessar a Página de Login, bastar informar os seguintes usuários:
  - Usuário: web@teste.com
  - Senha: 123456
Este login automaticamente fica com o token salvo no localStorage do navegador, e tem sua expiração em 7 dias. A página inicial só irá funcionar caso o token esteja no salvo no Browser, caso contrário automaticamente a página redireciona para a página de Login.


 <img src="https://uploaddeimagens.com.br/images/003/910/013/full/05.png?1655809266">
 
 ###Página inicial
Adicionar novos contatos, função que irá listar estes novos contatos na página inicial

 
 <img src="https://uploaddeimagens.com.br/images/003/910/014/original/06.png?1655809365">
 
 ### Adicionar novos contatos, função que ira listar estes novos contatos na pagina inicial
 
  <img src="https://uploaddeimagens.com.br/images/003/910/015/full/07.png?1655809477">
  
  
  #Conclusão.
Estou concluindo este projeto que foi um grande desafiador para mim. A cada projeto vivencio novas experiencias e irei adquirindo novas oportunidades, espero que gostem e estarei disposição de todos para quaisquer eventualidades.




