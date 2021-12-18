let RiddlesEasy = [
    'Этот плод едва обнимешь, если слаб, то не поднимешь,\n На куски его порежь, мякоть красную поешь.',
    'Знают этот фрукт детишки, Любят есть его мартышки.\n Родом он из жарких стран \n В тропиках растет...',
    'Несется и стреляет, Ворчит скороговоркой.\n Трамваю не угнаться За этой тараторкой.',
    'Семь ребят на лесенке Заиграли песенки.'
];

let RiddlesNormal = [
    'Летает без крыльев, плачет без глаз.',
    'На каком языке говорят молча?',
    'В каком городе спрятались мужское имя и сторона света?',
    'По чему ходят часто, а ездят редко?'
];
let RiddlesHard = [
    'Чем больше из неё берешь, тем больше она становится.',
    'Завязать можно а развязать нельзя',
    'Что может в одно и тоже время \n стоять и ходить, висеть и стоять, ходить и лежать.',
    'Что не вместится даже в самую большую кастрюлю'
];

let ans = {
    ease: ['арбуз', 'банан', 'мотоцикл', 'ноты'],
    normal: ['туча', 'язык жестов', 'владивосток', 'по лестнице'],
    hard: ['яма', 'разговор', 'часы', 'крышка']
};


let game = {
    title:  document.querySelector('.title'),
    buttons:  document.querySelector('.buttons'),
    btn:  document.querySelectorAll('.buttons > .btn'),
    form:  document.querySelector('.form'),
    answer:  document.querySelector('.input'),
    button:  document.querySelector('.button'),
    btnWin:  document.querySelector('.win') 
};

let StartGame = function(){
    game.form.style.display = 'flex';
    game.title.style.display = 'none';
    for(let i = 0 ; i <= 2 ; i++) {
        game.btn[i].style.display = 'none';
    }
    
};

let div = document.createElement('div');
div.classList.add('mystery');

let addMystery = function(riddles) {

    let random = Math.floor(Math.random() * 4);
    div.textContent = riddles[random];
    game.buttons.append(div);
};

let ease = function() {
    addMystery(RiddlesEasy);
    game.button.addEventListener("click", checkEase);
};

let normal = function() {
    addMystery(RiddlesNormal);
    game.button.addEventListener("click", checkNormal);
};

let hard = function() {
    addMystery(RiddlesHard);
    game.button.addEventListener("click", checkHard);
};

let win = function() {
    div.textContent = 'Молодец, ты угадал! хочешь сыграть ещё?';
    div.style.cssText = `
    font-size: 40px;
    color: green;
    text-shadow: 1px 1px 3px black`;
    game.form.style.display = 'none';
    game.button.style.display = 'none';
    game.btnWin.style.display = 'block';

};


let checkAns = function(riddles, ans) {
    if (div.textContent == riddles[0] &&
        game.answer.value.toLowerCase() == ans[0]) {

        win();

    } else if (div.textContent == riddles[1] &&
        game.answer.value.toLowerCase() == ans[1]) {

        win();

    } else if (div.textContent == riddles[2] &&
        game.answer.value.toLowerCase() == ans[2]) {

        win();

    } else if (div.textContent == riddles[3] &&
        game.answer.value.toLowerCase() == ans[3]) {

        win();

    } else if (game.answer != ans[1] ||  game.answer != ans[0] ||
               game.answer != ans[2]|| game.answer != ans[3] ) {
                   alert('Не верно, попробуй еще.');
    }
};

let checkEase = function() {
    checkAns(RiddlesEasy, ans.ease);
};

let checkNormal = function() {
    checkAns(RiddlesNormal, ans.normal);
};

let checkHard = function() {
    checkAns(RiddlesHard, ans.hard);
};


game.btn[0].addEventListener("click", StartGame);
game.btn[0].addEventListener("click", ease);

game.btn[1].addEventListener("click", StartGame);
game.btn[1].addEventListener("click", normal);

game.btn[2].addEventListener("click", StartGame);
game.btn[2].addEventListener("click", hard);


let reload = function() {
    document.location.reload();
};
game.btnWin.onclick = reload;

