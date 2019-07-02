new Vue({
    el: "#vue-app",
    data() {
        return {
            name: 'Chris',
            job: 'Software Developer',
            website: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
            websiteTag: '<a href="https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5">THe Net ninja</a>',
            rawhtml: '<span style="color:purple"></span>',
            age: 20,
            x: 0,
            y: 0,
            a: 0,
            b: 0,
            firstName: 'Waweru',
            surname: 'Kamau',
            available: false,
            nearby: false,
            error: false,
            success: false,
            families: ["Peter", "Jane", "Chris", "Frank", "Vivian"],
            ninjas: [
                { name: "Peter", age: "51" },
                { name: "Jane", age: "49" },
                { name: "Chris", age: "23" },
                { name: "Frank", age: "18" },
                { name: "Vivian", age: "13" }
            ]
        }
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
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('This will take you to the vue.js docs');
        },
        logName: function () {
            console.log('You Entered your name')
        },
        logAge: function () {
            console.log('You Entered your age')
        },
    },
    computed: {
        addToA: function () {
            console.log('addToA')
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB')
            return this.b + this.age;
        },
        reversedName: function () {
            // console.log(vm.reversedName)
            return this.name.split('').reverse().join('')
        },
        fullName: function () {
            return `${this.firstName} ${this.surname}`
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});