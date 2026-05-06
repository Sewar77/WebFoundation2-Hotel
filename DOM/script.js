function changeText() {
    const p = document.querySelectorAll('#p')
    //querySelector => function return an elemtn
    // querySelectorAll => function return a array []
    const btn = document.querySelector(".button");
    console.log(p);

}

const fruits = ['apple', 'banane', 'cherry', 'watermelo', 'orange']


fruits.map((fruit, idx) => {
    console.log(idx, fruit);
})

console.log('-----------------');

for (let fruit = 0; fruit < fruits.length; fruit++) {
    const element = fruits[fruit];
    console.log(fruit, "-", element);
}
console.log('-----------------');

var i = 0;
while (i <= fruits.length) {
    const element = fruits[i];
    console.log(element);
    i++;
    if (i === fruits.length) {
        break
    }
}