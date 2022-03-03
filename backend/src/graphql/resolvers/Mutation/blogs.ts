import * as db from "../../../db/models";
import * as path from "path";
import * as fs from "fs";
import word from "../../../helpers/word";

interface IFile {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream(): string;
  url: string;
}

const blog = {
  newBlog: async ( parent: any,{ data }: { data: any }) => {
    // newBlog: async (
    //   parent: any,
    //   { title, content, file }: { title: string; content: string; file: File }
    // ) => {
      const { title, content, file } = data;
      // console.log({ content });
      console.log({ file });
      const slug = await word.slug(title); 
      const images = await blog.storeFS(file); 
    return await db.Blog.create({ title, content, slug, images });
  },
  storeFS: async (file: any) => {
    const uploadDir = "../../../upload/";
    var promise = new Promise((resolve, reject) => {
      resolve(file);
    });
    return promise.then(async (data) => {
      const { createReadStream, filename, mimetype, encoding }: any = data;
      const stream = createReadStream();
      const assetUniqName = await word.fileRenamer(filename);
      const pathName = path.join(__dirname, `${uploadDir}${assetUniqName}`);
      await stream.pipe(fs.createWriteStream(pathName));
      console.log({ assetUniqName });
      return assetUniqName;
    });
  }, 
  singleUpload: async (parent: any, { file }: { file: IFile }): Promise<any> => {
    const pathName = await blog.storeFS(file);
    return {
      url: `http://localhost:8080/${pathName}`,
    };
  },
  multipleUploadFile: async (arg: any) => {
    let obj = (await Promise.all(arg.files)).map(async (file) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const out = fs.createWriteStream(
        path.join(__dirname, `/upload/${filename}`)
      );
      await stream.pipe(out);
      return {
        url: `http://localhost:8080/${filename}`,
      };
    });
    return obj;
  },
};
export default blog;

/* 
{"query":"mutation newBlog($title: String!, $content: String!,$file:Upload!) 
 {\n  newBlog(title: $title, content:$content,file: $file){content}\n}",
  "variables":{"title": "first post", "content":"this is my first post", "file": null}}


  {"query":"mutation newBlog($data: BlogInput!)  {  newBlog(data: $data){title content}}", "variables":{"data":{"title": "first post", "content":"this is my first post", "file": null}}}

  */
