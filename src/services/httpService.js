import axios from "axios";

export const httpService = async (gate, data) => {
    try {
        const endpoint = gate === 'open' ? '/api/open_gate' : '/api/secure_gate';
        const response = await axios.post(endpoint, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error in API call:', error);
        throw new Error(error.response?.data?.message || 'Something went wrong');
    }
};
