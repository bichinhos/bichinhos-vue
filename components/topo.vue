<template>
<div>

  <header>
    <div class="header container column align-items-center justify-content-center">
      <div class="block text-center">
        <img src="~/assets/images/logo1.svg" class="logo" alt="">
      </div>
    </div>
  </header>

</div>
</template>

<script>
export default {
  name: 'topo',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    min-height: 100vh;
    width: 100%;
    .block {
        width: 600px;
        max-width: 90%;
        img {
            width: 400px;
            max-width: 90%;
        }
    }
}
</style>
