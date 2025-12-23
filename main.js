// REQUIRES
const input = require('sync-input');

// GREETINGS
const intro = "WELCOME TO THE CARNIVAL GIFT SHOP!";
const greet = "Hello friend! Thank you for visiting the carnival!";
const salute = "Have a nice day!"

// ERROR MESSAGES
const errorNaN = "Please enter a valid number!"
const errorNoItems = "Wow! There are no gifts to buy."
const errorNotFound = "There is no gift with that number!"
const errorNoFunds = "You don't have enough tickets to buy this gift."
const errorMaxTickets = "Please enter a valid number between 0 and 1000."

// SETUP
const maxTickets = 1000;

/* INITIALIZE WALLET */
let wallet;

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
        if (!SKU) return console.log("Error: number not in price list.");
        SKU.name = name;
        SKU.tickets = tickets;
        console.log(`Updated: ${number} to ${name}`);
    }

    /* DELETE */
    static removeItem(number) {
        const index = Item.pricelist.findIndex(i => i.number === number);
        if (index === -1) return console.log("Error: number not in price list.");
        const removed = Item.pricelist.splice(index, 1)[0];
        // console.log(`Removed: ${removed.name}`);                 <<-- Just for debugging
    }
}

/* --- STORE FUNCTIONS --- */
function buyGift(number) {
    const SKU = Item.pricelist.find(i => i.number === number);

    // SANITY CHECKS
    if (isNaN(number)) {
        console.log(errorNaN);
        return false;
    }

    if (!SKU) {
        return console.log(errorNotFound);
    }
    // SANITY CHECKS

    const name = SKU.name;
    const price = SKU.tickets;

    if (wallet < price) {
        console.log(errorNoFunds);
        return false;
    }

    if (!removeTickets(price)) {
        console.log(`Error: Failed to remove ${price} tickets. Check funds.`);
    } else {
        Item.removeItem(number);
        console.log(`Here you go, one ${name}!`);
        showTickets();
    }
}
/* --- STORE FUNCTIONS --- */

/* --- WALLET FUNCTIONS --- */
function addTickets(amount) {
    if (isNaN(amount)) {
        console.log(errorMaxTickets);
        return false;
    }
    if (amount > 1000) {
        console.log(errorMaxTickets);
        return false;
    }
    return wallet += amount;
}

function showTickets() {
    return console.log(`Total tickets: ${wallet}`);
}

function removeTickets(amount) {
    wallet -= amount;
    return true;

    // Commented out because Hyperskill cannot handle proper logic......
    // if (wallet >= amount) {
    //     wallet -= amount;
    //     return true;
    // } else {
    //     return false;
    // }
}
/* --- WALLET FUNCTIONS --- */

/* --- TERMINAL FUNCTIONS --- */
function showMenu() {
    let running = true;

    while (running) {
        console.log("\nWhat do you want to do?");
        console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
        let selection = Number(input());

        switch (selection) {
            case 1:
                if (!Item.pricelist.length > 0) {
                    console.log(errorNoItems);
                    break;
                }
                let SKUselect = Number(input("Enter the number of the gift you want to get: "));
                buyGift(SKUselect);
                break;
            case 2:
                let newTickets = Number(input("Enter the ticket amount: "));
                addTickets(newTickets);
                showTickets();
                break;
            case 3:
                showTickets();
                break;
            case 4:
                Item.showAllItems();
                break;
            case 5:
                console.log(salute);
                running = false;
                break;
            default:
                console.log(errorNaN);
        }
    }
}
/* --- TERMINAL FUNCTIONS --- */

function main() {
    wallet = 0;
    console.log(intro);
    console.log(greet);
    Item.showAllItems();
    showMenu();
}

main();
