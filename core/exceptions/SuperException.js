class SuperException extends Error {
    constructor(message, errorCode, statusCode){
        super(message)

        this.message = message
        this.errorCode = errorCode ?? -1
        this.statusCode = statusCode ?? 500
    }
}

module.exports = SuperException