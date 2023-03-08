import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "POST") {
    // just a fake to simulate a login process
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 200);
    });

    return res.status(200).json({ token: "tokenHere" });
  }
  return res.status(400).send("invalid method");
}
