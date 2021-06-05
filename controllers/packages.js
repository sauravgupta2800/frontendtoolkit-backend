const axios = require("axios");
const config = require("../utils/config");
const packagesRouter = require("express").Router();

packagesRouter.get("/", async (request, response) => {
  const { PACKAGE_LIST_API } = config;
  const { q } = request.query;
  if (!q) response.status(400).send({ message: "Search key is required" });
  axios
    .get(`${PACKAGE_LIST_API}`, { params: request.query })
    .then(({ data }) => {
      response.send({ data: data, count: (data || []).length });
    })
    .catch(() => {
      response.status(400).send({ message: "Error While querying" });
    });
});

module.exports = packagesRouter;
