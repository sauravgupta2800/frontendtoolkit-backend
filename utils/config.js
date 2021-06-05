if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PACKAGE_LIST_API = "https://api.npms.io/v2/search/suggestions";
const PACKAGE_SIZE_DETAILS_API = "https://bundlephobia.com/api/size";
const PACKAGE_HISTORY_DETAILS_API =
  "https://bundlephobia.com/api/package-history";
const SIMILAR_PACKAGES_DETAILS_API =
  "https://bundlephobia.com/api/similar-packages";
const PORT = process.env.PORT;

module.exports = {
  PORT,
  PACKAGE_LIST_API,
  PACKAGE_SIZE_DETAILS_API,
  PACKAGE_HISTORY_DETAILS_API,
  SIMILAR_PACKAGES_DETAILS_API,
};
