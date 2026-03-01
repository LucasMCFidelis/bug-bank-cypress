#language: pt

Funcionalidade: Cadastro
  Como possível usuário
  Quero poder criar uma conta no BugBank
  Para assim ter acesso a uma conta em um banco digital

  Cenário: Autenticação automática após cadastro de usuário
    Dado que estou na página de cadastro
    Quando submeto o formulário de cadastro com dados válidos
    Então devo ser redirecionado para pagina principal

  Cenário: Cadastro de usuário sem saldo inicial
    Dado que estou na página de cadastro
    E NÃO seleciono a opção de criar conta com saldo
    Quando submeto o formulário de cadastro com dados válidos
    Então minha conta deve ser criada
    E meu saldo inicial deve ser de 0

  Cenário: Cadastro de usuário com email já cadastrado
    Dado que estou na página de cadastro
    E já existe uma conta cadastrada com o e-mail informado
    Quando submeto o formulário utilizando um e-mail já cadastrado
    Então deve ser exibida uma mensagem informando o conflito
    E os dados informados devem permanecer preenchidos no formulário de cadastro

  Cenário: Cadastro de usuário com saldo inicial
    Dado que estou na página de cadastro
    E seleciono a opção de criar conta com saldo
    Quando submeto o formulário de cadastro com dados válidos
    Então minha conta deve ser criada
    E meu saldo inicial deve ser de 1000