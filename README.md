# Zentro

<div align="center">

[Zentro Image](https://github.com/user-attachments/assets/33ee7c38-9c41-432c-826a-a294a7e2fd1c)

</div>

## 🎥 Demo

[Zentro Video Demo](https://github.com/user-attachments/assets/fafee7a1-da43-47ae-a7a4-3c25a6100ee1)

## 🚀 About

Zentro is a peer-to-peer video conferencing platform designed for seamless, low-latency 1-to-1 calls. It leverages WebRTC (via PeerJS) for direct media streaming and Socket.IO for real-time signaling. The UI is built with React and styled using Tailwind CSS for a clean, modern look.

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![PeerJS](https://img.shields.io/badge/PeerJS-2C2C2C?logo=webrtc&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-000?logo=lucide&logoColor=white)
![Lodash](https://img.shields.io/badge/Lodash-3492FF?logo=lodash&logoColor=white)
![UUID](https://img.shields.io/badge/UUID-0064fa?logo=uuid&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?logo=webrtc&logoColor=white)

</div>

## ✨ Features

- 🔗 **Room-based video calls**: Join or create rooms with unique IDs
- 🎥 **Peer-to-peer video & audio**: Direct, low-latency connections
- 🔊 **Mute/unmute & video toggle**: Control your stream in real time
- 👤 **Dynamic player layout**: Highlight speakers, responsive grid
- 📱 **Mobile-friendly UI**: Fully responsive design
- ⚡ **Fast, modern UI**: Built with Tailwind CSS
- 🔒 **(Planned)** Authentication
- 💬 **(Planned)** In-room chat
- 🧭 **(Planned)** "Take a Tour" onboarding

## 🧩 How It Works

- **Signaling:** Socket.IO is used to exchange signaling data (room join, user connect/disconnect, stream toggles).
- **Media:** PeerJS establishes direct WebRTC connections for video/audio streams between users.
- **UI:** React manages state for users, streams, and controls. Tailwind CSS provides utility-first styling.


## 📂 Project Structure

- `pages/` — Next.js pages (routing, API endpoints)
- `components/` — UI components (Player, Bottom controls, UI primitives)
- `hooks/` — Custom React hooks (media, peer, player state)
- `context/` — Socket context provider
- `styles/` — Tailwind and global styles

## 🧠 Algorithm & Architecture

- **Peer Discovery:**
  - On joining a room, each client generates a unique PeerJS ID and notifies the server via Socket.IO.
  - The server broadcasts new user events to all room members.
- **WebRTC Connection:**
  - Each client establishes direct WebRTC connections with new peers using PeerJS, exchanging streams.
- **State Management:**
  - React hooks manage local and remote streams, player states, and UI controls.
- **UI Responsiveness:**
  - Tailwind utility classes ensure a responsive, accessible layout for all devices.

