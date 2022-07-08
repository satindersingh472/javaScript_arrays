let item_names = [`pizza`,`calzone`,`pasta`];
console.log(item_names);
let item_prices = [10,11,12];
console.log(item_prices);
let in_stock = [true,false,true];
console.log(in_stock);

let first_item_name = item_names[0];
console.log(first_item_name);
let first_item_price = item_prices[0];
console.log(first_item_price);
let first_in_stock = in_stock[0];
console.log(first_in_stock);

item_names.push(`sides`);
item_prices.push(13);
in_stock.push(true);

console.log(item_names);
console.log(item_prices);
console.log(in_stock);

let last_item_name = item_names.pop();
console.log(item_names);
let last_item_price = item_prices.pop();
console.log(item_prices);
let last_in_stock = in_stock.pop();
console.log(in_stock);