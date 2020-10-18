import * as type from '../types';

const initialState = {
    programmes: [],
    loading: false,
    errorA: null,
    errorB: null,
    programAresult: "",
    programBresult: ""
}


export default function programmes(state = initialState, action) {
  switch (action.type) {
    case type.GET_PROGRAMS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_PROGRAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        programmes: action.programmes
      }
    case type.GET_PROGRAMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }

    case type.PROGRAM1_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.PROGRAM1_SUCCESS:
      return {
        ...state,
        loading: false,
        programAresult: action.result
      }
    case type.PROGRAM1_FAILED:
      return {
        ...state,
        loading: false,
        errorA: action.message,
    }


    case type.PROGRAM2_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.PROGRAM2_SUCCESS:
      return {
        ...state,
        loading: false,
        programBresult: action.result
      }
    case type.PROGRAM2_FAILED:
      return {
        ...state,
        loading: false,
        errorB: action.message,
    }
    default:
      return state
  }
}