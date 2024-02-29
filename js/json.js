const shop={
    owner: 'shanto',
    address: {
        street: 'khagrachari',
        city: 'dalaia',
        country: 'Bangladesh'
    },
    products: ['laptop','boxer','monitor','keyboard']
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObject = JSON.parse(shopJson);
console.log(shopObject);


