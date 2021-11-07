const opacity = document.querySelector('.opacity');
const contain = document.querySelector('.contain');

let loading = 1;

var myblur = setInterval(handle, 30)

function handle() {
  loading++;
  if (loading <= 99) {
    opacity.innerHTML = loading + '%';
    opacity.style.opacity = scale(loading, 0, 100, 1, 0)
    contain.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
  }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


// function scale(number, inMin, inMax, outMin, outMax) {
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }
// const num = 1;
// console.log(scale(num, 0, 100, 30, 0)); // 0
//console.log(scale(num, -20, 0, -100, 100)); // 150

