import * as db from "#root/db/models";
import { Identifier } from "sequelize/dist";

const blogResolver = {
  blogs: async () => {
    return await db.Blog.findAll({
      attributes: ["id", "title"],
    });
  },
  getBlogBySlug: async (args: { slug: Identifier | undefined }, req: any) => {
    return await db.Blog.findOne(req.slug);
  },
};
export default blogResolver;
