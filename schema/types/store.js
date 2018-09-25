import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLList
  } from 'graphql';
  
  import GraphQLDate from 'graphql-date';
  
  export default new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'ID of store',
      },
      StoreURI: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'URI of store',
      },
      Name: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'Name of store',
      },
      Geocode: {
        type: GraphQLString,
        description: 'Geocode of store',
      },
      Address: {
        type: new GraphQLNonNull(GraphQLString), //address non nullable, need to have an address?
        description: 'Address of store',
      },
      Types: {
        type: new GraphQLNonNull(GraphQLString), //plural on purpose, do we need multiple?
        description: 'Type of store',
      },
      Items: {
        type: new GraphQLList(GraphQLString),
        description: 'Date document was last updated',
      },
    }),
  });
  