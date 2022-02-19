
import * as db from "#root/db/models";

const createSubscriberResolver =  (context: any, { email }: { email: string }) => {
  return db.Subscriber.create({ email });
}
export default createSubscriberResolver;