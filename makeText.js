/** Command-line tool to generate Markov text. */
const markov = require("./markov");
const fs = require("fs");


function markovFromText(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    let mm = new markov.MarkovMachine(data);
    mm.makeText();
  });
}


function markovFromURL(URL) {
  const axios = require("axios");

  axios
    .get(URL)
    .then((res) => {
      let mm = new markov.MarkovMachine(res.data);
      mm.makeText();
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}


if (process.argv[2] === "file") {
  markovFromText(process.argv[3]);
} else {
  markovFromURL(process.argv[3]);
}
