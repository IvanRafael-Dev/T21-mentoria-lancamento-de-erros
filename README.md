# Roteiro

## Explicando Projeto

- Camada de Model
  - Simulando um DB

- Camada de Service
  - Observando as chamadas do Model

- Camada de Controller 
  - Analizando as chamadas do Service

- montando a factory de movieController

## Requisição de Teste GetAll

## Validando requisição para getById

  - tratamento caso filme não seja encontrado
  - tratando no controller try catch
  - tratando no service / catch do controller
  - erro não é tratado / explode no terminal
  - criando o middleware de erro
  - catch do controller dando next para middleware de erro
  - usando rescue para fazer o next(error) automaticamente
  - problema com statusCodes
  - criando erros padronizados

## validando requisição add
  - problema ao inserir movies sem validação
  - validando o body da requisição
    - check title
      - criando um novo erro MissingParamError - 400
    - check genre
      - criando um novo erro MissingParamError - 400
    - check year
      - criando um novo erro InvalidParamError - 422
      
## Refatorando para classe validations
  - criando classe e interfaces
  - adicionando dependencia em MovieServices
  - atualizando factory