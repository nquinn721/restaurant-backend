<template lang="pug">
v-alert.failed-alert-box(transition="scale-transition" type="error" v-if="store.fetchFailed" )  
  v-row.justify-space-between.px-4(align='center')
    span {{store.defaultFetDataFailedMessage || message}} 
    v-btn(small color="red lighten-1" @click="click || store.refreshData()" :loading="store.fetchingData")
      | Retry 
      v-icon.pl-2(size='10') fas fa-redo
</template>
<script>
export default {
  props: ["message", "store", "click"]
};
</script>
