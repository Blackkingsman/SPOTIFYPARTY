<template>
  <div class="container">
    <div class="info-block">
      <h1 class="title">
        {{ msg }}
      </h1>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button href="#" v-b-toggle.accordion-1 variant="light" style="float: left">X</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <h5>Word</h5>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
  props: {
    msg: {
      type: String,
      default: 'spotusfy.com'
    }
  }
}
</script>

<style scoped>
  .info-block {
    overflow: hidden;
  }
  .title {
    margin-top: 120px;
    margin-bottom: 90px;
    font-weight: 840;
  }
  /* .accordion {
    margin: 90px;
  } */
  /* p {
    margin: 20px;
  } */
  /* h4 {
    margin: 40px;
  }
  h5 {
    margin: 40px;
  }
  .charcoal2 {
    margin-bottom: 50px;
    margin-left: 175px;
    margin-right: 175px;
    color:dimgray
  }
  .bold1 {
    font-weight: 850;
  }
  .bold2 {
    font-weight: 900;
    color:rgb(66, 173, 189);
  }
  .bold3 {
    margin-top: 55px;
    margin-bottom: 55px;
    font-weight: 900;
    color:rgb(66, 173, 189);
  }
  .registered {
    font-size: 65%;
  }
  .charcoal {
    color:dimgray
  } */
</style>
