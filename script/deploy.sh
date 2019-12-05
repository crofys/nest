#!/bin/sh

rm -rf ./dist

yarn install

yarn build

# pm2 RESTART ./dist/main.jsc

scp -r ./dist/*  xuchangjian@49.232.47.8:/www/wwwroot/node/nest

# 1ehbdb2dX5y6O6yu