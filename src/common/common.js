const getEmailFromRequest = (req) => req.user.emails[0].value;

module.exports = { getEmailFromRequest };
