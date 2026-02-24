#language: pt

Funcionalidade: Login
  Como usuário
  Quero poder me autenticar no sistema
  Para acessar minha conta

  Cenário: Login com credenciais validas
    Dado que possuo um usuário válido cadastrado
    E que estou na pagina de login
    Quando submeto o formulário com email e senha validos
    Então devo ser autenticado
  
  Cenário: Login com credenciais validas
    Dado que estou na pagina de login
    Quando submeto o formulário utilizando credenciais invalidas
    Então devo visualizar um erro informando que as credenciais são invalidas
