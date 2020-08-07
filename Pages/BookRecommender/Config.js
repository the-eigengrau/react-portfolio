import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import BookOptions from './BookOptions.js'
import GhostBotAvatar from './GhostBotAvatar.js'
import BookList from './BookList.js'

import danny from './BookImages/danny.png';
import wonder from './BookImages/wonder.jpg';
import chaos from './BookImages/chaos.jpg';

import grant from './BookImages/grant.jpg';
import innov from './BookImages/innov.jpg';
import light from './BookImages/light.jpg';

import '../scss/books.scss';

const config = {
  botName: "Jocasta",
  initialMessages: [
      createChatBotMessage("Hi, my name is Jocasta and I'm Ayon's librarian 📚"),createChatBotMessage("Can I interest you in a book recommendation?",{
        widget: "learningOptions",
      }),
    ],
    widgets: [
      {
        widgetName: "science1",
    	  widgetFunc: (props) => <BookList {...props} />,
        props: {
          options: [
        {id: 1,
        title: "The Age of Wonder by Richard Holmes",
        description: "The Age of Wonder empowers you to think for yourself from first principles, and not outsource all your intellectual activities to specialists in the ivory tower. It's about a time when individuals felt like they could delve into a subject and unearth valuable secrets that could change the world. We still live in a time like that, but most of us don't realize it.",
        link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2",
        image: wonder,
      },
      {id: 2,
      title: "The Pattern on the Stone by Danny Hillis",
      description: "Computer have become so ubiquitous and user-friendly that it's easy to forget how incredible and complex they really are. It's also easy to forget the boundless problem-solving potential that computers present us with. This book serves as a great reminder.",
      link: "https://www.amazon.com/Pattern-Stone-Computers-Science-Masters/dp/046502596X",
      image: danny,
    },
      {id: 3,
      title: "Chaos by James Gleick",
      description: "How do we make sense of the strange balance of order and chaos in the wildness of nature? Can the flapping of a butterfly's wings really cause a hurricane? These are the types of questions you'll delve into if you read this book. You'll also get a science of the excitement of the scientific process and see examples of esoteric insights from one field becoming unexpectedly actionable in other fields.",
      link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
      image: chaos,
    },
      ],
    },
  },
  {
    widgetName: "history",
    widgetFunc: (props) => <BookList {...props} />,
    props: {
      options: [
    {id: 1,
    title: "Grant by Ron Chernow",
    description: "This book showed me how a contradictory, imperfect person like Grant could demonstrate courage, greatness, and genius when their country called upon them to do so. It also exposed me to the horrors and triumphs of the Civil War and Reconstruction through the eyes of one of the era's greatest heroes.",
    link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2",
    image: grant,
  },
  {id: 2,
  title: "The Innovators by Walter Isaacson",
  description: "Sometimes technologists can hold a surprisingly ahistorical perspective, as if history started at the Google IPO. This book disabuses us of that notion and reminds us of the giants on whose shoulders we stand: Charles Babbage, Ada Lovelace, Grace Hopper, Bob Noyce, Vannevar Bush, and many others. This is also a book about how difficult personalities across disparate disciplines were able to come together to make brilliant advances.",
  link: "https://www.amazon.com/Pattern-Stone-Computers-Science-Masters/dp/046502596X",
  image: innov,
},
  {id: 3,
  title: "Empires of Light by Jill Jonnes",
  description: "Imagine trying to get user traction when your first product demo burned J.P Morgan's house to the ground? Or how about having to physically dig trenches and build power lines instead of doing a containerized Kubernetes deployment? The electrical revolution really makes what we do seem easy, huh? This book showed me how good we have it today, and also how self-education, hard work, technical depth, and understanding human beings can spark revolutions.",
  link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
  image: light,
},
  ],
},
},
      {
     	  widgetName: "learningOptions",
    	   widgetFunc: (props) => <BookOptions {...props} />,
       },
     ],
     customComponents: {
       // Replaces the default bot avatar
       botAvatar: () => <GhostBotAvatar/>,
     },
   }

export default config
