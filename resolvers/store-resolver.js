import Store from '../models/store.model';

/* eslint no-unused-expressions: 0 */

const StoreResolver = {
  create: (store) => {
    const newStore = new Store(store);
    return new Promise((resolve, reject) => {
      newStore.save((error, createdStore) => {
        if (error) reject(error);
        else resolve(createdStore);
      });
    });
  },
  getById: id => new Promise((resolve, reject) => {
    Store.findById(id, (error, store) => {
      error ? reject(error) : resolve([store]);
    });
  }),
  get: () => new Promise((resolve, reject) => {
    Store.find({}, (error, store) => {
      error ? reject(error) : resolve(store);
    });
  }),
};

export default StoreResolver;
