# api-vendas
API com Node, Typescript, Express, TypeORM, e Docker
### Para rodar o projeto é necessário estar dentro dessa pasta do projeto no terminal e ter o docker instalado, execute o seguinte comando:
`docker-compose run node_app npm install`

e depois

`docker-compose up`

### Para rodar as migrations execute
`docker-compose run node_app npm run typeorm migration:run`
### Para testar se a api está acessível entre no endereço:

[http://localhost:3333](http://localhost:3333)

