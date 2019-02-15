FROM nginx:1.14
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Instala o curl
RUN apt-get update && apt-get -qq -y install curl

# Atualiza o sistema e apaga arquivos de atualizacao
RUN apt-get update && apt-get dist-upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Adiciona os arquivos de configuracoes
COPY config/nginx.conf config/expires.conf config/mime.types /etc/nginx/

# Adiciona o website
COPY website /usr/share/nginx/html

# Monta o volume de dados
