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
    let words = word[0].length;
    let test = word[0];
    for (let i = 1; i < word.length; i++ ){
        let maxi = word[i].length;
        if (maxi > words){
            test = word[i];
            words = maxi;
        }
    }
    return test;
   
}

export function sumArray(numbers){
    
  let sum = 0

  for (let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];

  }
    return sum
}

export function averageNumbers(){


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





