import * as db from "#root/db/models";
import word from "#root/helpers/word";

const blog = {
  newBlog: async (title: string, content: string) => {
    const slug = await word.slug(title);
    return await db.Blog.create({ title, content, slug });
  },
};
export default blog;
