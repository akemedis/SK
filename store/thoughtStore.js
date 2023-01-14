import { defineStore } from 'pinia';
export const useThoughtStore = defineStore('thought', () => {
  const thoughts = ref(Array);
  return {
    thoughts,
  };
});
