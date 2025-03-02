const eventsData = [
  {
    id: "techrace",
    name: "TechRace",
    type: "Pre - Event",
    date: "2025-02-28",
    location: "Mumbai",
    time: "4 hours",
    description:
      "Crack mind-bending clues, solve thrilling mysteries, and race across the city for a ₹75,000 prize pool! ",
    frontImage: "/images/events/techrace-front.png",
    backImage: "/images/events/techrace-back.png",
    formUrl: "/events/techrace",
    month: "February",
    colorTheme: {
      primary: "#D4AF37", // Gold
      secondary: "#8B4513" // Saddle Brown
    }
  },
  {
    id: "sargam",
    name: "Sargam",
    type: "Cultural",
    date: "2025-03-02",
    location: "Auditorium",
    time: "6:00 PM",
    description:
      "A musical extravaganza featuring the best talents from across colleges!",
    frontImage: "/images/events/sargam-front.png",
    backImage: "/images/events/sargam-back.png",
    formUrl: "/events/sargam",
    month: "March",
    colorTheme: {
      primary: "#9370DB", // Medium Purple
      secondary: "#4B0082" // Indigo
    }
  },
  {
    id: "cube-open",
    name: "Cube Open",
    type: "Fun",
    date: "2025-03-02",
    location: "008 Hall, S.P.I.T.",
    time: "10:00 AM",
    description:
      "Mumbai's biggest speedcubing competition. Multiple categories, amazing prizes, and a chance to break records!",
    frontImage: "/images/events/cube-open-front.png",//replace this asset too as soon as we get the correct one
    backImage: "/images/events/cube-open-back.jpg",
    formUrl: "/events/cube-open",
    month: "March",
    bg_img: "/images/cube-open-web.png", //for debugging, delete this later
    colorTheme: {
      primary: "#1E90FF", // Dodger Blue
      secondary: "#191970" // Midnight Blue
    }
  },
  {
    id: "carnival",
    name: "Carnival",
    type: "Cultural",
    date: "2025-03-01",
    location: "College Ground",
    time: "Whole Day",
    description:
      "Experience the magic of our cultural carnival with music, dance, and endless entertainment!",
    frontImage: "/images/events/carnival-front.jpg",
    backImage: "/images/events/carnival-back.jpg",
    formUrl: "/events/carnival",
    month: "March",
    colorTheme: {
      primary: "#FF4500", // Orange Red
      secondary: "#8B0000" // Dark Red
    }
  },
  {
    id: "esports",
    name: "Esports",
    type: "Fun",
    date: "2025-03-03",
    location: "Lab Complex",
    time: "9:00 AM",
    description:
      "Compete in various gaming tournaments and prove your skills in the digital arena!",
    frontImage: "/images/events/esports-front.jpg",
    backImage: "/images/events/esports-back.jpg",
    formUrl: "/events/esports",
    month: "March",
    colorTheme: {
      primary: "#32CD32", // Lime Green
      secondary: "#006400" // Dark Green
    }
  },

  {
    id: "funzone",
    name: "Funzone",
    type: "Fun",
    date: "2025-03-01",
    location: "College Campus",
    time: "All Day",
    description:
      "A zone full of exciting games, activities, and entertainment for everyone!",
    frontImage: "/images/events/funzone-front.jpg",
    backImage: "/images/events/funzone-back.jpg",
    formUrl: "/events/funzone",
    month: "March",
    colorTheme: {
      primary: "#FF69B4", // Hot Pink
      secondary: "#8B008B" // Dark Magenta
    }
  },
];

export default eventsData;
