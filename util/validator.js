const {body}=require('express-validator')

const emailValidator=[
    body('name')
        .trim()
        .notEmpty()
        .withMessage('name is rquired')
        .isLength({min: 3, max: 20})
        .withMessage('name should be min 3 character and max 20 character')
        .isString()
        .withMessage('name must be a string'),
    body('country')
        .trim()
        .notEmpty()
        .withMessage('country is required')
        .isString()
        .withMessage('country must be a string'),
    body('contact')
        .trim()
        .notEmpty()
        .withMessage('contact is required')
        .isString()
        .withMessage('contact must be a string'),
    body('email')
        .trim()
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email'),
    body('message')
        .trim()
        .notEmpty()
        .withMessage('message is required')
        .isString()
        .withMessage('message must be a string'),
        
]

const subscribeValidator=[
    body('email')
        .trim()
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email')
        
]

module.exports={
    subscribeValidator,
    emailValidator
}