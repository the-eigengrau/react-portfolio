// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    //greetings
    const greetingArray = ['hey','hello','hi','howdy','yo']
    var n;
    for(n=0; n < greetingArray.length; n++) {
      if (lowerCaseMessage.includes(greetingArray[n])) {
        this.actionProvider.greet()
      }
    }

    const yesArray = ['yes','yeah','yep','ya','more','books']
    var x;
    for(x=0; x < greetingArray.length; x++) {
      if (lowerCaseMessage.includes(yesArray[x])) {
        this.actionProvider.books()
      }
    }

    const starArray = ['star','no','holocron']
    var a;
    for(a=0; a < starArray.length; a++) {
      if (lowerCaseMessage.includes(starArray[a])) {
        this.actionProvider.greet()
        this.actionProvider.starWars()
        this.actionProvider.books()
      }
    }

    const drinkArray = ['droids','droid','drink','cocktail','booze']
    var a;
    for(a=0; a < drinkArray.length; a++) {
      if (lowerCaseMessage.includes(drinkArray[a])) {
        this.actionProvider.drink()
      }
    }

    const helpArray = ['help','what','how']
    var i;
    for(i=0; i < helpArray.length; i++) {
      if (lowerCaseMessage.includes(helpArray[i]) && !lowerCaseMessage.includes('drink')) {
        this.actionProvider.help()
      }
    }
  }
  }

  //starwars

export default MessageParser;
