// mam dość - by Ignacy Łątka

const MAX_W = 9, MAX_H = 33;

// [stolen]
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

let a = Math.random(),
    b = Math.random();

let c = a + b;

if (c > vh * MAX_H/100) {
  let mult = (vh * MAX_H / 100) / c;
  a = a * mult;
  b = b * mult;
  c = c * mult;
}

console.log(a, ' ', b, ' ', c);

document.getElementById('bar_env').style.height = a;
document.getElementById('bar_h2o').style.height = b;
document.getElementById('bar_oxy').style.height = c;
