// MessageParser starter code
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    //greetings
    const greetingArray = ['hello','hi','howdy']
    var n;
    for(n=0; n < greetingArray.length; n++) {
      if (lowerCaseMessage.includes(greetingArray[n])) {
        this.actionProvider.greet()
      }
    }

    if (lowerCaseMessage.includes('no')) {
      this.actionProvider.starWars()
    }

    if (lowerCaseMessage.includes('books')) {
      this.actionProvider.books()
    }
  }
  }

  //starwars

export default MessageParser;
