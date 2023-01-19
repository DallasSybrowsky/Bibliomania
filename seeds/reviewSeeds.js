const { Review } = require('../models');
const sequelize = require('../config/connection');
const reviewData = [
    {
        rating: 10,
        content: "All those, young or old, who love a finely imagined story, beautifully told, will take The Hobbit to their hearts.",
        book_id: 9780618968633,
    },
    {
        rating: 10,
        content: "I love this book. J.R. Tolkien immerses readers into a world of imagination. I am 11 years old and loved that the names in the book feel so real and have come from medieval times. He is an amazing writer. I would highly recommend his book for ages 9 & up. Once you read them, you will be in love with his books!",
        book_id: 9780358380238,
    },
    {
        rating: 10,
        content: "I bought this edition for an affordable trade size with a clear font. Over 40 years ago I got lost somewhere in the middle of the story and that was okay. All sorts of amazing things happening also it's a new characters new situations and the setup for the conclusion of the story.",
        book_id: 9780358380245,
    },
    {
        rating: 10,
        content:"In an exciting climax to the Lord of the Rings book (trilogy). Things get really serious lots of characters change and die some things stay the same some things will never be the same. And the story will never truly end. I know this is true because I've been reading these for 40 years now. Best fantasy ever!",
        book_id: 9780358380252,
    },
    {
        rating: 10,
        content: "J.R.R. Tolkien worked on the tales which eventually became known as The Silmarillion for most of his life, beginning as a young schoolboy in the early 1900s and continuing through his years as a student at Oxford, his wartime service, and his long career as a scholar and professor. The Silmarillion is a prologue of sorts to Tolkien's better known books The Hobbit and The Lord of the Rings, both of which contain numerous references to characters and events found therein. Tolkien never finished working on The Silmarillion, and after his death in 1973 his youngest son Christopher took on the task of editing and preparing the work for publication in 1977. The Silmarillion's appearance in print was a joyous moment in the lives of everyone who had fallen in love with Tolkien's world, and it continues to amaze and delight new readers.",
        book_id: 9780063280779,
    },
    {
        rating: 9,
        content: "There are four major themes in the novel:        The corruption and decadence of the wealthy: The wealthy characters in the novel, particularly Tom and Daisy Buchanan, are depicted as selfish and careless, using their wealth to manipulate and deceive others. The disillusionment and emptiness of the American Dream: The novel portrays the American Dream as a false promise, as characters like Gatsby and Tom are unable to find true happiness despite their wealth and success. The impact of the past on the present: The characters in the novel are haunted by their past mistakes and regrets, and the events of the past continue to shape their present circumstances. The dangers of excess and the desire for more: The characters in the novel are constantly seeking more wealth, power, and pleasure, leading to destructive behavior and consequences. Notable quotes include: 'I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.' (Chapter 1) 'There are only the pursued, the pursuing, the busy and the tired.' (Chapter 7) 'Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther… And one fine morning—— So we beat on, boats against the current, borne back ceaselessly into the past.' (Chapter 9)",
        book_id: 9798409130329,
    },
    {
        rating: 9,
        content: "A contemporary master--a genius...Here was a man who used language as if it were pure energy beautifully controlled, and who knew exactly what he was doing in every silence as well as in every word.",
        book_id: 9780316769174
    },
    {
        rating: 10,
        content: "This is a classic evaluation of the inter-personal dynamics of the social injustice brought on by the income disparity and lack of a national socio-economic class to right the perceived wrongs of the poor and down trodden with mud and blood at every turns which lends to a true self evaluation of the common American Dream of an Over The Rainbow longing for a land of milk and honey with a chicken in every pot. California is truly, and should be, the last stop for every human being with a life long ambition to live the goof life. Everything else in the world is just dust and decay forever. Next Stop 'California' and a life of plenty. Shifting gears and stepping on the gas. Wooo Yeah. The dream continues.",
        book_id: 9780670016907,
    },
    {
        rating: 10, 
        content: "I never read Sun in high school or college, though I was an English major. I preferred 20th century British authors like Waugh, Huxley and Orwell. I guess I was a little snobbish about Hemingway, thinking him a second tier writer. I haven't read his other works but Sun really surprised me. I probably wouldn't have appreciated it when I was younger. It has an atmosphere of alienation and ennui that would have gone right over my head. The picture of seeking aimless distraction from the genuine horrors of modernity really resonates with me in these times we live in. Jake's disillusionment and hopelessness feel quite familiar. And the language and dialogue feel very modern and fresh, even if some of the slang is antique. These days we similarly fall back on a formulaic debasing of real communication, relying on the cute catch phrase du jour, sarcasm and snark. Things have not changed very much in 90+ years. I loved the famous Hemingway diction. Anyone who dared to write in such simple declarative sentences today would be skewered as shallow and simplistic. But it worked for Jake as the first person narrator. He's the hard boiled news man holding pain inside that does not bear examination or expression. So much has to be inferred about him from very scant evidence. Quite revolutionary for the book's time. The casual digs at Cohn's Jewishness were cringey, but you have to consider the rampant anti Semitism of that era. I was very impressed and have to agree this is one of the finest works in American literature.",
        book_id: 9781957240466,
    },
    {
        rating: 8,
        content: "It’s one of the classic from American literature, it fetched him Nobel and Pulitzer and took his works to new heights.",
        book_id: 9780684801223,
    },
    {
        rating: 8,
        content: "I read it as a kid, and now I've read it as an adult and found so much more to enjoy now.",
        book_id: 9780486280615,
    },
];

seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
