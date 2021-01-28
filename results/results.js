import scoreJp from './score-jp.js';
import scoreCp from './score-cp.js';
import { aliveCpMessages, deadCpMessages } from './messages.js';

const user = JSON.parse(localStorage.getItem('USER'));

const storyDisplay = document.getElementById('story-display');

const jpResult = scoreJp(user.jp);
const cpResult = scoreCp(user.cp);

const jpMessages = {
    dead: 'unfortunately did not make it out of this adventure alive. We will remember them fondly',
    average: 'made it to the end of the adventure but did not really pull their weight',
    great: 'made it to the end of the Adventure!! They really pulled their weight and helped Team Avatar succeed! Great Job!',
};

const jpMessage = jpMessages[jpResult];
let cpMessages = null;


if (jpResult === 'dead') {
    cpMessages = deadCpMessages;
} else {
    cpMessages = aliveCpMessages;
}
const cpMessage = cpMessages[cpResult];

const story = `After saving the world ${user.name} the ${user.element} bender ${jpMessage}. ${cpMessage}.`;

storyDisplay.textContent = story;




const restartGame = document.querySelector('#reset');

restartGame.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../';
});
