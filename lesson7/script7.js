// DOM (Document Object Model)
// поиск элемента по его идентификатору
const e = document.getElementById('test');//id документа который мы хотим достать
console.log(e);
console.log(e.id);
e.id ='hello';
e.style.color = 'blue';
e.style['font-size'] = '26px';//укажем размер-способ 1
e.style.textAlign = 'center'; //выравнивание текста - способ 2
e.innerText ='JavaScript';
e.innerHTML = '<p>JS</p>';//так делать нельзя, вставляем html
console.log(e.className);
e.className += " dog";//добавляем класс
e.classList.add('rabbit','cow');//добавляем классы
e.classList.remove('cat');//удаляем класс
console.log(e.classList);
e.classList.replace('cow','wolf');//замена

//поиск элементов по классу
const m = document.getElementsByClassName('clazz');//возвращает эллементы в виде массива
console.log(m);

m[1].src = 'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg';
for(let s of m){
    if( s instanceof HTMLImageElement){
        s.width = '400';
        s.height = '240';
    }
}
//поиск элементов по названию тега
const w = document.getElementsByTagName('div');
console.log(w);
// поиск по селектору (возвращает только один найденый элемент)
const y = document.querySelector('p.clazz + img');
console.log(y);
// поиск по селектору (возвращает все найденые элементы в виде массива)
const r = document.querySelectorAll('p.clazz + img');
console. log(r);

//пример
//1 способ
const timerid = setInterval(() => {
    console.log ('hi!');
    clearInterval(timerid); //остановка таймера
},1000);//второй аргумент-количество мс

//2 способ
const tid = setTimeout(() => {
    console.log('timeout');
}, 2500);
clearTimeout(tid);//остановка setTimeout

// пример "rgb(12,255,0)
function hrand(min,max){
    return Math.trunc (Math.random() * (max - min) + min);
}
function randColor(){
    const r = hrand(0,255);
    const g = hrand(0,255);
    const b = hrand(0,255);
    return `rgb(${r},${g},${b})`;

}
setInterval(() =>{
    document.body.style.background = randColor();
},2000);