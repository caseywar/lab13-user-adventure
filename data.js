
const library = {
    id: 'library',
    title: 'The Library',
    image: 'library.jpg',
    description: `
        You and Team Avatar find an ancient library buried in the desert! woah. You decide to steal some ancient scrolls when a giant spirit owl tries to kill everyone. You:
    `,
    choices: [{
        id: 'sacrifice',
        description: 'Decide to go down with the library. Whats better than spending an eternity with all the knowledge in the world',
        result: `
        You knew the consequences of your choice. Loose 15 Journey Points
        `,
        jp: -15,
    }, {
        id: 'help',
        description: 'Help distract the terrifying owl and make a daring escape with Aang on his glider',
        result: `
        Way to help the team! Gain 3 journey points!
        `,
        jp: 3,
    }, {
        id: 'clueless',
        description: 'You are not thinking straight from the poisonous desert cactus you ate earlier. Hang out with the foxy knowledge helpers until your friends rescue you',
        result: `
        You didn't know that cactus was poisonous right? Get one journey point for making out of the library alive
        `,
        jp: 1,
    }]
};

const tunnel = {
    id: 'tunnel',
    title: 'Secret Tunnel',
    image: 'tunnel.jpg',
    description: `
        You and the Aang Gang get cornered by fire benders!! The only escape is to take the lovers cave, a huge labrinth of cave tunnels! Once inside you get separated from half of the group! How do yo escape?
    `,
    choices: [{
        id: 'kiss',
        description: 'Kiss in the dark ... ?',
        result: `
        It's called the cave of two lovers for a reason right?? By kissing in the dark you discovered that glowing gems light the way out! Plus 2 journey points for you!
        `,
        jp: 2,
    }, {
        id: 'sing',
        description: 'AHH! Giant badger moles?! 🎶SERENADE THEM🎶',
        result: `
        Badger moles are blinde and music lovers! duhh. They give you a ride to safety. Plus 3 journey points for you!
        `,
        jp: 3,
    }, {
        id: 'worms',
        description: 'Eat all the cave worms you can find and light all the candles at one time!',
        result: `
        You obviously dont know how candles work. And even Momo doesnt like cave worms. Minus 2 journey points.
        `,
        jp: 2,
    }]
};

const island = {
    id: 'island',
    title: 'Ember Island',
    image: 'island.png',
    description: `
        You and the gaang are chillin on Ember Island in the fire nation! In disguise of course. You decide to go see a play based of your adventures! At the show you:
    `,
    choices: [{
        id: 'tips',
        description: 'Give joke suggestions to the actor playing you to say during the show!',
        result: `
        What a constructive and fun way spend your evening! Plus 3 journey points for your good attitude!
        `,
        jp: 3,
    }, {
        id: 'mad',
        description: 'Get mad at your friends because their actor counterparts are saying things that are making you upset',
        result: `
        Those people are actors! And from the fire nation! Maybe you should ask your friends how they really feel instead of jumping to conclusions. Not cool... minus 2 journey points
        `,
        jp: -2,
    }, {
        id: 'hype',
        description: 'Get hyped that the actor portraying you is a big strong man!!',
        result: `
        Way to be a great sport and not get caught up in the little things! Plus 5 journey points for your good attitude.
        `,
        jp: 5,
    }]
};

const quests = [
    library,
    tunnel,
    island,
];
export default quests;