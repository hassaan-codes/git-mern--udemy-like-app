
const sendToken = (res, user, message, statusCode) => {
    const token = user.getJwtToken();
    const options = {
        expires: new Date(Date.now() + 1000*60*60*24*15),
        httponly: true,
        sameSite: 'none',
    }

    res.status(statusCode).cookie('udemy_replica_auth_token', token, options).json({
        success: true,
        message: message,
        user: user,
    })
}

module.exports = sendToken;