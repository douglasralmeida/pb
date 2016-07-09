FROM centos:7.2.1511
MAINTAINER douglasralmeida <douglasralmeida@live.com>

RUN RUN apt-get update && apt-get install -y \
	nginx

ADD . /website
WORKDIR /website

ENTRYPOINT ["/usr/sbin/nginx"]

EXPOSE 80

CMD ["/bin/bash"]
