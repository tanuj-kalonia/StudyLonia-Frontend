import { server } from '../store';
import axios from 'axios';

export const getAllCourses = (category = '', keyword = '') => async dispatch => {
    try {
        console.log("fetching course");
        dispatch({ type: 'allCoursesRequest' });

        const { data } = await axios.get(`${server}/course?keyword=${keyword}&category=${category}`);
        // console.log(data);
        dispatch({ type: 'allCoursesSuccess', payload: data.course });
        console.log("Done");
    } catch (error) {
        console.log("error here");
        dispatch({
            type: 'allCoursesFail',
            payload: error.response.data.message,
        });
    }
};

export const getCourseLectures = id => async dispatch => {
    try {
        dispatch({ type: 'getCourseRequest' });

        const { data } = await axios.get(`${server}/course/${id}`, {
            withCredentials: true,
        });

        dispatch({ type: 'getCourseSuccess', payload: data.lectures });
    } catch (error) {
        dispatch({
            type: 'getCourseFail',
            payload: error.response.data.message,
        });
    }
};
