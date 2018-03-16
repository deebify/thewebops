export const apiMiddleware = store => next => action=> {
    next(action)
    switch(action.type){
      case 'GET_DATA':
        store.dispatch({type:'GET_DATA_LOADING'})
        fetch('http://192.168.1.55:3000/data')
        .then(response => response.json())
        .then(data => next({
          type:'GOT_DATA',
          data
        }))
        .catch(error=>next({
          type:'DATA_ERROR',
          error
        }))
        break;
        default:
          break;
    }
  }
  export const reducer = (state = {data:[], loading:false}, action) => {
      switch(action.type){
        case 'GET_DATA':
          return {
            ...state,
            loading : true
          };
        case 'GOT_DATA':
          return {
            loading : false,
            data : action.data
          };
        case 'DATA_ERROR':
          return state;
        default:
          return state;
      }
  }