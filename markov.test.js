const markov = require('./markov');

test("chain should be equal to", () => {
    let mm = new markov.MarkovMachine('the cat in the hat');
    expect(mm.chain).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"]})
});

test("finalString should have 50 length", () => {
    let mm = new markov.MarkovMachine('the cat in the hat');
    expect(mm.makeText().split(' ').length).toEqual(50);
})

test("finalString should have 10 length", () => {
    let mm = new markov.MarkovMachine('the cat in the hat');
    expect(mm.makeText(10).split(' ').length).toEqual(10);
})