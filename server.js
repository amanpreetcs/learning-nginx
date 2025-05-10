import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3005;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "web")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "web/index.html"));
});

app.get("/:page", (req, res) => {
  const page = req.params.page?.split(".")?.[0];
  console.log({ page });
  if (page) return res.sendFile(path.join(__dirname, `web/${page}.html`));
  else return res.send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(port, () => {
  console.log(`App started listening on ${port}`);
});
