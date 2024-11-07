#!/bin/bash

docker build -t progetti/nodejs-web-server_giurbino:1.0 .
docker run -it -p 3000:3000 -d --name node-giurbino-v1 progetti/nodejs-web-server_giurbino:1.0

echo "Server in ascolto sul http://localhost:3000/api/hello"
