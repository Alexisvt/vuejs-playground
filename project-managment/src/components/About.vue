<template>
  <div id="About">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'About me page :D, this message is dynamic injected into the page'
    };
  }
};
</script>
