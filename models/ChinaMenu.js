const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const ChinaMenuSchema = new Schema({

    menuType :{
        type:String,
        required:true
    },
categoryName :{
    type:String,
    required:true
},

itemName :{
    type:String,
    required:true
},
price :{
    type:Number,
    required:true
},

})

const ChinaMenu = mongoose.model("ChinaMenu",ChinaMenuSchema);

module.exports = ChinaMenu