export const isHodAuth = (req, res, next) => {

    const { role } = req.user;

    if (role === 'hod') {
        next(); // Role is hod, proceed to the next middleware
    } else {
        return res.status(403).json({
            status: 403,
            message: "Unauthorized Access: HOD privileges required"
        })
    }
};