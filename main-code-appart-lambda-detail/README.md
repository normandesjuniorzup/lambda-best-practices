## Demonstração de uma boa prática do AWS Lambda

Sempre que você tiver um código lambda, separe o código que manipula o evento do Lambda do código que executa a lógica da função.

No caso desse exemplo, o cálculo do desconto é feito em uma função _calculateDiscount_ separado do código que é o handler do lambda.

Isso irá facilitar a criação de testes unitários por exemplo, e o seu código pode ser reaproveitado em vários casos, por exemplo, aqui nesse projeto temos duas formas de exposição no API Gateway da AWS, uma via Proxy e outra via Lambda Integration.

Via Proxy recebemos um payload inteiro da AWS, já via Lambda Integration o tratamento é feito no API Gateway, mas perceba que a lógica da aplicação do desconto é a mesma.

### Passos para recriar o projeto

#### Criação do projeto
`serverless create --template aws-nodejs`

#### Deploy do lambda na AWS (atenção o AWS CLI deve estar instalado e configurado)
`sls deploy`

#### Inicializando o jest para os testes unitários
`npm init`

`npm install --save-dev jest`

#### Instalando o jest para testes unitários
`npm install -g jest`

#### Configurando o jest
`jest --init`

#### Rodando os testes
`npm test`
