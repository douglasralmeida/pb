FROM nginx:1.10
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Atualiza o sistema e apaga arquivos de atualizacao
RUN apt-get update && apt-get dist-upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Adiciona os arquivos de configuracoes
COPY config/nginx.conf config/mime.types /etc/nginx/mime.types

# Adiciona o website
COPY website /usr/share/nginx/html

# Monta o volume de dados
