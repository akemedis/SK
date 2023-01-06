<template>
  <div></div>
</template>

<script setup>
const user = useSupabaseUser();

if (user.value) {
  console.log(user);
} else {
  console.log('not logged in');
}

</script>

<style></style>
