import { FastifyInstance } from "fastify";
import * as Controllers from "../controllers";

export const InvoiceRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/invoices", Controllers.UploadInvoice);
  fastify.get("/invoices", Controllers.GetInvoices);
};
