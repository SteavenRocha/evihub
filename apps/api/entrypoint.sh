#!/bin/sh
set -e

echo "Running Evihub migrations..."
npx prisma migrate deploy --schema=./prisma/schema.prisma

echo "Starting Evihub API..."
exec su-exec evihub node dist/main