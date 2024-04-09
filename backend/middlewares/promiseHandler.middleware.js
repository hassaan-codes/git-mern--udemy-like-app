
const promiseHandler = (promiseMethod) => (req, res, next) => {
    Promise.resolve(promiseMethod(req, res, next)).catch(next);
}

module.exports = promiseHandler;