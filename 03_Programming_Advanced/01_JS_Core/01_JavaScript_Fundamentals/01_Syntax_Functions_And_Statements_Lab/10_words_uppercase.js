function WordsUppercase(text) {
    text = text.toUpperCase();
    let words = splitWords();

    function splitWords() {
        return text.split(/\W+/);
    }

    words = words.filter(w => w != "");
    console.log(words.join(", "));
}

//WordsUppercase('Hi, how are you?');