#!/usr/bin/env bash
set -e

if [[ -n "$UBUNTU_PRO_TOKEN" ]]; then
  # Only attach if not already attached
  if pro status | grep -q "is not attached to"; then
    echo "Attaching to Ubuntu Pro..."
    pro attach "$UBUNTU_PRO_TOKEN"
    pro enable usg
  fi
fi

# Keep container running and start SSHD
exec /usr/sbin/sshd -D