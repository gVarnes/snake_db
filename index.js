import sequelize from "./db";
import Fastify from "fastify";
import { Player } from "./models/models";
import dotenv from "dotenv";

const fastify = Fastify({
  logger: true,
});

dotenv.config();

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

  const player = await Player.create({ name, score });
  return reply.send({
    message: `Player ${name} was successfully saved with ${score}`,
  });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await fastify.listen({ port: 3001 });
  } catch (error) {
    console.log(error);
  }
};

start();
