Secret Santa Challenge
Este é um projeto para automatizar a geração de sorteios de "Amigo Secreto", ou "Secret Santa", utilizando uma aplicação simples em JavaScript com Node.js.

Descrição
O projeto foi desenvolvido com o objetivo de organizar sorteios de Amigo Secreto de maneira simples e eficiente. A aplicação permite que você insira os participantes, faça o sorteio automaticamente e envie os resultados por e-mail utilizando o Nodemailer.

Funcionalidades Implementadas:
Cadastro de Participantes: A aplicação permite o cadastro de participantes e seus respectivos e-mails.
Sorteio Automático: Após o cadastro, é possível realizar o sorteio para atribuir um "Amigo Secreto" a cada participante.
Envio de E-mails: O resultado do sorteio é enviado automaticamente para cada participante, utilizando o serviço de e-mail do Gmail, configurado com senhas de aplicativos.
Configuração de Ambiente: O projeto é configurado de forma que o ambiente de desenvolvimento e a execução sejam simples, utilizando o Node.js e a biblioteca Nodemailer.
Como rodar o projeto
Pré-requisitos
Antes de começar, verifique se você possui os seguintes pré-requisitos instalados:

Node.js: Você pode baixar a versão mais recente do Node.js aqui.
Git: Para versionar o código e integrá-lo com repositórios como o GitHub.
Passo a passo para rodar a aplicação
Clonar o repositório

Primeiro, clone o repositório para a sua máquina local. Você pode fazer isso utilizando o Git:

bash
Copiar
Editar
git clone git@github.com:eliabner-luna/secret-santa.git
Instalar as dependências

Dentro do diretório do projeto, instale as dependências do projeto utilizando o comando:

bash
Copiar
Editar
npm install
Configurar variáveis de ambiente

Certifique-se de configurar as variáveis de ambiente necessárias. Isso inclui a configuração do serviço de envio de e-mails (no caso, Gmail). Assegure-se de ter uma senha de aplicativo para autenticar a conta de e-mail.

Nota: Para gerar a senha de aplicativo, siga este link da Google.

Executar o projeto

Após a configuração, execute o projeto com o seguinte comando:

bash
Copiar
Editar
node index.js
O aplicativo irá executar e, ao final, os sorteios serão feitos automaticamente e os resultados serão enviados por e-mail para cada participante.

Desafios Encontrados
Durante o desenvolvimento do projeto, enfrentei alguns desafios que me ajudaram a aprender mais sobre a integração de diferentes ferramentas e sobre o funcionamento do Node.js. Alguns dos desafios foram:

Configuração do Nodemailer: Inicialmente, tive dificuldades para configurar corretamente o serviço de envio de e-mails, já que o Gmail exige a utilização de senhas de aplicativos. Superar isso exigiu uma pesquisa mais aprofundada e a consulta à documentação do Nodemailer e do Gmail.

Integração com Git e GitHub: No início, enfrentei dificuldades para realizar o push do meu projeto para o GitHub, especialmente por causa de conflitos entre as versões locais e remotas do repositório. Isso me levou a aprender mais sobre o uso do Git, especialmente sobre o comando git pull --rebase e a resolução de conflitos.

Desafio com Configurações de Branch: Ao configurar o repositório local para o GitHub, houve a necessidade de ajustar a configuração de branch para 'main', o que me fez aprender sobre o comando git push -u origin main e a importância de configurar corretamente as referências no Git.

Esses obstáculos foram desafiadores, mas ao superá-los, aprendi muito mais sobre o uso de ferramentas de versionamento, autenticação de e-mail e configuração de projetos no Node.js.

Contribuindo
Se você gostaria de contribuir para este projeto, siga os passos abaixo:

Fork o repositório.
Crie uma branch para suas mudanças: git checkout -b minha-feature.
Faça commit das suas alterações: git commit -m 'Adicionando minha feature'.
Push para sua branch: git push origin minha-feature.
Abra um pull request com as suas alterações.
