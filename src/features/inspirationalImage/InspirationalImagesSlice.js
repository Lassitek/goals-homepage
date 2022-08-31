/*
InspirationalImagesSlice.js Slice

Imports
===============================
*/
import { createSlice } from '@reduxjs/toolkit';


/*
Variables
===============================
*/
const initialState = [
    {
        id: 1,
        isSelected: true,
        src: 'https://images.pexels.com/photos/6051049/pexels-photo-6051049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 2,
        isSelected: false,
        src: 'https://images.pexels.com/photos/13391438/pexels-photo-13391438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];


/*
Slice
===============================
*/
export const inspirationalImagesSlice = createSlice({
    name: 'inspirationalImages',
    initialState,
    reducers: {
        getImages: (state, action) => {
            return [...state, ...action.payload];
        },
        nextImage: (state) => {
            let currentImgIndex = state.findIndex((img)=>img.isSelected);
            let newImgIndex = (currentImgIndex == state.length - 1) ? 0 : currentImgIndex + 1; 

            state.forEach((img, i)=>{
                if (currentImgIndex == i) {
                    img.isSelected = false;
                } else if (newImgIndex == i) {
                    img.isSelected = true;
                }
            })

            return state;
        },
        prevImage: (state) => {
            let currentImgIndex = state.findIndex((img)=>img.isSelected);
            let newImgIndex = (currentImgIndex == 0) ? state.length - 1 : currentImgIndex - 1; 

            state.forEach((img, i)=>{
                if (currentImgIndex == i) {
                    img.isSelected = false;
                } else if (newImgIndex == i) {
                    img.isSelected = true;
                }
            })
            
            return state;
        }
    }
});


/*
Selectors
===============================
*/
export const selectInspirationalImages = (state) => {
    return state;
}
export const selectCurrentImage = (state) => {
    return state.inspirationalImages.find((img)=>img.isSelected);
}


/*
Exports
===============================
*/
export const { getImages, nextImage, prevImage } = inspirationalImagesSlice.actions;
export default inspirationalImagesSlice.reducer;