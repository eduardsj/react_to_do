this is bundle with 2 independent parts server which provide CRUD functionality for PostgreSQL with Node.js and typescript and client which is react app with typescript for todo notes.

To run it locally first step is exececute on PostgreSQL from react_to_do\sql scripts db_strtucture.sql to create DB and db_user.sql to add app user. if like to change those 
please update credentials in server\app\config\db.config.js. All needed for app DB table if not created, it will create when started.
Then go to react_to_do\server, open terminal, run npm install after that node server.js to run it. To start UI app for todo notes open Code\react_to_do\client and with terminal execute npm install and
after that npm start. Browser window or tab will automatically open.

For server deployment need swith to https and different configuration, it will be in future in separate branch.
