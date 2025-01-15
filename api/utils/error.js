export const errorHandler = (statusCode, message) => {
    const error = new Error(); // Use the provided message
    error.statusCode = statusCode;
    error.message = message;
    return error; 
};