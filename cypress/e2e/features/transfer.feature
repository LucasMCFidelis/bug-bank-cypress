#language: pt

Funcionalidade: Transferência
  Como usuário
  Quero poder enviar saldo da minha conta
  Para outra conta válida

  Cenário: Redirecionamento para Extrato após Transferência com sucesso
    Dado que possuo número e dígito de uma conta para onde será realizada a transferência 
    E que estou autenticado em uma conta com saldo disponível
    E que acesso a página de transferência
    Quando submeto o formulário informando uma conta de destino válida, valor válido e descrição válida
    Então devo ser redirecionado para a página de extrato

  Cenário: Transferência para conta válida com sucesso
    Dado que possuo número e dígito de uma conta para onde será realizada a transferência 
    E que estou autenticado em uma conta com saldo disponível
    E que acesso a página de transferência
    Quando submeto o formulário informando uma conta de destino válida, valor válido e descrição válida
    Então deve ser exibida a mensagem "Transferência realizada com sucesso"
    E o valor transferido deve ser debitado do meu saldo

  Cenário: Tentativa de transferência para a própria conta
    Dado que estou autenticado em uma conta com saldo disponível
    E que acesso a página de transferência
    Quando submeto o formulário informando os dados da minha própria conta como destino
    Então deve ser exibida a mensagem "Não pode transferir pra mesma conta"
    E o valor do meu saldo deve se manter inalterado
  
  Cenário: Transferência com valor negativo
    Dado que possuo número e dígito de uma conta para onde será realizada a transferência 
    E que estou autenticado em uma conta com saldo disponível
    E que acesso a página de transferência
    Quando submeto o formulário informando um valor negativo para a transferência
    Então deve ser exibida a mensagem "Valor da transferência não pode ser 0 ou negativo"
    E o valor do meu saldo deve se manter inalterado
  
  Cenário: Transferência com valor superior ao saldo disponível
    Dado que possuo número e dígito de uma conta para onde será realizada a transferência 
    E que estou autenticado em uma conta com saldo disponível
    E que acesso a página de transferência
    Quando submeto o formulário informando um valor maior que o saldo disponível
    Então deve ser exibida a mensagem "Você não tem saldo suficiente para essa transação"
    E o valor do meu saldo deve se manter inalterado