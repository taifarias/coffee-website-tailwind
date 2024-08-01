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

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch