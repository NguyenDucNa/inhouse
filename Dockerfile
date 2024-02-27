FROM node:latest as builder

RUN npm install -g pnpm
RUN npm install -g vite
RUN npm install -g turbo

WORKDIR /usr/src/app
# this will allow us to run vite and other tools directly
ENV PATH /usr/src/node_modules/.bin:$PATH

ARG VITE_CDN_HOST
ENV VITE_CDN_HOST=$VITE_CDN_HOST

ARG VITE_SENTRY_DNS
ENV VITE_SENTRY_DNS=$VITE_SENTRY_DNS

ARG VITE_AUTH_URL
ENV VITE_AUTH_URL=$VITE_AUTH_URL

ARG VITE_GRAPHQL_URL
ENV VITE_GRAPHQL_URL=$VITE_GRAPHQL_URL

ARG VITE_GRAPHQL_WS
ENV VITE_GRAPHQL_WS=$VITE_GRAPHQL_WS

COPY package.json .

COPY . .

RUN pnpm install
RUN pnpm run build

FROM nginx:latest as prod

COPY --from=builder /usr/src/app/apps/client/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
