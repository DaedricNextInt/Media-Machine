Of course. Here is the README section from the previous response, formatted in Markdown.

-----

# 🎵 Media Machine - 3D iPod Music Player

!(https://imgflip.com/gif/a6d5mc)
**Media Machine** is a unique, cross-platform desktop music player built with Electron. It reimagines the music listening experience by ditching traditional HTML/CSS interfaces in favor of a fully interactive, high-fidelity 3D model of a classic iPod, rendered entirely with `three.js`.

This project combines the power of desktop applications with the creative potential of WebGL to create a nostalgic yet modern media player.

\!([https://via.placeholder.com/600x400.png?text=Media+Machine+UI](https://www.google.com/search?q=https://via.placeholder.com/600x400.png%3Ftext%3DMedia%2BMachine%2BUI))

> **Note:** It is highly recommended to replace the placeholder above with a high-quality screenshot or GIF of your application in action.

-----

## ✨ Key Features

  * **Interactive 3D Interface**: Navigate a detailed iPod model with your mouse. All UI elements—from the screen to the buttons—are clickable 3D objects.
  * **Local Music Library**: Add music directly from your local folders. The application parses your files and displays them in a scrollable list on the 3D screen.
  * **Real-time Audio Visualization**: The iPod's screen and controls come to life with a real-time visualizer that pulses and glows in sync with the currently playing audio, powered by the Web Audio API.
  * **Full Playback Controls**: Enjoy complete control over your music with interactive 3D elements for play, pause, skip, repeat, a draggable progress bar, and a vertical volume slider.
  * **Photo Viewer**: In addition to music, you can load and view image folders within the "Photos" section of the iPod.
  * **Keyboard & Mouse Navigation**: Interact naturally using your mouse to click on controls or your keyboard's arrow keys to navigate lists and menus.

-----

## 🚀 Technologies Used

  * **Framework**: **Electron.js**
  * **3D Rendering**: **`three.js`** (WebGL)
  * **Audio Processing**: **Web Audio API**
  * **Language**: **JavaScript** (ES6 Modules)
  * **Runtime**: **Node.js**

-----

## 🛠️ Setup and Installation

To get Media Machine running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/media-machine.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd media-machine
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm start
    ```

-----

## 🖥️ How to Use

1.  Once the application is running, the 3D iPod will appear on your screen.
2.  Navigate to the **Music** menu item and click it.
3.  Click the **+ Add Folder** button in the sidebar grid.
4.  Select a folder containing your audio files (`.mp3`, `.wav`, etc.).
5.  Your folders will appear in the sidebar. Click a folder to view its songs.
6.  Click any song title to begin playback. Use the 3D controls at the bottom of the screen to manage your music.

### Command Line Alias (Optional)

You can also run the application from anywhere in your terminal using the `mm` command.

1.  **Make the CLI script executable:**
    ```bash
    chmod +x cli.js
    ```
2.  **Link the package globally:**
    ```bash
    sudo npm link
    ```
3.  **Run with the alias:**
    ```bash
    mm
    ```

-----

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
