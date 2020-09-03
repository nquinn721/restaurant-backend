<template lang="pug">
v-alert(transition="slide-x-transition" type="success" v-if="store.deleteSuccess" )  
  v-row.justify-space-between.px-4(align='center')
    span Delete record
</template>
<script>
export default {
  props: ["message", "store"]
};
</script>
