import { createRoot } from "react-dom/client";

import App from "./App";

const notes = [
  {
    outputs: [
      {
        action: "NONE",
        address: "hs1qqzlmrc6phwz2drwshstcr30vuhjacv5z0u2x9l",
        value: 2000043600
      }
    ],
    locktime: 125106,
    hex:
      "00000000010000000000000000000000000000000000000000000000000000000000000000ffffffff96830f9701503e367700000000001400bfb1e341bb84a68dd0bc1781c5ece5e5dc32820000b2e8010003066632706f6f6c08f0ba0ca5abf2f7a8080000000000000000",
    confirmations: 2
  },
  {
    hash: "ab27fcfbd7d4c45c672d24ffc1927b2e662e0a46647b0e4dd19b58eb9628a393",
    witnessHash:
      "917ed62f61c12ce32cf69536d6c0cff976d36f566b0a949bc8e0a6932dd7e2a5",
    fee: 21600,
    rate: 100000,
    mtime: 1655620712,
    height: 125106,
    block: "0000000000000001989b0b84243e619db9b2d639247dc5d40d06cd7a7a51878b",
    time: 1655620728,
    index: 1,
    version: 0,
    inputs: [
      {
        value: 263792254,
        address: "hs1qjlygp9lllnfnmza5tfqpgher85p2ac7rh0tx2e"
      }
    ],
    outputs: [
      {
        action: "BID",
        address: "hs1qujwuj70x89jth0nwj8a8y8dzh6z0f23e3w0zau",
        value: 1000000,
        name: "hoe3",
        nameHash:
          "f57efd8c078f9b12c4f85884563f8aba64bf9b93c0c0d990bcc6060b1a54ce25"
      },
      {
        action: "NONE",
        address: "hs1qgp66uultursgneyrv584nagd3qurdcek26h5px",
        value: 262770654
      }
    ],
    locktime: 0,
    hex:
      "00000000016f2693a1f6b446b5624738e8c463b7b6ae59403b88f988ee335c629f4b985e0a1d000000ffffffff0240420f00000000000014e49dc979e63964bbbe6e91fa721da2be84f4aa39030420f57efd8c078f9b12c4f85884563f8aba64bf9b93c0c0d990bcc6060b1a54ce2504bfe5010004686f653320b85a2fbfaf7a2076c53b3123c91b7a51766158eaaae5afb3a8d53af12c749d27de8fa90f0000000000144075ae73ebe0e089e483650f59f50d883836e336000000000000024135f26bc511099d9ba2ee1e9838b8f5136610d48fa5fa8c459f99cb91753d541008b0f2577a13880114e54ac0fc1117238600e66f749eb8715b1b57eec34836e5012103ebfe1a85177da7464d5d0221b97defc99ba44fc494746a7ceadd94efd0217825",
    confirmations: 2
  },
  {
    hash: "7089db2c96a82f67012f000ffb91af53e09ce648675e3d8d22df16e07c848b6d",
    witnessHash:
      "7072427413fbc98e658faccef5049619bca9c9f55d844297603e7b4986b38f68",
    fee: 22000,
    rate: 100000,
    mtime: 1655620712,
    height: 125106,
    block: "0000000000000001989b0b84243e619db9b2d639247dc5d40d06cd7a7a51878b",
    time: 1655620728,
    index: 2,
    version: 0,
    inputs: [
      {
        value: 30728600,
        address: "hs1qt505c9ka4rlgv2n6ze6xuwz8edt5dl5u7zsyaw"
      }
    ],
    outputs: [
      {
        action: "BID",
        address: "hs1qum5v54gracdjyy89ezwpjhjndj2ev2s7maux8g",
        value: 14724449,
        name: "wordster",
        nameHash:
          "5698d42a88b809da5d9a0cddc1b7b4af11e84c2d0c3d569b7df7b339d98f5cba"
      },
      {
        action: "NONE",
        address: "hs1qca3pg3fgtsxuny6e7s3h6zl03sgd5k5qwezfw0",
        value: 15982151
      }
    ],
    locktime: 0,
    hex:
      "00000000016a0dfe240b93441dead896c823211a35659a7612213aa636d717a09bde2794e401000000ffffffff0261ade000000000000014e6e8ca5503ee1b2210e5c89c195e536c95962a1e0304205698d42a88b809da5d9a0cddc1b7b4af11e84c2d0c3d569b7df7b339d98f5cba04bee5010008776f726473746572203523ebe5787ac4fc81dacc920c6a8bda6c4ee5da1084f11e1d9bc82bdbfb85a147def300000000000014c7621445285c0dc99359f4237d0bef8c10da5a800000000000000241af0b77e5cb6be81767cc6a73e6e6b92bfd06a2d64e2a4d979cc2578483f694237c901f54fc2aebe9407bda4c71c6514934ad30a0edca3d1c5e2f18885cfa4d42012103235588c567c5a5cdf1f6ba7c3cfded8687db9fd6f92218b0f6c7adc0ffa7357e",
    confirmations: 2
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notes={notes} />);
