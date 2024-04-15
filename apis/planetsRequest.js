import axios from 'axios';

async function fetchPlanets() {
    try {
        const planetsInfo = await axios.get('http://localhost:3000/api');
        return planetsInfo.data.planetsInfo;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}

export default fetchPlanets;