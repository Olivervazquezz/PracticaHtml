import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

// Para obtener la ruta actual (porque usaste "type": "module" en package.json)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta donde están tus archivos HTML
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});