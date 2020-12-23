import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next();
};

export const CSPMiddleware = (req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
  return next();
};
