<template lang="pug">
v-alert(transition="slide-x-transition" type="success" v-if="store.saveSuccess" )  
  v-row.justify-space-between.px-4(align='center')
    span {{store.defaultSavedSuccessMessage || message}} 
</template>
<script>
export default {
  props: ["message", "store"]
};
</script>
