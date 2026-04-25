import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: "libs/shared/db/prisma/schema.prisma",
  migrations: {
    path: "libs/shared/db/prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
