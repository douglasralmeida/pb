# Portal da BHSul
[![CircleCI](https://circleci.com/gh/douglasralmeida/pb.svg?style=svg)](https://circleci.com/gh/douglasralmeida/pb)
Projeto para uso interno no INSS.

Bibliotecas utilizadas:
* jQuery 3.1.0 - http://jquery.com/
* Angular JS 1.5.8 - https://angularjs.org/
* Metro UI CSS 3.0.15 - http://metroui.org.ua/

Para implantar:
```
    docker run --name portalbhsul -d -p 80:80 --restart unless-stopped douglasralmeida/portalbhsul
```

Para atualizar:
```
    docker pull douglasralmeida/portalbhsul
    docker stop portalbhsul
    docker rm portalbhsul
    docker run --name portalbhsul -d -p 80:80 --restart unless-stopped douglasralmeida/portalbhsul
````