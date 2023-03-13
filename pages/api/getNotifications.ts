import type { NextApiRequest, NextApiResponse } from "next";
import { AggregateNotifications } from "@/utils/aggregateNotifications";
import { Notification as NotificationType } from "@/models";
import notificationsData from "@/data/notifications-feed.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    // just a fake to simulate a login process
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 3000);
    });
    const data = AggregateNotifications(
      notificationsData as NotificationType[]
    );

    return res.status(200).send(data);
  }
  return res.status(400).send("invalid method");
}
