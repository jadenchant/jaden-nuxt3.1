ARG NODE_VERSION=node:22.12.0

FROM $NODE_VERSION AS dependency-base

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM dependency-base AS production-base

COPY . .
RUN npm run build

FROM $NODE_VERSION AS production

COPY --from=production-base /app/.output /app/.output

ENV NUXT_HOST=0.0.0.0

ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}

ENV NODE_ENV=production

CMD [ "node", "/app/.output/server/index.mjs" ]