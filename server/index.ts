require("dotenv").config();

const { Nuxt, Builder } = require("nuxt");
const express = require("express");

const app = express();

const isProd = process.env.NODE_ENV === "production";
const nuxt = new Nuxt({ dev: !isProd });

if (!isProd) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

app.listen(3000, () => console.log("started"));
