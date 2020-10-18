import * as type from '../types';

export function getProgrammes(){
  return {
    type: type.GET_PROGRAMS_REQUESTED,
  }
}
export function programme1(data){
  return {
    type: type.PROGRAM1_REQUESTED,
    payload: data
  }
}

export function programme2(data){
  return {
    type: type.PROGRAM2_REQUESTED,
    payload: data
  }
}