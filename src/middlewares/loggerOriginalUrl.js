const loggerOriginalUrl = (request, response, next) => {
    console.log(request.url);
    next();
};

module.exports = loggerOriginalUrl;
