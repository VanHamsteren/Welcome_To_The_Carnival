const ITEMS = Array(
    "Teddy Bear",
    "Big Red Ball",
    "Huge Bear",
    "Candy",
    "Stuffed Tiger",
    "Stuffed Dragon",
    "Skateboard",
    "Toy Car",
    "Basketball",
    "Scary Mask"
    )
const INTRO = "WELCOME TO THE CARNIVAL GIFT SHOP!"
const GREET = "Hello friend! Thank you for visiting the carnival!"

function showArrayContent(ITEMS) {
    console.log("Here's the list of gifts:\n")
    for (const item in ITEMS) {
        console.log(ITEMS[item])
    }
}
function main() {
    console.log(INTRO)
    console.log(GREET)
}

main()
showArrayContent(ITEMS)
