<template lang="pug">
v-alert(transition="slide-x-transition" type="error" v-if="store.saveFailed" )  
  v-row.justify-space-between.px-4(align='center')
    span {{store.defaultSavedSuccessMessage || message}}
    //- v-spacer
    //- v-btn(small color="red lighten-1" @click="store.retrySave()" :loading="store.savingData")
    //-   | Retry 
    //-   v-icon.pl-2(size='10') fas fa-redo
</template>
<script>
export default {
  props: ["message", "store"]
};
</script>
