#!/usr/bin/env bash
set -e

if [[ -n "$UBUNTU_PRO_TOKEN" ]]; then
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

# Keep container running and start SSHD
exec /usr/sbin/sshd -D