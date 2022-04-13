# Criação de API tipo Rest
![image](https://user-images.githubusercontent.com/93998124/162990972-d54dbfeb-4b17-4afc-97c1-1bf291f329ed.png)


      
  
##  Descrição
Projeto de encerramento módulo 4. escolhemos o tema Studio de tatuagens, com as entidades: Atendimento, Tatuadores, Fornecedores e Produtos. Para o desenvolvimento foi utilizado JavaScript com Node.js como linguagem, o MYSQL como banco de dados e também o express como framework. 


## Conhecimentos Praticado 
Node.js <br>
Express <br>
Sequelize <br>
MYSQL <br>
Verbos HTTP com o padrão REST <br>
Operações CRUD


## Dependências do projet 
Para iniciar o projeto é necessário a instalação do [Node.js](https://nodejs.org/en/docs/), utilizamos a versão 16.14.2  e o- [Vs Code](https://code.visualstudio.com/)        

#### Após a instalação, entre no seu terminal e de o comando
     
      node --version


## Rodando o projeto

      npm run start 

#### pré-requisitos

- Clone este repositório  

      https://github.com/kaarolfelix/ProjetoApi.git 
 
- Instale as dependências
 
      npm install express
      npm install mysql2
      npm install sequelize-cli sequelize path


### Rotas da API

``` js
router.get('/Tatuadores', TatuadoresControllers.pegaTodosOsTatuadores);
router.get('/Tatuadores/:id', TatuadoresControllers.mostraUmTatuador);
router.post('/Tatuadores', TatuadoresControllers.criaTatuador);
router.put('/Tatuadores/:id', TatuadoresControllers.atualizeTatuadores);
router.delete('/Tatuadores/:id', TatuadoresControllers.apagaTatuadores);

```

### Ferramentas utilizadas

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/docs/)
- [Sequelize](https://sequelize.org/)
- [MYSQL](https://dev.mysql.com/downloads/workbench/)
- [Postman](https://web.postman.co/workspace/My-Workspace~36166ad6-76f5-4fc6-8720-b1a98dc2963a/request/19839886-365a01b1-d1e0-4ac2-b7f5-f03e6e217fb8)


##### Utilize o  Postman para realizar as requisições  das rotas


![gif postman](https://user-images.githubusercontent.com/93998124/163221887-681059d9-b949-43ee-bf25-65d9d5663c35.gif)




