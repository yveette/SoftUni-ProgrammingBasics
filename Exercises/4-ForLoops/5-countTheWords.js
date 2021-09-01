function sentence(input) {
    let text = input[0];
    let count = 1;
    for (i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            count++;
        }
    }
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}

sentence(["This message has exactly eleven words. One more as it's allowed!"]);
// The message is too long to be send! Has 11 words.

sentence(["This message has ten words and you can send it!"]);
// The message was send successfully!
