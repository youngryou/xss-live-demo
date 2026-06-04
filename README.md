# XSS Live Demo

A live demonstration tool built with **Vite** and **React** to explain the mechanics, impacts, and mitigation strategies of **Cross-Site Scripting (XSS)**.

<details>
<summary><b>Repository Link (xss-live-demo)</b></summary>

- [GitHub: youngryou/xss-live-demo](https://github.com/youngryou/xss-live-demo)
</details>

---

## Tech Stack

- **Frontend:** `React (JSX)`, `JavaScript (ES6+)`
- **Build Tool:** `Vite`
- **Environment:** `Node.js`


---

## Getting Started (How to Run Locally)

Follow these steps to run the development server on your local device:

<details>
<summary><b>1. Clone the repository</b></summary>

```bash
git clone <git@github.com:youngryou/xss-live-demo.git>
cd xss-live-demo
```
</details>

<details>
<summary><b>2. Install dependencies</b></summary>

```bash
npm install
```
</details>

<details>
<summary><b>3. Run the development server</b></summary>

```bash
npm run dev
```
Open `http://localhost:5173` (or the port specified in your terminal) in your browser to view the application.
</details>


---

## How to Use

This project combines a presentation with an interactive live demo. Please note the following for the best experience:

- **Full-Screen Recommended:** For an optimal, uncropped view, highly recommend viewing the slides in full-screen mode (press `F11` on Chrome).
- **Intuitive Navigation:** You can navigate through the slides seamlessly using:
  - The `Left` and `Right` arrow keys on your keyboard
  - The top navigation tabs
  - The `Prev` / `Next` buttons at the bottom of the screen
- **Interactive Code Demo:** Feel free to leave comments on the demo slides. You can inject actual XSS payloads rather than just plain text to see the browser's behaviour first-hand.
- **Safe Reset:** Any comments or malicious code you input will not be permanently saved. The data resets completely whenever you switch to another slide or refresh the page.


---

## ⚠️ Disclaimer
This project is built strictly for educational and research purposes. It is illegal and unethical to use these vulnerability testing techniques on unauthorised websites or services.

## Try it Yourself (Test Payloads)
Copy and paste the snippet below into the comment section during the demo to trigger an XSS attack:

`<img src="x" onerror="alert('XSS Attack Successful! Session Hijacked!')">`


---
