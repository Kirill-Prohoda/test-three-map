import {keyWords} from "./action";

let initState = {
    unitsList: [],
    unitsPosition: [],

    unitsFull: [],

    unitsError:"",
    unitsIsLoading:false,
}

const fieldLayerStore = (state = initState, action)=>{

    switch (action.type) {
        case keyWords.FETCH_UNITS:
            debugger
            return{
                ...state,
                unitsList:[...action.payload],
            }
        case keyWords.FETCH_UNITS_POSITION:
            debugger
            return{
                ...state,
                unitsPosition:[...action.payload],
            }

        case keyWords.UNITS_STATUS_IS_LOADING:
            return {
                ...state,
                loadingUnitsGeoZone: action.payload
            }
        case keyWords.GETTING_UNITS_ERRORS:
            return {
                ...state,
                errorsUnitsGeoZone: {...action.payload},
            }
        default:
            return state
    }
}
export default fieldLayerStore;