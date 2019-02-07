const forbiddenWordsMiddleware = ({ dispatch }) => {
  return next => {
    return action => {
      return next(action);
    };
  };
};
