import { Request, Response } from "express";
import Controller from "./controller";

export default class HomeContoller extends Controller {
  /**
   * Display a listing of the resource.
   *
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  async index({ req, res }: { req: Request; res: Response }): Promise<void> {
    res.render("home/home");
  }

  /**
   * Show the form for creating a new resource.
   *
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  create({ req, res }: { req: Request; res: Response }): void {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  store({ req, res }: { req: Request; res: Response }): void {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param id Number
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  show({ id, req, res }: { id: Number; req: Request; res: Response }): void {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param id Number
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  edit({ id, req, res }: { id: Number; req: Request; res: Response }): void {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param id Number
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  update({ id, req, res }: { id: Number; req: Request; res: Response }): void {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param id Number
   * @param req ExpressRequest
   * @param res ExpressResponse
   *
   * @return {void}
   */
  destroy({ id, req, res }: { id: Number; req: Request; res: Response }): void {
    //
  }
}
