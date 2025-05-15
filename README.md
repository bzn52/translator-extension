# 🌍 Instant Page Translator

A simple and lightweight Chrome extension that instantly translates the current web page into your selected language using Google Translate — all in the **same tab**.

---

## 🚀 Features

- 🌐 Translate any website with one click
- 🔤 Choose from popular languages
- 🧭 Translates in-place (no new tabs)
- 🧩 Easy to install, no API key needed

---

## 🧰 How It Works

When you click **"Translate Now"**, the extension:

1. Gets the current page URL.
2. Redirects the tab through Google Translate.
3. The translated page is loaded in the same tab.

---

## 📦 Installation (Manual)

You can use this extension locally without publishing:

1. **Clone or download** this repo.
2. Open Chrome and go to: `chrome://extensions`
3. Enable **Developer Mode** (top right).
4. Click **“Load unpacked”**.
5. Select the extension folder (where `manifest.json` is).

✅ Done! The extension is now installed.

---

## 🌍 Supported Languages

- English (`en`)
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Hindi (`hi`)
- Chinese (`zh-CN`)
- Arabic (`ar`)
- Russian (`ru`)
- Japanese (`ja`)

---

## 📁 Project Structure

`instant-page-translator/
├── manifest.json
├── popup.html
├── popup.js
├── background.js (optional)
├── icons/
│ └── icon.png
├── README.md`
└── LICENSE
`

---

## 📝 License

MIT License — free to use, modify, and share.

---

## 🤝 Contribute

Pull requests are welcome! If you’d like to add features or fix bugs, feel free to fork and contribute.

---

## 🔒 Disclaimer

This extension uses Google Translate by redirecting to `https://translate.google.com`. It does not inject or modify site content and does not use any translation APIs directly.
