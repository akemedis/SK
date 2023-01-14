import { useDatabase } from '@/composables/useDatabase';
import { useThoughtStore } from '@/store/thoughtStore';
export default defineNuxtRouteMiddleware(async (to) => {
  const { retrieve_thought_tag } = useDatabase();
  const thoughtStore = useThoughtStore();
  const { $supabase } = useNuxtApp();
  // retrieving thoughts
  retrieve_thought_tag($supabase).then((value) => {
    thoughtStore.thoughts.value = value;
    return;
  }); // so fuckign stupid
});
