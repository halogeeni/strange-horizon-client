#!/bin/sh

docker build --tag strange-horizon-client . \
  && docker run --interactive --tty --rm --publish 8080:8080 --name shz_nginx strange-horizon-client
