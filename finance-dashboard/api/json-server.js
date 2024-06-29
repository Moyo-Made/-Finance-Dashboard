// api/json-server.js
import { createServer } from "http";
import { parse } from "url";
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = (req, res) => {
	const parsedUrl = parse(req.url, true);
	server.handle(req, res, parsedUrl);
};

export default handler;
