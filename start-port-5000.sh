#!/bin/bash
# Override the default npm run dev to use port 5000
cd "$(dirname "$0")/client"
exec npx vite dev --port 5000 --host 0.0.0.0