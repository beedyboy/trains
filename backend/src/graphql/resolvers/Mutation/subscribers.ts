
import * as db from "../../../db/models";

const createSubscriberResolver =  async(context: any, { email }: { email: string }) => {
 const existingUser = await db.Subscriber.findOne({where: {email}});
  if (existingUser) {
    throw new Error("User exists already.");
  }

  return db.Subscriber.create({ email });
}
export default createSubscriberResolver;