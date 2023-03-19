ARG NODE_VERSION=node:18.15.0

FROM $NODE_VERSION AS dependency-base

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM dependency-base AS production-base

# build will also take care of building
# if necessary
COPY . .
RUN npm run build

FROM $NODE_VERSION AS production

COPY --from=production-base /app/.output /app/.output

# Service hostname
ENV NUXT_HOST=0.0.0.0

# Service version
ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}

# Run in production mode
ENV NODE_ENV=production

ENV MONGO_URL=mongodb+srv://jadenmchant:2kRMec0i97n2VFs2@jaden-nuxt.qpn0jdf.mongodb.net/health

# start the app
CMD [ "node", "/app/.output/server/index.mjs" ]