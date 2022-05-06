const initialState = {
    data: [],
    start: 0,
    deleted: [],
    comments: []
};

const ReadReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SHOW':
        console.log("payload", payload)
      return {...state, data: [...state.data, ...payload]};
      case 'PAGINATION':
        console.log("payload", payload)
      return {...state, start: payload};
    case 'ADD': 
    console.log("----payload add", payload)
    return {...state, data: [...state.data, payload]}
    case 'DELETE':
        console.log("----payload delete", payload)
        return {...state, data: [...payload]}
    case 'COMMENT':
        return {...state, comments: [...payload]};
    default:
      return {...state};
  }
};

export default ReadReducer;
