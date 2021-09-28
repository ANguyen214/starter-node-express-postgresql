
const categoriesServerice = require("./categories.service");

function list(req, res, next) {
  categoriesServerice
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  list, 
};
