ARG BASE_IMAGE=ubuntu:latest
FROM ${BASE_IMAGE}

ENV DEBIAN_FRONTEND=noninteractive

ENV TERM=xterm-color

RUN apt-get update && apt-get -y full-upgrade \
	&& apt-get install -y --no-install-recommends \
        bind9 \
		bind9-host \
        curl \
		dnsutils \
        gpm \
        iputils-ping \
        less \
        mc \
        nano \
        net-tools \
        tmux \
        wget \
	&& rm -rf /var/lib/apt/lists/*

COPY ../../configs/tmux/tmux.conf /etc/tmux.conf
COPY ../../configs/nano/nanorc /root/.nanorc

EXPOSE 53

COPY container_init.sh container_init.sh
RUN chmod +x container_init.sh
CMD ["./container_init.sh"]