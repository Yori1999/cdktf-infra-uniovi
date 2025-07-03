#!/usr/bin/env bash
set -e

rm -rf /var/lib/apt/lists/*
apt-get update && apt-get install -y \
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

apt-get install -y ubuntu-advantage-tools && apt-get clean
apt update && apt upgrade -y

useradd -m prouser && \
    echo "prouser:propassword" | chpasswd \
    echo "prouser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Set up SSH
mkdir /var/run/sshd

if [[ -n $1 ]]; then
  # Only attach if not already attached
  if pro status | grep -q "is not attached to"; then
    echo "Attaching to Ubuntu Pro..."
    pro attach $1
    pro enable usg
  fi
fi

# Keep container running and start SSH
service ssh start
tail -f /dev/null 