new Vue({
    el: "#vue-app",
    data: {
        name: 'Chris',
        job: 'Software Developer',
        website: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
        websiteTag: '<a href="https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5">THe Net ninja</a>',
        rawhtml: '<span style="color:purple"></span>',
        age: 22
    },
    methods: {
        greeting: function (event) {
            return 'Good' + ' ' + ' ' + event + ' ' + this.name;
        },
        greetUser: function (event) {
            alert('Hey Mr' + ' ' + this.name)
        },
        add: function (inc) {
            this.age += inc; // this.age+= 10
        },
        subtract: function (dec) {
            this.age -= dec;  // this.age+= 12
        }
    }
});