FROM mcr.microsoft.com/playwright:v1.49.1-noble
WORKDIR /app
COPY . /app
RUN npm cache clean --force
RUN npm i playwright-chromium @playwright/test
