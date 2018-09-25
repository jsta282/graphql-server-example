import {
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLNonNull,
  } from 'graphql';
  
  import StoreType from '../types/store';
  import StoreResolver from '../../resolvers/store-resolver';
  
  const StoreInputType = new GraphQLInputObjectType({
    name: 'StoreInput',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLString) },
      StoreURI: { type: new GraphQLNonNull(GraphQLString) },
      Name: { type: new GraphQLNonNull(GraphQLString) },
      Geocode: { type: GraphQLString },
      Address: { type: new GraphQLNonNull(GraphQLString) },
      Types: { type: new GraphQLNonNull(GraphQLString) },
      Items: { type: GraphQLString },
    }),
  });
  
  export default {
    type: StoreType,
    args: {
      input: { type: new GraphQLNonNull(StoreInputType) },
    },
    resolve(obj, { input }) {
      return StoreResolver.create(input);
    },
  };
  