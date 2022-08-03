//get random quotes from website

function getQuote(){
    var quotes = [
        {
            quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
            source: "Kent Beck"
        },
        {
            quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            source: "Martin Golding"
        },
        {
            quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
            source: "Anonymous"
        },
        {
            quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            source: "Martin Golding"
        },
        {
            quote: "We are all in the gutter, but some of us are looking at the stars.",
            source: "Oscar Wilde"
        },
        {
            quote: "Happiness is not something ready made. It comes from your own actions.",
            source: "Dalai Lama"
        },
        {
            quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
            source: "Edsger Dijkstra"
        },
        {
            quote: "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
            source: "Jim Rohn"
        },
        {
            quote: "The best way to predict the future is to invent it.",
            source: "Alan Kay"
        },
        {
            quote: "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
            source: "Linus Torvalds"
        },
        {
            quote: "java is to javascript as ham is to hamster.",
            source: "Mark Zuckerberg"
        },
        {
            quote: "I think Microsoft named .Net so it wouldn't show up in a Unix directory listing.",
            source: "Oktal"
        }
    ]
    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

function move(){
    location.href = "settings.html";
}

let a = getQuote();
document.getElementById("quotes").innerHTML = a.quote;
document.getElementById("sources").innerHTML = a.source;