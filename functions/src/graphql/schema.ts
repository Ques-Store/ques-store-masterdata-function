import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  scalar JSON

  type MasterData {
    data: JSON
  }

  type Query {
    masterData: MasterData
  }
`);
