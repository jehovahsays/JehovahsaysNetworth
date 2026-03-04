#!/bin/bash
# MEV Wiki - Unix/Linux/macOS Gateway
echo "Connecting to MEV Subconscious..."
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "index.html"
else
  xdg-open "index.html"
fi
