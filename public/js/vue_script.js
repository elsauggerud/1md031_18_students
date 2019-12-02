'use strict';
var socket = io();

console.log("hej");

var vm = new Vue ({
  el: '#myMeny',
  data: {
    burgers: burgerMenu,
  //  fullname:"",
  //  email:"",
    orderinformation:{fullname:"",email:"",paymentmethod:""},
    //  street:"",
    //    house:"",
    //paymentmethod:"",
    gender:"",
    //radio:"",
    checked:[],
    bestburgerorder:"",
    showSummary: false,
    display:{},
    orders: {}
  },

  methods: {

    //  markDone: function(){
    //    this.showSummary = true;
    //  console.log("clicked")
    //},

    displayOrder: function (event) {
      console.log(event);
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top};
        this.display= { x: event.clientX-10 - offset.x, y: event.clientY-10 - offset.y }
      },

      addOrder: function (event) {
        this.showSummary=true
        socket.emit("addOrder", { orderId: this.orderinformation.fullname,
          details: this.display,
          orderItems: this.checked,
          orderPersonalInfo: this.orderinformation});

                }
              }

  });






  //displayOrder: function (event){

  //}
