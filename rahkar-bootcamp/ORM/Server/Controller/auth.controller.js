const response = require('../utils/response')
const AuthModel = require('../Model/auth.model')

exports.register = async (req, res) => {
    console.log('controller');
    try {
        let result = await AuthModel.register(req.body)
        res.json(new response(result, true, ""));
    } catch (error) {
        res.json(new response([], false, error.massage), 400)
    }
}
exports.login = async (req, res) => {
    try {
        let result = await AuthModel.login(req.body)
        res.json(new response(result, true, ""))
    } catch (error) {
        res.status(400).json(new response([], false, error.massage))
    }
}
