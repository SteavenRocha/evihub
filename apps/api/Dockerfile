# 1. Dependencias
FROM node:22-alpine3.20 AS deps
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare yarn@4.13.0 --activate
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml nx.json ./
COPY apps/api/package.json ./apps/api/package.json
COPY apps/web/package.json ./apps/web/package.json
COPY libs/shared/db/package.json ./libs/shared/db/package.json
RUN yarn install --immutable

# 2. Builder
FROM node:22-alpine3.20 AS builder
RUN corepack enable && corepack prepare yarn@4.13.0 --activate
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NX_DAEMON=false
ENV NX_PARALLEL=1
RUN npx prisma generate
RUN npx nx build api --prod

# 3. Runner
FROM node:22-alpine3.20 AS runner
RUN apk add --no-cache su-exec
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -S nodejs && adduser -S evihub -G nodejs

COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/libs/shared/db/prisma ./libs/shared/db/prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

COPY apps/api/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

EXPOSE 3001
CMD ["./entrypoint.sh"]