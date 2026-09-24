# Registro de Testes Unitários

Aluno: Emilly Raissa Nascimento
Grupo: 8
Data: 24/09/2026

## Testes escritos

| #   | Arquivo | O que o teste verifica | Tipo                    |
| --- | ------- | ---------------------- | ----------------------- |
| 1   | validators.test.js | Ausência de mensagem de erro para e-mail válido | sucesso |
| 2   | validators.test.js | Retorno de mensagem de erro para e-mail sem @ | falha |
| 3   | validators.test.js | Ausência de mensagem de erro para string válida | sucesso |
| 4   | validators.test.js | Retorno de mensagem de erro para string com menos de 3 letras | falha |
| 5   | validators.test.js | Ausência de mensagem de erro para string com exatamente 3 letras | borda |
| 6   | parseId.test.js | Mensagem de ValidationError quando id não é um número | falha |
| 7   | parseId.test.js | Mensagem de ValidationError quando id não possui apenas números | falha |

## Resultado

Passaram: #1, #2, #3, #4, #5, #6
Falharam: #7

## Defeito encontrado

Teste: #7
Esperado: Mensagem de ValidationError
Obtido: 'Received function did not throw'

## Cobertura

% Lines da linha "helpers": 59.25
Em uma frase, o que esse número significa: Porcentagem de helpers que foram realmente testados (cobertos).
