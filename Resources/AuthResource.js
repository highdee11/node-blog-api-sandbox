const UserResource = require("./UserResource");
 
class AuthResource extends UserResource {
    constructor(data){
        super(data)
        this.token = data.token
    }
}

module.exports = AuthResource