import EErrors from "./errors/errors.enums.js";

export default (error, req, res, next) => {
	//if(!error) return next();
    console.log("middleware errors")
    console.log(error.cause);
    switch(error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            return res.send({status: "error", error: error.name})
        default:
            return res.send({status: "error", error: "Unhandled error"})
    }
}