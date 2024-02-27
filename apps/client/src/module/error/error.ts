import { GraphQLErrors } from '@apollo/client/errors';

export class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: string;

  constructor(name: T, message: string, cause: string) {
    super(message);
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

export type ErrorDomain = 'Validation' | 'Unknown';

export interface ValidationErrorData {
  field: string;
  reason: string;
}

export interface ApplicationError {
  domain: ErrorDomain;
  code: number;
  message: string;
  data: unknown;
}

interface GraphQLExtension {
  errors: ApplicationError[];
}

export function formatGraphQlError(
  errors: GraphQLErrors | undefined
): ApplicationError[] | null {
  if (!errors) {
    return null;
  }

  return errors
    .map((e) => (e.extensions as unknown as GraphQLExtension).errors)
    .reduce((acc, val) => acc.concat(val), []);
}

export function validationErrors(
  errors: (ApplicationError | undefined)[] | null | undefined
): Record<string, string> {
  return (
    errors
      ?.filter((e): e is ApplicationError => e !== undefined)
      .filter((e) => e.domain === 'Validation')
      .map((e) => {
        return e.data as ValidationErrorData;
      })
      .reduce((acc, cur) => {
        return { ...acc, [cur.field]: cur.reason };
      }, {}) ?? {}
  );
}
