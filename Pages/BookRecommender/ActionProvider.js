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

  books(){
    const m1 = this.createChatBotMessage("Of course! What kind of book are you looking for?",{
      widget: "learningOptions",
    })
    this.updateChatbotState(m1)
  }

  handleScience1 = () => {
    const message = this.createChatBotMessage(
      "Never hurts to stoke your sense of wonder.", {
        widget: "science1",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Type 'more books' to get more suggestions.")
    this.updateChatbotState(m2)
  }

  handleHistory = () => {
    const m = this.createChatBotMessage("Otto von Bismarck once said:",)
    this.updateChatbotState(m)
    const message = this.createChatBotMessage(
      "Only a fool learns from his own mistakes. A wise man learns from the mistakes of others.", {
        delay: 2000,
        widget: "history",
      }
    );
    this.updateChatbotState(message)
    const m2 = this.createChatBotMessage("Done befriending the eminent dead? Type 'more books'.",{
      delay:8000,
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
