const intro = "WELCOME TO THE CARNIVAL GIFT SHOP!";
const greet = "Hello friend! Thank you for visiting the carnival!";

class Item {
  static pricelist = [
    {number: 1, name: "Teddy Bear", tickets: 10},
    {number: 2, name: "Big Red Ball", tickets: 5},
    {number: 3, name: "Huge Bear", tickets: 50},
    {number: 4, name: "Candy", tickets: 8},
    {number: 5, name: "Stuffed Tiger", tickets: 15},
    {number: 6, name: "Stuffed Dragon", tickets: 30},
    {number: 7, name: "Skateboard", tickets: 100},
    {number: 8, name: "Toy Car", tickets: 25},
    {number: 9, name: "Basketball", tickets: 20},
    {number: 10, name: "Scary Mask", tickets: 75}
  ];

  constructor(number, name, tickets) {
    this.number = number;
    this.name = name;
    this.tickets = tickets;
  }

  /* CREATE */
  static addItem(number, name, tickets) {
    if (!number || !name || !tickets) {
      return console.log("Error: not enough parameters.");
    }
    if (Item.pricelist.find(SKU => SKU.number === number)) {
      return console.log("Error: number already in pricelist.");
    }
    Item.pricelist.push(new Item(number, name, tickets));
    console.log(`Added: ${name}`);
  }

  /* RETRIEVE */
  static showAllItems() {
    console.log("Here's the list of gifts:\n");
    Item.pricelist.forEach(SKU => {
      console.log(`${SKU.number}- ${SKU.name}, Cost: ${SKU.tickets} tickets`);
    });
  }

  /* UPDATE */
  static updateItem(number, name, tickets) {
    const SKU = Item.pricelist.find(i => i.number === number);
    if (!SKU) return console.log("Error: number not in pricelist.");
    SKU.name = name;
    SKU.tickets = tickets;
    console.log(`Updated: ${number} to ${name}`);
  }

  /* DELETE */
  static removeItem(number) {
    const index = Item.pricelist.findIndex(i => i.number === number);
    if (index === -1) return console.log("Error: number not in pricelist.");
    const removed = Item.pricelist.splice(index, 1)[0];
    console.log(`Removed: ${removed.name}`);
  }
}

function main() {
  console.log(intro);
  console.log(greet);
  Item.showAllItems();
}

main();
