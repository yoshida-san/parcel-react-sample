FROM node
WORKDIR /tmp/src
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
CMD ["/bin/bash"]