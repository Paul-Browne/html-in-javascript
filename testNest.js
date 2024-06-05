import htjs from "html-in-javascript"

import fullViewportHero from "./extended/fullViewportHero/index.js";

const { fragment } = htjs;

export default () => fragment(
    fullViewportHero({}, "hello Test NEST!!! screen!!"),
    fullViewportHero({}, "hello Test NEST!!! 2!!"),
    fullViewportHero({}, "hello Test NEST!!! 3!!"),
)