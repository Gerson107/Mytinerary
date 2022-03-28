import  React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { connect } from 'react-redux';
import activitiesActions from '../../redux/actions/activitiesActions';
import { useParams } from "react-router-dom";
import './activities.css';


 function ActionAreaCard(props) {
   const [activity, setActivity] = useState([])
    useEffect(() => {
      props.activityOfItinerary(props.itineraryId).then((res)=> {
            setActivity(res.response)    
      })

    },[])
  return (

    <>
    {activity?.map((activity, index) => (
    <Card className="cardcss" sx={{ maxWidth: 345 }} key={index}>
    
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={activity.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {activity.title}
          </Typography>
          <Typography variant="body2" >
            {activity.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </>
  );
}
const mapDispatchToProps = {
  activityOfItinerary: activitiesActions.activityOfItinerary,
  
}

export default connect(null, mapDispatchToProps)( ActionAreaCard)