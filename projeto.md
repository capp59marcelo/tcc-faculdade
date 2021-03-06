# Backend

Nos estamos em Containers / Serverless e IA por causa disso algumas tecnologia sao meio que obrigatorias.

Como nos vamos utilizar Containers / Serverless eu coloquei para seguirmos a arquitetura de microservice, atualmente e a que vejo mais sendo utilizada nos projetos modernos de backend, praticamente toda empresa grande ja utiliza microservice hj, o projeto que eu trabalho na Daitan ja utiliza microservice. Outra vantagem e a separacao do Business do projeto, poderiamos ter um microservico para cada area, por exemplo um microservice com o Frontend, um microservico com a API de gerar o negocio do Ronaldo,
um microservice seria o chatbot, o outro seria para geracao dos dashboards.
Se nao fosse utilizar microservice o backend seria basicamente uma servico contendo toda a logica e rodando num container na cloud, nao vejo nenhuma novidade nisso, ao utilizar microservice podemos utilizar varios outras tecnologias e patterns legais que ajudaria muito no aprendizado.
Em relacao a linguagem e frameworks, uma das vantagens de microservice e que cada servico pode ser feito em uma linguagem diferente caso necessario, no final tudo vai se comunicar via Rest ou por um Queue tanto faz a linguegem utilizada.
Coloquei Java como principal linguagem a ser utilizada pois vejo ela como sendo a mais utlizada em microservice, por possuir excelentes frameworks para se trabalhar com microservice / cloud e principalmente por ser a mais constante nas vagas de backend em Campinas e regiao,
mas podemos utilizar Nodejs para o chatbot ou Python para criar um microservice focado em ML e Analytics ou qualquer outra linguagem / framework que o pessoal preferir para criar um microservice especifico.

Vou colocar o tema / tecnologia e o quanto eu acho recomendado, os altamente eu acho bastante importante, agora os outros da para seguir sem ou utilizar outra tecnologia caso o pessoal decida.

Temas(ou melhor Patterns):

API Gateway:  Altamente recomendado
Load Balance:  Altamente recomendado
Circuit braker:  Recomendado
Service Discovery:  Altamente recomendado
Access token:  Altamente recomendado
Messaging:  Recomendado
Distributed logging:  Recomendado
Distributed tracing:  Recomendado

Nao precisamos ficar utilizando um framework para cada um deles, Kubernetes ja faz bastante.

Esses sao alguns temas que eu vejo bastante relacionados a microservico e comumente utilizados junto.

Tecnologias:

Docker: Requisito
Kubernetes:  Requisito

Eu tenho conhecimento em Java / Spring por isso sugeri ele para criar a base do projeto como API Gateway, Service Discovery, Load Balance. Mas podemos utilizar outras liguagens / tecnologia junto:

C# com ASP.NET Core: bastante vagas por ai, roda no linux sem problemas, sintaxe de java, serve para criar microservicos sem problemas.
Nodejs: Tbm serve para criar microservicos, muito bom para criar Chatbots
Python: Tbm serve para criar microservicos, muito bom para criar Chatbots e APIs focadas em ML ou Analytics.
Go: Excelente para microservicos, o mais rapido e leve entre todos.

Caso alguem prefira podemos utilizar outra linguagem como Ruby, Scala, Kotlin, PHP, Elixir.

Joao falou que vai precisar ser entregue teste unitario completo para o Backend, para Java eu seu fazer sem problemas, para outras linguagens precisamos estudar como funciona., mas no geral acho que da para fazer teste unitario para a maioria das linguagens sem tanto problema.
Para Java tem JUnit e Mockito, ja e suficiente.

Para Bancos de Dados podemos utilizar mais de um caso for preciso, por exemplo a API do ronaldo utiliza MongoDB e os outros servicos utilizam algum SQL da vida. Acho que no geral qualquer banco vai funcionar.

PostgreSQL: gratuito, muito utilizado e vem crescendo bastante. Performance muito boa, consome pouca RAM
MySQL: gratuito, ja foi lider de mercado, consumo um pouco alto de RAM. Facil de utilizar
MongoDB: Nova modinha, se o pessoal quiser utilizar um banco NoSQL para brincar e ver como e eu recomendo esse cara, utilizo no trabalho, vem crescendo muito ja e lider entre os NoSQL. Vantagem de possuir servico na cloud gratuito e muito bom.

Existe outros bancos como Redis, Cassandra, Neo4J que funcionam muito bem para alguns cenarios, caso alguem queira podemos utilizar algum deles em algum microservico especifico.

Existe alguns outros topicos como Database migrations, Swagger, CI / CD que precisam ser discutidos com o Joao se ele vai cobrar isso, caso ele for cobrar precisa ser feito junto agora no comeco.

Em relacao a Cloud temos 3 possiveis, AWS, Google Cloud, Azure.
Nao tenho nada contra nenhum.
Google Cloud nao cobra nada, AWS ate cobra, mas acho que para o nosso uso nao vamos  passar dos limites para continuar gratuito, Azure nao cobra nada.
Google Cloud funciona melhor com Kubernetes(Google e a criadora do Kubernetes)
AWS aparentemente e boa para serverless
Azure tem alguns servicos como reconhecimento facial que podemos utilizar no projeto para Login por exemplo.

A parte do Chatbot precisa ser melhor estudada, eu sugeri o Dialogflow da Google na aula pois vejo bastante tutorial sobre ele por ai, mas podemos escolher outros.

Coloquei as tecnologias de maneira mais geral, e claro que vamos precisar de mais coisa como um library que ajude a fazer os Dashboards, alguma coisa para gerar metricas do sistema, mas para esses e outros casos vamos escolhendo conforme a necessidade.

Existe a parte mais forte de ML, como por exemplo gerar perguntas baseado em um tema que o professor escolher, para isso vamos precisar utilizar ML com Web scraping, mas acho que vai ser numa segunda etapa, precisamos primeiro montar o projeto, colocar em containers / cloud, configurar tudo, criar as primeiras
paginas, para ai depois partir para esses topicos mais dificieis

Para completar nossa arquitetura podemos utilizar varios outros caras como Ambassador, Consul, Kong, Zuul, Hazelcast, Spark, Elasticsearch, Project  Reactor, Tensorflow, mas isso fica para o segundo round.

## Lista

Docker
Kubernetes
API Gateway - Ambassador
Load Balance - Kubernetes
Circuit braker
Service Discovery - Kubernetes
Access token / JWT
Messaging
Distributed logging
Distributed tracing

Java / Spring
C# / ASP.NET
Python
Nodejs
Go

Google CLoud
AWS
Azure

PostgreSQL
MySQL
MongoDB