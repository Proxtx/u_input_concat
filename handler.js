import { input } from "../../public/meta.js";

export const evaluate = async (value) => {
  return (
    (await input.resolveArgument(value.pwd, value.text1)) +
    (await input.resolveArgument(value.pwd, value.text2))
  );
};
