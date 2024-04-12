const tokenString = 'token';

const sendToken = (res, user, message, statusCode) => {
    const token = user.getJwtToken();
    const options = {
        expires: new Date(Date.now() + 1000*60*60*24*15),
        httponly: true,
        sameSite: 'none',
    }

    res.status(statusCode).cookie(tokenString, token, options).json({
        success: true,
        message: message,
        user: user,
    })
}

const resetToken = (res, message, statusCode) => {
    res.status(statusCode).cookie(tokenString, null, {
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: message,
    });
}

module.exports = {sendToken, resetToken, tokenString};