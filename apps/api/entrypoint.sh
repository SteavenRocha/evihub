#!/bin/sh
set -e

echo "Running Evihub migrations..."
npx prisma migrate deploy

echo "Starting Evihub API..."
exec su-exec evihub node dist/main