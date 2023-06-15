import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin((nuxtApp) => {
  // create anon client
  const config = useRuntimeConfig();
  const url = config.SUPABASE_URL;
  const key = config.SUPABASE_KEY;
  const client = createClient(url, key);
  // console.log('this is the plugin speaking, client created', client);
  nuxtApp.provide('supabase', client);
});
