#!/bin/bash

# Set non-interactive mode for apt
export DEBIAN_FRONTEND=noninteractive
export TERM=xterm-color

# Update and install packages
apt-get update && apt-get install -y \
    apt-utils \
    curl \
    iputils-ping \
    nano \
    net-tools \
    less \
    tmux \
    gpm \
    mc \
    openssh-server \
    openssl \
    xfce4 xfce4-goodies \
    x11-apps \
    dbus-x11 \
    xterm \
    wget \
    sudo \
    && apt-get clean

# Create 'devuser' and configure passwordless sudo
useradd -m ubuntuuser
echo "ubuntuuser:ubuntupassword" | chpasswd
echo "ubuntuuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Create SSH user
SSH_USER="ubuntudesktopssh"
SSH_PASS="test123..."
useradd -m -s /bin/bash "$SSH_USER"
echo "$SSH_USER:$SSH_PASS" | chpasswd

# Keep container running and start SSH
service ssh start
tail -f /dev/null 