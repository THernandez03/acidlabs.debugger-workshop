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

var cambio;
const cambioFn = (val) => {
  if(val === null) return cambio = null;
  return cambio = Math.random();
};

setTimeout(() => {
  cambio = cambioFn();
  setTimeout(() => {
    cambio = cambioFn();
    setTimeout(() => {
      cambio = cambioFn();
      setTimeout(() => {
        cambio = cambioFn();
        setTimeout(() => {
          if(!cambio){
            console.log({ cambio })
          }
          console.log('5 Segundos despues...');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log('FIN');
