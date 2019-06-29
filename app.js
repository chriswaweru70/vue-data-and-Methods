new Vue({
    el: "#vue-app",
    data: {
        name: 'Chris',
        job: 'Software Developer'
    },
    methods: {
        greeting: function (event) {
            return 'Good' + ' ' + ' ' + event + ' ' + this.name;
        }
    }
});