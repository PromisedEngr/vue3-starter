<template>
  <div class="main-container">
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.main-container {
  margin: auto;
  .body {
    width: 100%;
    min-height: 750px;
    min-width: 1280px;
    position: absolute;
    padding-top: 20px;
  }
}
</style>
