// Application configuration.
'use strict';

var config = module.exports;

config.db = {
  user: 'root',
  password: '1234',
  name: 'salaryo_test'
};

config.db.details = {
  host: '127.0.0.1',
  // port: 8889,
  dialect: 'mysql'
};

config.keys = {
  secret: 'this is my secret'
};

config.jwt = {
  expiresIn: '100m'
};

var userRoles = config.userRoles = {
  guest: 1,    // ...001
  user: 2,     // ...010
  admin: 4     // ...100
};

config.accessLevels = {
  guest: userRoles.guest | userRoles.user | userRoles.admin,    // ...111
  user: userRoles.user | userRoles.admin,                       // ...110
  admin: userRoles.admin                                        // ...100
};
