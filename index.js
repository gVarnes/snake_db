import sequelize from "./db";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

//plugin that gives to client files from public folder via filename

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
