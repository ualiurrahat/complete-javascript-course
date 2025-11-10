# 🎯 Guess My Number!

A fun and interactive number guessing game built with **HTML**, **CSS**, and **JavaScript**. Players try to guess a secret number between 1 and 20. With each wrong guess, the score decreases — can you guess it before running out of attempts?

## 🚀 Live Demo

👉 [**Play the Game Here**](https://the-number-guessing-game-using-js.netlify.app/)

---

## ✨ Features

- Random secret number generation (1–20)
- Real-time feedback: _"Too High"_, _"Too Low"_, or _"Correct!"_
- Score tracking with decreasing points on wrong guesses
- High score persistence across games
- Responsive and retro-styled UI using **Press Start 2P** font
- "Again!" button to reset and replay instantly
- Clean, modular JavaScript with DRY principles

---

## 🛠️ Technologies Used

| Technology       | Purpose                    |
| ---------------- | -------------------------- |
| **HTML5**        | Structure                  |
| **CSS3**         | Styling & Layout           |
| **JavaScript**   | Game Logic & Interactivity |
| **Google Fonts** | Retro gaming font          |

---

## 🎮 How to Play

1. A secret number is generated between **1 and 20**.
2. Enter your guess in the input field.
3. Click **"Check!"** to submit.
4. Get instant feedback:
   - 🎉 **Correct Number!** → You win!
   - 📈 **Too High!** → Try a lower number
   - 📉 **Too Low!** → Try a higher number
5. Each wrong guess reduces your **score**.
6. Lose if score reaches **0**.
7. Click **"Again!"** to restart with a new number.

> 💡 **Pro Tip**: The high score is saved until you refresh the page!

---

## 📂 Project Structure

```
guess-my-number/
├── index.html
├── style.css
├── script.js
├── .prettierrc
└── README.md
```

---

## 🎨 Customization

Want to make it your own?

- Change the range: Modify `Math.random() * 20 + 1` → e.g., `* 100 + 1` for 1–100
- Update colors in `style.css`
- Adjust fonts or layout in `style.css`
- Add sound effects or animations in `script.js`

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

> A huge thank you to Jonas for teaching modern, clean, and practical JavaScript!

---

## ⭐ Show Your Support

If you like this project:

- ⭐ **Star this repo** on GitHub
- 🔗 Share the live demo with friends
- 🚀 Fork and enhance it!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Made with ❤️ and vanilla JavaScript
