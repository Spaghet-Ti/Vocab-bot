var words;
var targetWord;
var i, q, o;
var texts;
var answer;

function start() {
    words = [
        "compromise",
        "bacteria",
        "dispersion",
        "acceptance",
        "relationship",
        "referral",
        "scientific",
        "palace",
        "cavalry",
        "declaration"
    ];

    if (document.querySelector(".instructions")) {
        i = document.querySelector(".challenge-slide.active .instructions")
            .innerText;
    }
    if (document.querySelector(".questionContent")) {
        q = document.querySelector(".challenge-slide.active .questionContent")
            .innerText;
    }
    o = document.querySelectorAll(".challenge-slide.active .choices a");
    texts = [
        o[0].innerText,
        o[1].innerText,
        o[2].innerText,
        o[3].innerText,
        i,
        q
    ];

    answer = getAnswer();
    select(answer);
    keyPress(13);
}

function getAnswer() {
    for (let j = 0; j < words.length; j++) {
        var x;

        if (
            texts.some(function(c, $x) {
                x = $x;
                return c.includes(words[j]);
            })
        ) {
            targetWord = words[j];
            break;
        }
    }

    if (targetWord) {
        if (x <= 3) {
            return x + 1;
        }
    }
}

function select(answer) {
    let keys = [49, 50, 51, 52];
    keyPress(keys[answer - 1]);
}

// setInterval(start, 200);
// setTimeout(function() {
//     document.querySelector("#bee_complete > div.actions > button").click();
// }, 5000);
// window.confirm = function() {
//     return true;
// };
// //This doesn't work so we need to add this below :
// var s = document.createElement("script");
// s.innerHTML = "window.confirm= function(){return true;}";
// document.body.appendChild(s);

function keyPress(key) {
    e = jQuery.Event("keydown");
    e.which = key;
    e.ctrlKey = true;
    jQuery(".challenge-slide").trigger(e);
}

// Originally by © ChiefChippy2 2019
// Adopted by © Spaghet-Ti 2019
