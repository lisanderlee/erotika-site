import create from 'zustand';

const useStore = create(set => ({
  selected: null,
  setSelected: (value) => set({ selected: value })
}));

export default useStore;