import type { VercelRequest, VercelResponse } from "@vercel/node"

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { code, state } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).send("Missing or invalid code");
    return;
  }

  const redirectUri = `teslapowerwallcontrol://auth?code=${encodeURIComponent(code)}${state && typeof state === "string" ? `&state=${encodeURIComponent(state)}` : ""
    }`;
  res.writeHead(302, { Location: redirectUri });
  res.end();
}