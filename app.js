new Vue({
    el: "#vue-app",
    data: {
        name: 'Chris',
        job: 'Software Developer',
        website: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
        websiteTag: '<a href="https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5">THe Net ninja</a>',
        rawhtml: '<span style="color:purple"></span>'
    },
    methods: {
        greeting: function (event) {
            return 'Good' + ' ' + ' ' + event + ' ' + this.name;
        }
    }
});