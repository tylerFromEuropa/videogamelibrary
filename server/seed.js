const mongoose = require("mongoose");
require("dotenv").config(); // brings dotenv
const Game = require("./models/game");

// connecting to database
mongoose.connect(process.env.MONGODB_LINK);

let seed = async () => {
  await Game.create([
    {
      title: "Bloons TD6",
      year: 2018,
      developer: "Ninja Kiwi",
      publisher: "Ninja Kiwi",
      ign_rating: 8.4,
      description:
        "A tower defense game where players pop bloons (balloons) by strategically placing towers with different abilities.",
      genre: ["Tower Defense", "Strategy"],
      recommended: true,
      cover_url:
        "https://steamcdn-a.akamaihd.net/steam/apps/960090/ss_d82f8f2022db8c36bb28393434d6e65dea2d9c64.1920x1080.jpg?t=1562124874",
    },
    {
      title: "Anno 1602",
      year: 1998,
      developer: "Max Design",
      publisher: "Sunflowers Interactive",
      ign_rating: 7.6,
      description:
        "A city-building and economic simulation game set in the 17th century.",
      genre: ["City-Building", "Simulation"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/58815-anno-1602-creation-of-a-new-world-windows-front-cover.jpg",
    },
    {
      title: "Warcraft 2",
      year: 1995,
      developer: "Blizzard Entertainment",
      publisher: "Blizzard Entertainment",
      ign_rating: 9.2,
      description: "A real-time strategy game in the Warcraft series.",
      genre: ["Real-Time Strategy", "Fantasy"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/5372016-warcraft-ii-battle-chest-windows-front-cover.jpg",
    },
    {
      title: "Age of Empires 2",
      year: 1999,
      developer: "Ensemble Studios",
      publisher: "Microsoft",
      ign_rating: 8.9,
      description:
        "A classic real-time strategy game that spans different historical eras.",
      genre: ["Real-Time Strategy", "Historical"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/3913041-age-of-empires-ii-the-age-of-kings-windows-front-cover.jpg",
    },
    {
      title: "Rocket League",
      year: 2015,
      developer: "Psyonix",
      publisher: "Psyonix",
      ign_rating: 9.3,
      description: "A unique combination of soccer and vehicular mayhem.",
      genre: ["Sports", "Racing"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/3195496-rocket-league-xbox-one-front-cover.jpg",
    },
    {
      title: "Super Mario 64",
      year: 1996,
      developer: "Nintendo",
      publisher: "Nintendo",
      ign_rating: 9.8,
      description:
        "A groundbreaking 3D platformer that introduced Mario to a new dimension.",
      genre: ["Platformer", "Adventure"],
      recommended: true,
      cover_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg",
    },
    {
      title: "The Legend of Zelda: Ocarina of Time",
      year: 1998,
      developer: "Nintendo",
      publisher: "Nintendo",
      ign_rating: 10,
      description:
        "An action-adventure game featuring Link's quest to stop Ganondorf.",
      genre: ["Action-Adventure", "Fantasy"],
      recommended: true,
      cover_url:
        "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_7/SI_N64_LegendOfZeldaOcarinaOfTime_image1600w.jpg",
    },
    {
      title: "Diablo 2",
      year: 2000,
      developer: "Blizzard North",
      publisher: "Blizzard Entertainment",
      ign_rating: 9.6,
      description: "A dark and atmospheric action RPG.",
      genre: ["Action RPG", "Fantasy"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/4392945-diablo-ii-windows-front-cover.jpg",
    },
    {
      title: "Stardew Valley",
      year: 2016,
      developer: "ConcernedApe",
      publisher: "ConcernedApe",
      ign_rating: 9.5,
      description:
        "A farming simulation game that allows players to build their own farm.",
      genre: ["Simulation", "Farming"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/7453765-stardew-valley-playstation-4-front-cover.jpg",
    },
    {
      title: "Red Dead Redemption 2",
      year: 2018,
      developer: "Rockstar Studios",
      publisher: "Rockstar Games",
      ign_rating: 10,
      description: "An action-adventure game set in the American Wild West.",
      genre: ["Action-Adventure", "Western"],
      recommended: true,
      cover_url:
        "https://assets.vg247.com/current/2018/05/red_dead_redemption_2_cover_art_1.jpg",
    },
    {
      title: "Wacky Wheels",
      year: 1994,
      developer: "Beavis Soft",
      publisher: "Apogee Software",
      ign_rating: 7.3,
      description: "A kart racing game with zany animal characters.",
      genre: ["Racing", "Arcade"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/10969690-wacky-wheels-dos-front-cover.jpg",
    },
    {
      title: "Raptor: Call of the Shadows",
      year: 1994,
      developer: "Apogee Software",
      publisher: "Apogee Software",
      ign_rating: 7.9,
      description: "A classic vertical-scrolling shooter game.",
      genre: ["Shooter", "Arcade"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/3236638-raptor-call-of-the-shadows-dos-front-cover.jpg",
    },
    {
      title: "Mortal Kombat 4",
      year: 1997,
      developer: "Midway Games",
      publisher: "Midway Games",
      ign_rating: 8.1,
      description:
        "A popular fighting game that introduces 3D graphics to the Mortal Kombat series.",
      genre: ["Fighting", "Action"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/4619035-mortal-kombat-4-playstation-front-cover.jpg",
    },
    {
      title: "Grand Theft Auto: San Andreas",
      year: 2004,
      developer: "Rockstar North",
      publisher: "Rockstar Games",
      ign_rating: 9.9,
      description:
        "An open-world action-adventure game set in a fictional California state.",
      genre: ["Action-Adventure", "Open World"],
      recommended: true,
      cover_url:
        "https://ia800806.us.archive.org/19/items/grandtheftautosanandreascoverartpcbrazil/GTASA-Front.jpg",
    },
    {
      title: "Fallout: New Vegas",
      year: 2010,
      developer: "Obsidian Entertainment",
      publisher: "Bethesda Softworks",
      ign_rating: 9,
      description:
        "An action RPG set in the post-apocalyptic Mojave Wasteland.",
      genre: ["Action RPG", "Post-Apocalyptic"],
      recommended: true,
      cover_url:
        "https://images.pcgamingwiki.com/f/f5/Fallout_New_Vegas_cover.jpg",
    },
    {
      title: "The Elder Scrolls V: Skyrim",
      year: 2011,
      developer: "Bethesda Game Studios",
      publisher: "Bethesda Softworks",
      ign_rating: 9.5,
      description: "An epic open-world RPG set in the fantasy realm of Skyrim.",
      genre: ["Action RPG", "Open World", "Fantasy"],
      recommended: true,
      cover_url:
        "https://cdn.mobygames.com/covers/10158255-the-elder-scrolls-v-skyrim-special-edition-playstation-4-front-c.jpg",
    },
    {
      title: "Superman 64",
      year: 1999,
      developer: "Titus Interactive",
      publisher: "Titus Interactive",
      ign_rating: 2.3,
      description:
        "A poorly received action-adventure game featuring Superman with clunky controls and a lackluster gameplay experience.",
      genre: ["Action-Adventure", "Superhero"],
      recommended: false,
      cover_url:
        "https://cdn.mobygames.com/covers/6027302-superman-nintendo-64-front-cover.jpg",
    },
    {
      title: "Aliens: Colonial Marines",
      year: 2013,
      developer: "Gearbox Software",
      publisher: "SEGA",
      ign_rating: 4.5,
      description:
        "A first-person shooter set in the Aliens universe, criticized for its AI, graphics, and overall quality.",
      genre: ["First-Person Shooter", "Science Fiction"],
      recommended: false,
      cover_url:
        "https://cdn.mobygames.com/covers/8729783-aliens-colonial-marines-season-pass-playstation-3-front-cover.jpg",
    },
  ]);

  console.log("Game created");
  mongoose.disconnect(); // Disconnect the database at the end as connection is no longer needed
};

seed(); // call the function.
