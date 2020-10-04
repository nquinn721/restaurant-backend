export const AuthMiddleware = ({ next }: { next: any }) => {
  // Send to home if there's no authorization token in localstorage
  if (!localStorage.getItem("Authorization")) {
    return next("/");
  }

  return next();
};
