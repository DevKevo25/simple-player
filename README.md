# Simple Player 🎵

![Simple Player interface showing audio controls and emoji reactions](link-to-screenshot-if-you-have-one)

**Simple Player** is a lightweight, browser-based music player built as a Progressive Web App (PWA). Its core function is simple: users upload their audio files and play them instantly in a clean, emoji-themed interface. It also offers an installable APK for Android devices, created through its PWA functionality.

You can try the live demo here: **[simple-player-liart.vercel.app](https://simple-player-liart.vercel.app/)**

## ✨ Features

*   **Local Audio Playback:** Upload your audio files directly from your device. All playback happens locally in your browser—no servers, no tracking.
*   **Simple & Clean Interface:** Focus on your music with a minimalist design that uses emojis for a fun, expressive touch.
*   **Core Player Controls:** Standard play/pause and a time tracker (displayed as `00:00 00:00`) to control your listening.
*   **Progressive Web App (PWA):** Enjoy an app-like experience. The website can be installed on your device for quick access.
*   **Android APK Download:** A pop-up prompts Android users to download an APK, allowing the player to function as a standalone app, built directly from the PWA.

## 🛠️ Built With

*   **HTML5:** For the basic structure and the audio element.
*   **CSS3:** For styling the clean, emoji-based user interface.
*   **JavaScript (ES6+):** For all the logic—handling file uploads, controlling audio playback, managing the PWA installation prompt, and updating the UI.
*   **Progressive Web App (PWA):** Uses a service worker and a web app manifest to enable offline capabilities and installation on devices.

## 🚀 How to Use

1.  **Open the App:** Navigate to [simple-player-liart.vercel.app](https://simple-player-liart.vercel.app/) in your web browser.
2.  **Upload Audio:** Click the **"upload"** button located at the bottom of the page.
3.  **Select Files:** Choose one or more audio files from your device (like MP3s).
4.  **Play Music:** Use the on-screen controls to play, pause, and see the current playback time.
5.  **Install (Optional):**
    *   **On Desktop/Android:** Look for an "install" icon in your browser's address bar (or follow your browser's PWA install prompt) to add Simple Player to your home screen.
    *   **On Android (APK):** When you visit the site, look for the pop-up prompt to download the APK file for direct installation.

## 🚀 Local Development / Running Locally

To run this project on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DevKevo25/simple-player.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd simple-player
    ```
3.  Since this is a simple HTML, CSS, and JavaScript project with no build step, you can simply open the `index.html` file in your browser. For the best experience (and to test service workers), you might want to use a local development server like **Live Server** in VS Code.

## 🙌 Acknowledgments

*   Inspired by the idea of making a dead-simple, client-side only music player.
*   Built with the power of modern web standards (PWA).
