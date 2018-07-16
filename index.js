
function shout(string){
  return string.toUpperCase()
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(word.toUpperCase())
}
function logWhisper(word){
  console.log(word.LowerCase())
}

function sayHiToGrandma(word){
  if(word.toLowerCase() === word){
    return "I can't hear you!"
  }
  else if(word === "I love you, Grandma"){
    return "I love you,too"
  }
  else if(word.toUpperCase() === word){
    return "YES INDEED!"
  }
}


