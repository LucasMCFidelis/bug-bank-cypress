#language: pt

Funcionalidade: Cadastro
  Como possível usuário
  Quero poder criar uma conta no BugBank
  Para assim ter acesso a uma conta em um banco digital

  Cenário: Cadastro de usuário sem saldo inicial
    Dado que estou na página de cadastro
    Quando NÃO seleciono a opção de criar conta com saldo
    E submeto o formulário de cadastro com dados válidos
    Então minha conta deve ser criada
    E redirecionado para pagina principal
    E devo estar sem saldo
  