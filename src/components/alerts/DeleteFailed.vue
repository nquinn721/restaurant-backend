<template lang="pug">
v-alert(transition="slide-x-transition" type="error" v-if="store.deleteFailed" )  
  v-row.justify-space-between.px-4(align='center')
    span {{store.deleteFailedMessage}}
</template>
<script>
export default {
  props: ["message", "store"]
};
</script>
