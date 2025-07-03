ARG BASE_IMAGE=ubuntu:latest
FROM ${BASE_IMAGE}

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
  apt-utils \
  curl \
  iputils-ping \
  nano \
  net-tools \
  less \
  tmux \
  gpm \
  mc \
  xfce4 xfce4-goodies \
  x11-apps \
  dbus-x11 \
  xterm \
  wget \
  sudo \
  zip \
  unzip \
  thunar \
  ufw \
  && apt-get clean

COPY ../../configs/tmux/tmux.conf /etc/tmux.conf
COPY ../../configs/nano/nanorc /root/.nanorc

# Create a user + set its password + make it sudo
RUN useradd -m ubuntuuser && \
  echo "ubuntuuser:ubuntupassword" | chpasswd \
  echo "ubuntuuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Switch to the non-root user
USER ubuntu

# Set working directory
WORKDIR /home/ubuntu

CMD ["sleep", "infinity"]