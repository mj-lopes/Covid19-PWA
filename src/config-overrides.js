import { useBabelRc, override } from "customize-cra";
export default override(useBabelRc());

module.exports = function override(config, env) {};
