

HubTaxi: Server Side

Setup to run:

### Technology use:
- Serverside:
  - Node.js 
  - Expressjs
  - MongoDB (mongoose)
  - Socket.io
- Clientside:
  - Angularjs Framework.
  - Bootstrap Twitter.
  - Phonegap, cordova and ionic framework. (for hybrid app)

### Setup:
- Clone this repo to your local machine by: `git clone https://github.com/jerrykid/Taxi-Server`.
- Okay, after clone it, you can install all dependencies by type: `npm install` on your terminal.
- I used to mongo database for this repo, because you must install and start mongodb. In your terminal: `sudo /etc/init.d/mongodb start`
- Use `mongorestore -d mydb dump/mydb` to restore database.
- Fix path mongodb: config/init.js --> `_db: 'mongodb://localhost/mydb'`
- Finally, you can start server with command: `npm start` and then, your server will start at `http://localhost:6868`

===
Demo: http://taxiclient.azurewebsites.net/
### Reference :
- Manager:
  - Source code: `https://github.com/jerrykid/Taxi-Client/tree/master/manager`
  - Demo: `http://taxiclient.azurewebsites.net/Manager/#/login` - User: `admin` | Password: `admin`
  - Some screenshot:
  Login:
  ![login](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/login.png)
  Main:
  ![main](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/main.png)
  ManageType:
  ![managetype](https://github.comjerrykid/Taxi-Server/blob/master/screenshot/managerCartype.png)
  Setting:
  ![setting](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/setting.png)

- Driver: 
  - Source code: `https://github.com/jerrykid/Taxi-Client/tree/master/driver`
  - Demo: `http://taxiclient.azurewebsites.net/Driver/#/login` user/pass: 30h-9999/123123
  - Screenshot:

  ![driver1](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/driver1.png)
  ![driverLoad](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/driverLoad.png)
  
  ===
  
  ![driverLogin](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/driverLogin.png)
  ![history](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/histories.png)
  
- Client: 
  - Source code: `https://github.com/jerrykid/Taxi-Client/tree/master/client`
  - Demo: `http://taxiclient.azurewebsites.net/Client/#/home`
  - Screenshot:

  ![client1](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/client1.png)
  ![client2](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/showTaxi.png)
  
  ===
  
  ![client3](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/client3.png)
  ![clientLogin](https://github.com/jerrykid/Taxi-Server/blob/master/screenshot/clientLogin.png)

Development:
  Any tool you like, current source Development with Visual Studio 2015
  Automation test: Mocha
