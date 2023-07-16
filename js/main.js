

var qoute = [

    {
        qoute: "“Be yourself; everyone else is already taken.”",
        name: "--Oscar Wilde"

    },


    {
        qoute: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.<br> But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        name: "--Marilyn Monroe"

    },

    
    {
        qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        name: "--Albert Einstein"

    },


    {
        qoute: "“So many books, so little time.”",
        name: "--Frank Zappa"

    },


    {
        qoute: "“A room without books is like a body without a soul.”",
        name: "--Marcus Tullius Cicero"

    },


    {
        qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name: "--Bernard M. Baruch"

    },


    {
        qoute: "“Be the change that you wish to see in the world.”",
        name: "--Mahatma Gandhi"

    },


    {
        qoute: "“In three words I can sum up everything I've learned about life: it goes on.”",
        name: "--Robert Frost"

    },


    {
        qoute: "“A friend is someone who knows all about you and still loves you.”",
        name: "--Elbert Hubbard"

    },


    {
        qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        name: "--Oscar Wilde"

    },


    {
        qoute: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        name: "--Ralph Waldo Emerson"

    },


    {
        qoute: "“Insanity is doing the same thing, over and over again, but expecting different results.”",
        name: "--Narcotics Anonymous"

    },


    {
        qoute: "“It is better to be hated for what you are than to be loved for what you are not.”",
        name: "--Andre Gide"

    },


    {
        qoute: "“If you tell the truth, you don't have to remember anything.”",
        name: "--Mark Twain"

    },

]



function getqoute(){
    var x = Math.floor( Math.random() * qoute.length );
    while ( x == y ) {
        x = Math.floor( Math.random() * qoute.length );
    }
    var y = x;

    document.getElementById( "Quote" ).innerHTML = qoute[x].qoute;
    document.getElementById( "Name" ).innerHTML = qoute[x].name;

}





