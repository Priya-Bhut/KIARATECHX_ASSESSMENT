/* Task AnaGramGrouping */

function anagramGrouping(arr) {
    const anagramGroups = new Map();
    for (const word of arr) {
        const signature = word.toLowerCase().split('').sort().join('');
        if (anagramGroups.has(signature)) {
            anagramGroups.get(signature).push(word);
        }
        else {
            anagramGroups.set(signature, [word]);
        }
    }
    return Array.from(anagramGroups.values());
}

console.log('Given words of anagram grouping is:- ',
    anagramGrouping(["eat", "tea", "tan", "ate", "nat", "bat"]));


