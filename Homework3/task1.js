let numbers = [];
let simple_num = [];
let max_ind = 100;

for (let i = 0; i <= max_ind; i++) {
    numbers.push(i)
}

let counter = 1;

while (counter <= max_ind) {
    let int_counter = counter - 1
    while (int_counter >= 1) {
        if ((numbers[counter] % numbers[int_counter] == 0) && int_counter != 1) {
            break;
        } else if (int_counter == 1) {
            simple_num.push(numbers[counter]);
            break;
        }
        else {
            int_counter--;
            continue;
        }
    }
    counter++;
}
console.log(simple_num);
