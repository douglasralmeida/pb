FROM nginx:1.10
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Atualiza o sistema e apaga arquivos de atualizacao
RUN apt-get update && apt-get dist-upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN apt-get install curl

# Adiciona os arquivos de configuracoes
COPY config/nginx.conf config/expires.conf config/mime.types /etc/nginx/

# Adiciona o website
COPY website /usr/share/nginx/html

# Download de aplicativos
RUN curl -v -o /usr/share/nginx/html/download/itens/acrobatreaderdc/AcroRdrDC.msi http://ardownload.adobe.com/pub/adobe/reader/win/AcrobatDC/1700920044/AcroRdrDC1700920044_pt_BR.exe

# Monta o volume de dados
