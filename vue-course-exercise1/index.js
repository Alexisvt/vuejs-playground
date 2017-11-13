new Vue({
  el: '#exercise',
  data: {
    name: 'Alexis',
    age: 32,
    imgScr: 'http://lorempixel.com/100/100/',
  },
  methods: {
    genRandomNum() {
      return Math.random();
    },
  },
});
