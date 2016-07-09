FROM centos:7.2.1511
MAINTAINER douglasralmeida <douglasralmeida@live.com>

ADD . /image_build
RUN /image_build/preparar.sh

EXPOSE 80

CMD ["/bin/bash"]
