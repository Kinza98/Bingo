let gameOver = false;
// Generate Numbers in random order
function generateNumbers(e){
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  for(let i=numbers.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  for(let i=1; i<=25; i++){
    document.getElementById(`${e}-cell-${i}`).innerText = numbers[i-1]
  }
}
// render again
function renderGame(e){
  generateNumbers(e);
  for(let i=1; i<=25; i++){
    if(document.getElementById(`${e}-cell-${i}`).classList.contains('selected')){
      document.getElementById(`${e}-cell-${i}`).classList.remove('selected')
    }
  }
    for(let i=0; i < 5; i++){
      if(document.querySelectorAll(`#${e}Bingo span`)[i].classList.contains('set'))
      document.querySelectorAll(`#${e}Bingo span`)[i].classList.remove('set')
    }
}
// AI selecting Number
function AISelect(){
  // AI selection
  const lines = [
    ['ai-cell-1', 'ai-cell-2', 'ai-cell-3', 'ai-cell-4', 'ai-cell-5'],
    ['ai-cell-6', 'ai-cell-7', 'ai-cell-8', 'ai-cell-9', 'ai-cell-10'],
    ['ai-cell-11', 'ai-cell-12', 'ai-cell-13', 'ai-cell-14', 'ai-cell-15'],
    ['ai-cell-16', 'ai-cell-17', 'ai-cell-18', 'ai-cell-19', 'ai-cell-20'],
    ['ai-cell-21', 'ai-cell-22', 'ai-cell-23', 'ai-cell-24', 'ai-cell-25'],
    ['ai-cell-1','ai-cell-6', 'ai-cell-11', 'ai-cell-16', 'ai-cell-21'],
    ['ai-cell-2', 'ai-cell-7', 'ai-cell-12', 'ai-cell-17', 'ai-cell-22'],
    ['ai-cell-3', 'ai-cell-8', 'ai-cell-13', 'ai-cell-18', 'ai-cell-23'],
    ['ai-cell-4', 'ai-cell-9', 'ai-cell-14', 'ai-cell-19', 'ai-cell-24'],
    ['ai-cell-5', 'ai-cell-10', 'ai-cell-15', 'ai-cell-20', 'ai-cell-25'],
    ['ai-cell-1', 'ai-cell-7', 'ai-cell-13', 'ai-cell-19', 'ai-cell-25'],
    ['ai-cell-21', 'ai-cell-17', 'ai-cell-13', 'ai-cell-9', 'ai-cell-5'],
  ];
  for(let target = 4; target>=1; target--){
    for (const line of lines) {
      const selected = line.filter(id => document.querySelector(`#ai #${id}`).classList.contains('selected'))
      const unselected = line.filter(id => !document.querySelector(`#ai #${id}`).classList.contains('selected'))  
      if(selected.length == target && unselected.length == 5 - target)
      return unselected[0];
    }
  }
  let num;
  do {
    num = Math.floor(Math.random() * 25) + 1; // pick 1–25
  } while (document.querySelector(`#ai-cell-${num}`).classList.contains('selected'));
  return `ai-cell-${num}`
}

// Calculating Score
function countScore(e){
  let score = 0
  if(document.getElementById(`${e}-cell-1`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-2`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-3`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-4`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-5`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-6`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-7`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-8`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-9`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-10`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-11`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-12`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-13`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-14`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-15`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-16`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-17`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-18`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-19`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-20`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-21`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-22`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-23`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-24`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-25`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  
  if(document.getElementById(`${e}-cell-1`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-6`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-11`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-16`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-21`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-2`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-7`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-12`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-17`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-22`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-3`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-8`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-13`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-18`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-23`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-4`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-9`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-14`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-19`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-24`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-5`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-10`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-15`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-20`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-25`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-1`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-7`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-13`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-19`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-25`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  if(document.getElementById(`${e}-cell-5`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-9`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-13`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-17`).classList.contains('selected') 
  && document.getElementById(`${e}-cell-21`).classList.contains('selected') 
  ){
    if(score < 5)
      score++;
  }
  return score;
}

function finishGame(e){
  if (gameOver) return; // prevent multiple triggers
    gameOver = true;
  document.querySelector('.result').classList.remove('d-none');
  if(e =='my'){
    document.querySelector('.result #result-data').innerText = "WON...👏";
  }
  else{
    document.querySelector('.result #result-data').innerText = "OOPS, YOU LOSE...👎";
  }
}

function gameRefresh(){
  gameOver = false;
  document.querySelector('.result').classList.add('d-none');
  document.getElementById('numberOrder').disabled = false;
  renderGame('my');
  renderGame('ai');
}

function scoring(e){
  let s = 'my';
  if(e=='my')
    s='ai';
  else
    s='my'

  // count score
  let score = countScore(`${e}`);
  // mark bingo characters
  if(score > 0){
     for(let i=0; i < score; i++){
      document.querySelectorAll(`#${e}Bingo span`)[i].classList.add('set')
    }
  }
  
  // calculate ai score
  let aiscore = countScore(`${s}`);
  if(aiscore > 0){
    for(let i=0; i < aiscore; i++){
      document.querySelectorAll(`#${s}Bingo span`)[i].classList.add('set')
    }
  }

  // if won
  if(score === 5){
    finishGame(e);
  }
  // if ai won
  else if(aiscore == 5){
    finishGame(s);
  }
}
// when a number is clicked
function cellClick(e){
  document.getElementById('numberOrder').disabled = true;

  const val = e.target.innerText;

  if(e.target.classList.contains('selected')){
    alert('already selected')
    return;
  }
  // mark selected number
  e.target.classList.add('selected');
  for(let i = 1; i<=25; i++){
    if(document.getElementById(`ai-cell-${i}`).innerText == val){
      document.getElementById(`ai-cell-${i}`).classList.add('selected');
    }
  }
  
  scoring('my');
  
  for(let i = 1; i<= 25; i++)
    document.getElementById(`my-cell-${i}`).disabled = true;

  // AI selecting number
  setTimeout(function() {
   
    let cellNum = AISelect();
    document.querySelector(`#${cellNum}`).classList.add('selected');
    
    // marking the ai selected number in client card
    let numV = document.querySelector(`#${cellNum}`).innerText;
    for(let i = 1; i<=25; i++){
      if(document.querySelector(`#my-cell-${i}`).innerText == numV){
        document.querySelector(`#my-cell-${i}`).classList.add('selected');
      }
    }

    scoring('ai');

    for(let i = 1; i<= 25; i++)
      document.getElementById(`my-cell-${i}`).disabled = false;
  }, 200);
}
window.addEventListener('load', function() {
  generateNumbers('my');
  generateNumbers('ai');

  setTimeout(function() {
    const element = document.querySelector('.welcome');
    element.classList.add('exit');
    element.addEventListener('transitionend', () => {
      element.remove();
    });
    document.querySelector("main").classList.remove("d-none")
      }, 1500) 
});

