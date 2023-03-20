function scuberGreetingForFeet(someValue){
  let result;
  if (someValue < 400) {
    result = "This one is on me!";
  }
  else if ( someValue > 400 && someValue <2000){
    result = "That will be twenty bucks."
  }
  else if (someValue > 2500){
    result = "No can do."
  }
  else {
    result = "I will gladly take your thirty bucks."
  }
  return result;
}

function ternaryCheckCity(cityName){
  return cityName === "NYC"? "Ok, sounds good.": "No go." 
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you."
    default: 
      return "Bye."
  }
}