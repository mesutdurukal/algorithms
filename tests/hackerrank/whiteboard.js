// cleanTitles = {"Software Engineer", "Mechanical Engineer", "Cashier", ...}
1                       2               0
// rawTitle = "I need Software Engineer", cleanTitle = "Software Engineer"
// rawTitle = "Mechanical Engineer, USD100K", cleanTitle = "Mechanical Engineer"
"C# engineer"
// scoring function = Number of overlapping words

class Normalizer {
    constructor(cleanTitles) {
        this.cleanTitles = cleanTitles;
    }
    splitWords(title) {
        // return split words from given title
    }

    calculateScore = (rawTitle, cleanTitle)=>{
        // calculate number of matching words
        let score = 0;
        let rawWords = rawTitle.splitWords();      // remove punctuation & lowercase
        let cleanWords = cleanTitle.splitWords(); // remove punctuation & lowercase
        for (let i=0; i<rawWords.length; i++){
            if (rawWords[i] != ""){   // computer      engineer ["computer", "", "", "", "engieer""]
                if (cleanWords.indexOf(rawWords[i]) > -1){ // it is in the cleanTitle
                    score++;
                }
            }
        }
        return score;

    }

    // time complexity
    /*
    M times (length of cleantitles)
    N number of words in raw titles
    C number of words in the cleanTitle
    O(M * N * C)
    1. rawTitle = "Cashier"
    2. Map{
        "Casherier" -> [0, 1, 2,]
    }

    cleanTitles
        cleanTitleX > myMap.set(kw, [,0,,,,,1,000])

    }


    step 1. check if myMap.has(keyword)
    step 2. calculate
    step 3. myMap.set(keyword, score[])
    */


    normalize(rawTitle) {
        // clean titles: words seperated by a single space: single space is ensured by the provided data
        // raw titles: words seperated by a single/multiple spaces: remove punctuation from each

        // Corner cases: empty strings

        // Calculate each score, return cleantitle having the max score (if same score return any)
        // if no score bigger than 0: return null
        if (rawTitle == "")
            return null;

        let indexOfMaxScore = -1;
        let maxScore = 0;
        for (let i=0; i<cleanTitles.length; i++){
            let currentScore = this.calculateScore (rawTitle, cleanTitles[i]) ;
            if (currentScore > maxScore){
                maxScore = currentScore;
                indexOfMaxScore = i;
            }
        }

        if (indexOfMaxScore > -1)
            return cleanTitles[indexOfMaxScore];
        return null;

    }
}