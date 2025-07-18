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
    pro attach "$UBUNTU_PRO_TOKEN"
    echo "Enabling Ubuntu Pro features..."
    printf "y\n" | pro enable usg || echo "Failed to enable 'usg'"
    printf "y\n" | pro enable fips-preview || echo "Failed to enable 'fips-preview'"
    printf "y\n" | pro enable fips-updates || echo "Failed to enable 'fips-updates'"
    printf "y\n" | pro enable livepatch || echo "Failed to enable 'livepatch'"
    printf "y\n" | pro enable cis || echo "Failed to enable 'cis'"
    printf "y\n" | pro enable ros || echo "Failed to enable 'ros'"
  fi
fi

# Keep container running and start SSH
service ssh start
tail -f /dev/null 