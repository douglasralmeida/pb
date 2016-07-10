FROM nginx:1.10
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Atualiza o sistema
RUN apt-get update && apt-get dist-upgrade -y

# Adiciona os arquivos
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY website /usr/share/nginx/html

# Executa o servidor como padrao
# ENTRYPOINT ["/usr/sbin/nginx"]

# Abre as portas 80 e 443 para acesso
# EXPOSE 80 443