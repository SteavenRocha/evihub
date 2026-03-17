# Evihub

Plataforma SaaS para el registro y gestión de evidencias de pago. Permite a empresas registrar comprobantes de pago, leer datos automáticamente mediante OCR, y controlar el acceso de usuarios desde un sistema ERP externo.

## Stack

| Capa          | Tecnología              |
| ------------- | ----------------------- |
| Frontend      | Nuxt 3 + Tailwind CSS   |
| Backend       | NestJS + TypeScript     |
| Base de datos | PostgreSQL              |
| ORM           | Prisma                  |
| OCR           | Google Cloud Vision API |
| Monorepo      | Nx                      |
| Contenedores  | Docker                  |

## Estructura del proyecto

```
evihub/
├── apps/
│   ├── api/          # Backend NestJS
│   └── web/          # Frontend Nuxt 3
├── libs/
│   └── shared/
│       └── db/       # Prisma client y PrismaService compartido
├── docker-compose.yml
├── prisma.config.ts
└── .env.example
```

## Requisitos

- Node.js 18+
- Yarn
- Docker

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/SteavenRocha/evihub.git
cd evihub

# Instalar dependencias
yarn install

# Copiar variables de entorno
cp .env.example .env
# Edita el .env con tus credenciales
```

## Base de datos

```bash
# Levantar PostgreSQL con Docker
docker compose up -d

# Generar el cliente de Prisma
npx prisma generate --schema=libs/shared/db/prisma/schema.prisma

# Correr las migraciones
npx prisma migrate dev --name init
```

## Desarrollo

```bash
# Correr backend y frontend juntos
nx run-many --target=serve --projects=api,web

# Solo el backend
nx serve api

# Solo el frontend
nx serve web
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```env
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DATABASE_URL=
```

## Funcionalidades del MVP

- Registro de evidencias de pago con imagen
- Lectura automática de comprobantes mediante OCR
- Control de acceso de usuarios via webhook desde ERP externo
- Soporte multi-tenant: un usuario puede pertenecer a varios clientes

## Control de acceso desde ERP

Evihub expone un endpoint webhook que permite al ERP activar o desactivar usuarios:

```
POST /api/users/:id/status
```

Los usuarios desactivados reciben un `401` en su próximo intento de acceso aunque tengan token válido.

---

Desarrollado por [Steaven Rocha](https://github.com/SteavenRocha)
