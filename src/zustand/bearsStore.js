import { create } from 'zustand';

const useBearStore = create(set => ({
  bears: 0,
  increase: () => {
    set(state => {
      return { bears: state.bears + 1 };
    });
  },
  init: () => {
    set({ bears: 0 });
  },
}));

export default useBearStore;
