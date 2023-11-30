# Projeto Herói

Este projeto é uma aplicação web simples que permite aos usuários criar um herói e realizar uma ação (atacar).

## Estrutura do Projeto

O projeto consiste em três partes principais:

1. **HTML**: A estrutura da página é definida no arquivo HTML. Ele contém um formulário onde os usuários podem inserir o nome, idade e tipo do herói. O resultado da ação do herói é exibido na mesma página.

2. **JavaScript**: A lógica por trás da criação do herói e da ação de ataque está contida em um arquivo JavaScript. Ele contém uma classe `heroi` com um construtor e um método `atacar`. Além disso, existem várias funções que validam as entradas do usuário, criam um novo herói e exibem uma mensagem na página.

3. **CSS**: A aparência da página é definida em um arquivo CSS. Ele contém regras que definem o layout, cores, fontes e outros aspectos visuais da página.

## Como Funciona

Quando o usuário insere o nome, idade e tipo do herói e clica no botão "Enviar", a função `submitForm` é chamada. Esta função recupera os valores inseridos pelo usuário e os passa para a função `validarEntradas`.

A função `validarEntradas` verifica se todos os campos foram preenchidos. Se algum campo estiver vazio, ela exibe uma mensagem pedindo ao usuário para preencher todos os campos. Se todos os campos estiverem preenchidos, ela cria um novo herói e chama o método `atacar`.

O método `atacar` determina o tipo de ataque com base no tipo do herói e chama a função `infoPlayerMensagem` para exibir uma mensagem na página.

## Exemplo de Uso

Para ver a aplicação em ação, abra o arquivo HTML em um navegador. Você verá um formulário onde pode inserir o nome, idade e tipo do herói. Insira esses detalhes e clique em "Enviar". Você verá uma mensagem na página indicando o tipo de ataque que o herói realizou.
