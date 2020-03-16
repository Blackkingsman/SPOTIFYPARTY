<template>
  <div id="session-navigation">
    <create-button />
    <join-button />
    <edit-button />
  </div>
</template>

<script>
import CreateButton from './SessionButtons/Create'
import JoinButton from './SessionButtons/Join'
import EditButton from './SessionButtons/Edit'
export default {
  components: {
    EditButton,
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
