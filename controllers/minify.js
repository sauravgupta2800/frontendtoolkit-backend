// https://github.com/terser/terser
const { minify } = require("terser");

const minifyRouter = require("express").Router();

minifyRouter.post("/", async (request, response) => {
  if (!request.body.code)
    response.status(400).send({ message: "code is required" });
  try {
    const result = await minify(request.body.code, { sourceMap: true });
    response.send({ data: result.code });
  } catch {
    response.status(400).send({ message: "Error while  minification" });
  }
});

module.exports = minifyRouter;
