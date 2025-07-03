ARG BASE_IMAGE=ubuntu:latest
FROM ${BASE_IMAGE}

ENV DEBIAN_FRONTEND=noninteractive

ENV TERM=xterm-color

# Install basic tools
RUN apt-get update && apt-get install -y \
    apt-utils \
    iputils-ping \
    net-tools \
    tmux \
    gpm \
    mc \
    bash \
    build-essential \
    ca-certificates \
    curl \
    git \
    less \
    nano \
    openssh-server \
    openssl \
    sudo \
    vim \
    wget \
    python3 \
    python3-pip \
    nodejs \
    npm \
    zip unzip \
    && apt-get clean

COPY ../../configs/tmux/tmux.conf /etc/tmux.conf
COPY ../../configs/nano/nanorc /root/.nanorc

# Create a user + set its password + make it sudo
RUN useradd -m devuser && \
    echo "devuser:devpassword" | chpasswd \
    echo "devuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Set up SSH
RUN mkdir /var/run/sshd

ARG SSH_USER=ubuntudevssh
ARG SSH_USER_PASS=test123...
RUN useradd -m -s /bin/bash -p $(openssl passwd -1 $SSH_USER_PASS) $SSH_USER

# Just tells Docker that we'll be using this port. But then we need to manage it manually
EXPOSE 22

# Keep container running and start SSHD
CMD ["/usr/sbin/sshd", "-D"]