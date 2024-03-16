// For Of loop
const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

const arrNew = [1, 2, 3, 4, 5]
for (const [i, e] of arrNew.entries()) {
    console.log(`Item ${i + 1} - ${e}`);
}