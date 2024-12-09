var quotes =[
    {content:'Be yourself; everyone else is already taken.' , author:' Oscar Wilde'},
    {content:'So many books, so little time' , author:' Frank Zappa'},
    {content:'You only live once, but if you do it right, once is enough.' , author:' Mae West'},
    {content:'Be the change that you wish to see in the world' , author:' Mahatma Gandhi'},
    {content:'A friend is someone who knows all about you and still loves you' , author:' Elbert Hubbard'},
    {content:'To live is the rarest thing in the world. Most people exist, that is all.' , author:' Oscar Wilde'},
    {content:'Without music, life would be a mistake' , author:' Friedrich Nietzsche, Twilight of the Idols'},
    {content:'It is better to be hated for what you are than to be loved for what you are not.' , author:' Andre Gide, Autumn Leaves'},
    {content:'But man is not made for defeat. A man can be destroyed but not defeated.' , author:' Ernest Hemingway'},
    {content:'There is nothing permanent except change.' , author:'Heraclitus '},
    {content: 'It is better to be feared than loved, if you cannot be both.', author:' Niccolo Machiavelli'},
    {content: 'Learning never exhausts the mind.', author:' Leonardo da Vinci'},
    {content: 'There is no charm equal to tenderness of heart.', author:' Jane Austen'},
    {content: 'No act of kindness, no matter how small, is ever wasted.', author:'Aesop '},
    ]
    function getRandomQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var randomQuote = quotes[randomIndex]; 
    
        console.log(randomQuote);
    
        document.getElementById('demo').innerHTML = randomQuote.content;
        document.getElementById('demo2').innerHTML = randomQuote.author;
    }