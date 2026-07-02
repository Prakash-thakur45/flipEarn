import {createSlice} from "@reduxjs/toolkit"
import {dummyListings} from "../../assets/assets"


const listingSlice=createSlice({
       name:"listing",
       initialState:{
           listings:dummyListings,
           userListing:dummyListings,
           balance:{
                      earn:0,
                      withdrawn:0,
                      available:0,

           }
       },
       reducers:{
            setListings:(state, action)=>{
                 state.listing=action.payload;
            }
       }
})

export  const {setListings}=listingSlice.actions;
export default listingSlice.reducer;