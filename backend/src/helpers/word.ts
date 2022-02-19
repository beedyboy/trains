import slugify from "slugify";

const word = {
  slug: (data:any) => {
    return slugify(data, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
  },
};
export default word;