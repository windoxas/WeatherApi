// let person = {
//     name: 'Maxim',
//     age: 26,
//     sayHello: function () {
//         console.log('Hello world!');
//
//      }
// };
//
// Object.prototype.some = function () {
//     console.log('Some Item!');
//
// };
//
//
// const array = [25,4,7,48,44,78,12];
//
//
//
// // let  b =  array.map(function (item, index) {
// //     console.log(item, index);
// //     return item;
//
// //  })
//
// // let s = array.indexOf('orange');
//
// // let s = array.find((value, index) => {
// //     console.log(index, value)
// //
// // })
//
// let arr = array.find((value, index) => {
//     console.log(`number array: ${index} value array: ${value}`)
// });
//
//
// const filt = array.filter((index, value) =>{
//    if (index % 2 !== 0){
//        return true
//    }
// })
//
// console.log(filt)
//
//

//
// function light() {
//     console.log('Hello', this)
// }
//
//
//
// const person  = {
//     name: 'Xurshid',
//     age: 25,
//     sayHello: light,
//     sayHelloWindow: light.bind(window),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// }
// person.logInfo("Frontend", '+998999899989')
// const lena = {
//     name: 'Lena',
//     age: 18
// }
// // person.logInfo.bind(lena, "designer", '+998998997989')()
// // person.logInfo.apply(lena, ["designer", '+998998997989'])
//
// person.logInfo.call(lena,"designer", '+998998997989')


//
// const number = [20, 30, 10, 50, 40]
//
// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
// }
//
// console.log(array.multBy(2));
// console.log(number.multBy(5));
//
//
// const mas = number.map(function (index ) {
//     const num = index * 5
//     return num
//
// })
//
// console.log(mas)

// function bind(context, fn) {
//     return function (...args) {
//         fn.call(context, args)
//     }
// }
// function logPerson() {
//     console.log(`${this.name}, ${this.age}, ${this.job}`)
//
// }
//
//
// let person = {
//     name: 'Xurshid',
//     age: 26,
//     job: 'Frontend'
// }
//
//
// bind(person, logPerson)()
//
//
// logPerson.apply(person)
// logPerson.call(person)

// const prom = new Promise(function (resolve, reject) { 
//     setTimeout(function () { 
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//      }, 2000)
//  })

//  prom.then((data) => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modifare = true
//             resolve(data)
//         },2000)
//     })
//     p2.then((clientData) =>{
//         console.log('Data recived', clientData);


//     })

//  })


// const person = Object.create({}, {
//     name: {
//         value: 'Xurshid',
//         enumerable: true,
//         writable: true,
//         configurable:true
//     },
//     brithDay: {
//         value: 1994
//     },
//     age:{
//         get() {
//             return new Date().getFullYear() - this.brithDay
//         }
//     }
//
// })
//
//
//
// // let person = {
// //     name: 'Xurshid',
// //     brithDay: 1994,
// //     working: 'Developer backend',
// //     writable: false
// // }
// //
//
// for(let key in person){
//     console.log(key, ':',person[key]);
//
// }

//
// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     get ageInfo() {
//         return this.age * 7
//     }
//
//     set ageInfo(newAge) {
//         return this.age = newAge
//     }
// }
//
//
// const dog = new Animal({
//     name: 'Keranda',
//     age: 5,
//     hasTail: true
// })
//
// const cat = new Animal({
//     name: 'Burbara',
//     age: 2,
//     hasTail: false
// })
//
//
// console.log(dog)
// console.log(cat)

// Class Practice

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }
//
//     hide() {
//         this.$el.style.display = 'none'
//     }
//
//     show() {
//         this.$el.style.display = 'block'
//     }
//
// }
//
// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.background
//
//     }
// }
//
// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     background: 'red'
// })
// const box2 = new Box({
//     selector: '#box2',
//     size: 350,
//     background: 'blue'
// })
//




// class Content{
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }

//     show(){
//         this.$el.style.display = 'block'
//     }

//     hide(){
//         this.$el.style.display = 'none'
//     }
// }


// class Box extends Content{
//     constructor(option){
//         super(option.selector)

//         this.$el.style.width = this.$el.style.height = option.size+'px';
//         this.$el.style.background = option.background
//         this.$el.style.borderRadius = option.radius

//     }
// }


// const box1 = new Box({
//     selector: '#box1',
//     size: 250,
//     background: 'blue',
//     radius: 10+'%'
// })



// let box = document.querySelector('#box1');
// let width = 2
//
// setInterval(function () {
//     width += 15
//     box.style.marginLeft = width + 'px'
//
//  },1000)

// let appCalc = document.querySelector('#appCalc');
// let btnCalc = document.querySelector(('.btnCalc'))
// let budget = document.querySelector('.budget')
// let expenses = document.querySelector('.expenses')
// let balance = document.querySelector('.balance')
//
//
// btnCalc.addEventListener('click', function () {
//     const inp = appCalc.value
//     if(inp === ''){
//         alert('Please write some your budget')
//     }
// })

let nameCity = document.querySelector('.nameCity')
let gradus = document.querySelector('.gradus')
let clouds = document.querySelector('.clouds')
let icon = document.querySelector('.icon')
let search = document.querySelector('.search input')
let btn = document.querySelector('.getBtn')
let ico = document.head.querySelectorAll('link');
let dateShow = document.querySelector('.dateShow')
nameCity.textContent = search.value


const date = new Date()

switch(date.getMonth()){
    case 9:{
        document.body.style.background = 'url(https://data.1freewallpapers.com/download/autumn-in-the-mountain.jpg)';
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        console.log('faw');
    }
}
if(date.getMonth() === 9 || date.getMonth() === 10 || date.getMonth() === 11){
    document.body.style.background = 'url(https://data.1freewallpapers.com/download/autumn-in-the-mountain.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'

}
dateShow.innerHTML = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;



function firstScreen (){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=9460e0e73d0078ca5a4ddc9218ee3d99`)
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        nameCity.textContent = data.name
        gradus.innerHTML = Math.round(data.main.temp - 273 ) + 'c&deg';
        clouds.textContent = data.weather[0]['description']
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        ico[0].setAttribute('href', `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`)

    })
    .catch(function ( ) {
        console.error('some error code')
    })
}
firstScreen();



btn.addEventListener('click', function (qualifiedName, value) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=9460e0e73d0078ca5a4ddc9218ee3d99`)
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        nameCity.textContent = search.value
        gradus.innerHTML = Math.round(data.main.temp - 273 ) + 'c&deg';
        clouds.textContent = data.weather[0]['description']
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        ico[0].setAttribute('href', `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`)

    })
    .catch(function ( ) {
        console.error('some error code')
    })


   

})



