# generate-eth-wallet

![GitHub last commit](https://img.shields.io/github/last-commit/m4rkos/generate-eth-wallet?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/m4rkos/generate-eth-wallet?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/m4rkos/generate-eth-wallet?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/m4rkos/generate-eth-wallet?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📦 What is this?

`generate-eth-wallet` is a simple **TypeScript utility** to generate Ethereum wallet credentials:

- Ethereum **address**  
- Private key  
- Mnemonic phrase (seed words)

Perfect for testing, development, or learning how Ethereum wallets work.  

---

## ✨ Features

✅ Generate 12 or 24-word mnemonic  
✅ Derive private key & public address  
✅ Built in **TypeScript**  
✅ Minimal dependencies  
✅ Easy to integrate into any project  

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)  
- npm or yarn  

### Installation

```bash
# Clone this repo
git clone https://github.com/m4rkos/generate-eth-wallet.git

# Enter directory
cd generate-eth-wallet

# Install dependencies
npm install
```

---

## 🧪 Usage

```ts
import { generateWallet } from './src/index';

// Generate a wallet
const wallet = generateWallet({
  mnemonicWords: 12,   // or 24
});

console.log('Address:', wallet.address);
console.log('Private Key:', wallet.privateKey);
console.log('Mnemonic:', wallet.mnemonic);
```

### Example Output
```text
Address: 0xAbCdEf0123456789abcdef0123456789ABCDEF01
Private Key: 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
Mnemonic: pumpkin roast over busy zoo candy jump dash rigid slight tilt face
```

---

## ⚙ Options

| Option          | Type   | Default | Description                         |
|-----------------|--------|---------|-------------------------------------|
| `mnemonicWords` | number | `12`    | Number of mnemonic words (12 or 24) |

---

## 📁 Project Structure

```
generate-eth-wallet/
├─ src/
│  └─ index.ts        # Core logic for generating wallet
├─ package.json        # Project metadata, scripts, deps
├─ tsconfig.json       # TypeScript config
└─ README.md           # This file
```

---

## 🛣️ Roadmap

- [ ] CLI support (`npx generate-eth-wallet`)  
- [ ] Configurable derivation path  
- [ ] Export wallet in JSON keystore format  
- [ ] Add unit tests  

---

## 🚨 Security Notice

⚠️ **Do not use this tool for production wallets or real funds.**  
It is intended for **educational and development purposes only**.  
Keep your private keys and mnemonics safe and never expose them publicly.  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  

---

## 🌍 Contact

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/m4rkos)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/marcos-eduardo-81687b45)  
