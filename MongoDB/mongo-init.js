// move to the admin db - always created in Mongo
db = db.getSiblingDB('admin');
// log as root admin if you decided to authenticate in your docker-compose file...
db.auth("rootUser", "rootPassword");
// create and move to your new database
db = db.getSiblingDB('DB_test');
// user created
db.createUser({
    'user': "dbUser",
    'pwd': "dbPwd",
    'roles': [{
        'role': 'dbOwner',
        'db': 'DB_test'}]});
// add new collection
db.createCollection('collection_test');
