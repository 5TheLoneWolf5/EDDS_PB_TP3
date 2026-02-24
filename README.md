# Projeto API CRUD do Banco

### Manual de Execução

1. Clone o projeto:

   * `git clone https://github.com/5TheLoneWolf5/EDDS_PB_TP3.git`


2. Inicie MySQL ou outro banco de dados na máquina local.


3. Coloque as configurações do banco de dados em _application-[banco-escolhido].properties_ dentro de _Back-end/src/main/resources_.


Template do arquivo _application-[banco-escolhido].properties_:

```
spring.application.name=Banco-CRUD
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
```

4. Abra a pasta _back-end_ em uma IDE Java de preferência. Faça o build e execute o programa.


5. (Caso desejado) Adicione a variável de ambiente `JAZZER_FUZZ` com o valor de `1` para fuzzing testing. 


5. Na pasta _front-end_, utilize o comando para instalar os pacotes:

    * `npm install`


6. Ainda em _front-end_, utilize o comando para rodar o front-end:

   * `npm run dev`

Agora, é possível executar os testes com Selenium e acessar a aplicação no browser à escolha.

### Vídeo

https://github.com/user-attachments/assets/7c40a380-61f7-4922-9563-5b315797a1a5

### Relatório de Testes
#### Todos os testes estão passando e colocam à prova o funcionamento do código.

### Cobertura de Testes
#### Objetivo: 100% em Service (Regras de Negócio e Lógica - alcançado). 80% geral (alcançado).

![Cobertura JaCoCo](https://github.com/5TheLoneWolf5/EDDS_PB_TP1/blob/main/jacoco_coverage.jpg?raw=true)
