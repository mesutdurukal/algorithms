let jobDescriptions = new Map();
let scoreArray;

function storeDocument(document, documentNumber) {
    // Keep JDs in a map: IDs are the key, descriptions are value
    jobDescriptions.set(documentNumber, document);

    /* in the requirement it is guaranteed that all IDs are unique
    if (!jobDescriptions.has(documentNumber)){}
    else { // What if the description was already stored?
    }*/
}

function findOccurence(query, description) {
    let wordsInQuery = query.split(' ');
    let score = 0;
    for (let i = 0; i < wordsInQuery.length; i++) {
        // scan all words in the query
        if (description.indexOf(wordsInQuery[i]) > -1) {
            // found in JD
            score++;
        }
    }
    return score;
}

function matchScores(search) {
    for (let [id, description] of jobDescriptions) {
        let score = findOccurence(search, description);
        if (score > 0) {
            // no need to keep 0 matching IDs
            if (!scoreArray[score]) {
                // if the index is not set yet
                scoreArray[score] = [id];
            } else {
                // if the index is already set by some IDs
                scoreArray[score].push(id);
            }
        }
    }
}

function performSearch(search) {
    // Step 1: Find match scores for each JD
    // Fill the score array: Indexes are the match counts, values are a list of relevant IDs
    scoreArray = [];
    matchScores(search);

    // Step2: List top 10 non zero values (in case no matching: -1)
    let sortedArray = [];
    for (let index = scoreArray.length - 1; index >= 0; index--) {
        if (index in scoreArray) {
            // Consider only non-empty indexes
            for (let i = 0; i < scoreArray[index].length; i++) {
                sortedArray.push(scoreArray[index][i]);
            }
        }
        if (sortedArray.length > 9) {
            index = 0; // terminate: no need to continue bcs already collected 10 IDs
            sortedArray = sortedArray.slice(0, 9); // while pushing a list, collected number
            // can be already more than 10: Trim from first 10
        }
    }

    // Step3: Print out sorted array
    if (sortedArray.length == 0) {
        console.log('-1');
    } else {
        console.log(sortedArray.join(' '));
    }
}

storeDocument('experienced software developer python', 0);
storeDocument('experienced developer javascript css html react', 1);
storeDocument('technical recruiter junior software', 2);
performSearch('software');
performSearch('experienced developer');
performSearch('javascript developer experienced leader');
performSearch('recruiter');
performSearch('leader');
