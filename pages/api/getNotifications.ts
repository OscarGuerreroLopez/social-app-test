import type { NextApiRequest, NextApiResponse } from "next";
import {
  AggregateNotifications,
  Notification as NotificationType
} from "@/utils/aggregateNotifications";
import notificationsData from "@/data/notifications-feed.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const data = AggregateNotifications(
      notificationsData as NotificationType[]
    );

    return res.status(200).send(data);
  }
  return res.status(400).send("invalid method");
}
