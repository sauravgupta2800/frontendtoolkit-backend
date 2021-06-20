// https://github.com/terser/terser
const { minify } = require("terser");
const CleanCSS = require("clean-css");
const minifyRouter = require("express").Router();

minifyRouter.post("/", async (request, response) => {
  const { code, type = "javascript" } = request.body;
  if (!code) response.status(400).send({ message: "code is required" });
  if (type === "javascript") {
    try {
      const result = await minify(code, { sourceMap: true });
      response.send({ data: result.code });
    } catch {
      response.status(400).send({ message: "Error while js/ts  minification" });
    }
  } else if (type === "css") {
    try {
      const minified = new CleanCSS({ inline: "none" }).minify(code);
      minified.css = minified.styles
        ? minified.styles
        : minified.errors
            .concat(minified.warnings)
            .map((msg) => `/* ${msg} */`)
            .join("\n");

      response.send({ data: minified.css });
    } catch {
      response.status(400).send({ message: "Error while css minification" });
    }
  }
});

module.exports = minifyRouter;
