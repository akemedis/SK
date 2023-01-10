<template>
  <div>
    <customNav />
    <slot />
  </div>
</template>

<script setup>
// creating anon user
import { createClient } from '@supabase/supabase-js';
const config = useRuntimeConfig();
const url = config.SUPABASE_URL;
const key = config.SUPABASE_KEY;
const supabase = createClient(url, key);
</script>

<style></style>
