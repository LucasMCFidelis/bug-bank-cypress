#language: pt

Funcionalidade: Logout

    Cenário: Logout com sucesso (encerramento de sessão e redirecionamento)
        Dado que estou autenticado em uma conta com saldo disponível
        Quando seleciono a opção Sair ou Logout
        Então minha sessão deve ser encerrada com sucesso
        E devo ser redirecionado para a página de login

    Cenário: Bloqueio de acesso a páginas autenticadas após logout
        Dado que estou autenticado em uma conta com saldo disponível
        Quando seleciono a opção Sair ou Logout
        E tentar acessar uma página que exige autenticação
        Então devo ser redirecionado para a página de login