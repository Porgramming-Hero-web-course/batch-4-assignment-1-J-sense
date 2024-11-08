{
    function countWordOccurrences(sentence: string, word: string) {
        let lowerSentence = sentence.toLowerCase().split(" ");
        
        let lowerWord = word.toLowerCase();
        console.log(lowerWord)
        const occurrences = lowerSentence.filter(w => w === lowerWord).length;
        return occurrences
        
      }
      
      console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); 
    }      
