import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_CATNAMES = "GET_CATNAMES"
const GET_SUBCATS = "GET_SUBCATS"

// initial state
const initialState = {
  catnames: [],
  subcats: [],
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATNAMES:
      return { ...state, catnames: action.payload }
    case GET_SUBCATS:
      return {...state, subcats: action.payload }
    default:
      return state
  }
}

// action creators
const getCatnames = () => {
  return dispatch => {
    axios.get("/users/catnames").then(resp => {
      const catNamesArray = {
        cat1: newArr(resp.data),
        cat2: newArr2(resp.data),
        cat3: newArr3(resp.data),
        cat4: newArr4(resp.data),
        cat5: newArr5(resp.data),
        cat6: newArr6(resp.data),
        cat7: newArr7(resp.data),
      }
      dispatch({
        type: GET_CATNAMES
      })
    })
  }
}

const getSubcats = () => {
  return dispatch => {
    axios.get("/users/subcats").then(resp => {
      const subCatsArray = {





      }
    
      dispatch({
        type: GET_SUBCATS,
        payload: resp.data
      })
    })
  }
}

function catArray(the){
  for(let i =0; i < the.length; i++){
    if(the[i].parent_id = 1){
      cat1.push(the[i])
    }
    else if(the[i].parent_id=2){
      cat2.push(the[i])
    }
    else if(the[i].parent_id=3){
      cat3.push(the[i])
    }
    else if(the[i].parent_id=4){
      cat4.push(the[i])
    }
    else if(the[i].parent_id=5){
      cat5.push(the[i])
    }
    else if(the[i].parent_id=122){
      cat6.push(the[i])
    }
    else if(the[i].parent_id=123){
      cat7.push(the[i])
    }
  }
}

var cat1 = []
var cat2 = []
var cat3 = []
var cat4 = []
var cat5 = []
var cat6 = []
var cat7 = []

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatnames())
    dispatch(getSubcats())
  }, [dispatch])

  return { users, cat1, cat2, cat3, cat4, cat5, cat6, cat7 }
}
