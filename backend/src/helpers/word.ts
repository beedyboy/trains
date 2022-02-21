import slugify from "slugify";

const word = {
  slug: (data:any): any => {
    return slugify(data, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
  },
  fileRenamer: (filename: string): string => {
    const queHoraEs = Date.now();
    const regex = /[\s_-]/gi;
    const fileTemp = filename.replace(regex, ".");
    let arrTemp = [fileTemp.split(".")];
    return `${arrTemp[0]
      // .slice(0, arrTemp[0].length - 1)
      .join("_")}${queHoraEs}.${arrTemp[0].pop()}`;
  },
};
export default word;