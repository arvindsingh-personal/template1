import { ADD, CLEAR, DIVIDE, MULTIPLY, SUBTRACT } from "./Types"

const initialState = {
    result:0
}

export const AddReducer = (state = initialState, action)=>{
  switch(action.type){
    case ADD:
        return {
            ...state,
            result:action.payload1+action.payload2
        }
    default:
        return state
  }
}

export const SubtractReducer = (state = initialState, action)=>{
  switch(action.type){
    case ADD:
        return {
            ...state,
            result:action.payload1-action.payload2
        }
    default:
        return state
  }
}

export const MultiplyReducer = (state = initialState, action)=>{
  switch(action.type){
    case ADD:
        return {
            ...state,
            result:action.payload1*action.payload2
        }
    default:
        return state
  }
}

export const DivideReducer = (state = initialState, action)=>{
  switch(action.type){
    case ADD:
        return {
            ...state,
            result:action.payload1/action.payload2
        }
    default:
        return state
  }
}

export const ClearReducer = (state = initialState, action)=>{
  switch(action.type){
    case ADD:
        return {
            ...state,
            result:0
        }
    default:
        return state
  }
}
