import { input } from "../../public/meta.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  return (
    (await input.resolveArgument(config.pwd, value.text1)) +
    (await input.resolveArgument(config.pwd, value.text2))
  );
};
