const URLslug = require('mongoose-slug-generator');
const mongoose = require('mongoose');





mongoose.plugin(URLslug);


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },

    slug:{
        type:String,
        unique:true,
        slug:"title"
    },


    body:{
        type:String,
        required:true,
    },


    photo:{
        type:String,
        required:false,
    }
    ,
    username:{
        type:String,
        required:true,
    },

    categories:{
        type:Array,
        required:true,
    },

    status:{
        type:Boolean,
        required:true,
    }
}, 

{
    timestamps:true
}
);

PostSchema.pre("save", function(next){
    this.slug = this.title.split(" ").join("-");
    next();
});

module.exports = mongoose.model("Post", PostSchema);