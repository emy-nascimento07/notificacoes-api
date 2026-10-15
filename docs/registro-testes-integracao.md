# Registro de Testes de Integração

Aluno: Emilly Raissa Nascimento.
Grupo: 08.
Data: 15/10/2026.

## Banco de teste

Nome do banco de teste: notificacoes_test
Por que ele é separado do banco da API (uma frase): Para evitar poluição do banco original, permitindo testes livres.

## Testes escritos

| #   | Arquivo | O que o teste verifica | Verde ou vermelho? |
| --- | ------- | ---------------------- | ------------------ |
| 1   | evento.integration.test.js        | Gravar evento no banco com nome válido                       | Verde                   |
| 2   | participante.integration.test.        | Gravar participante com nome e e-mail válidos                       | Verde                   |
| 3   | participante.integration.test.js        | Não gravar participante com e-mail inválido                       | Verde                   |
| 4   | participante.integration.test.js        | Gravar nome novo                       | Vermelho                   |

## Resultado

Linha "Tests:" da saída do npm run test:integration:

## Defeito encontrado

Teste: #4
Esperado: "Ana Maria"
Obtido: "Ana"
O que o usuário da API veria: A rota retorna resposta 200, porém a mudança não é efetivada no banco de dados.
