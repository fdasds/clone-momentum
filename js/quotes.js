const quotes = [
    {quote: "Truth is the only safe ground to stand on.", author: "Elizabeth Cady Stanton"},
    {quote: "There are few nudities so objectionable as the naked truth.", author: "Agnes Repplier"},
    {quote: "Waste no fresh tears over old griefs.", author: "Euripides"},
    {quote: "He who multiplies riches multiplies cares.", author: "Benjamin Franklin"},
    {quote: "Silence is one of the hardest arguments to refute.", author: "Josh Billings"},
    {quote: "Life is just one damned thing after another.", author: "Elbert Hubbard"},
    {quote: "Baseball is 90% mental, the other portion is physical.", author: "Yogi Berra"},
    {quote: "I want freedom for the full expression of my personality.", author: "Mahatma Gandhi"},
    {quote: "Only I can change my life. No one can do it for me.", author: "Carol Burnett"},
    {quote: "We have some salt of our youth in us.", author: "William Shakespeare"}
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

randomNum = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[randomNum];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;