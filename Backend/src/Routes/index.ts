import { Application } from "express";
// import authRoute from "./authRoute";
// import userRoutes from "./user.routes";
import router from "./UserRoutes/authRoute";
import routerAdmin from "./AdminRoutes/authAdminRou";

export default class Routes {
  constructor(app: Application) {
    app.use("/users", router);
    app.use("/instructors", routerAdmin);
  }
}
