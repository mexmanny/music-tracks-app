const express = require("express");
const path = require("path");
const req = require("express/lib/request");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");
const PORT = process.env.PORT || 3001;

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
