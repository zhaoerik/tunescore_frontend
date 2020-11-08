const quizArray = [
    {
        lyric: "I miss the old Kanye, straight from the go Kanye, Chop up the soul Kanye, set on his goals Kanye",
        choices: ["I used to love Kanye, I used to love Kanye", "I hate the new Kanye, the bad mood Kanye", "I miss the sweet Kanye, chop up the beats Kanye", "And I love you like Kanye loves Kanye, hahaha"],
        answer: "I hate the new Kanye, the bad mood Kanye",
        id: "1",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg",
        album: "The Life Of Pablo",
        track: "I Love Kanye",
        artist: "Kanye West"
    },
    {
        lyric: "And I'm insensitive, and I lack empathy, He looked at me and said, Your potential is bittersweet, I looked at him and said, Every nickel is mines to keep",
        choices: ["Tell me how much a dollar cost", "You're lookin' at the Messiah, the son of Jehova, the higher power", "So I'ma tell you like I told the last bum, crumbs and pennies", "He looked at me and said, Know the truth, it'll set you free"],
        answer: "He looked at me and said, Know the truth, it'll set you free",
        id: "2",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
        album: "To Pimp A Butterfly",
        track: "How Much A Dollar Cost",
        artist: "Kendrick Lamar"
    },
    {
        lyric: "If you was my sister then I would kiss you and tell you that I'm sorry for the pain you had to live through",
        choices: ["I know I'm blessed because yo' stress is realer than anything I done been through", "A bullet hit yo' cousin in Temple while he was with you", "And while you was talkin', I was tearin' up, where's the tissue?", "I won't forget you, how could I with all you went through?"],
        answer: "I know I'm blessed because yo' stress is realer than anything I done been through",
        id: "3",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d3/JColeKOD.jpg",
        album: "KOD",
        track: "Window Pain",
        artist: "J. Cole"
    },
    {
        lyric: "I got a couple of mansions, Still I don't have any manners, You got a couple of ghost writers",
        choices: ["I wish I could say What a wonderful feeling!", "Because half of these rappers have brain damage", "I don't hate trap, and I don't wanna seem mad", "But to these kids it don't actually matter"],
        answer: "But to these kids it don't actually matter",
        id: "4",
        image: "https://upload.wikimedia.org/wikipedia/en/6/62/Eminem_-_Kamikaze.jpg",
        album: "Kamikaze",
        track: "Lucky You",
        artist: "Eminem"
    },
    {
        lyric: "How come you the best to me? I know you the worst for me",
        choices: ["Big dawg hittin' big wheelies on the six speed", "My spidey sensies, got me on the fencies", "Boy, you sweet as sugar, diabetic to the first degree", "Whole squad in Ginza, travel bag by Balenci'"],
        answer: "Boy, you sweet as sugar, diabetic to the first degree",
        id: "5",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
        album: "IGOR",
        track: "A BOY IS A GUN*",
        artist: "Tyler, the Creator"
    },
    {
        lyric: "Please don't wake me up, I feel it creeping (yeah)",
        choices: ["Controlling how you moving, lucid dreaming (dreams)", "Always on the side of different seasons, yeah, yeah", "I can make your Mondays even better like the weekend", "Nah, nah, please don't wake me up, feel like I'm dreamin'"],
        answer: "Controlling how you moving, lucid dreaming (dreams)",
        id: "6",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg",
        album: "Astroworld",
        track: "Wake Up",
        artist: "Travis Scott"
    },
    {
        lyric: "Grew up with no father so nobody ever 'son' me",
        choices: ["I feel useless when I'm never making money", "I know you wish that nobody ever loved me", "So nobody made me but the main streets", "My flow too sick, Kevin Costner couldn't touch me"],
        answer: "My flow too sick, Kevin Costner couldn't touch me",
        id: "7",
        image: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png",
        album: "Starboy",
        track: "Sidewalks",
        artist: "The Weeknd"
    },
    {
        lyric: "If it's a chit-chat ting, better talk nice",
        choices: ["Murda on the beat so it's not nice", "Skull gets hot, then I'm not nice", "You tryna date her and she been let me wop twice", "In the whip, on the left side, on a death ride"],
        answer: "Murda on the beat so it's not nice",
        id: "8",
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg",
        album: "More Life",
        track: "No Long Talk",
        artist: "Drake"
    },
    {
        lyric: "I hope you learn to make it on your own",
        choices: ["I hope that you get everything you want and that you chose", "And if you love yourself just know you'll never be alone", "I hope that it's the realest thing that you ever know", "Hope you get the pretty girls, that's pretty and everything"],
        answer: "And if you love yourself just know you'll never be alone",
        id: "9",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c8/Big_Sean_-_Dark_Sky_Paradise_%28Official_album_Cover%29.png",
        album: "Dark Sky Paradise",
        track: "One Man Can Change The World",
        artist: "Big Sean"
    },
    {
        lyric: "Hunnid thousand for the chain and now my drop (drop, drop)",
        choices: ["Designer fiend, when I start I cannot stop (woah, woah)", "I got, I got hella guap, look at me now", "When I pull out the garage, I chop my top (top, top)", "All this stuntin' couldn't satisfy my soul"],
        answer: "When I pull out the garage, I chop my top (top, top)",
        id: "10",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Beerbongs_%26_Bentleys_by_Post_Malone.png",
        album: "Beerbongs & Bentleys",
        track: "Rich & Sad",
        artist: "Post Malone"
    },
    {
        lyric: "Middle fingers out the Ghost, screamin' 'Makaveli' (come with me)",
        choices: ["Two sides to every coin, so we bail ready (bail ready)", "Hail Mary, the scale fairy", "Pop a wheelie, tell the judge to Akinyele", "How do you respond?"],
        answer: "Hail Mary, the scale fairy",
        id: "11",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Daytona_by_Pusha_T.jpg",
        album: "Daytona",
        Track: "What Would Meek Do?",
        artist: "Pusha T"
    },
    {
        lyric: "This ain't no intro, this the entree",
        choices: ["Tryna turn my baby mama to my fiancée", "She like music, she from Houston like Auntie Yoncé", "This for the kids of the king of all kings", "Hit that intro with Kanye and sound like André"],
        answer: "Hit that intro with Kanye and sound like André",
        id: "12",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c4/Chance_the_Rapper_-_Coloring_Book.png",
        album: "Coloring Book",
        track: "All We Got",
        artist: "Chance the Rapper"
    },
    {
        lyric: "Speaking of Nirvana, it was there",
        choices: ["Rare as the feathers on my dash from a phoenix", "There with my crooked teeth and companions sleeping, yeah", "Dreaming a thought that could dream about a thought", "That could think of dreaming and getting a glimmer of God"],
        answer: "Rare as the feathers on my dash from a phoenix",
        id: "13",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        album: "Blonde",
        track: "Seigfried",
        artist: "Frank Ocean"
    },
    {
        lyric: "Life is never easy when you need it to be",
        choices: ["Everybody's angry and they're comin' for me (comin' for me)", "But I can't give 'em energy that I won't receive (I won't receive)", "Try to knock me down, but I get back on my feet", "Like I'm movin' backwards but it's all on repeat"],
        answer: "Try to knock me down, but I get back on my feet",
        id: "14",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Khalid_-_Free_Spirit.png",
        album: "Free Spirit",
        track: "Hundred",
        artist: "Khalid"
    },
    {
        lyric: "We can keep the rain check or we can make plans",
        choices: ["Time to go, lock stock and two smoking barrels", "Locked and loaded, diamonds glowing, chart-climbing on 'em", "You think I'm jumping out the window how I got 'em open", "Pockets loaded, rocket loaded, okay lets rock and roll this"],
        answer: "Pockets loaded, rocket loaded, okay lets rock and roll this",
        id: "15",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6a/ASAP_Rocky_Testing.jpg",
        album: "Testing",
        track: "Prasie The Lord (Da Shine)",
        artist: "A$AP Rocky"
    },
    {
        lyric: "Tears on the mausoleum floor",
        choices: ["Lies on the lips of a priest", "Rollin' in the Rolls-Royce Corniche", "Blood stains the Coliseum doors", "Thanksgiving disguised as a feast"],
        answer: "Blood stains the Coliseum doors",
        id: "16",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg",
        album: "Watch The Throne",
        track: "No Church In The Wild",
        artist: "JAY-Z"
    }
];

export default quizArray;

// n = 5 to export 5 question 
// export default (n = 10) =>
    // Promise.resolve(quizArray.sort(() => 0.5 - Math.random()).slice(0, n));
