import sequelize from "./db";
import Fastify from "fastify";
import { Player } from "./models/models";
import dotenv from "dotenv";
dotenv.config();

const REMOVE_HOST = process.env.NODE_ENV ? "0.0.0.0" : "127.0.0.1";

const fastify = Fastify({
  logger: true,
});

fastify.register(import("@fastify/cors"));

fastify.get("/player", async (request, reply) => {
  //find all and sort by score
  const players = await Player.findAll({
    order: [["score", "DESC"]],
  });
  return reply.send(players);
});

fastify.post("/player", async (request, reply) => {
  const { name, score } = request.body;

  await Player.create({ name, score });
  return reply.send({
    message: `Player ${name} was successfully saved with ${score}`,
  });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await fastify.listen({ port: 3001, host: REMOVE_HOST });
  } catch (error) {
    console.log(error);
  }
};

start();
