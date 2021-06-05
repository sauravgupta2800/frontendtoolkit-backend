if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PACKAGE_LIST_API = "https://api.npms.io/v2/search/suggestions";
const PACKAGE_DETAILS_SIZE_API = "https://bundlephobia.com/api/size";
const PORT = process.env.PORT;

module.exports = {
  PORT,
  PACKAGE_LIST_API,
  PACKAGE_DETAILS_SIZE_API,
};
