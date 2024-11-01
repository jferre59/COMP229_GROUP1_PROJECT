const mongoose = require('mongoose');
const crypto = require('crypto');
const { type } = require('os');
//Schema for user accounts 
const UserAccountSchema = new mongoose.Schema({
    userId:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    username:{
        type:String,
        trim:true,
        required:'Username is required'
    },
   
    hashed_passwords:{
        type:String,
        required:'Password required'
    },
    email:{
        type:String,
        trim:true,
        required:'Email is required'
    },
    role:{
        type:String,
        trim:true,
        required:'Please enter your role'
    },
    type:{
        type:String,
        trim:true,
        required:'Please enter type of User'
    },
    salt:String
});
//Hasing password to keep privacy safe
UserAccountSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_passwords = this.encryptPassword(password)
})
.get(function(){
    return this._password;
})
UserAccountSchema.methods = {
    authentication: function(plainText)
    {
        return encryptPassword(plainText) === this.hashed_passwords;
    },
    encryptPassword : function(password)
    {
        if (!password) return 'Wrong Password'
        try{
            return crypto
            .createHmac('sha512', this.salt)
            .update(password)
            .digest('hex')
        }
        catch(err){
            throw new  Error(err.message);
        }
    },
    //randomize the salt to make it produce a string not hackable
    makeSalt : function()
    {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
} 
module.exports = mongoose.model('UserAccount',UserAccountSchema);