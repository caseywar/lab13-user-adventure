import scoreJp from './score-jp.js';
// import { resultsMessages } from './messages.js';

const user = JSON.parse(localStorage.getItem('USER'));

const storyDisplay = document.getElementById('story-display');

const jpResult = scoreJp(user.jp);

const jpMessages = {
    dead: 'unfortunately did not make it out of this adventure alive. We will remember them fondly',
    average: 'made it to the end of the adventure but you did not really pull their weight',
    great: 'made it to the end of the Adventure!! They really pulled their weight and helped Team Avatar succeed! Great Job!',
};

const jpMessage = jpMessages[jpResult];



const story = `After saving the world ${user.name} the ${user.element} bender ${jpMessage}.`;

storyDisplay.textContent = story;