# coffee-website-tailwind
 A simple website for a coffee shop, using Tailwind CSS



### 30/07/24 
Fazendo initial commit.
Dei uma empacada a background image, estou usando a class bg-[url('/images/images.jpg')] mas não está carregando nenhuma imagem. 
Quando vi sendo usado, ele linkou o tailwind e eu instalei, essa foi a unica diferença que eu achei. Então talvez eu tenha que instalar mias alguma coisa pra funcionar

+ Adicionei bgImage com CSS inline para poder seguir em frente com o projeto 

style="background-image: url('/src/images/bg-img.jpg')"


+ 15:35
Vamos ver a questão da resposividade agora


quando nao estiver carregando, no teminal colocar:

npx tailwindcss -i ./input.css -o ./dist/main.css --watch

### 31/07/24 
21:30
Trabalhando em importar font-family

23:50
Terminei a versão responsiva da Home Page, mas ainda sem desvendar a importação de font no tailwind.

### 01/08/24 
10:56 
Finalizando a ABOUT page. 
Resolver no final:
    -font import
    -drop-shadow
