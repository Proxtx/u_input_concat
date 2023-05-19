import { resolveInput } from "../../public/api.js";
import config from "@proxtx/config";

export const evaluate = async (value) => {
  return (
    (await resolveInput(config.pwd, value.text1)) +
    (await resolveInput(config.pwd, value.text2))
  );
};
