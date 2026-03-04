#language: pt

Funcionalidade: Extrato
    Como usuário
    Quero visualizar as movimentações da minha conta no BugBank
    Para poder ter controle eficiente do meu histórico

    Cenário: Visualizar movimentação de abertura de conta no extrato
        Dado que estou autenticado em uma conta com saldo disponível
        Quando que acesso a página de extrato
        Então devo visualizar uma movimentação de abertura de conta
        E a movimentação deve exibir a data atual, valor: 1000 e tipo: "Abertura de conta" 