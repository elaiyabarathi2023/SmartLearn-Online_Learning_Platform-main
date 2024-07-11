import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

async function authMiddleware(req: any, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        console.log("Authorization header is missing");
        res.status(401).send('Authorization header is missing');
    } else {
        const token = authHeader.split(" ")[1];
        console.log("Authorization header:", authHeader);
        console.log("Extracted token:", token);


        if (!token) {
            return res.status(401).json({ message: 'Authorization token is missing' });
        }

        try {
            const decoded = jwt.verify(token, 'ollehnihtij') as jwt.JwtPayload;

            // Now TypeScript knows that 'decoded' is of type JwtPayload
            if (typeof decoded === 'string') {
                return res.status(401).json({ message: 'Invalid token format' });
            }
            req.userData = decoded;

            console.log("current user",req.userData);
            next(); // Call next here to pass control to the next middleware
        } catch (error) {
            res.status(401).json({ message: 'Authentication failed' });
        }
    }
}




// async function authMiddleware(req: any, res: Response, next: NextFunction) {
//     const token = req.header('Authorization')?.split(' ')[1];
//     console.log(token);
//     if (!token) {
//         return res.status(401).json({ message: 'Authorization token is missing' });
//     }

//     try {
//         const decoded = jwt.verify(token, '#gdey78') as jwt.JwtPayload;

//         // Now TypeScript knows that 'decoded' is of type JwtPayload
//         if (typeof decoded === 'string') {
//             return res.status(401).json({ message: 'Invalid token format' });
//         }
//         req.userData = decoded;
//         next(); // Call next here to pass control to the next middleware
//     } catch (error) {
//         res.status(401).json({ message: 'Authentication failed' });
//     }
// }


export default authMiddleware;


