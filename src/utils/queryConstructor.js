import * as gql from 'gql-query-builder';

export const queryConstructor = (operation, fields) =>
  gql.query({
    operation: operation,
    fields: fields,
  });
