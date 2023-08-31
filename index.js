import express from "express";

const app = express();
app.use(express.json());

const PORT = 8001;

let getUser = "";

app.get("/", (req, res) =>  {
    res.status(200).json({Message: "Bienvenido a la ruta GET"});
});

app.get("/users", (req, res) => {
    res.status(200).json(getUser);
});

app.post("/users", (req, res) => {
    const { body } = req;
    getUser = body;
    res.status(201).json({Message: "Usuario creado", Info: body});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});