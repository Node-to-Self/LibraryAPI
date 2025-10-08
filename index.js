import Fastify from 'fastify';
const app = Fastify();
const PORT = 3000;

try {
    await app.listen({ port: PORT });
    console.log(`Listening at http://localhost:${PORT}`);
} catch (err) {
    console.error(err);
    process.exit(1);
}