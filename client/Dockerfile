FROM node
WORKDIR /client
COPY package*.json /client 
RUN npm i 
COPY . /client/
EXPOSE 8000
CMD npm run dev