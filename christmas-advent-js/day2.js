function manufactureGifts(giftsToProduce) {
    giftsToProduce = giftsToProduce.filter(item => item.quantity > 0);
  let producedGifts = giftsToProduce.map(item => [Array(item.quantity).fill(item.toy)]);
  producedGifts = producedGifts.flat(2);
  return producedGifts;
}

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ballx']

const production2 = [
  { toy: 'train', quantity: 0 }, // not manufactured
  { toy: 'bear', quantity: -2 }, // neither
  { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []