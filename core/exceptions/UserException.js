class UserException extends Error {
    
    constructor(message, errorCode, statusCode){
        super(message)
        this.errorCode = errorCode ?? -1
        this.statusCode = statusCode ?? 500
    }

}

module.exports = UserException