<template>
  <div id="session-navigation">
    <create-button />
    <join-button />
  </div>
</template>

<script>
import CreateButton from './SessionButtons/Create'
import JoinButton from './SessionButtons/Join'
export default {
  components: {
    CreateButton,
    JoinButton
  }
}
</script>

<style scoped lang="scss">
#session-navigation {
  display: inline-flex;
  div {
    margin: 0 3% 0 3%;
  }
}
</style>
