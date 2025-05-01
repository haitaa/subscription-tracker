import { Router} from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
   res.send({ title: "Sign up successful!"});
})
authRouter.post("/sign-in", (req, res) => {
    res.send({ title: "Sign in successful!"});
})
authRouter.post("/sign-out", (req, res) => {
    res.send({ title: "Sign out successful!"});
})

export default authRouter;