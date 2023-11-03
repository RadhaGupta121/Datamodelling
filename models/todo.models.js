import mongoose from 'mongoose';
const todoSchema=new mongoose.Schema(
  {
    content:{
      title:String,
      require:true
    },
    complete:{
      type:Boolean,
    default:false,
    },
    createdBy:
    {
     type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    },
    Subtodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"subtodo"
      }
    ]
  }
  ,{timeStamps:true});

export const todo=mongoose.model("Todo",todoSchema);
