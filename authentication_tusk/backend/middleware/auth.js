
import JsonWebToken from "jsonwebtoken";

export const checkIsLoggedIn = (req, res, next) => {
    const auth = req.headers["authorization"];;
  if (!auth) {
    return res.status(403).json({ message: "JWT is required" });
  }

  try {
    const decodeData = JsonWebToken.verify(auth, process.env.JWT_SIGNATURE);
    req.user = decodeData;
    next();
  } catch (error) {
    return res.status(403).
      json({
        message: "unauthorized , jwt token is wrong or expired",
      })
    
  }
};
