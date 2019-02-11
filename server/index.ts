require("dotenv").config();

const { Nuxt, Builder } = require("nuxt");
const express = require("express");

const app = express();

const isProd = process.env.NODE_ENV === "production";
const PORT = 3000;
const nuxt = new Nuxt({
  dev: !isProd
});

if (!isProd) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

app.listen(PORT, () => console.log(`Nuxt.js application started on port: ${PORT}.`));
