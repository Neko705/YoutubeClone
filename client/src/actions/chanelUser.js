import * as api from '../api'

export const fatchAllChanel=()=>async(dispatch)=>{
    try {
        const {data}= await api.fatchAllChanel();
        dispatch({type:"FATCH_CHANELS",payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateChanelData=(_id,updateData)=> async(dispatch)=>{
    try {
        const {data}= await api.updateChanelData(_id,updateData);
        dispatch({type:'UPDATE_DATA',payload: data})
    } catch (error) {
        console.log(error)
    }
}
