import express from "express";
import { helloService } from "./hello.service";

const router = express.Router();

router.get("/", (req, res) => {
    const message = helloService.getHelloMessage();
    res.send(message);
});

export const helloController = router;
