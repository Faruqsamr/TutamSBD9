import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const createReview = async (formData) => {
    try {
        const response = await axios.post(
            `http://localhost:3001/makeReview`,
            formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const getReview = async () => {
    try{
        const response = await axios.get(
            `http://localhost:3001/getReview`
        );

        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);

    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const updateReview = async (id, formData) => {
    try{
        const response = await axios.put(
            `http://localhost:3001/updateReview/${id}`, formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}

export const deleteReview = async (formData) => {
    try{
        const response = await axios.delete(
            `http://localhost:3001/deleteReview`,
            { data: formData }
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};