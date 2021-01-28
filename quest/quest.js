import { findById } from '../utils.js';
import quests from '../data.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);

console.log('=============================\n');
console.log('|| quest', quest);
console.log('\n=============================');