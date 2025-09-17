🎵 Media Machine - 3D iPod Music Player

<div style="width:260px;max-width:100%;"><div style="height:0;padding-bottom:52.69%;position:relative;"><iframe width="260" height="137" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/a6d5mc"></iframe></div><p><a href="https://imgflip.com/gif/a6d5mc">via Imgflip</a></p></div>

Media Machine is a unique, cross-platform desktop music player built with Electron. It reimagines the music listening experience by ditching traditional HTML/CSS interfaces in favor of a fully interactive, high-fidelity 3D model of a classic iPod, rendered entirely with three.js.

This project combines the power of desktop applications with the creative potential of WebGL to create a nostalgic yet modern media player.

✨ Key Features
Interactive 3D Interface: Navigate a detailed iPod model with your mouse. All UI elements—from the screen to the buttons—are clickable 3D objects.

Local Music Library: Add music directly from your local folders. The application parses your files and displays them in a scrollable list on the 3D screen.

Real-time Audio Visualization: The iPod's screen and controls come to life with a real-time visualizer that pulses and glows in sync with the currently playing audio, powered by the Web Audio API.

Full Playback Controls: Enjoy complete control over your music with interactive 3D elements for play, pause, skip, repeat, a draggable progress bar, and a vertical volume slider.

Photo Viewer: In addition to music, you can load and view image folders within the "Photos" section of the iPod.

Keyboard & Mouse Navigation: Interact naturally using your mouse to click on controls or your keyboard's arrow keys to navigate lists and menus.

🚀 Technologies Used
Framework: Electron.js

3D Rendering: three.js (WebGL)

Audio Processing: Web Audio API

Language: JavaScript (ES6 Modules)

Runtime: Node.js

🛠️ Setup and Installation
To get Media Machine running on your local machine, follow these steps:

Clone the repository:

Bash

git clone https://github.com/your-username/media-machine.git
Navigate to the project directory:

Bash

cd media-machine
Install dependencies:

Bash

npm install
Run the application:

Bash

npm start
🖥️ How to Use
Once the application is running, the 3D iPod will appear on your screen.

Navigate to the Music menu item and click it.

Click the + Add Folder button in the sidebar grid.

Select a folder containing your audio files (.mp3, .wav, etc.).

Your folders will appear in the sidebar. Click a folder to view its songs.

Click any song title to begin playback. Use the 3D controls at the bottom of the screen to manage your music.

Command Line Alias (Optional)
You can also run the application from anywhere in your terminal using the mm command.

Make the CLI script executable:

Bash

chmod +x cli.js
Link the package globally:

Bash

sudo npm link
Run with the alias:

Bash

mm
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
