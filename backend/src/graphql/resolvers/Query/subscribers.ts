import * as db from "../../../db/models";
import { Identifier } from "sequelize/dist";

const subscriberResolver = {
  subscribers: async () => {
    return await db.Subscriber.findAll({
      attributes: ["id", "email"],
    });
  },
  getSubscriber: async (args: { id: Identifier | undefined }, req: any) => {
    return await db.Subscriber.findByPk(req.id);
  },
};
export default subscriberResolver;
