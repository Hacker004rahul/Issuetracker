const mongoose=require('mongoose');
const IssueSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,default:'Open'},
    owner:{type:String,required:true},
    priority:{type:String,default:'1'},
    createdDate:{type:Date,default:Date.now},
    dueDate:{type:Date,required:true}
});

module.exports=mongoose.model('Issue',IssueSchema);
