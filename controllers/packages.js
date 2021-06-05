const axios = require("axios");
const {
  PACKAGE_LIST_API,
  PACKAGE_SIZE_DETAILS_API,
  PACKAGE_HISTORY_DETAILS_API,
  SIMILAR_PACKAGES_DETAILS_API,
} = require("../utils/config");

const packagesRouter = require("express").Router();

packagesRouter.get("/", async (request, response) => {
  const { q } = request.query;
  if (!q) response.status(400).send({ message: "Search key is required" });
  axios
    .get(`${PACKAGE_LIST_API}`, { params: request.query })
    .then(({ data }) => {
      response.send({ data: data, count: (data || []).length });
    })
    .catch(() => {
      response.status(400).send({ message: "Error while querying" });
    });
});

packagesRouter.get("/size", async (request, response) => {
  const { package } = request.query;
  if (!package)
    response.status(400).send({ message: "package key is required" });
  axios
    .get(`${PACKAGE_SIZE_DETAILS_API}`, { params: request.query })
    .then(({ data }) => {
      response.send({ data: data });
    })
    .catch(() => {
      response
        .status(400)
        .send({ message: "Error while fetching individual package details" });
    });
});

packagesRouter.get("/package-history", async (request, response) => {
  const { package } = request.query;
  if (!package)
    response.status(400).send({ message: "package key is required" });
  axios
    .get(`${PACKAGE_HISTORY_DETAILS_API}`, { params: request.query })
    .then(({ data }) => {
      response.send({ data: data });
    })
    .catch(() => {
      response
        .status(400)
        .send({ message: "Error while fetching individual package history" });
    });
});

packagesRouter.get("/similar-packages", async (request, response) => {
  const { package } = request.query;
  if (!package)
    response.status(400).send({ message: "package key is required" });
  axios
    .get(`${SIMILAR_PACKAGES_DETAILS_API}`, { params: request.query })
    .then(({ data }) => {
      response.send({ data: data });
    })
    .catch(() => {
      response
        .status(400)
        .send({ message: "Error while fetching similar packages" });
    });
});

module.exports = packagesRouter;
