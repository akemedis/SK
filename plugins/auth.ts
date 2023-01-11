import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const url = config.SUPABASE_URL;
  const key = config.SUPABASE_KEY;
  const client = createClient(url, key);
  console.log('client created', client);
  inject('supabase', client);
});
