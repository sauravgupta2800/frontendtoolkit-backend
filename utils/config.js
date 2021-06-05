if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PACKAGE_LIST_API = "https://api.npms.io/v2/search/suggestions";

const PORT = process.env.PORT;

module.exports = {
  PORT,
  PACKAGE_LIST_API,
};
