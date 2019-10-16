const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

   

    function decode(expr) {
        const MORSE_NUMBERS ={
            '00': '',
            '10': '.',
            '11': '-'
        }
        var result = '';
        while(expr.length) {
            var arr = expr.slice(0, 10);
            expr = expr.slice(10);
            if (arr.includes('*')) {
                result += ' ';
            } else {
                var res = '';
                for (var i = 0; i < arr.length; i+=2) {
                    res += MORSE_NUMBERS[arr.substring(i, i + 2)];
                }
                result += MORSE_TABLE[res];
            }
        }
        return result;
    }


module.exports = {
    decode
}