import jwt from 'jsonwebtoken';

const secretKey = 'vaman-secret';

const authenticateJWT = (req, res, next) => {

    if (req.path === '/login')
        return next();

    const bearerToken = req.headers.authorization;
    let token = '';
    if (bearerToken)
        token = bearerToken.split(" ")[1];

    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT verification error:', err);
                return res.status(403).json({ message: 'Failed to authenticate token' });
            } else {
                console.log(decoded);
                req.user = decoded;
                next();
            }
        });
    } else {
        console.error('No token provided');
        res.status(401).json({ message: 'No token provided' });
    }
};

const generateToken = (user) => {
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    return token;
};

export { authenticateJWT, generateToken };