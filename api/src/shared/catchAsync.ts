import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
        console.log("Ypu are in catchAsync",req.body.params);
        await fn(req, res, next)
    } catch (error) {
        next(error)
    }
}
export default catchAsync;