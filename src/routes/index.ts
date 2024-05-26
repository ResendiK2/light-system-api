import { FastifyInstance } from "fastify";
import { InvoiceRoutes } from "./InvoiceRoutes";

export const Routes = async (fastify: FastifyInstance) => {
  await InvoiceRoutes(fastify);
};
