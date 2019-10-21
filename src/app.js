import express from 'express';
import { router } from "./config/routers/invoice.router";
const app = express();


app.use('/api', router)

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port ${port} 🔥`);
