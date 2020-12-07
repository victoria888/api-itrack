const express = require('express');


class App {
  constructor() {
    this.app = express();
  }

  listen(port, callback) {
    this.app.listen(port, callback);
  }

  initializeRoutes(routes) {
    this.app.get('/', (req, res) => {
      res.send('Chee')
    })
  }
}

module.exports = App


