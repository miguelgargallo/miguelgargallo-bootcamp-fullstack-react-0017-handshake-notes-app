import { createRoot } from "react-dom/client";

import App from "./App";

const notes = [
  {
    hash: "3fe07c08c41955f9a88dd2d6c1332d6debfd3ff1f67dec089c00cdfd2e25462b",
    witnessHash:
      "5ece3ae38a5b8276f0e815317a5e644619e0aeb4d92d78826122eeeb0c95109a",
    fee: 0,
    rate: 0,
    mtime: 1655620712,
    height: 125106,
    block: "0000000000000001989b0b84243e619db9b2d639247dc5d40d06cd7a7a51878b",
    time: 1655620728,
    index: 0,
    version: 0
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
    version: 0
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
    version: 0
  }
];

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App notes={notes} />);
