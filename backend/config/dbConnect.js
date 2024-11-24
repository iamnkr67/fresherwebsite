const express = require('express');
const mongoose = require('mongoose');
const string = process.env.DB_CONNECTION;
mongoose.connect(string).then((data) => {
    if(data){
        console.log("Connected");
    }
}).catch(err => {
    console.log(err.message);
})