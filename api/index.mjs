import app from "../dist/server/index.js";

export default async function handler(req, res) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const url = `${protocol}://${req.headers.host}${req.url}`;
  const hasBody = !["GET", "HEAD"].includes(req.method || "GET");
  const request = new Request(url, {
    method: req.method,
    headers: new Headers(req.headers),
    body: hasBody ? req : undefined,
    duplex: hasBody ? "half" : undefined,
  });

  const response = await app.fetch(request, {});
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  res.end(Buffer.from(await response.arrayBuffer()));
}
