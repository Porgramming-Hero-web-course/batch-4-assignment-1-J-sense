{
    function countWordOccurrences(sentence: string, word: string) {
        let lowerSentence = sentence.toLowerCase().split(" ");
        
        let lowerWord = word.toLowerCase();
        console.log(lowerWord)
        const occurrences = lowerSentence.filter(w => w === lowerWord).length;
        return occurrences
        
      }
      
      console.log(countWordOccurrences("The king is back to the game", "the")); 
    }      
