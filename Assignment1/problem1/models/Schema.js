const mongoose=require('mongoose')

const grocerySchema=mongoose.Schema({
    groceryItem:String,
    isPurchased:{type:Boolean,
    default:false}
})


module.exports=mongoose.model('grocery',grocerySchema)