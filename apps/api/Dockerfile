# 1. Dependencias
FROM node:22-alpine3.20 AS deps
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare yarn@4.13.0 --activate
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --frozen-lockfile

# 2. Builder
FROM node:22-alpine3.20 AS builder
RUN corepack enable && corepack prepare yarn@4.13.0 --activate
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npx nx build api --prod

# 3. Runner
FROM node:22-alpine3.20 AS runner
RUN apk add --no-cache su-exec
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -S nodejs && adduser -S evihub -G nodejs

COPY --from=builder /app/dist/apps/api ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/libs/shared/db/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

COPY apps/api/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

EXPOSE 3001
CMD ["./entrypoint.sh"]