import { ErrorBase } from "./error.ts";

type RouterErrorName = "MISSING_PARAM";

export class RouterError extends ErrorBase<RouterErrorName> {}
