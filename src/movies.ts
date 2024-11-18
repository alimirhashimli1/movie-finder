import theShawshankRedemption from "./assets/the_shawshank_redemption.jpg"
import theGodfather from "./assets/the_godfather.jpg"
import theDarkKnight from "./assets/the_dark_knight.jpg"
import theGodfatherPartII from "./assets/the_godfather_part_ii.jpg"
import theDarkKnightRises from "./assets/the_dark_knight_rises.jpg"
import thePrestige from "./assets/the_prestige.jpg"
import casablanca from "./assets/casablanca.jpg"
import whiplash from "./assets/whiplash.jpg"
import theLionKing from "./assets/the_lion_king.jpg"
import theDeparted from "./assets/the_departed.jpg"
import theUsualSuspects from "./assets/the_usual_suspects.jpg"
import savingPrivateRyan from "./assets/saving_private_ryan.jpg"
import theCabinetOfDrCaligari from "./assets/the_cabinet_of_dr._caligari.jpg"
import theBattleOfAlgiers from "./assets/the_battle_of_algiers.jpg"
import panSLabyrinth from "./assets/pan's_labyrinth.jpg"
import theDeathOfStalin from "./assets/the_death_of_stalin.jpg"
import noCountryForOldMen from "./assets/no_country_for_old_men.jpg"
import theSilenceOfTheLambs from "./assets/the_silence_of_the_lambs.jpg"
import theMatrix from "./assets/the_matrix.jpg"
import sevenSamurai from "./assets/seven_samurai.jpg"
import oneFlewOverTheCuckoosNest from "./assets/one_flew_over_the_cuckoo's_nest.jpg"
import cityOfGod from "./assets/city_of_god.jpg"
import se7en from "./assets/se7en.jpg"
import inception from "./assets/inception.jpg"
import theGoodTheBadAndTheUgly from "./assets/the_good_the_bad_and_the_ugly.jpg"
import fightClub from "./assets/fight_club.jpg"
import starWarsEpisodeVTheEmpireStrikesBack from "./assets/star_wars_episode_v_the_empire_strikes_back.jpg"
import goodWillHunting from "./assets/good_will_hunting.jpg"
import terminator2 from "./assets/terminator_2.jpg"
import raidersOfTheLostArk from "./assets/raiders_of_the_lost_ark.jpg"
import theGreenMile from "./assets/the_green_mile.jpg"
import theShining from "./assets/the_shining.jpg"
import starWarsEpisodeVIITheForceAwakens from "./assets/star_wars_episode_vii_the_force_awakens.jpg"
import twelveAngryMen from "./assets/12_angry_men.jpg"
import yourName from "./assets/your_name.jpg"
import nineteenSeventeen from "./assets/1917.jpg"
import aBeautifulMind from "./assets/a_beautiful_mind.jpg"
import aClockworkOrange from "./assets/a_clockwork_orange.jpg"
import alien from "./assets/alien.jpg"
import amadeus from "./assets/amadeus.jpg"
import americanHistoryX from "./assets/american_history_x.jpg"
import backToTheFuture from "./assets/back_to_the_future.jpg"
import braveheart from "./assets/braveheart.jpg"
import childrenOfHeaven from "./assets/children_of_heaven.jpg"
import djangoUnchained from "./assets/django_unchained.jpg"
import forrestGump from "./assets/forrest_gump.jpg"
import fullMetalJacket from "./assets/full_metal_jacket.jpg"
import gladiator from "./assets/gladiator.jpg"
import goodFellas from "./assets/goodfellas.jpg"
import intouchables from "./assets/intouchables.jpg"
import jaws from "./assets/jaws.jpg"
import lifeIsBeautiful from "./assets/life_is_beautiful.jpg"
import modernTimes from "./assets/modern_times.jpg"
import onceUponATimeInTheWest from "./assets/once_upon_a_time_in_the_west.jpg"
import parasite from "./assets/parasite.jpg"
import pulpFiction from "./assets/pulp_fiction.jpg"
import reservoirDogs from "./assets/reservoir_dogs.jpg"
import spiritedAway from "./assets/spirited_away.jpg"
import the400Blows from "./assets/the_400_blows.jpg"
import theBigLebowski from "./assets/the_big_lebowski.jpg"
import theBridgeOnTheRiverKwai from "./assets/the_bridge_on_the_river_kwai.jpg"
import theElephantMan from "./assets/the_elephant_man.jpg"
import theGirlWithTheDragonTattoo from "./assets/the_girl_with_the_dragon_tattoo.jpg"
import theGraduate from "./assets/the_graduate.jpg"
import theGreatDictator from "./assets/the_great_dictator.jpg"
import theGreatEscape from "./assets/the_great_escape.jpg"
import theHandMaiden from "./assets/the_handmaiden.jpg"
import theHelp from "./assets/the_help.jpg"
import theHunt from "./assets/the_hunt.jpg"
import theIncredibles from "./assets/the_incredibles.jpg"
import inTheNameOfTheFather from "./assets/in_the_name_of_the_father.jpg"
import theKingsSpeech from "./assets/the_king's_speech.jpg"
import theLastPictureShow from "./assets/the_last_picture_show.jpg"
import theLivesOfOthers from "./assets/the_lives_of_others.jpg"
import theLordOfTheRingsTheFellowshipOfTheRing from "./assets/the_lord_of_the_rings_the_fellowship_of_the_ring.jpg"
import theLordOfTheRingsTheReturnOfTheKing from "./assets/the_lord_of_the_rings_the_return_of_the_king.jpg"
import theMalteseFalcon from "./assets/the_maltese_falcon.jpg"
import thePianist from "./assets/the_pianist.jpg"
import schindlersList from "./assets/schindler's_list.jpg"
import theSecretInTheirEyes from "./assets/the_secret_in_their_eyes.jpg"
import theSixthSense from "./assets/the_sixth_sense.jpg"
import theSoundOfMusic from "./assets/the_sound_of_music.jpg"
import theWitch from "./assets/the_witch.jpg"
import theWolfOfWallStreet from "./assets/the_wolf_of_wall_street.jpg"
import toyStory from "./assets/toy_story.jpg"
import vertigo from "./assets/vertigo.jpg"
import theThing from "./assets/the_thing.jpg"
import theTreasureOfTheSierraMadre from "./assets/the_treasure_of_the_sierra_madre.jpg"
import itIsAWonderfulLife from "./assets/it's_a_wonderful_life.jpeg"
import { Movie } from "./types"

export const movies: Movie[] = [
  {
    "title": "Star Wars: Episode VII - The Force Awakens",
    "imdbRating": 7.8,
    "genre": ["Sci-Fi", "Adventure", "Action"],
    "releaseYear": 2015,
    "url": starWarsEpisodeVIITheForceAwakens
  },
  {
    "title": "The Shawshank Redemption",
    "imdbRating": 9.3,
    "genre": ["Drama"],
    "releaseYear": 1994,
    "url": theShawshankRedemption
  },
  {
    "title": "The Godfather",
    "imdbRating": 9.2,
    "genre": ["Crime", "Drama"],
    "releaseYear": 1972,
    "url": theGodfather

  },
  {
    "title": "The Dark Knight",
    "imdbRating": 9.0,
    "genre": ["Action", "Crime", "Drama"],
    "releaseYear": 2008,
    "url": theDarkKnight

  },
  {
    "title": "The Godfather Part II",
    "imdbRating": 9.0,
    "genre": ["Crime", "Drama"],
    "releaseYear": 1974,
    "url": theGodfatherPartII

  },
  {
    "title": "12 Angry Men",
    "imdbRating": 9.0,
    "genre": ["Drama"],
    "releaseYear": 1957,
    "url": twelveAngryMen

  },
  {
    "title": "The Schindler's List",
    "imdbRating": 9.0,
    "genre": ["Biography", "Drama", "History"],
    "releaseYear": 1993,
    "url": schindlersList
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "imdbRating": 9.0,
    "genre": ["Action", "Adventure", "Drama"],
    "releaseYear": 2003,
    "url": theLordOfTheRingsTheReturnOfTheKing
  },
  {
    "title": "Pulp Fiction",
    "imdbRating": 8.9,
    "genre": ["Crime", "Drama"],
    "releaseYear": 1994,
    "url": pulpFiction
  },
  {
    "title": "The Good, the Bad and the Ugly",
    "imdbRating": 8.8,
    "genre": ["Western"],
    "releaseYear": 1966,
    "url": theGoodTheBadAndTheUgly
  },
  {
    "title": "Forrest Gump",
    "imdbRating": 8.8,
    "genre": ["Drama", "Romance"],
    "releaseYear": 1994,
    "url": forrestGump
  },
  {
    "title": "Fight Club",
    "imdbRating": 8.8,
    "genre": ["Drama"],
    "releaseYear": 1999,
    "url": fightClub
  },
  {
    "title": "Inception",
    "imdbRating": 8.8,
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "releaseYear": 2010,
    "url": inception
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "imdbRating": 8.7,
    "genre": ["Action", "Adventure", "Fantasy"],
    "releaseYear": 1980,
    "url": starWarsEpisodeVTheEmpireStrikesBack
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "imdbRating": 8.8,
    "genre": ["Action", "Adventure", "Drama"],
    "releaseYear": 2001,
    "url": theLordOfTheRingsTheFellowshipOfTheRing
  },
  {
    "title": "Goodfellas",
    "imdbRating": 8.7,
    "genre": ["Biography", "Crime", "Drama"],
    "releaseYear": 1990,
    "url": goodFellas
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "imdbRating": 8.7,
    "genre": ["Drama"],
    "releaseYear": 1975,
    "url": oneFlewOverTheCuckoosNest
  },
  {
    "title": "The Matrix",
    "imdbRating": 8.7,
    "genre": ["Action", "Sci-Fi"],
    "releaseYear": 1999,
    "url": theMatrix
  },
  {
    "title": "Seven Samurai",
    "imdbRating": 8.6,
    "genre": ["Action", "Drama"],
    "releaseYear": 1954,
    "url": sevenSamurai
  },
  {
    "title": "City of God",
    "imdbRating": 8.6,
    "genre": ["Crime", "Drama"],
    "releaseYear": 2002,
    "url": cityOfGod
  },
  {
    "title": "Se7en",
    "imdbRating": 8.6,
    "genre": ["Crime", "Drama", "Mystery"],
    "releaseYear": 1995,
    "url": se7en,
  },
  {
    "title": "The Silence of the Lambs",
    "imdbRating": 8.6,
    "genre": ["Crime", "Drama", "Thriller"],
    "releaseYear": 1991,
    "url": theSilenceOfTheLambs
  },
  {
    "title": "It's a Wonderful Life",
    "imdbRating": 8.6,
    "genre": ["Drama", "Family", "Fantasy"],
    "releaseYear": 1946,
    "url":  itIsAWonderfulLife
  },
  {
    "title": "Life Is Beautiful",
    "imdbRating": 8.6,
    "genre": ["Comedy", "Drama", "Romance"],
    "releaseYear": 1997,
    "url": lifeIsBeautiful
  },
  {
    "title": "The Usual Suspects",
    "imdbRating": 8.5,
    "genre": ["Crime", "Drama", "Mystery"],
    "releaseYear": 1995,  
    "url": theUsualSuspects
  },
  {
    "title": "Spirited Away",
    "imdbRating": 8.6,
    "genre": ["Animation", "Adventure", "Family"],
    "releaseYear": 2001,
    "url": spiritedAway
  },
  {
    "title": "Saving Private Ryan",
    "imdbRating": 8.6,
    "genre": ["Drama", "War"],
    "releaseYear": 1998,
    "url": savingPrivateRyan
  },
  {
    "title": "Good Will Hunting",
    "imdbRating": 8.3,
    "genre": ["Romance", "Drama"],
    "releaseYear": 1997,
    "url": goodWillHunting
  },
  {
    "title": "Raiders of the Lost Ark",
    "imdbRating": 8.4,
    "genre": ["Action", "Adventure"],
    "releaseYear": 1981,
    "url": raidersOfTheLostArk
  },
  {
    "title": "The Green Mile",
    "imdbRating": 8.6,
    "genre": ["Crime", "Drama", "Fantasy"],
    "releaseYear": 1999,
    "url": theGreenMile
  },
  {
    "title": "Parasite",
    "imdbRating": 8.5,
    "genre": ["Drama", "Thriller"],
    "releaseYear": 2019,
    "url": parasite
  
  },
  {
    "title": "Intouchables",
    "imdbRating": 8.5,
    "genre": ["Biography", "Comedy", "Drama"],
    "releaseYear": 2011,
    "url": intouchables
  },
  {
    "title": "Modern Times",
    "imdbRating": 8.5,
    "genre": ["Comedy", "Drama", "Romance"],
    "releaseYear": 1936,
    "url": modernTimes
  },
  {
    "title": "The Prestige",
    "imdbRating": 8.5,
    "genre": ["Drama", "Mystery", "Sci-Fi"],
    "releaseYear": 2006,
    "url": thePrestige
  },
  {
    "title": "Casablanca",
    "imdbRating": 8.5,
    "genre": ["Drama", "Romance", "War"],
    "releaseYear": 1942,
    "url": casablanca
  },
  {
    "title": "Whiplash",
    "imdbRating": 8.5,
    "genre": ["Drama", "Music"],
    "releaseYear": 2014,
    "url": whiplash
  },
  {
    "title": "The Lion King",
    "imdbRating": 8.5,
    "genre": ["Animation", "Adventure", "Drama"],
    "releaseYear": 1994,
    "url": theLionKing
  },
  {
    "title": "The Departed",
    "imdbRating": 8.5,
    "genre": ["Crime", "Drama", "Thriller"],
    "releaseYear": 2006,
    "url": theDeparted
  },
  {
    "title": "Terminator 2: Judgment Day",
    "imdbRating": 8.6,
    "genre": ["Action", "Sci-Fi"],
    "releaseYear": 1991,
    "url": terminator2
  },
  {
    "title": "Back to the Future",
    "imdbRating": 8.5,
    "genre": ["Adventure", "Comedy", "Sci-Fi"],
    "releaseYear": 1985,
    "url": backToTheFuture
  },
  {
    "title": "Gladiator",
    "imdbRating": 8.5,
    "genre": ["Action", "Adventure", "Drama"],
    "releaseYear": 2000,
    "url": gladiator
  },
  {
    "title": "The Pianist",
    "imdbRating": 8.5,
    "genre": ["Biography", "Drama", "Music"],
    "releaseYear": 2002,
    "url": thePianist
  },
    {
      "title": "Django Unchained",
      "imdbRating": 8.4,
      "genre": ["Drama", "Western"],
      "releaseYear": 2012,
      "url": djangoUnchained
    },
    {
      "title": "The Dark Knight Rises",
      "imdbRating": 8.4,
      "genre": ["Action", "Thriller"],
      "releaseYear": 2012,
      "url": theDarkKnightRises
    },
    {
      "title": "Alien",
      "imdbRating": 8.5,
      "genre": ["Horror", "Sci-Fi"],
      "releaseYear": 1979,
      "url": alien
    },
    {
      "title": "Once Upon a Time in the West",
      "imdbRating": 8.5,
      "genre": ["Western"],
      "releaseYear": 1968,
      "url": onceUponATimeInTheWest
    },
    {
      "title": "The Great Dictator",
      "imdbRating": 8.4,
      "genre": ["Comedy", "Drama", "War"],
      "releaseYear": 1940,
      "url": theGreatDictator
    },
    {
      "title": "1917",
            "imdbRating": 8.3,
            "genre": ["Action", "Drama", "War"],
            "releaseYear": 2019,
            "url": nineteenSeventeen
    },
    {
      "title": "Reservoir Dogs",
      "imdbRating": 8.3,
      "genre": ["Crime", "Drama", "Thriller"],
      "releaseYear": 1992,
      "url": reservoirDogs
    },
    {
      "title": "American History X",
      "imdbRating": 8.5,
      "genre": ["Crime", "Drama"],
      "releaseYear": 1998,
      "url": americanHistoryX
    },
    {
      "title": "The Lives of Others",
      "imdbRating": 8.4,
      "genre": ["Drama", "Thriller"],
      "releaseYear": 2006,
      "url": theLivesOfOthers
    },
    {
      "title": "Amadeus",
      "imdbRating": 8.4,
      "genre": ["Biography", "Drama", "Music"],
      "releaseYear": 1984,
      "url": amadeus
    },
    {
      "title": "A Clockwork Orange",
      "imdbRating": 8.3,
      "genre": ["Crime", "Drama", "Sci-Fi"],
      "releaseYear": 1971,
      "url": aClockworkOrange
    },
    {
      "title": "Toy Story",
      "imdbRating": 8.3,
      "genre": ["Animation", "Adventure", "Comedy"],
      "releaseYear": 1995,
      "url": toyStory
    },
    {
      "title": "Jaws",
      "imdbRating": 8.1,
      "genre": ["Adventure", "Thriller"],
      "releaseYear": 1975,
      "url": jaws
    },
    {
      "title": "Full Metal Jacket",
      "imdbRating": 8.3,
      "genre": ["Drama", "War"],
      "releaseYear": 1987,
      "url": fullMetalJacket
    },
    {
      "title": "Braveheart",
      "imdbRating": 8.3,
      "genre": ["Biography", "Drama", "History"],
      "releaseYear": 1995,
      "url": braveheart
    },
    {
      "title": "The Shining",
      "imdbRating": 8.4,
      "genre": ["Drama", "Horror"],
      "releaseYear": 1980,
      "url": theShining
    },
    {
      "title": "The Wolf of Wall Street",
      "imdbRating": 8.2,
      "genre": ["Biography", "Comedy", "Crime"],
      "releaseYear": 2013,
      "url": theWolfOfWallStreet
    },
    {
      "title": "The Sixth Sense",
      "imdbRating": 8.1,
      "genre": ["Drama", "Mystery", "Thriller"],
      "releaseYear": 1999,
      "url": theSixthSense
    },
    {
      "title": "The Bridge on the River Kwai",
      "imdbRating": 8.1,
      "genre": ["Adventure", "Drama", "War"],
      "releaseYear": 1957,
      "url": theBridgeOnTheRiverKwai
    },
    {
      "title": "The Elephant Man",
      "imdbRating": 8.1,
      "genre": ["Biography", "Drama"],
      "releaseYear": 1980,
      "url": theElephantMan
    },
    {
      "title": "The Thing",
      "imdbRating": 8.2,
      "genre": ["Horror", "Mystery", "Sci-Fi"],
      "releaseYear": 1982,
      "url": theThing
    },
    {
      "title": "Vertigo",
      "imdbRating": 8.3,
      "genre": ["Mystery", "Romance", "Thriller"],
      "releaseYear": 1958,
      "url": vertigo
    },
    {
      "title": "The Sound of Music",
      "imdbRating": 8.1,
      "genre": ["Biography", "Drama", "Family"],
      "releaseYear": 1965,
      "url": theSoundOfMusic
    },
    {
      "title": "A Beautiful Mind",
      "imdbRating": 8.2,
      "genre": ["Biography", "Drama"],
      "releaseYear": 2001,
      "url": aBeautifulMind
    },
    {
      "title": "The Departed",
      "imdbRating": 8.5,
      "genre": ["Crime", "Drama", "Thriller"],
      "releaseYear": 2006,
      "url": theDeparted
    },
    {
      "title": "The Last Picture Show",
      "imdbRating": 8.0,
      "genre": ["Drama"],
      "releaseYear": 1971,
      "url": theLastPictureShow
    },
    {
      "title": "The Treasure of the Sierra Madre",
      "imdbRating": 8.2,
      "genre": ["Adventure", "Drama", "Western"],
      "releaseYear": 1948,
      "url": theTreasureOfTheSierraMadre
    },
    {
      "title": "The King's Speech",
      "imdbRating": 8.0,
      "genre": ["Biography", "Drama", "History"],
      "releaseYear": 2010,
      "url": theKingsSpeech
    },
    {
      "title": "The Graduate",
      "imdbRating": 8.0,
      "genre": ["Comedy", "Drama", "Romance"],
      "releaseYear": 1967,
      "url": theGraduate
    },
    {
      "title": "The Maltese Falcon",
      "imdbRating": 8.0,
      "genre": ["Crime", "Film-Noir", "Mystery"],
      "releaseYear": 1941,
      "url": theMalteseFalcon
    },
    {
      "title": "The Great Escape",
      "imdbRating": 8.2,
      "genre": ["Adventure", "Drama", "History"],
      "releaseYear": 1963,
      "url": theGreatEscape
    },
    {
      "title": "In the Name of the Father",
      "imdbRating": 8.1,
      "genre": ["Biography", "Drama"],
      "releaseYear": 1993,
      "url": inTheNameOfTheFather
    },
    {
      "title": "The Hunt",
      "imdbRating": 8.3,
      "genre": ["Drama", "Thriller"],
      "releaseYear": 2012,
      "url": theHunt
    },
    {
      "title": "The Secret in Their Eyes",
      "imdbRating": 8.2,
      "genre": ["Drama", "Mystery", "Thriller"],
      "releaseYear": 2009,
      "url": theSecretInTheirEyes
    },
    {
      "title": "The Witch",
      "imdbRating": 6.9,
      "genre": ["Drama", "Horror", "Mystery"],
      "releaseYear": 2015,
      "url": theWitch
    },
    {
      "title": "The Help",
      "imdbRating": 8.1,
      "genre": ["Drama"],
      "releaseYear": 2011,
      "url": theHelp
    },
    {
      "title": "The Incredibles",
      "imdbRating": 8.0,
      "genre": ["Animation", "Action", "Adventure"],
      "releaseYear": 2004,
      "url": theIncredibles
    },
    {
      "title": "The 400 Blows",
      "imdbRating": 8.1,
      "genre": ["Crime", "Drama"],
      "releaseYear": 1959,
      "url": the400Blows
    },
    {
      "title": "The Girl with the Dragon Tattoo",
      "imdbRating": 7.8,
      "genre": ["Crime", "Drama", "Mystery"],
      "releaseYear": 2011, 
      "url": theGirlWithTheDragonTattoo
    },
    {
      "title": "The Big Lebowski",
      "imdbRating": 8.1,
      "genre": ["Comedy", "Crime"],
      "releaseYear": 1998,
      "url": theBigLebowski
    },
    {
      "title": "The King's Speech",
      "imdbRating": 8.0,
      "genre": ["Biography", "Drama", "History"],
      "releaseYear": 2010,
      "url": theKingsSpeech
    },
    {
      "title": "Children of Heaven",
      "imdbRating": 8.3,
      "genre": ["Drama", "Family"],
      "releaseYear": 1997,
      "url": childrenOfHeaven
    },
    {
      "title": "Your Name",
      "imdbRating": 8.4,
      "genre": ["Animation", "Drama", "Fantasy"],
      "releaseYear": 2016,
      "url": yourName
    },
    {
      "title": "The Cabinet of Dr. Caligari",
      "imdbRating": 8.0,
      "genre": ["Horror", "Mystery", "Thriller"],
      "releaseYear": 1920,
      "url": theCabinetOfDrCaligari
    },
    {
      "title": "The Battle of Algiers",
      "imdbRating": 8.1,
      "genre": ["Drama", "War"],
      "releaseYear": 1966,
      "url": theBattleOfAlgiers
    },
    {
      "title": "Pan's Labyrinth",
      "imdbRating": 8.2,
      "genre": ["Drama", "Fantasy", "War"],
      "releaseYear": 2006,
      "url": panSLabyrinth
    },
    {
      "title": "The Death of Stalin",
      "imdbRating": 7.2,
      "genre": ["Comedy", "Drama", "History"],
      "releaseYear": 2017,
      "url": theDeathOfStalin
    },
    {
      "title": "No Country for Old Men",
      "imdbRating": 8.2,
      "genre": ["Crime", "Drama", "Thriller"],
      "releaseYear": 2007,
      "url": noCountryForOldMen
    },
    {
      "title": "The Handmaiden",
      "imdbRating": 8.1,
      "genre": ["Drama", "Mystery", "Romance"],
      "releaseYear": 2016,
      "url": theHandMaiden
    }]