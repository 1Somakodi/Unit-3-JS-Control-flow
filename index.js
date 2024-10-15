function scuberGreetingForFeet(someValue){
  // Write your code here!
if ( someValue <= 400 ){
  return 'This one is on me!';
}else if ( someValue > 400 && someValue <= 2000 ){
  return 'That will be twenty bucks.';
}else if (someValue > 2000 && someValue <= 2500){
  return 'I will gladly take your thirty bucks.';
}else {
  return 'No can do.';
}
}

/**
  This function takes city as an argument.
It uses a ternary operator to check if the city is "NYC".
If city === 'NYC', it returns 'Ok, sounds good.'.
Otherwise, it returns 'No go.'.
 */

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


/**
 * Explanation:
The function takes a tip argument.
It uses a switch statement to check the value of tip:
If tip is 'generous', it returns 'Thank you so much.'.
If tip is 'not as generous', it returns 'Thank you.'.
For any other value (handled by the default case), it returns 'Bye.'.
 */

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return "Thank you so much."
      case 'not as generous':
        return "Thank you."
        default:
          return "Bye."
  }
}