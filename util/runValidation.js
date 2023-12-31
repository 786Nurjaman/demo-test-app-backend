const { validationResult } = require("express-validator")
const { errorResponse } = require("./responseController")

const runValidation=async(req,res,next)=>{
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            errorResponse(res,{statusCode: 422, message:errors.array()[0].msg})
        }else{
            return next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports=runValidation