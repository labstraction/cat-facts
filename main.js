import './style.css'
import { CatService } from './services/cat-service'
import confetti from 'canvas-confetti';

CatService.getfacts().then(data => {
  console.log(data);
  displayData(data);
  fireConfetti()
});

function displayData(data) {
    const list = document.getElementById('fact-list');
    for (const factObj of data) {
      list.innerHTML += `<li>${factObj.fact}</li>`;
    }
}

function fireConfetti(){
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}