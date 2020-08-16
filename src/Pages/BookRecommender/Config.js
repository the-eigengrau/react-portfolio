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

import thiel from './BookImages/thiel.jpg';
import wasser from './BookImages/wasser.jpg';
import ries from './BookImages/ries.jpg';

import vignelli from './BookImages/vignelli.jpg';
import nudge from './BookImages/nudge.jpg';
import enchanted from './BookImages/enchanted.jpg';

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
  description: "Founder’s Dilemmas is an ultra detailed book about why startups fail, based on a dataset of thousands of high-growth ventures. The core thesis of the book, with much variation and nuance, is that founders are typically either motivated by control or by financial gain, and at each stage of a firm’s development the choices you have to make can bifurcate along those lines. If you have a company where the founders are not aligned in their desired outcome, the company stands to tear itself apart. The book details all sorts of other research about correlates of startup success, including things like hiring templates, equity splits, funding sources, and much more. There’s a lot of food for reflection in this book.",
  link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2",
  image: wasser,
},
{id: 2,
title: "Zero to One by Peter Thiel",
description: "Peter Thiel, the ever-contrary, ever-vexing PayPal paladin performed a feat of expository dexterity when he wrote this book. That sentence was fun to write. But this book was more fun to read. Thiel describes a world teeming with secrets, seeds of great startups lying dormant just beyond our grasp. He made me feel strongly that with hard work, first-principles thinking, and cultivating knowledge you can find great ideas that can change the world. He also lays out details about how and why you should aim to monopolize your market, how to grow your business, recruit great talent, and grapple with with the harsh reality of power laws. This is definitely a book I come back to time and again, and in some ways a stark counterpoint to Eric Ries’ Lean Startup methodology, in that Thiel advocates have a concrete, compelling view of the future and driving towards it instead of hedging your bets and iterating your way to a local maxima. There’s a lot of value in Ries’ methodology each book in some ways tempers and checks the ideas of the other.",
link: "https://www.amazon.com/Pattern-Stone-Computers-Science-Masters/dp/046502596X",
image: thiel,
},
{id: 3,
title: "The Lean Startup by Eric Ries",
description: "The Lean Startup is a classic text that frames the startup as a series of hypotheses that need validation and refinement in order to become actionable. The core idea is to create a loop whereby you build lightweight experimental products/features, measure their performance with actionable metrics, learn from the results and modify the product. But as with the other two books in this section, there’s a ton of detail on a wide array of relevant topics, case studies, examples of successes and failures, and more. This is the kind of book you return to time and again to squeeze all the value out of it.",
link: "https://www.amazon.com/Chaos-Making-Science-James-Gleick/dp/0143113453/ref=sr_1_2?crid=2506IZKU77Z8J&dchild=1&keywords=chaos+james+gleick&qid=1596805547&s=books&sprefix=chaos+james+g%2Cstripbooks%2C202&sr=1-2",
image: ries,
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
  widgetName: "design",
  widgetFunc: (props) => <BookList {...props} />,
  props: {
    options: [
      {id: 3,
      title: "Enchanted Objects by David Rose",
      description: "Where would the ring-bearer be without his glowing sword, Sting, that would protect him from the forces of darkness before he even knew danger was present? Enchanted Objects is about an alternative future where the dominant mode of interaction is not a glossy black screen but rather something alive, dimensionally rich, and responsive to our needs. The book draws inspiration form fantasy novels where enchanted objects come alive and give bearers abilities they could never have dreamed of. Alexa and other voice assistants comes closer to enchanted objects than most other modern consumer electronics, but I think we can go a lot further. However, in order to do so you need to cultivate a broad multi-modal skillset and push yourself to think outside of current paradigms of digital design. Enchanted Objects pushed me to develop my programming ability, start tinkering with hardware in the form of Arduino projects, and expand my ability to draw. This is a truly beautiful book and I highly recommend it.",
      link: "https://www.amazon.com/Enchanted-Objects-Innovation-Design-Technology/dp/1476725640/ref=sr_1_1?dchild=1&keywords=enchanted+objects&qid=1597598470&sr=8-1",
      image: enchanted,
      },
{id: 2,
title: "The Vignelli Canon by Massimo Vignelli",
description: "This book introduced me to the design ethos at its best: Massimo Vignelli was the kind of designer who believed that a person of his profession should be able to architect anything from a spoon to a city. I love that kind of broad thinking, intellectual courage, and willingness to tackle any challenge that comes across your path. This book also contains a plethora of examples of excellent design as well as practical tips on layout, color, typography, and how to do more with less. Another good book along these lines is Less But Better by Dieter Rams, and the movie Rams is worth a watch as well.",
link: "https://www.amazon.com/Vignelli-Canon-Massimo/dp/3037782250/ref=sr_1_1?dchild=1&keywords=vignelli+canon&qid=1597598491&sr=8-1",
image: vignelli,
},
{id: 1,
title: "Nudge by Richard Thaler",
description: "Most UX designers who want to delve into psychology tend to reach for Don Norman’s excellent books (The Design of Everyday Things, Emotional Design), Nir Eyal’s Hooked, or Steve Krug’s Don’t Make Me Think. These are all excellent books, as is the O’Reilly tome on behavioral design and BJ Fogg’s papers and books. But my favorite book on the impact and influence of subtle design choices on user behavior is Nudge by Nobel laureate Richard Thaler. ",
link: "https://www.amazon.com/Age-Wonder-Romantic-Generation-Discovery/dp/1400031877/ref=sr_1_2?dchild=1&keywords=age+of+wonder&qid=1596805574&s=books&sr=1-2https://www.amazon.com/Nudge-Improving-Decisions-Health-Happiness/dp/014311526X/ref=sr_1_1?dchild=1&keywords=Nudge+by+richard+thaler&qid=1597598511&sr=8-1",
image: nudge,
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
