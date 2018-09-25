import {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

/* eslint no-unused-expressions: 0 */

import StoreType from './types/store';
import AddStoreMutation from './mutations/add-store';
import StoreResolver from '../resolvers/store-resolver';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root Query for GraphQL api',
  fields: () => ({
    Store: {
      type: new GraphQLList(StoreType),
      description: 'Store',
      args: {
        id: {
          name: 'id',
          type: GraphQLString,
        },
      },
      resolve: (obj, { id }) => {
        let storeData;
        if (id) {
          storeData = StoreResolver.getById(id);
        } else {
          storeData = StoreResolver.get();
        }
        return storeData;
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    AddStore: AddStoreMutation,
  }),
});

const dmsSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

export default dmsSchema;
