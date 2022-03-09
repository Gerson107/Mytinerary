import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './itinerario.css'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard(props) {
 

const [data, setdata] = useState({element:props.data.element.Itinerarios})
console.log(data.element)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <> 
    <div clasName="itinerarioscards">
    {data.element.map((city) => (
     
    <Card className="carstyle">
      <CardHeader className="cardheader"
        avatar={ 
          <Avatar className="avatar" src={process.env.PUBLIC_URL + `/imagenes/${city.image}`} aria-label="recipe">
         
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       
        title={city.name}
       subheader= {city.hashtags}
       
      />
      <Typography className="time" sx={{ fontSize: 14 }} gutterBottom>
        Time: {city.duration}
      </Typography>
      
      <CardMedia className="imagenIti"
        component="img"
        height="400"
        src={process.env.PUBLIC_URL + `/imagenes/${city.imagen}`}
        alt="Paella dish"
      />
      <CardContent>
      <Typography className="time" sx={{ fontSize: 14 }} gutterBottom>
      <p>Price: {"💰".repeat(parseInt(city.price))}</p>
    </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Under Constructions</Typography>
        </CardContent>
      </Collapse>
    </Card>
 
    ))}
      </div>
    </>
  );
}
