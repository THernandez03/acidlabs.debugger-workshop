const string = 'Soy un String';
const number = Math.random();
const array = Array.from({ length: 10 }, Math.random);
const object = Array
  .from({ length: 10 }, Math.random)
  .reduce((acc, next) => ({
    ...acc,
    [next]: !!(Math.random() <= .5)
  }), {});

if(number < .3) throw Error('Custom Error...');

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          console.log('5 Segundos despues...');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log('FIN');
