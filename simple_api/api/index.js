const router = require("express").Router();
const { books, reviews,} = require("./mock");
const { reply, getById } = require("./utils");

router.get("/reviews", (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const book = getById(books)(id);
    if (book) {
      result = book.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/books", (req, res, next) => {
  reply(res, books)
})

module.exports = router;
