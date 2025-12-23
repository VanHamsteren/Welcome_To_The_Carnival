# Carnival Gift Shop 🎠

A simple Node.js command-line game where you can earn and spend tickets in a fun **Carnival Gift Shop** simulation!  
Buy gifts, add tickets, and manage your collection from the terminal.

***

## 🧩 Overview

The **Carnival Gift Shop** project is a playful interactive program built with JavaScript. It simulates a small shop where users can:

- View the list of gifts available.  
- Add or spend tickets as currency.  
- Purchase items from the shop’s inventory.  
- Exit the shop after finishing their session.

It’s mainly designed as a learning project to practice **basic I/O**, **loops**, **arrays**, **object-oriented patterns**, and **control flow** in JavaScript using a Node.js environment.

***

## 🚀 Features

- 🎁 Browse a list of collectible gifts.  
- 🪙 Add and check available tickets.  
- 🛒 Purchase gifts (with error handling for funds and invalid inputs).  
- 🧱 Modify, remove, or add new items through the `Item` class.  
- 🖥 Runs entirely in the **terminal** using the `sync-input` module for input handling.  

---

## 🧠 How It Works

1. The player starts with **0 tickets**.  
2. The program displays the available gifts, each with a ticket cost.  
3. The main menu allows you to:
   - Buy a gift  
   - Add tickets (up to 1000)  
   - Check ticket balance  
   - Show the complete gift list  
   - Exit the shop  

Each action updates your session’s wallet and the available item inventory.

***

## ⚙️ Requirements

- [Node.js](https://nodejs.org/) v14 or newer  
- The `sync-input` NPM module (`npm install sync-input`)

***

## 💻 Setup & Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/<your-username>/carnival-gift-shop.git
   cd carnival-gift-shop
   ```

2. Install the required dependency:

   ```bash
   npm install sync-input
   ```

3. Run the program:

   ```bash
   node main.js
   ```

4. Follow the on-screen menu to interact with the shop!

***

## 🧩 Example Session

```
WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
...

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
```

***

## 🧑‍💻 Developer Notes

The project uses a single **`Item` class** to encapsulate object data and CRUD operations for gifts.  
All logic for tickets, purchasing, and the main menu loop is handled in simple functions for readability and modularity.

If you’d like to extend it, consider:
- Adding a save/load system using JSON files.
- Introducing random events or ticket rewards.
- Improving input validation logic.

---

## 🤝 Contribution

If you’d like to improve or expand this project:
1. Fork the repository.
2. Create a new branch (`feature/new-idea`).
3. Commit and push your changes.
4. Open a pull request with a description of your update.

***

## 📄 License

You have a license to chill 🍸
