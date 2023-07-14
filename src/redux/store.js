import { configureStore } from "@reduxjs/toolkit";

import { userReducer, profileReducer, subscriptionReducer } from "./reducers/userReducer"
import { courseReducer } from "./reducers/courseReducer.js";
import { adminReducer } from "./reducers/adminReducer.js";
import { otherReducer } from "./reducers/otherReducer.js";

const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        course: courseReducer,
        subscription: subscriptionReducer,
        admin: adminReducer,
        other: otherReducer,
    }
})

export default store;
export const server = "https://studylonia-backend-4jcv.onrender.com/api/v1";
