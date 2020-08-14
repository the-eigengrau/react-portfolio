class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hello! Did you know I also protect the secret holocron archives of the Jedi?")
    this.updateChatbotState(greetingMessage)
  }

  starWars(){
    const greetingMessage = this.createChatBotMessage("Remember: If it's not in the Jedi archives, it doesn't exist.")
    this.updateChatbotState(greetingMessage)
  }

  help(){
    const greetingMessage = this.createChatBotMessage("Ask me to recommend you books, ask me about holocrons, or just say hi.",{delay:2000})
    this.updateChatbotState(greetingMessage)
  }

  drink(){
    const greetingMessage = this.createChatBotMessage("I'm a Jedi master, so there's really only one choice for me: We call it the Jedi mind trick.")
    this.updateChatbotState(greetingMessage)


    const m3= this.createChatBotMessage("3 tablespoons of Ketel One, 2 tablespoons of white grape juice, 2 tablespoons of Velvet Falernum, 1 teaspoon of Blue Curacao, 1 teaspoon of freshly squeezed lime juice, and 1 dash of grapefruit bitters in a pointed whiskey glass.")
    this.updateChatbotState(m3)

    const m4= this.createChatBotMessage("Soon you'll be saying: These are not the droids I'm looking for.")
    this.updateChatbotState(m4)
  }

  books(){
    const m2 = this.createChatBotMessage("What kind of book are you looking for?")
    this.updateChatbotState(m2)
    const m1 = this.createChatBotMessage("Click one of the options below:",{
      widget: "learningOptions",
    })
    this.updateChatbotState(m1)
  }

  handleScience1 = () => {
    const message = this.createChatBotMessage(
      "Never hurts to fuel your sense of wonder.", {
        widget: "science1",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Type 'more books' or 'recommend me a drink' to get more suggestions.")
    this.updateChatbotState(m2)
  }

  handleMeditation = () => {
    const message = this.createChatBotMessage(
      "What is the sound of one hand clapping?", {
        widget: "meditation",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Type 'more books' or 'recommend me a drink' to get more suggestions.")
    this.updateChatbotState(m2)
  }

  handleStartups = () => {
    const message = this.createChatBotMessage(
      "Go make a dent in the universe.", {
        widget: "startups",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Type 'more books' or 'recommend me a drink' to get more suggestions.",{delay: 1000,})
    this.updateChatbotState(m2)
  }

  handleFiction = () => {
    const message = this.createChatBotMessage(
      "Harry Potter type stuff basically. Ten points to Gryffindor!", {
        widget: "fiction",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Type 'more books' or 'recommend me a drink' to get more suggestions.",{delay: 1000,})
    this.updateChatbotState(m2)
  }

  handleHistory = () => {

    const message = this.createChatBotMessage(
      "Befriending the eminent dead is a sure path to success.", {
        widget: "history",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Type 'more books' or 'recommend me a drink' to get more suggestions.",{
    })
    this.updateChatbotState(m2)
  }

  updateChatbotState(message) {

// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider
