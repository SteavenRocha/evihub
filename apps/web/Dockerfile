# 1. Dependencias
FROM node:22-alpine3.20 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 2. Builder
FROM node:22-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG API_BASE_URL=https://evihub.orcronics.com/api/v2
ENV API_BASE_URL=$API_BASE_URL
# Nuxt 4 con NX
RUN npx nx build web --prod

# 3. Runner — Nginx sirviendo estáticos (igual que el ERP)
FROM nginx:alpine AS runner
COPY --from=builder /app/dist/apps/web/.output/public /usr/share/nginx/html
COPY apps/web/nginx-spa.conf /etc/nginx/conf.d/default.conf
EXPOSE 80