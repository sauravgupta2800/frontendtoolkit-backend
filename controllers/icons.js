const axios = require("axios");
const { ICONS_API } = require("../utils/config");

const iconsRouter = require("express").Router();

iconsRouter.get("/", async (request, response) => {
  axios
    .get(`${ICONS_API}`)
    .then(({ data }) => {
      const formattedDataArr = Object.keys(data).map((key) => {
        const {
          name,
          css,
          svg_path: svg,
        } = data[key].length ? data[key][0][0] : {};
        return {
          name,
          css,
          svg,
        };
      });
      response.send({ data: formattedDataArr, count: formattedDataArr.length });
    })
    .catch(() => {
      response.status(400).send({ message: "Error while fetching icons" });
    });
});

module.exports = iconsRouter;
