import fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";

import * as dotenv from "dotenv";
import { Routes } from "../routes";
import { ERROR500 } from "../helpers/constants";

dotenv.config();

const app = fastify({ logger: true });

app.setErrorHandler((error, _, reply) => {
  reply.status(ERROR500.statusCode).send(ERROR500);
});

const start = async () => {
  try {
    await app.register(cors);
    await app.register(multipart);

    await Routes(app);

    const port = Number(process.env.PORT) || 3333;
    const host = process.env.HOST || "0.0.0.0";

    await app.listen({ port, host });

    console.log("Server running! 🚀");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
