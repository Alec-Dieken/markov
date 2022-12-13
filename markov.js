/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const markovObject = {};
    for (let i = 0; i < this.words.length; i++) {
      if (markovObject[this.words[i]] && this.words[i+1] != undefined && markovObject[this.words[i]].indexOf(this.words[i+1]) == -1) {
        markovObject[this.words[i]].push(this.words[i + 1]);
      } else if(!markovObject[this.words[i]] && this.words[i+1]) {
        markovObject[this.words[i]] = [this.words[i + 1]];
      }
    }
    this.chain = markovObject;
  }

  /** return random text from chains */

  makeText(numWords = 50) {
    let chainKey = this.words[Math.floor(Math.random() * this.words.length)];
    // console.log("This is the original chainkey: " + chainKey);
    let finalString = chainKey;
    for(let i = 1; i < numWords; i++) {
      let newWord = this.chain[chainKey] ? this.chain[chainKey][Math.floor(Math.random() * this.chain[chainKey].length)] : this.words[Math.floor(Math.random() * this.words.length)];
      // console.log(i + ": " + newWord);
      finalString += " " + newWord;
      chainKey = newWord;
    }
    console.log(finalString);
    return finalString;
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
};

