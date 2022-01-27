import axios from "axios";
import {addData} from "../store/store";

// const URL = 'https://api.spoonacular.com/recipes/complexSearch?query=cake&instructionsRequired=true&addRecipeInformation=true&number=20&apiKey=bf3d64d59f85485eb7373fc4b8660de2#'
const URL = 'https://sweetcakes4.free.beeceptor.com/cakes'

export const getData = () => {
    return async function (dispatch) {
        await axios.get(URL)
            .then((response) => dispatch(addData(response.data)));
    }
};