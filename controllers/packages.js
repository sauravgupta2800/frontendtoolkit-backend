const axios = require("axios");
const {
  PACKAGE_LIST_API,
  PACKAGE_SIZE_DETAILS_API,
  PACKAGE_HISTORY_DETAILS_API,
  SIMILAR_PACKAGES_DETAILS_API,
  PACKAGE_REPOS_API,
  PACKAGE_DOWNLOADS_API,
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
  const { packages } = request.query;
  if (!packages)
    response.status(400).send({ message: "package key is required" });
  // const url = "https://api.npmtrends.com/s/related_packages?search_query%5B%5D=vue&search_query%5B%5D=react&search_query%5B%5D=%40angular%2Fcore";
  // const url = `${SIMILAR_PACKAGES_DETAILS_API}?${"search_query%5B%5D=vue&search_query%5B%5D=react&search_query%5B%5D=%40angular%2Fcore"}`;
  const url = `${SIMILAR_PACKAGES_DETAILS_API}?${packages}`;
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(({ data }) => {
      response.send({ data: data });
    })
    .catch((e) => {
      response
        .status(400)
        .send({ message: "Error while fetching similar packages" });
    });
});

// api.github.com/repos/vuejs/vue
packagesRouter.get("/repos", async (request, response) => {
  const { path } = request.query;
  if (!path) response.status(400).send({ message: "path is required" });
  axios
    .get(`${PACKAGE_REPOS_API}/${path}`, { params: request.query })
    .then(({ data }) => {
      response.send({ data: data });
    })
    .catch(() => {
      response
        .status(400)
        .send({ message: "Error while fetching repository data from github" });
    });
});

// https://github.com/npm/registry/blob/master/docs/download-counts.md
/**
 * params
 * type : point | range { point = /downloads/point/ & range = /downloads/range}
 * period : last-day | last-week | last-month | (startDate:endDate)
 * package : valid package name
 */
packagesRouter.get("/downloads", async (request, response) => {
  const { type = "range", period, package } = request.query;
  if (!period) response.status(400).send({ message: "period key is required" });
  if (!package)
    response.status(400).send({ message: "package key is required" });
  axios
    .get(`${PACKAGE_DOWNLOADS_API}/${type}/${period}/${package}`)
    .then(({ data }) => {
      response.send({ data: data });
    })
    .catch(() => {
      response
        .status(400)
        .send({ message: "Error while fetching download data" });
    });
});

module.exports = packagesRouter;
