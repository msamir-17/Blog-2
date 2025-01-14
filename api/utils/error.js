export const errorHandler = (statusCode, message) => {
    const error = new Error(message); // Use the provided message
    error.statusCode = statusCode;
    return error; 
};