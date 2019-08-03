/**
 * Action Creators
 * note: ac = action creator
 */


export const APPEND_CALCULATION = "APPEND_CALCULATION"

export function acAppend(str) {
  return { 
    type: APPEND_CALCULATION,
    payload: str
  }
}


export const PERFORM_CALCULATION = "PERFORM_CALCULATION"

export function acCalculate() {
    return { type: PERFORM_CALCULATION }
}


export const RESET = "RESET"

export function acReset() {
    return { type: RESET }
}
