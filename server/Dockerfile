FROM node
WORKDIR /server
COPY package*.json /server
RUN npm i 
COPY . /server/
EXPOSE 9000
CMD node server.js