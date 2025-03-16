const eventsData = [
  {
    id: "tedx",
    name: "TEDxSPIT",
    type: "fun",
    date: "2025-03-20",
    location: "Mumbai",
    time: "4 hours",
    description:
      "TEDxSPIT is a platform for sharing ideas and experiences that spark conversations and inspire change. It's a celebration of creativity, innovation, and the power of ideas to make a difference. Join us for a day of thought-provoking talks, engaging discussions, and inspiring stories.",
    frontImage: "/assets/events/tedx/tedx-front.png",
    backImage: "/assets/events/tedx/tedx-back.png",
    banner: "/assets/events/tedx/banner.png",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScRHyBNVeAH-gbDo4bum2jZEcVUKA7lIkGR_PZEsaJBwfgXhw/viewform", //for OUTSIDE SPIT
    formUrl2: "https://docs.google.com/forms/d/e/1FAIpQLScex0nB9RRwimzLVUzyCdChqQt1T9hj9Nm0PMyGLyVLH2tpxQ/viewform", //for SPIT
    month: "February",
    colorTheme: {
      primary: "#D4AF37", // Gold
      secondary: "#8B4513" // Saddle Brown
    },
    faq: [
      {
        "question": "What is the duration of each talk?",
        "answer": "Each talk is typically 18 minutes or less, following the standard TED format"
      },
      {
        "question": "Will there be breaks between sessions?",
        "answer": "Yes, there will be short breaks between sessions for refreshments and networking"
      },
      {
        "question": "Can I take photos during the event?",
        "answer": "No"
      },
      {
        "question": "Will the talks be recorded?",
        "answer": "Yes, the talks will be professionally recorded and shared on our official channels after the event"
      }
    ],
    "rules": [
      "Maintain complete silence during the talks and switch your mobile phones to silent mode",
      "Entry/Exit is only allowed between talks to avoid disturbing the ongoing session",
      "Recording of talks on personal devices is strictly prohibited",
      "Arrive at least 15 minutes before the scheduled start time",
      "Be respectful to speakers and other attendees during Q&A sessions",
      "Food and beverages are not allowed in the auditorium during talks"
    ],
  },
  {
    id: "rangmanch",
    name: "Rangmanch",
    type: "fun",
    date: "2025-03-23",
    location: "SPIT",
    time: "10:00 AM",
    description:
      "Lights, camera, action! Rangmanch, the only drama event of SPIT, is back with a stage set for passion, expression, and storytelling. Get ready to witness the power of theatre through Short Films, Nukkad Natak, and a Monologue Competition – three events that bring emotions to life like never before! Join us for an unforgettable theatrical experience and witness the true essence of drama at SPIT!",
    frontImage: "/assets/events/rangmanch/rangmanch-front.png",   
    backImage: "/assets/events/rangmanch/rangmanch-back.png",
    banner: "/assets/events/rangmanch/banner.png",
    formUrl: "https://linktr.ee/Mudra_S.P.I.T",
    month: "March",
    rule_book:true,
    colorTheme: {
      primary: "#D4AF37", // Gold
      secondary: "#8B4513" // Saddle Brown
    },
    faq: [
      {
        "question": "What are the different events in Rangmanch?",
        "answer": "Rangmanch features three main events: Short Film Competition, Nukkad Natak (Street Play), and Monologue Competition."
      },
      {
        "question": "What is the time limit for each event?",
        "answer": "Short Films should be 5-15 minutes, Nukkad Natak performances 15-20 minutes, and Monologues 3-5 minutes."
      },
      {
        "question": "Can I participate in multiple events?",
        "answer": "Yes, participants can register for multiple events, but ensure there are no timing clashes."
      },
      {
        "question": "What should be the team size?",
        "answer": "Short Films: 3-15 members, Nukkad Natak: 8-20 members, Monologue: Individual participation."
      },
      {
        "question": "Are there any language restrictions?",
        "answer": "Performances can be in Hindi, English, or a mix of both. Other languages must include subtitles/translation."
      }
    ],
    "rules": [
      "Short Films must be original content and submitted in MP4 format before the deadline",
      "Nukkad Natak performances must address social issues or relevant themes",
      "Monologues can be original or adapted from existing works with proper credits",
      "Use of offensive language or inappropriate content will lead to immediate disqualification",
      "Props and costumes are allowed but must be arranged by the participants",
      "Background music/sound effects are permitted for all three events",
      "Judges' decision will be final and binding",
      "All team members must carry valid college ID cards",
      "Time limits must be strictly followed for all performances",
      "Registration is mandatory through the provided link before the event"
    ],
  },
  {
    id: "ipl",
    name: "IPL Auction",
    type: "Fun",
    date: "2025-03-03",
    location: "Lab Complex",
    time: "9:00 AM",
    rule_book:true,
    description:
      "Get ready to be blown away at the IPL Auction, happening now at Oculus! Imagine yourself in the hot seat, bidding for cricket's biggest stars and assembling your dream team. With surprises around every corner, this event is not just thrilling – it's downright addictive! Join us for the ride of a lifetime where fortunes are won and lost in the blink of an eye. Whether you're a die-hard fan or just love a good competition, the IPL Auction at Oculus guarantees non-stop excitement. So, what are you waiting for? Get in on the action and bid your way to victory",
    frontImage: "/assets/events/ipl/ipl-front.png",
    backImage: "/assets/events/ipl/ipl-back.png",
    banner: "/assets/events/ipl/banner.png",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdyIqdOB-OPwg5h9JgtLv9NwpzAeQe-1QA5EjGTQLRaZ9Dbow/viewform",
    month: "March",
    colorTheme: {
      primary: "#32CD32", // Lime Green
      secondary: "#006400" // Dark Green
    },
    "faq": [
      {
        "question": "How are the winners declared?",
        "answer": "Each Player has an overall rating out of 100 and 6 individual ratings out of 10 which have bonus points. The team with the highest points at the end of the auction wins."
      },
      {
        "question": "Can I play online with my friends?",
        "answer": "Yes, you can play from anywhere with your team."
      },
      {
        "question": "Who all can participate?",
        "answer": "Literally anyone of any group are welcome to participate."
      }
    ],
    "rules": [
      "The group of participants would comprise of max 4 members and min 1 member.",
      "A total of around 130 players will go under the hammer.",
      "The team has to buy the best possible 11 players using a price pool of 100cr.",
      "The players are categorized into several categories and each team needs to fulfill the criteria of each category.",
      "Each player is given certain ratings. After fulfilling all criteria, the team with the maximum points will be declared the winner on adding all ratings."
    ],
  },
  {
    id: "sargam",
    name: "Sargam",
    type: "Cultural",
    date: "2025-03-02",
    location: "Auditorium",
    time: "6:00 PM",
    rule_book:true,   
    description:
      "What better opportunity for young aspiring singers with bags of potential to showcase their extraordinary musical side than Sargam'25! Get a chance to allure and amaze the audience with your euphonious melodies and compete to get top-notch prices along with the glory and prestige of winning Sargam'25.",
    frontImage: "/assets/events/sargam/sargam-front.png",
    backImage: "/assets/events/sargam/sargam-back.png",
    banner: "/assets/events/sargam/banner.png",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfgajJNFOscyYSBv_y-sn1AaYvWUTX22wTZr_-5-j4LPAtatw/viewform?usp=send_form",
    month: "March",
    colorTheme: {
      primary: "#9370DB", // Medium Purple
      secondary: "#4B0082" // Indigo
    },
    rule_book:true,   
    "faq": [
      {
        "question": "What are the different categories one could take part in?",
        "answer": "The two categories offered by Sargam are Solo and Duet. Solo Category has 3 sub-categories of Singing, Instrumental and Rap. The third category Rap was introduced last year as the new domain and has become a major hit."
      },
      {
        "question": "Will we get instruments for Sargam?",
        "answer": "A Standard Drum Kit will be provided, you are required to arrange for the other instruments."
      },
      {
        "question": "What if we pay for the first round but dont get selected?",
        "answer": "You will get refunded if you enter the audition round but are not selected for the finals."
      },
      {
        "question": "Explain the discount offer in detail.",
        "answer": "If a participant wishes to take part in 2 or more categories, he gets a discount of 50 rupees for each additional category."
      }
    ],
    "rules": [
      "Will be open to all Undergraduate Students.",
      "Audition Round: Participants send a video clip of their performance. The audition clip should not exceed a duration of 2 minutes for Solo and 5 minutes for Bands.",
      "There will be four categories: Solo: Instrumental, Singing, Rap Duet. Participants can choose to audition for all four, but can go ahead for a maximum of 2 categories.",
      "If you participate in multiple categories then you will get a discount of Rs.50 after the first registration.",
      "Participants can sing along to the Karaoke version of the song, or play their own musical instruments. Use of autotune is strictly prohibited."
    ],
  },
  {
    id: "aej",
    name: "Aelaan-E-Jang",
    type: "Cultural",
    date: "2025-03-02",
    location: "Auditorium",
    time: "6:00 PM",
    description:
      "Experience the electrifying pulse of Mumbai's dance scene at our event! Witness top group and solo professionals compete for thrilling prizes from a 30k pool. Don't miss the spotlight on the city's finest dancers!",
    frontImage: "/assets/events/aej/aej-front.png",
    backImage: "/assets/events/aej/aej-back.png",
    banner: "/assets/events/aej/banner.png",  
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSegpWvkfqDmDfQ-hzKdbrIE3mVUknLJBZinBAykIrHZjBG9Yw/viewform",
    month: "March",
    colorTheme: {
      primary: "#9370DB", // Medium Purple
      secondary: "#4B0082" // Indigo
    },
    gallery: {
      basePath: "/assets/events/aej/image",
      start: 1,
      end: 17,
      title: "Aelaan-E-Jang Gallery"
    },
    "faq": [
      {
        "question": "Who all can participate?",
        "answer": "Whether you are a group of 2-25 people or a solo you are eligible to take part the ultimate dance arena. Age limit 26 years."
      },
      {
        "question": "How many rounds?",
        "answer": "2 rounds will be conducted. 1st round would be the showcase round of each team. The top teams will qualify for 2nd round i.e. battle round."
      },
      {
        "question": "What is the theme & judging criteria?",
        "answer": "The theme is hip-hop/ Bollywood belonging to Mumbai. Judging would be based on overall impact, creativity, energy, sync & audience cheering."
      },
      {
        "question": "Payment of registration fee?",
        "answer": "Payment of all team members should be done all together via online payment methods."
      },
      {
        "question": "How do we stay updated about timings and other details?",
        "answer": "The participants would be receiving a WhatsApp group link via mail through which they would be updated about the event."
      },
      {
        "question": "Can you bring your friends to the event?",
        "answer": "All your friends and family are welcome to be in the audience and enjoy."
      }
    ],
    "rules": [
      "The decision of the AEJ organising committee and the judges will be final.",
      "Participants must register in groups and members should be unique to their group. (Minimum group size - 5)",
      "The scores given by judges will decide all the eliminations/qualifications.",
      "Dance performances must be without any vulgarity.",
      "The event will consist of four rounds.",
      "All participants must strictly adhere to the given time limits.",
      "Teams should prepare for the showcase round and the grand finale beforehand.",
      "Teams need to submit their tracks for the showcase round on/before the given date.",
      "All participants should carry their ID proofs (Aadhar/Driving/PAN) on the event day.",
      "Violation of rules will lead to disqualification."
    ],
  
  },
  {
    id: "carnival",
    name: "Carnival",
    type: "Cultural",
    date: "2025-03-21",
    location: "College Ground",
    time: "Whole Day",
    description:
      "Get ready to unleash your inner fashion icon! Carnival is here, a competition where the fiercest design rivals clash in a dazzling display of creativity. This isn't just a show, it's a battleground for bold ideas and show-stopping style. Transform the runway with your most innovative looks and compete for ultimate fashion glory!  Register right now or you'll be STRESSED later. This is your chance to SERVE some LOOKS that'll have everyone SHOOK.  Let's get this fashion party STARTED!",
    frontImage: "/assets/events/carnival/carnival-front.png",
    backImage: "/assets/events/carnival/carnival-back.png",
    banner: "/assets/events/carnival/banner.png",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeVj7XpryEiC8JoslEgH7B2On-7VPtNI4B7KsYXBhh-S3Ucog/viewform",
    month: "March",
    colorTheme: {
      primary: "#FF4500", // Orange Red
      secondary: "#8B0000" // Dark Red
    },
    gallery: {
      basePath: "/assets/events/carnival/image",
      start: 1,
      end: 28,
      title: "Carnival Gallery"
    },
    "faq": [
      {
        "question": "My college doesn't have a fashion team, can I still participate?",
        "answer": "You can form a group of interested individuals and apply."
      },
      {
        "question": "Will our hair and make-up be looked after?",
        "answer": "Participants are expected to look after their own make-up for the event."
      },
      {
        "question": "Will we be provided refreshments?",
        "answer": "Light snacks and nourishment shall be provided."
      },
      {
        "question": "Wil travel expenditure be accounted for?",
        "answer": "Participants are expected to look after their own travel and accommodations."
      },
      {
        "question": "Where will the event take place?",
        "answer": "The event will take place in the quadrangle of S.P.I.T."
      }
    ],
    "rules": [
      "A team can have up to 5-20 members.",
      "Each team has to decide their theme for the fashion team.",
      "Each team will get around 15-20 mins for their performance.",
      "Participants are expected to dress decently to maintain decorum.",
      "Use of drugs, cigarettes, and alcoholic beverages is strictly prohibited.",
      "Scores will be given on creativity, performance, use of props/unique elements, and synchronization.",
      "Teams are to prepare their CD and Pendrive for their performance.",
      "The decisions of the judges will be final.",
      "The organizing team will have the right to disqualify the team in case of grave disturbance. The decision of the organizing team will be final."
    ],
  },
  {
    id: "techrace",
    name: "TechRace",
    type: "Pre - Event",
    date: "2025-02-28",
    location: "Mumbai",
    time: "4 hours",
    description:
      "Techrace is the mega pre-event of OCULUS which marks the beginning of OCULUS. All college students can participate in this treasure hunt across mumbai whose clues will be available on our app along with a variety of power cards to make the event more fun and challenging",
    frontImage: "/assets/events/techrace/techrace-front.png",
    backImage: "/assets/events/techrace/techrace-back.png",
    banner: "/assets/events/techrace/banner.png",
    formUrl: "#",
    month: "February",
    colorTheme: {
      primary: "#D4AF37", // Gold
      secondary: "#8B4513" // Saddle Brown
    },
    faq: [
      {
        "question": "Do we need technical skills to participate?",
        "answer": "No, it's just for the name"
      },
      {
        "question": "Can we participate with other college students?",
        "answer": "Yes, you can"
      },
      {
        "question": "How do we get points?",
        "answer": "You get points based on how much time you take to reach the next location"
      },
      {
        "question": "If we cannot solve the clue, do we get hints?",
        "answer": "Yes, you can buy two hints for points"
      }
    ],
    "rules": [
      "You can team up with your friends from different colleges as well or go solo",
      "Only public transport should be used by the participants",
      "You have various power cards which cost you points in the game",
      "Winner is declared on the basis of who reaches the last location first and not who has maximum points"
    ],
  },
  {
    id: "wob",
    name: "War of Branches",
    type: "Cultural",
    date: "2025-03-20",
    location: "Mumbai",
    time: "4 hours",
    description:
      "War of Branches is a battle of dance and Music between the various branches of SPIT",
    frontImage: "/assets/events/wob/wob-front.png",
    backImage: "/assets/events/wob/wob-back.png",
    banner: "/assets/events/wob/banner.png",
    month: "March",
    colorTheme: {
      primary: "#D4AF37", // Gold
      secondary: "#8B4513" // Saddle Brown
    },
    gallery: {
      basePath: "/assets/events/wob/image",
      start: 1,
      end: 23,
      title: "War of Branches Gallery"
    },
    faq: [
      {
        "question": "What is it?",
        "answer": "It is a battle of dance and music between the various branches of SPIT"
      },
      {
        "question": "How do we get points?",
        "answer": "You get points based on the performance of your team, points wil be given by internal faculty members"
      }
    ],
    "rules": [
     "Common Sense"
    ],
  },
  {
    id: "pronite",
    name: "Pronite",
    type: "Cultural",
    date: "2025-03-23",
    location: "Mumbai",
    time: "4 hours",
    description:
      "Pronite at SPIT is an annual musical extravaganza that brings the campus to life with electrifying performances and an unforgettable atmosphere. Featuring top artists and dynamic live acts, it offers an evening of music, energy, and celebration, making it a highlight of the year for students.",
    frontImage: "/assets/events/pronite/pronite-front.png",
    backImage: "/assets/events/pronite/pronite-back.png",
    banner: "/assets/events/pronite/banner.png",
    month: "March",
    colorTheme: {
      primary: "#D4AF37", // Gold
      secondary: "#8B4513" // Saddle Brown
    },
    gallery: {
      basePath: "/assets/events/pronite/image",
      start: 1,
      end: 26,
      title: "Pronite Gallery"
    },
    faq: [
      {
        "question": "What is it?",
        "answer": "Annual Music Festival of SPIT"
      }
    ],
    "rules": [
     "Common Sense"
    ],
  },


];

export default eventsData;
