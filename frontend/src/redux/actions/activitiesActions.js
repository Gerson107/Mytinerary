import { ContentCutOutlined } from '@mui/icons-material';
import axios from 'axios';

const activitiesActions = {
    activityOfItinerary: (itineraryId) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.get('https://mitinerary.herokuapp.com/api/v1/activities/'+itineraryId)
                console.log(response.data)
                return { success: true, response: response.data.response };
                     
            } catch (error) {
                return {
                    success:false,
                    response: error,
                }
            }
        }
    }
}
export default activitiesActions;