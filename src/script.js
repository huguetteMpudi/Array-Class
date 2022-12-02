Array.prototype.myPush = function (item) {
  this[this.length] = item;
  return this;
};

const fruits = ['🍌', '🍓', '🍪', '🍐', '🍎'];
fruits.myPush('🥝');
fruits.myPush('🍪');
fruits.myPush('🍓');
fruits.myPush('🍊');
console.log(fruits);

const actor = {
  name: 'Jamie Fox',
  age: 37,
  money: 20000,
};
console.log(Object.keys(actor))
console.log(Object.values(actor))
