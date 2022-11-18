/* Encuentra el máximo */

export function maxOfTwoNumbers(n1, n2){
    if (n1 > n2) {
        return (n1)
    } else if(n1 < n2) {
        return (n2)
    } else {
        return (n1=n2)
    }
}
export function findLongestWord(word){
    let words = word[0];
    let test = word[0];
    for (let i = 1; i < word.length; i++ ){
        let maxi = word[i].length;
        if (maxi > words){
            
            } else{
                //test = word[i];
                maxi == words ;
            }
            return word
        }
   
        return test;
}

export function sumArray(numbers){
    
  let sum = 0

  for (let i = 0; i < numbers.length; i ++){
    sum += numbers[i];

  }
    return sum
}



export function averageNumbers(numbers){

    let media = []
    let sum = 0;
    
  for (let i = 0; i < numbers.length; i ++){
    
    sum += numbers[i];
    media = sum / numbers.length
  }
    return media
}


export function averageWordLength(){


}
export function uniquifyArray(){


}
export function doesWordExist(){


}
export function howManyTimes(){


}
export function greatestProduct(){


}





