FROM nginx:1.10
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Atualiza o sistema e apaga arquivos de atualizacao
RUN apt-get update && apt-get dist-upgrade -y && rm -rf /var/lib/apt/lists/*

# Adiciona os arquivos
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY website /usr/share/nginx/html

# Monta o volume de dados
