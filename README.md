---
title: "Good Browser Games"
author: "Mack pro"
---

**Índice**

- [1. Introdução](#1-introdução)
- [2. Escopo do projeto](#2-escopo-do-projeto)
- [3. Requisitos do projeto](#3-requisitos-do-projeto)
- [4. Integrantes do grupo](#4-integrantes-do-grupo)

## 1. Introdução

Esse projeto está sendo desenvolvido para matéria de **Prática Profissional em Análise e Desenvolvimento de Sistemas**, do quinto período do curso de _Análise e Desenvolvimento de Sistemas_ da _Universidade Presbiteriana Mackenzie_, ministrada pelo professor _Tomaz Mikio Sasaki_.

O projeto consiste desenvolvimento de um novo sistema web de indicação e catalogação de jogos de navegador. 

O **GoodBrowserGames** deverá ser uma comunidade web onde seus membros poderão compartilhar as suas impressões sobre os browser gamers que já jogaram, identificando o que gostaram e o que não gostaram. 

Com estas informações, o **GoodBrowserGames** poderá dar para cada membro recomendações de browser games que ele ainda não conhece e que provavelmente irá gostar.


## 2. Escopo do projeto

O escopo desse projeto é um sistema web que permite o usuário conhecer, cadastrar e avaliar jogos de navegadores. O projeto deverá seguir os seguinte story points definidos pelo professor da matéria: 

1. O administrador do **GoodBrowserGames** será responsável por cadastrar os _browser games_ que serão avaliados pelos membros.

2. Os browser games serão organizados nas seguintes categorias iniciais: _Strategy_, _Shooter_, _Puzzle_, _Arcade_, _Role Playing Game (RPG)_, _Sports_, _Action_, _Adventure_. No entanto, o administrador poderá editar esta lista, criando novas categorias ou alterando os nomes das categorias já cadastradas.

3. Ao cadastrar um _browser game_, o administrador deverá fornecer as seguintes informações: nome, categoria (conforme as opções do item anterior), URL de acesso ao jogo, URL do vídeo de demonstração (se houver), descrição em 255 caracteres e imagem ilustrativa.

4. Qualquer pessoa poderá se cadastrar como membro do **GoodBrowserGames** mediante o fornecimento das seguintes informações: nome completo, username que deseja utilizar, senha para acessar o sistema, data de nascimento, estado e país. Cada membro poderá atualizar posteriormente os dados fornecidos no cadastro.

5. O membro terá as seguintes opções para buscar pelos _browser games_ cadastrados: (a) busca pelo nome ou por parte do nome, (b) busca pela categoria (ao selecionar uma das categorias cadastradas, é apresentada uma lista dos browser games desta categoria em ordem alfabética).

6. Após navegar até um determinado _browser game_, o membro poderá avaliá-lo definindo quantas estrelas (de 1 a 5) dará para o jogo e escrevendo um texto de até 255 caracteres. Caso o membro já tenha avaliado o _browser game_ anteriormente, ele visualizará as informações da avaliação que havia feito e terá a opção de alterá-las (afinal, pode ser que tenha mudado a sua opinião sobre o jogo).

7. Após navegar até um determinado _browser game_, o membro poderá também visualizar uma lista com todas as avaliações que já foram feitas para o jogo selecionado pelos outros membros do **GoodBrowserGames**.

8. Se o membro achar que a avaliação feita pelo outro membro foi útil, será possível marcar a opção "Esta avaliação foi útil para mim".

9. O membro poderá solicitar uma lista das avaliações mais úteis do **GoodBrowserGames**, ordenadas e mostrando primeiro as que receberam mais marcações na opção "Esta avaliação foi útil para mim".

10. Ao escolher visualizar as recomendações que o **GoodBrowserGames** tem a oferecer, o membro visualizará uma lista com os browser games que ele ainda não avaliou e provavelmente irá gostar. Para dar recomendações de acordo com o "gosto" do membro, o **GoodBrowserGames** deverá utilizar um algoritmo escolhido pela equipe. O algoritmo escolhido deverá ser explicado em detalhes na documentação do projeto.

11. O administrador poderá obter os seguintes relatórios de um determinado período (ou seja, definindo as datas inicial e final) de operação do **GoodBrowserGames**:
     - 5 jogos que receberam maior número de avaliações;<br>
     - 5 membros que realizaram o maior número de avaliações;<br>
     - 5 jogos que têm a maior nota média de avaliação (neste caso, só devem ser levados em conta os jogos que já receberam pelo menos 4 avaliações no
período);<br>
     - 3 categorias que receberam maior número de avaliações.
     
## 3. Requisitos do projeto

a) O **GoodBrowserGames** deverá ser colocado em operação como uma aplicação web.<br>
b) Os dados do **GoodBrowserGames** deverão ser persistidos em uma base de dados (relacional ou NoSQL).<br>

## 4. Integrantes do grupo

Alexandre Ricci Preuss - 19508387 <br>
Guilherme G Chaves - 20014481<br>
Leonidas L N Oliveira - 20009240<br>
William Vilas Boas Gomes - 20004346<br>
Willian Leite Barcelos - 1950926-1<br>
