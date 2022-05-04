const express = require("express");
const path = require("path");
const req = require("express/lib/request");
const PORT = process.env.port || 3001;
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
