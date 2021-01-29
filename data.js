
const library = {
    id: 'library',
    title: 'The Library',
    image: 'library.jpg',
    description: `
        You and Team Avatar find an ancient library buried in the desert! woah. You decide to steal some ancient scrolls when a giant spirit owl tries to kill everyone. You:
    `,
    choices: [{
        id: 'sacrifice',
        description: 'Decide to go down with the library. Whats better than spending an eternity with all the knowledge in the world?',
        result: `
        You knew the consequences of your choice. Loose 15 Journey Points and oh HELL - YOU LET 10 CABBAGES GET DESTROYED TOO!
        `,
        jp: -15,
        cp: -10,
    }, {
        id: 'help',
        description: 'Help distract the terrifying owl and make a daring escape with Aang on his glider',
        result: `
        Way to help the team! Gain 3 journey points! And you saved 10 cabbages in the process!!
        `,
        jp: 3,
        cp: 10,
    }, {
        id: 'clueless',
        description: 'You\'re still trippin from the desert cactus you ate earlier. Hang out with the foxy knowledge seekers until your friends rescue you',
        result: `
        You didn't know that cactus was poisonous.. right? Get one journey point for making out of the library alive. Plus you saved the 5 cabbages in your pack! yum.
        `,
        jp: 1,
        cp: 5,
    }]
};

const tunnel = {
    id: 'tunnel',
    title: 'Secret Tunnel',
    image: 'tunnel.jpg',
    description: `
        You and the Aang Gang get cornered by fire benders!! The only escape is to take the lovers cave. Once inside you get separated from half of the group! How do you escape?
    `,
    choices: [{
        id: 'kiss',
        description: 'Kiss in the dark ... ?',
        result: `
        It's called the cave of two lovers for a reason right?? By kissing in the dark you discovered that glowing gems light the way out! 2 journey points for you! You make it out with 5 cabbages safe in your pack!
        `,
        jp: 2,
        cp: 5
    }, {
        id: 'sing',
        description: 'AHH! Giant badger moles?! 🎶SERENADE THEM🎶',
        result: `
        Badger moles are blind and music lovers! duhh. They give you a ride to safety.  You and the badger moles made it out with 7 cabbages safe in your pack! Plus 3 journey points!
        `,
        jp: 3,
        cp: 7,
    }, {
        id: 'worms',
        description: 'Eat all the cave worms you can find and light all the candles at one time!',
        result: `
        You obviously dont know how candles work. And not even Momo  likes cave worms. Minus 2 journey points and shame on you for loosing 5 cabbages in the dark.
        `,
        jp: -2,
        cp: -5
    }]
};

const island = {
    id: 'island',
    title: 'Ember Island',
    image: 'island.png',
    description: `
        You and the gaang are chillin on Ember Island in the fire nation! You decide to go see a play based of your adventures! At the show you:
    `,
    choices: [{
        id: 'tips',
        description: 'Give joke suggestions to the actor playing you to say during the show!',
        result: `
        What a constructive and fun way spend your evening! Plus 3 journey points for your good attitude! And you still have 4 cabbages to eat! Delicious!
        `,
        jp: 3,
        cp: 4,
    }, {
        id: 'mad',
        description: 'Get mad at your friends because their actor counterparts are saying things that are making you upset',
        result: `
        Those people are actors! And from the fire nation! Maybe you should ask your friends how they really feel instead of jumping to conclusions, aaaand accidentally jumping onto the CABBAGES!! crushing 5 of them.. Not cool... minus 2 journey points.
        `,
        jp: -2,
        cp: -5
    }, {
        id: 'hype',
        description: 'Get hyped that the actor portraying you is a giant strong man!!',
        result: `
        Way to be a great sport! Plus 5 journey points for your good attitude. Your good attitude is also making your cabbage stash happy, 10 happy cabbages stick with you.
        `,
        jp: 5,
        cp: 10
    }]
};

const quests = [
    library,
    tunnel,
    island,
];
export default quests;