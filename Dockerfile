FROM nginx:1.10
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Adiciona os arquivos
ADD . /website
ADD website /website
WORKDIR /website

# ADD . css/

# ADD . fonts/

# ADD . js/

# "build/css/metro.css", 
# "build/css/metro-icons.css", 
# "build/css/metro-rtl.css", 
# "build/css/metro-responsive.css", 
# "build/css/metro-schemes.css", 
# "build/fonts/metro.eot", 
# "build/fonts/metro.svg", 
# "build/fonts/metro.ttf", 
# "build/fonts/metro.woff", 
# "build/js/metro.js" 

# Executa o servidor como padrao
# ENTRYPOINT ["/usr/sbin/nginx"]

# Abre a porta 80 para acesso
# EXPOSE 80

