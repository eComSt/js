//let tasks = [];

let tasks = ['сделать уроки', 'купить хлеб', 'вытереть пыль'];
alert(tasks[0]); // сделать уроки
alert(tasks[1]); // купить хлеб
alert(tasks[2]); // вытереть пыль
tasks[1] = 'купить молоко';
tasks[3] = 'выучить JS';
tasks.push('купить шоколад');
tasks.unshift('Сходить на тренировку!');
alert(tasks);
tasks.pop();
tasks.shift();
alert(tasks);
