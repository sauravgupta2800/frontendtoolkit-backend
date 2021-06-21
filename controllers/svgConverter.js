const svgConverterRouter = require("express").Router();

svgConverterRouter.get("/config-list", async (request, response) => {
  const options = [
    {
      key: "removeDoctype",
      label: "Remove Doctype",
      value: true,
    },
    {
      key: "removeXMLProcInst",
      label: "Remove XML processing instructions",
      value: true,
    },
    {
      key: "removeComments",
      label: "Remove comments",
      value: true,
    },
    {
      key: "removeMetadata",
      label: "Remove <metadata>",
      value: true,
    },
    {
      key: "removeTitle",
      label: "Remove <title>",
      value: true,
    },
    {
      key: "removeDesc",
      label: "Remove <desc>",
      value: true,
    },
    {
      key: "removeUselessDefs",
      label: "Remove elements of <defs> without id",
      value: true,
    },
    {
      key: "removeXMLNS",
      label: "Removes the xmlns attribute (for inline SVG)",
      value: false,
    },
    {
      key: "removeEditorsNSData",
      label: "Remove editors namespaces, elements, and attributes",
      value: true,
    },
    {
      key: "removeEmptyAttrs",
      label: "Remove empty attributes",
      value: true,
    },
    {
      key: "removeHiddenElems",
      label: "remove hidden elements",
      value: true,
    },
    {
      key: "removeEmptyText",
      label: "Remove empty Text elements",
      value: true,
    },
    {
      key: "removeEmptyContainers",
      label: "remove empty Container elements",
      value: true,
    },
    {
      key: "removeViewBox",
      label: "Remove viewBox attribute when possible",
      value: true,
    },
    {
      key: "cleanupEnableBackground",
      label: "remove or cleanup enable-background attribute when possible",
      value: true,
    },
    {
      key: "minifyStyles",
      label: "minify <style> elements content with CSSO",
      value: true,
    },
    {
      key: "convertStyleToAttrs",
      label: "convert styles into attributes",
      value: false,
    },
    {
      key: "convertColors",
      label: "convert colors (from rgb() to #rrggbb, from #rrggbb to #rgb)",
      value: true,
    },
    {
      key: "convertPathData",
      label:
        "convert Path data to relative or absolute (whichever is shorter), convert one segment to another, trim useless delimiters, smart rounding, and much more",
      value: true,
    },
    {
      key: "convertTransform",
      label:
        "collapse multiple transforms into one, convert matrices to the short aliases, and much more",
      value: true,
    },
    {
      key: "removeUnknownsAndDefaults",
      label:
        "Remove unknown elements content and attributes, remove attributes with default values",
      value: true,
    },
    {
      key: "removeNonInheritableGroupAttrs",
      label: 'remove non-inheritable group\'s "presentation" attributes',
      value: true,
    },
    {
      key: "removeUselessStrokeAndFill",
      label: "remove useless stroke and fill attributes",
      value: true,
    },
    {
      key: "removeUnusedNS",
      label: "	remove unused namespaces declaration",
      value: true,
    },
    {
      key: "prefixIds",
      label:
        "prefix IDs and classes with the SVG filename or an arbitrary string",
      value: false,
    },
    {
      key: "cleanupIDs",
      label: "remove unused and minify used IDs",
      value: true,
    },
    {
      key: "cleanupNumericValues",
      label:
        "round numeric values to the fixed precision, remove default px units",
      value: true,
    },
    {
      key: "cleanupListOfValues",
      label:
        "round numeric values in attributes that take a list of numbers (like viewBox or enable-background)",
      value: false,
    },
    {
      key: "moveElemsAttrsToGroup",
      label: "	move elements' attributes to their enclosing group",
      value: true,
    },
    {
      key: "moveGroupAttrsToElems",
      label: "move some group attributes to the contained elements",
      value: true,
    },
    {
      key: "collapseGroups",
      label: "collapse useless groups",
      value: true,
    },
    {
      key: "removeRasterImages",
      label: "	remove raster images",
      value: false,
    },
    {
      key: "mergePaths",
      label: "	merge multiple Paths into one",
      value: true,
    },
    {
      key: "convertShapeToPath",
      label: "convert some basic shapes to <path>",
      value: true,
    },
    {
      key: "convertEllipseToCircle",
      label: "convert non-eccentric <ellipse> to <circle>",
      value: true,
    },
    {
      key: "sortAttrs",
      label: "sort element attributes for epic readability",
      value: false,
    },
    {
      key: "sortDefsChildren",
      label: "sort children of <defs> in order to improve compression",
      value: true,
    },
    {
      key: "removeDimensions",
      label:
        "Remove width/height and add viewBox if it's missing (opposite to removeViewBox, disable it first)",
      value: false,
    },
    {
      key: "removeAttrs",
      label: "Remove attributes by pattern",
      value: false,
    },
    {
      key: "removeAttributesBySelector",
      label: "Removes attributes of elements that match a CSS selector",
      value: false,
    },
    {
      key: "removeElementsByAttr",
      label: "Remove arbitrary elements by ID or className",
      value: false,
    },
    {
      key: "addClassesToSVGElement",
      label: "Add classnames to an outer <svg> element",
      value: false,
    },
    {
      key: "addAttributesToSVGElement",
      label: "Adds attributes to an outer <svg> element",
      value: false,
    },
    {
      key: "removeOffCanvasPaths",
      label: "Removes elements that are drawn outside of the viewbox",
      value: false,
    },
    {
      key: "removeStyleElement",
      label: "Remove <style> elements",
      value: false,
    },
    {
      key: "removeScriptElement",
      label: "Remove <script> elements",
      value: false,
    },
    {
      key: "reusePaths",
      label: "Find duplicated elements and replace them with links",
      value: false,
    },
  ];
  try {
    response.send({ data: options, count: options.length });
  } catch {
    response.status(400).send({ message: "Error while fetching icons" });
  }
});

module.exports = svgConverterRouter;
