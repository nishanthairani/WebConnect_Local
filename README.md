prerequisites :

1) NodeJS - https://nodejs.org/en/download/
2) MongoDb -  
      a) Download MongoDb for Windows
      b) ex: create a folder "d:\test\mongodb\data"
      c) run "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath d:\test\mongodb\data

Steps:
1) Update - https://github.com/Rakesh-Harsha/WebConnect/blob/master/client/app/js/app.js : Change "serverConnection = new WebSocket('wss://' + '192.168.0.5' + ':3000');
" Ip Address Here

1) npm install - This install's all the modules required for the project, based on package.json file
2) npm run build - This step builds the code and created dist folder, which will have all the static/generated files
3) npm run deploy - This deploys the project
4) https://localhost:3000
