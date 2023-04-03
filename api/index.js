const express = require("express");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.listen(port);

const generateCollaboratorsData = () => {
  return {
    items: [
      {
        name: "Helsinki",
        actif: false,
        photoUrL: "https://random.imagecdn.app/500/130",
        id: "hmm_hei",
      },
      {
        name: "MSC Leni",
        actif: false,
        photoUrL: "https://random.imagecdn.app/50/10",
        id: "msc-leni",
      },
      {
        name: "CMA CGM Palais Royal",
        actif: true,
        photoUrL: "https://random.imagecdn.app/50/150",
        id: "cma-cgm-royal",
      },
      {
        name: "Monaco",
        actif: true,
        photoUrL: "https://random.imagecdn.app/11/150",
        id: "monaco-aersk",
      },
      {
        name: "Ever Glory",
        actif: false,
        photoUrL: "https://random.imagecdn.app/60/150",
        id: "ever-glor",
      },
      {
        name: "Helsi",
        actif: false,
        photoUrL: "https://random.imagecdn.app/70/150",
        id: "hmm_helsiki",
      },
      {
        name: "Leni",
        actif: false,
        photoUrL: "https://random.imagecdn.app/80/150",
        id: "msc-li",
      },
      {
        name: "CMA CGM Royal",
        actif: true,
        photoUrL: "https://random.imagecdn.app/4/150",
        id: "cma-cgm-palal",
      },
      {
        name: "Monaco Marsk",
        actif: true,
        photoUrL: "https://random.imagecdn.app/500/150",
        id: "monaco-maer",
      },
      {
        name: "Ever ever ",
        actif: false,
        photoUrL: "https://random.imagecdn.app/120/50",
        id: "ev-glo",
      },
      {
        name: "sdcdecf",
        actif: false,
        photoUrL: "https://random.imagecdn.app/85/150",
        id: "ms",
      },
      {
        name: "Royal sdfe",
        actif: true,
        photoUrL: "https://random.imagecdn.app/43/150",
        id: "cma",
      },
      {
        name: "Morjkazd zedze",
        actif: true,
        photoUrL: "https://random.imagecdn.app/25/50",
        id: "mona",
      },
      {
        name: "Ever ",
        actif: false,
        photoUrL: "https://random.imagecdn.app/200/50",
        id: "ever-glo",
      },
    ],
  };
};

const generateTokensData = () => {
  return {
    items: [
      {
        name: " ✌️ Super Token",
        version: "x499800",
        photoUrL: "https://random.imagecdn.app/199/150",
        id: "hmm_helsin",
      },
      {
        name: "Token DVTM JSON",
        version: "x499800",
        photoUrL: "https://random.imagecdn.app/500/122",
        id: "msc-leni",
      },
      {
        name: "Token 😃",
        version: "x500",
        photoUrL: "https://random.imagecdn.app/500/168",
        id: "cma-cgm-pals",
      },
      {
        name: "Token employé MDTR MDRT 👌",
        version: "x00000",
        photoUrL: "https://random.imagecdn.app/500/1",
        id: "mon-marsk",
      },
      {
        name: "Token ambianceur 👏",
        version: "x412500",
        photoUrL: "https://random.imagecdn.app/500/43",
        id: "ever-ry",
      },
      {
        name: "Super Token 👏",
        version: "x222800",
        photoUrL: "https://random.imagecdn.app/500/42",
        id: "hmm_heiki",
      },
      {
        name: "Token DVTM DVTH JSON",
        version: "x256800",
        photoUrL: "https://random.imagecdn.app/500/41",
        id: "msc-ni",
      },
      {
        name: "Token 😃",
        version: "x50500",
        photoUrL: "https://random.imagecdn.app/125/150",
        id: "cma-cgm-royal",
      },
      {
        name: "Token employé du bord de la mer 👌",
        version: "x0",
        photoUrL: "https://random.imagecdn.app/330/150",
        id: "moaco-ma",
      },
      {
        name: "Token ambianceur amb 👏",
        version: "x412500",
        photoUrL: "https://random.imagecdn.app/220/150",
        id: "evr-g",
      },
      {
        name: "Super Token ever",
        version: "x400800",
        photoUrL: "https://random.imagecdn.app/400/150",
        id: "hmm_hesin",
      },
      {
        name: "Token DVTM ghzevfzej JSON",
        version: "x497700",
        photoUrL: "https://random.imagecdn.app/25/150",
        id: "mszsdef",
      },
      {
        name: "Token even 😃",
        version: "x5000",
        photoUrL: "https://random.imagecdn.app/30/150",
        id: "cma-cgm-royal",
      },
      {
        name: "Token employes bzevfhg 👌",
        version: "x0",
        photoUrL: "https://random.imagecdn.app/20/150",
        id: "monacorsk",
      },
    ],
  };
};

const collaboratorsData = generateCollaboratorsData();
const tokensData = generateTokensData();

app.get("/api/collaborators", (req, res) => {
  res.json(collaboratorsData);
  console.log("Sent collaborators list");
});

app.get("/api/tokens", (req, res) => {
  res.json(tokensData);
  console.log("Sent tokens list");
});

console.log("App is listening on port " + port);
