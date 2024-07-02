const loggerOriginalUrl = (request, response, next) => {
    console.log(request.url, response.status_code);
    next();
};

module.exports = loggerOriginalUrl;
