const packagelistRouter = require("express").Router();

packagelistRouter.get("/", async (request, response) => {
  response.send({ name: "Saurav" });
});

module.exports = packagelistRouter;
