import { useState, useEffect } from "react";
import { GameBoard } from "./GameBoard";
import { ScoreBoard } from "./ScoreBoard";

export function Game({ numOfCards, setPlayGame, bgMusicPlayer }) {
  const deck = [];
  const [score, setScore] = useState(0);

  const cardBank = [
    {
      path: "cards/AddledGrizzly.jpg",
      name: "Addled Grizzly",
      className: "AddledGrizzly",
      cry: "Audio/Addled.mp3",
    },
    {
      path: "cards/Backroombouncer.jpg",
      name: "Backroom Bouncer",
      className: "Backroombouncer",
      cry: "Audio/Bouncer.mp3",
    },
    {
      path: "cards/BalefulBanker.jpg",
      name: "Baleful Banker",
      className: "Balefulbanker",
      cry: "Audio/Baleful.mp3",
    },
    {
      path: "cards/Barnes.jpg",
      name: "Barnes",
      className: "Barnes",
      cry: "Audio/Barnes.mp3",
    },
    {
      path: "cards/BaronRivendare.jpg",
      name: "Baron Rivendare",
      className: "Baronrivendare",
      cry: "Audio/Baron.mp3",
    },
    {
      path: "cards/Blingtron.jpg",
      name: "Blington",
      className: "Blingtron",
      cry: "Audio/Blingtron.mp3",
    },
    {
      path: "cards/BlubberBaron.jpg",
      name: "Blubber Baron",
      className: "Blubberbaron",
      cry: "Audio/Blubber.mp3",
    },
    {
      path: "cards/BodyBagger.jpg",
      name: "Body Bagger",
      className: "Body Bagger",
      cry: "Audio/Bodybagger.mp3",
    },
    {
      path: "cards/BogCreeper.jpg",
      name: "Bog Creeper",
      className: "Bogcreeper",
      cry: "Audio/Bog.mp3",
    },
    {
      path: "cards/BoneDrake.jpg",
      name: "Bone Drake",
      className: "Bonedrake",
      cry: "Audio/BoneD.mp3",
    },
    {
      path: "cards/Buccaneer.jpg",
      name: "Buccaneer",
      className: "Buccaneer",
      cry: "Audio/Buccaneer.mp3",
    },
    {
      path: "cards/CoolGhoul.jpg",
      name: "Cool Ghoul",
      className: "Coolghoul",
      cry: "Audio/Coolghoul.mp3",
    },
    {
      path: "cards/Crazedworshipper.jpg",
      name: "Crazed Worshipper",
      className: "Crazedworshipper",
      cry: "Audio/Crazed.mp3",
    },
    {
      path: "cards/Cthun.jpg",
      name: "Cthun",
      className: "Cthun",
      cry: "Audio/Cthun.mp3",
    },
    {
      path: "cards/Cutpurse.jpg",
      name: "Cutpurse",
      className: "Cutpurse",
      cry: "Audio/Cutpurse.mp3",
    },
    {
      path: "cards/Darkpeddler.jpg",
      name: "Dark Peddler",
      className: "Darkpeddler",
      cry: "Audio/Darkpeddler.mp3",
    },
    {
      path: "cards/DireMole.jpg",
      name: "Dire Mole",
      className: "Diremole",
      cry: "Audio/Dire.mp3",
    },
    {
      path: "cards/DirtyRat.jpg",
      name: "Dirty Rat",
      className: "Dirtyrat",
      cry: "Audio/Dirtyrat.mp3",
    },
    {
      path: "cards/Dopplegangster.jpg",
      name: "Dopplegangster",
      className: "Dopplegangster",
      cry: "Audio/Dopple.mp3",
    },
    {
      path: "cards/DrBoom.jpg",
      name: "Dr Boom",
      className: "Drboom",
      cry: "Audio/Boom.mp3",
    },
    {
      path: "cards/Duskboar.jpg",
      name: "Duskboar",
      className: "Duskboar",
      cry: "Audio/Dusk.mp3",
    },
    {
      path: "cards/Eadricthepure.jpg",
      name: "Eadric the pure",
      className: "Eadricthepure",
      cry: "Audio/Eadric.mp3",
    },
    {
      path: "cards/Eggnapper.jpg",
      name: "Eggnapper",
      className: "Eggnapper",
      cry: "Audio/Eggnapper.mp3",
    },
    {
      path: "cards/ElvenArcher.jpg",
      name: "Elven Archer",
      className: "Elvenarcher",
      cry: "Audio/Elven.mp3",
    },
    {
      path: "cards/ExcavatedEvil.jpg",
      name: "Excavated Evil",
      className: "ExcavatedEvil",
      cry: "Audio/Excavated.mp3",
    },
    {
      path: "cards/Fightpromoter.jpg",
      name: "Fight Promoter",
      className: "Fightpromoter",
      cry: "Audio/Promoter.mp3",
    },
    {
      path: "cards/Finja.jpg",
      name: "Finja",
      className: "Finja",
      cry: "Audio/Finja.mp3",
    },
    {
      path: "cards/FireFly.jpg",
      name: "Fire Fly",
      className: "Firefly",
      cry: "Audio/Fire.mp3",
    },
    {
      path: "cards/Genzo.jpg",
      name: "Genzo",
      className: "Genzo",
      cry: "Audio/Genzo.mp3",
    },
    {
      path: "cards/GlacialShard.jpg",
      name: "Galacial Shard",
      className: "Galacialshard",
      cry: "Audio/Glacial.mp3",
    },
    {
      path: "cards/GoblinBomb.jpg",
      name: "Goblinbomb",
      className: "Goblinbomb",
      cry: "Audio/Goblin.mp3",
    },
    {
      path: "cards/Gorillabot.jpg",
      name: "Gorillabot",
      className: "Gorillabot",
      cry: "Audio/Gorrilabot.mp3",
    },
    {
      path: "cards/GrimPatron.jpg",
      name: "Grim Patron",
      className: "Grimpatron",
      cry: "Audio/Grim.mp3",
    },
    {
      path: "cards/HiredGun.jpg",
      name: "Hired Gun",
      className: "Hiredgun",
      cry: "Audio/Hired.mp3",
    },
    {
      path: "cards/Hobgoblin.jpg",
      name: "Hobgoblin",
      className: "Hobgoblin",
      cry: "Audio/Hobgoblin.mp3",
    },
    {
      path: "cards/Icehowl.jpg",
      name: "Icehowl",
      className: "Icehowl",
      cry: "Audio/Ice.mp3",
    },
    {
      path: "cards/LoneChampion.jpg",
      name: "Lone Champion",
      className: "Lonechampion",
      cry: "Audio/Lone.mp3",
    },
    {
      path: "cards/Maexxna.jpg",
      name: "Maexxna",
      className: "Maexxna",
      cry: "Audio/Spider.mp3",
    },
    {
      path: "cards/MarintheFox.jpg",
      name: "Marin The Fox",
      className: "Marinthefox",
      cry: "Audio/Marin.mp3",
    },
    {
      path: "cards/MarshDrake.jpg",
      name: "Marsh Drake",
      className: "Marshdrake",
      cry: "Audio/Marsh.mp3",
    },
    {
      path: "cards/Mindbreaker.jpg",
      name: "Mindbreaker",
      className: "Mindbreaker",
      cry: "Audio/Mind.mp3",
    },
    {
      path: "cards/Moroes.jpg",
      name: "Moroes",
      className: "Moroes",
      cry: "Audio/Moroes.mp3",
    },
    {
      path: "cards/Ozruk.jpg",
      name: "Ozruk",
      className: "Ozruk",
      cry: "Audio/Ozruk.mp3",
    },
    {
      path: "cards/PilotedSkyGolem.jpg",
      name: "Piloted Sky Golem",
      className: "Pilotedskygolem",
      cry: "Audio/Piloted.mp3",
    },
    {
      path: "cards/QueenofPain.jpg",
      name: "Queen of Pain",
      className: "Queenofpain",
      cry: "Audio/Queen.mp3",
    },
    {
      path: "cards/Recruiter.jpg",
      name: "Recruiter",
      className: "Recruiter",
      cry: "Audio/Recruiter.mp3",
    },
    {
      path: "cards/RendBlackhand.jpg",
      name: "Rend Blackhand",
      className: "Rendblackhand",
      cry: "Audio/Rend.mp3",
    },
    {
      path: "cards/RenoJackson.jpg",
      name: "Reno Jackson",
      className: "Renojackson",
      cry: "Audio/Reno.mp3",
    },
    {
      path: "cards/ShriekingShroom.jpg",
      name: "Shrieking Shroom",
      className: "Shriekingshroom",
      cry: "Audio/Shroomy.mp3",
    },
    {
      path: "cards/SwampLeech.jpg",
      name: "Swamp Leech",
      className: "Swampleech",
      cry: "Audio/Leech.mp3",
    },
    {
      path: "cards/Treant.jpg",
      name: "Treant",
      className: "Treant",
      cry: "Audio/Tree.mp3",
    },
    {
      path: "cards/Ultrasaur.jpg",
      name: "Ultrasaur",
      className: "Ultrasaur",
      cry: "Audio/Ultrasaur.mp3",
    },
    {
      path: "cards/Whirliglider.jpg",
      name: "Whirliglider",
      className: "Whirliglider",
      cry: "Audio/Whirl.mp3",
    },
  ];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function createDeck() {
    for (let i = 0; i < numOfCards / 2; i++) {
      const pickedCard = Math.floor(Math.random() * cardBank.length);
      for (let i = 1; i <= 2; i++) {
        let newCard = JSON.parse(JSON.stringify(cardBank[pickedCard]));
        newCard.matched = false;
        newCard.flipped = false;
        newCard.id = crypto.randomUUID();
        deck.push(newCard);
      }
    }
    shuffle(deck);
  }

  useEffect(() => {
    createDeck();
  });

  return (
    <div className="game">
      <ScoreBoard score={score} />
      <GameBoard
        deck={deck}
        setScore={setScore}
        setPlayGame={setPlayGame}
        bgMusicPlayer={bgMusicPlayer}
      />
    </div>
  );
}
