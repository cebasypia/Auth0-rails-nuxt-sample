<template>
  <div id="show-auth"></div>
</template>

<script>
export default {
  mounted(){
    this.$auth0.showLock("show-auth")
  }
}
</script>