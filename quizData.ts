export interface QuizQuestionData {
    title: string,
    prose: string,
    images: Array<{ text: string, url: string }>,
    choices: Array<string>,
    answerIndex: number,
    hint?: string,
    explanation: string,
}

export const data: QuizQuestionData[] = [{
    title: "Uncommon ground",
    prose: "What concept do all these 4 pictures point to?",
    images: [
        {
            text: "Dragonball-Z fusion",
            url: "https://i.ytimg.com/vi/_cuvckR5vRk/maxresdefault.jpg"
        }, {
            text: "Logarithm",
            url: "https://media.istockphoto.com/photos/calculators-log-or-logarithm-key-in-closeup-picture-id857325276?s=612x612"
        }, {
            text: "Sorted bars",
            url: "https://docs.tibco.com/pub/sfire-cloud/latest/doc/html/en-US/TIB_sfire_bauthor-consumer_usersguide/bauthcons/images/sorting_bars_reverse.png"
        }, {
            text: "Recursion",
            url: "https://storage.googleapis.com/algodailyrandomassets/curriculum/recursion/cover.jpg"
        }
    ],
    choices: ["Combinatorics", "Queue", "Merge Sort", "Insertion Sort"],
    answerIndex: 2,
    hint: "Does fusing/merging things together remind you of something ?",
    explanation: "MERGE SORT is a sorting algorithm that has O(n*LOG(n)) time complexity (big O notation) and is typically implemented using RECURSION"
}, {
    title: "What programming languages do you know?",
    prose: "Do you know these programming languages? Choose the ODD NAME OUT",
    images: [{
        text: "Prolog",
        url: "https://dashboard.snapcraft.io/site_media/appmedia/2020/04/Prolog-logo-512.png"
    }, {
        text: "Python",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
    }, {
        text: "Kotlin",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/2048px-Kotlin_Icon.svg.png"
    }, {
        text: "Java",
        url: "https://www.blockachain.gr/wp-content/uploads/2018/03/java-coffee-cup-logo.png"
    }],
    choices: ["Pic 1", "Pic 2", "Pic 3", "Pic 4"],
    answerIndex: 3,
    hint: "How about a bit character counting?",
    explanation: "Prolog, Python, and Kotlin all have 6 characters in their name. Java unfortunately does not"
}, {
    title: "Uncommon ground 2",
    prose: "Do you know what is one of the best tools for becoming a better developers",
    images: [{
        text: "Orange",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg"
    }, {
        text: "Stacks",
        url: "https://i.gifer.com/fetch/w300-preview/63/63d3d5ba5e1ae30de2ed2bf740bc8463.gif"
    }, {
        text: "Q and A",
        url: "https://media.istockphoto.com/vectors/questions-and-answers-black-icon-vector-id1159417801?k=20&m=1159417801&s=170667a&w=0&h=BYx-vjgI9avFB6ncHH5hyGghWZpWt412FvVgV7kMLn0="
    }, {
        text: "Reputation",
        url: "https://bvtigernews.com/wp-content/uploads/2020/02/reputation.jpg"
    }],
    choices: ["Kroger.com", "StackOverflow.com", "Reddit.com", "Bing.com"],
    answerIndex: 1,
    explanation: "StackOverflow.com is one the best place to ask and/or get answers for your programming questions. It is also noted that the logo of StackOverflow is mostly ORANGE, and the site uses a Reputation-based system"
}, {
    title: "Odd one out AGAIN",
    prose: "Choose the ODD ONE OUT",
    images: [{
        text: "Bubble",
        url: "https://cdn.pixabay.com/photo/2015/06/22/10/10/soap-bubble-817421_960_720.jpg"
    }, {
        text: "Quick",
        url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Quick_%28Magazine%29.png"
    }, {
        text: "Charizard",
        url: "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"
    }, {
        text: "Merge",
        url: "https://i.ytimg.com/vi/V42h6A-IAEk/maxresdefault.jpg"
    }],
    choices: ["Pic 1", "Pic 2", "Pic 3", "Pic 4"],
    answerIndex: 2,
    hint: "It's all about the algorithms",
    explanation: "There are Bubble Sort, Quick Sort, Merge Sort; but there is no PokemonSort, FireSort, or CharizardSort"
}]