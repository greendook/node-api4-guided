const server = require('./api/server.js');

// heroku will add the port variable to the enviroment
const port = process.env.PORT || 5000; // use the port if not grab 5000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
