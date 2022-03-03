import * as db from "../../../db/models";
import { Identifier } from "sequelize/dist";

const blogResolver = {
  blogs: async () => {
    return await db.Blog.findAll({
      attributes: ["id", "title", "content", "slug", "images"],
    });
  },
  getBlogBySlug: async (args: { slug: Identifier | undefined }, req: any) => {
    return await db.Blog.findOne({where: {slug: req.slug}}); 
  },
};
export default blogResolver;
