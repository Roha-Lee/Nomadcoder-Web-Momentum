type Words = {
    [key: string]: string
}

class Dict {
    private words: Words;
    constructor() {
        this.words = {};
    }
    
    add(word: Word) {
        if (this.words[word.getTerm()] === undefined) {
            this.words[word.getTerm()] = word.getDef();
        }
    }

    def(term: string) {
        return this.words[term];
    }

    del(term: string) {
        delete this.words[term];
    }

    modify(word: Word) {
        if (this.words[word.getTerm()] !== undefined) {
            this.words[word.getTerm()] = word.getDef();
        }
    }
}

class Word {
    constructor(
        private term: string, 
        private def: string
    ) {}

    modify(def: string) {
        this.def = def;
    }

    getTerm() {
        return this.term;
    }

    getDef() {
        return this.def;
    }
}
