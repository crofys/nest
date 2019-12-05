#!/bin/sh


yarn install

yarn build

pm2 restart ./dist/main.js