const { getAuthorById, authors } = require("../db");

const getAuthorByIdController = async (req, res) => {
  const { authorId } = req.params;
  try {
    const author = await getAuthorById(+authorId);
    if (!author) {
      return res.status(404).send("Author Not Found");
    }
    res.send({ author });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const getAllAuthorsController = async (req, res) => {
  try {
    if (!authors) {
      return res.status(404).send("Authors not Found");
    }
    res.status(200).send(authors);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getAllAuthorsController, getAuthorByIdController };
