# Pig Game 🎲

A **classic 2-player dice game** built with **HTML**, **CSS**, and **JavaScript**. Roll the dice to score points, but roll a **1** and lose your turn! First to **100 points** wins. Perfect for learning DOM manipulation and game logic!

## 🚀 Live Demo

👉 [**Play Pig Game Now**](https://the-pig-game-using-js.netlify.app/)

---

## ✨ Features

- **2-Player Mode** - Real-time turn-based gameplay
- **Dice Rolling** - Random 1-6 with smooth animations
- **Current Score Tracking** - Live updates for active player
- **Hold Mechanic** - Bank points before rolling a 1
- **Win Condition** - First to **100 points** wins
- **New Game Reset** - Instant restart functionality
- **Visual Feedback** - Active player highlighting & winner announcement
- **Glass-morphism UI** - Modern gradient design with blur effects

---

## 🛠️ Technologies Used

| Technology      | Purpose                  |
| --------------- | ------------------------ |
| **HTML5**       | Game Structure           |
| **CSS3**        | Glass-morphism Styling   |
| **JavaScript**  | Game Logic & DOM Updates |
| **Nunito Font** | Clean Typography         |

---

## 🎮 How to Play

### **Rules:**

1. **Roll the dice** to add to your **CURRENT** score
2. **Roll a 1** → Lose your **CURRENT** score & switch turns
3. **Hold** → Add **CURRENT** score to your **TOTAL** score
4. **First to 100** → **YOU WIN!** 🎉

### **Controls:**

- **🎲 Roll dice** - Generate random number
- **📥 Hold** - Bank current score
- **🔄 New game** - Reset everything

---

## 📂 Project Structure

```
pig-game/
├── index.html
├── style.css
├── script.js
├── .prettierrc
└── README.md
```

## 🎯 Game Flow Example

```
Player 1 rolls: 4 → Current: 4
Player 1 rolls: 6 → Current: 10
Player 1 HOLDS → Total: 10, Current: 0
Player 2 rolls: 1 → Current: 0, Switch turn!
Player 1 rolls: 3 → Current: 3
...and so on until someone reaches 100!
```

---

## 🎨 Customization Guide

### **Quick Mods:**

1. **Change Win Score**

   ```javascript
   // In script.js
   if (scores[activePlayer] >= 50) // Change 100 to 50
   ```

2. **Update Colors**

   ```css
   /* In style.css */
   body {
     background-image: linear-gradient(to top left, #your-color1, #your-color2);
   }
   ```

3. **Add Dice Images**

   ```
   Upload dice-1.png to dice-6.png
   in project root folder
   ```

4. **Single Player Mode**
   - Replace Player 2 with **Computer AI**
   - Add difficulty levels

---

## 🔧 Code Highlights

### **JavaScript Gems:**

```javascript
// Dynamic player switching
activePlayer = activePlayer === 0 ? 1 : 0;

// Roll logic with 1-check
if (dice !== 1) {
  currentScore += dice;
} else {
  switchPlayer();
}

// Win condition
if (scores[activePlayer] >= 100) {
  playing = false;
}
```

### **CSS Magic:**

```css
.player--active {
  background-color: rgba(255, 255, 255, 0.4);
}
backdrop-filter: blur(200px); /* Glass effect */
```

---

## 📱 Mobile Responsive

✅ **Tested on:**

- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: iOS Safari, Android Chrome
- **Tablets**: iPad, Android tablets

---

## 🏆 Pro Tips

- **Never hold below 10** - Maximize points safely!
- **Roll aggressively early** - Build momentum
- **Hold at 15+ late game** - Secure the win
- **Watch opponent** - Time your holds perfectly

---

## 👨‍💻 Author

**Md. Ualiur Rahman Rahat**  
Full Stack Web Developer (MERN)

- 🌍 [LinkedIn](https://www.linkedin.com/in/ualiurrahat/)
- 💻 [GitHub](https://github.com/ualiurrahat)
- 📧 Email: [ualiurrahat25@gmail.com](mailto:ualiurrahat25@gmail.com)

---

## 📚 Learning Credits

This project was completed as part of the **"The Complete JavaScript Course"** by **[Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/)** on Udemy.

> Massive thanks to Jonas for teaching advanced DOM manipulation, event handling, and clean game architecture! 🎓

---

## ⭐ Show Your Support

If you enjoyed the game:

- ⭐ **Star this repo** on GitHub
- 🎲 **Play & share** with friends
- 🚀 **Fork & improve** - Add AI opponent!
- 💬 **Open issues** with feedback

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🎯 Next Level Features

**Future Enhancements:**

- 🤖 **Computer Player** (Easy/Medium/Hard)
- 📊 **Score History** & Statistics
- 🎵 **Sound Effects** (dice roll, win)
- 🌙 **Dark/Light Mode**
- 📱 **Mobile Swipe Controls**
- 🏆 **Global Leaderboard**

> **Want me to implement any? Just ask!** 🚀

---

> **Made with ❤️ from Bangladesh 🇧🇩**
