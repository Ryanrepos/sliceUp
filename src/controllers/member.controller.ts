import { T } from "../libs/types/common";
import { Request, Response} from "express";

// REACT
const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("GO HOME");
    } catch(err) {  
        console.log("Error: goHome:", err);
    }
}

export default memberController;