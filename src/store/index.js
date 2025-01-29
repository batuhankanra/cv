import { configureStore } from "@reduxjs/toolkit";
import api from './vercelAPi'

const store=configureStore({
    reducer:{
        api
    }
})
export default store