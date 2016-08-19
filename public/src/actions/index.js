export const login = ()=> {
  return (dispatch)=> {
    dispatch({
      type: "LOGGING"
    });
    setTimeout(()=> {
      dispatch({
        type: "LOGGED_IN"
      })
    }, 1000);
  }
};