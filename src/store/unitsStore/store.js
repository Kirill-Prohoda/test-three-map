import {keyWords} from "./action";

let initState = {
    unitsList: [],
    unitsPosition: [],

    unitsFull: [],

    unitsError:"",
    unitsIsLoading:false,
}

const unitsLayerStore = (state = initState, action)=>{

    switch (action.type) {
        case keyWords.FETCH_UNITS:

            return{
                ...state,
                unitsList:[...action.payload.data],
            }
        case keyWords.FETCH_UNITS_POSITION:
            let unitPositionList;

            if(state.unitsPosition.length){
                unitPositionList = [...state?.unitsPosition, ...action?.payload?.data?.items]
            }else{
                unitPositionList = [...action.payload.data.items]
            }

            unitPositionList = unitPositionList.map((position, listPosition)=>{
                // if(listPosition.filter(j=>))
            })


            debugger

            return{
                ...state,
                unitsPosition:[...unitPositionList],
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
export default unitsLayerStore;