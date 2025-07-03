#!/bin/bash

# Set non-interactive mode for apt
export DEBIAN_FRONTEND=noninteractive
export TERM=xterm-color

# Update and install packages
apt-get update && apt-get install -y \
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
    wget

# Create 'devuser' and configure passwordless sudo
useradd -m devuser
echo "devuser:devpassword" | chpasswd
echo "devuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Create SSH user
SSH_USER="ubuntudevssh"
SSH_PASS="test123..."
useradd -m -s /bin/bash "$SSH_USER"
echo "$SSH_USER:$SSH_PASS" | chpasswd

# Keep container running and start SSH
service ssh start
tail -f /dev/null 