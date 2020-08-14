import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import BookOptions from './BookOptions.js'
import GhostBotAvatar from './GhostBotAvatar.js'
import ToastBotAvatar from './ToastBotAvatar.js'
import BookList from './BookList.js'

import danny from './BookImages/danny.png';
import wonder from './BookImages/wonder.jpg';
import chaos from './BookImages/chaos.jpg';

import grant from './BookImages/grant.jpg';
import innov from './BookImages/innov.jpg';
import light from './BookImages/light.jpg';

import hand from './BookImages/hand.jpg';
import watts from './BookImages/watts.jpg';
import harris from './BookImages/harris.jpg';

import twain from './BookImages/twain.jpg';
import falcon from './BookImages/falcon.jpg';
import homer from './BookImages/homer.jpg';

import '../scss/books.scss';

const config = {
  botName: "JoJo",
  initialMessages: [
      createChatBotMessage("Hi, my name is JoJo. I'm Ayon's librarian 📚"),createChatBotMessage("Can I interest you in a book recommendation?",{
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
      description: "Computers have become so ubiquitous and user-friendly that it's easy to forget how incredible and complex they really are. It's also easy to forget the boundless problem-solving potential that computers present us with. This book serves as a great reminder.",
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
    description: "This book is about a walking contradiction: A man who was often guileless but had deep psychological insight into his opponents on the battlefield. A man who was resolute, courageous, and bold but also struggled with alcoholism, standing up to his in-laws, and cutting venomous people out of his circle when required. Someone who spent all his mortal energies extinguishing the confederacy and then the ku klux klan, but in a moment of weakness enacted racist policies against Jewish people which he spent the rest of his life repenting for and attempting to fix. We owe a lot to this humble leather store clerk from Galena, Illinois who became one of the greatest heroes of the republic. At the bare minimum, we owe it to him to not use our own imperfections as excuses to shirk responsibility and service.",
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
  description: "Imagine trying to get user traction when your first product demo burned J.P Morgan's house to the ground. Or having to physically dig trenches and build power lines instead of doing a containerized Kubernetes deployment. The electrical revolution really makes what we do seem easy, huh? This book showed me how good we have it today, and how self-education, hard work, technical depth, and understanding human beings can spark revolutions.",
  link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
  image: light,
},
  ],
},
},
{
  widgetName: "startups",
  widgetFunc: (props) => <BookList {...props} />,
  props: {
    options: [
  {id: 1,
  title: "Founders Dilemmas by Noam Wasserman",
  description: "This book showed me how a contradictory, imperfect person like Grant could demonstrate courage, greatness, and genius when their country called upon them to do so. It also exposed me to the horrors and triumphs of the Civil War and Reconstruction through the eyes of one of the era's greatest heroes.",
  link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2",
  image: grant,
},
{id: 2,
title: "Zero to One by Peter Thiel",
description: "Sometimes technologists can hold a surprisingly ahistorical perspective, as if history started at the Google IPO. This book disabuses us of that notion and reminds us of the giants on whose shoulders we stand: Charles Babbage, Ada Lovelace, Grace Hopper, Bob Noyce, Vannevar Bush, and many others. This is also a book about how difficult personalities across disparate disciplines were able to come together to make brilliant advances.",
link: "https://www.amazon.com/Pattern-Stone-Computers-Science-Masters/dp/046502596X",
image: innov,
},
{id: 3,
title: "The Lean Startup by Eric Ries",
description: "Imagine trying to get user traction when your first product demo burned J.P Morgan's house to the ground? Or how about having to physically dig trenches and build power lines instead of doing a containerized Kubernetes deployment? The electrical revolution really makes what we do seem easy, huh? This book showed me how good we have it today, and also how self-education, hard work, technical depth, and understanding human beings can spark revolutions.",
link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
image: light,
},
],
},
},
{
  widgetName: "fiction",
  widgetFunc: (props) => <BookList {...props} />,
  props: {
    options: [
      {id: 3,
      title: "The Odyssey by Homer",
      description: "A guileful, smart leader makes bold moves to help a small group of loyal people reach the promised land, avoiding all manner of chaos including getting eaten by a giant. This is basically the story of all succesful startups, right? The tale of Odysseus, the old campaigner, the man of exploits teaches us among other things that sometimes the best way to reach our destination is to be flexible and creative rather than forceful and obstinate.",
      link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
      image: homer,
      },
{id: 2,
title: "The Maltese Falcon by Dashiel Hammett",
description: "To tell you the truth, I barely remember the details of this book... I just remember staying up super late in college, crushing it in one night, and having my mind blown. Hammett is a former private eye and his noir novels are hardboiled, gritty page turners. You really can't go wrong here.",
link: "https://www.amazon.com/Pattern-Stone-Computers-Science-Masters/dp/046502596X",
image: falcon,
},
{id: 1,
title: "Tom Sawyer by Mark Twain",
description: "Tom Sawyer is the patron saint of itinerant, intrepid souls. A great adventurer and someone who reminds us of what it was like to be young and full of spontaneity and rebellion. This book is a hilarious, exciting, and sometimes poignant trip to the summer of life.",
link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2",
image: twain,
},
],
},
},
{
  widgetName: "meditation",
  widgetFunc: (props) => <BookList {...props} />,
  props: {
    options: [
  {id: 1,
  title: "Opening the Hand of Thought by Uchiyama Roshi",
  description: "My favorite introduction to meditation, by the zen and origami master Kosho Uchiyama Roshi. It focuses on the essential ideas of meditation: That we are not our thoughts but our awareness, that the more we get wrapped up in concepts the further we get from the ground of reality, and that suffering comes from delusion (or detachment from reality).",
  link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2",
  image: hand,
},
{id: 2,
title: "The Way of Zen by Alan Watts",
description: "A historical and practical overview of zen from one of its most iconic and countercultural proponents. Alan Watts has a beautiful and compelling way of crystallizing the core insights of zen for us. ",
link: "https://www.amazon.com/Pattern-Stone-Computers-Science-Masters/dp/046502596X",
image: watts,
},
{id: 3,
title: "Waking Up by Sam Harris",
description: "This is the book I recommend to people who are reflexively allergic to anything that could be labeled as spiritual or religious. Sam Harris is one of the four horsemen of new atheism and an ardent, long-time practioner of meditation. This book is a fanastic introduction to meditation and a great exploration of how it can impact your life.",
link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
image: harris,
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
       userAvatar: () => <ToastBotAvatar/>,
     },
   }

export default config
