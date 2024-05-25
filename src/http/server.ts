import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return { hello: "word!" };
});

app.listen(
  {
    port: 3333,
    host: "0.0.0.0",
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log("Server running! 🚀");
  }
);
