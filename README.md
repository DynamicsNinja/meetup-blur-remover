# Meetup Blur Remover Chrome Extension

A lightweight Chrome extension that automatically removes blur effects
from Meetup pages.

## ✨ Features

-   Removes `blur-sm` and `blur-[6px]` classes
-   Works on:
    -   `<span>`
    -   `<div>`
    -   `<img>`
-   Runs automatically on every Meetup page load
-   Handles dynamic content (SPA navigation, lazy loading)

------------------------------------------------------------------------

## 🚀 Installation (Manual)

Since this extension is not published on the Chrome Web Store, you can
install it manually:

1.  Clone or download this repository:

    ``` bash
    git clone https://github.com/DynamicsNinja/meetup-blur-remover.git
    ```

2.  Open Chrome and go to:
    ```
    chrome://extensions/
    ```

4.  Enable **Developer mode** (top right)

5.  Click **Load unpacked**

6.  Select the project folder

Done! The extension will now run automatically on:
https://www.meetup.com/\*

------------------------------------------------------------------------

## 📂 Project Structure

    meetup-blur-remover/
    │
    ├── manifest.json
    ├── content.js
    └── README.md

------------------------------------------------------------------------

## ⚙️ How It Works

The extension injects a content script into Meetup pages that:

1.  Finds elements with blur classes:

    -   `blur-sm`
    -   `blur-[6px]`

2.  Removes them using: document.querySelectorAll( "span.blur-sm,
    div.blur-sm, img.blur-\\\[6px\\\], div.blur-\\\[6px\\\]" )

3.  Uses a MutationObserver to handle dynamically loaded content

------------------------------------------------------------------------

## ⚠️ Disclaimer

-   This extension modifies the appearance of Meetup pages only.
-   It does not interact with APIs, authentication, or private data.
-   Use at your own discretion.
