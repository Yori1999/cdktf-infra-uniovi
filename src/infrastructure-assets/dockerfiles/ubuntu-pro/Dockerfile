ARG BASE_IMAGE=ubuntu:latest
FROM ${BASE_IMAGE}

ENV DEBIAN_FRONTEND=noninteractive

ARG UBUNTU_PRO_TOKEN
ENV UBUNTU_PRO_TOKEN=${UBUNTU_PRO_TOKEN}

RUN rm -rf /var/lib/apt/lists/*

# Install basic tools
RUN apt-get update && apt-get install -y \
    apt-utils \
    bash \
    build-essential \
    ca-certificates \
    curl \
    git \
    gpm \
    iputils-ping \
    less \
    mc \
    nano \
    net-tools \
    openssh-server \
    openssl \
    sudo \
    tmux \
    vim \
    wget \
    && apt-get clean

COPY tmux.conf /etc/tmux.conf
COPY nanorc /root/.nanorc

# Install everything 
RUN apt-get install -y ubuntu-advantage-tools && apt-get clean
RUN apt update && apt upgrade -y

# Create a user + set its password + make it sudo
RUN useradd -m prouser && \
    echo "prouser:propassword" | chpasswd \
    echo "prouser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Set up SSH
RUN mkdir /var/run/sshd

# Just tells Docker that we'll be using this port. But then we need to manage it manually
EXPOSE 22

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]