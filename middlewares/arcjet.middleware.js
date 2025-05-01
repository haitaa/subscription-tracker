import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) return res.status(429).json({ success: false, error: "Too many requests." });
            if (decision.reason.isBot()) return res.status(403).json({ success: false, error: "Bots are not allowed." });

            return res.status(403).json({ success: false, error: "Access denied." });
        }

        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default arcjetMiddleware;