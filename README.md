Sure! Here's the English version of the `README.md` file for your Number Guessing Game project:

---

### 📁 `README.md`

```markdown
# 🎮 Number Guessing Game (CLI Version)

A simple **Node.js** command-line game where the user tries to guess a randomly generated number between 1 and 100. The player has a limited number of attempts based on the selected difficulty level.

---

## 🌐 Project URL

👉 [https://github.com/farahmahfouz/Number-Guessing-CLI-Game]([https://github.com/farahmahfouz/Number-Guessing-CLI-Game](https://roadmap.sh/projects/number-guessing-game))


## 📌 Game Idea

- The computer randomly selects a number between 1 and 100.
- The user selects a difficulty level (Easy / Medium / Hard).
- Each level gives a specific number of chances:
  - 🟢 Easy: 10 attempts
  - 🟡 Medium: 5 attempts
  - 🔴 Hard: 3 attempts
- The user starts guessing the number.
- After each guess:
  - If correct 👉 "Congratulations!"
  - If incorrect 👉 You are told whether the number is higher or lower.
- The game ends when the user guesses correctly or runs out of attempts.

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- Built-in `readline` module (no external packages required)

---

## 🚀 How to Run the Game

### 1. Clone the project

```bash
git clone https://github.com/your-username/guessing-game.git
cd number-guessing-game
```

### 2. Make sure you have Node.js installed

If not, download it from: https://nodejs.org/

### 3. Start the game

```bash
node index.js or npm start
```

You’ll see:

- A welcome message
- A prompt to choose difficulty level
- Then you can start guessing!

---

## 🧠 Sample Output

```text
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2
Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.

Enter your guess: 30
Incorrect! The number is greater than 30.

Enter your guess: 40
🎉 Congratulations! You guessed the correct number in 3 attempts.
```

---

## ✨ Future Improvements

- Save scores and history in a file
- Add player name input
- Implement levels and achievements
- Create a graphical version (GUI)

---

## 📄 License

This is a fun and educational project 💙 Feel free to use it and improve it!
```

---

Would you like me to save it as a file or help you upload the project to GitHub too?
