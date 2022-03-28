import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Activities from "../activities/activities";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DirectionsIcon from "@mui/icons-material/Directions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import itineraririesActions from "../../redux/actions/itinerariesActions";
import commentActions from "../../redux/actions/commentActions";
import usersActions from "../../redux/actions/userActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import "./itinerario.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard(props) {
  const [data, setdata] = useState({ element: props.data });
  const { id } = useParams();
  const [itinerario, setItinerario] = useState();
  const [inputText, setInputText] = useState();
  const [modifid, setModifid] = useState();
  const [reload, setReload] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  async function likesOrDislikes(itinerarioId) {
    await props
      .LikeAndDislike(itinerarioId, props.CityId)
      .then((res) => setdata({ element: res }));
    setReload(!reload);
  }
  console.log(props.data);

  async function addComentar(itinerarioId) {
    const commentData = {
      itinerario: itinerarioId,
      comment: inputText,
      cityId: props.CityId,
    };
    await props
      .addComment(commentData)
      .then((res) => setdata({ element: res }), setInputText(""));
    setReload(!reload);
  }
  async function deletecomentar(event) {
    const commentData = {
      commentId: event.target.id,
      comment: modifid,
      cityId: props.CityId,
    };
    await props
      .deleteComment(commentData)
      .then((res) => setdata({ element: res }));
  }
  async function midifidComentar(event) {
    const commentData = {
      commentId: event.target.id,
      comment: modifid,
      cityId: props.CityId,
    };
    await props
      .updateComment(commentData)
      .then((res) => setdata({ element: res }));
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="itinerarioscards">
       
        {data.element.map((city, index) => (
          <Card className="carstyle" key={index}>
            <CardHeader
              className="cardheader"
              avatar={
                <Avatar
                  className="avatar"
                  src={process.env.PUBLIC_URL + `/imagenes/${city.image}`}
                  aria-label="recipe"
                ></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={city.name}
              subheader={city.hashtags}
            />

            <Typography className="time" sx={{ fontSize: 14 }} gutterBottom>
              Time: {city.duration},
            </Typography>

            <CardMedia
              className="imagenIti"
              component="img"
              height="400"
              src={process.env.PUBLIC_URL + `/imagenes/${city.imagen}`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography className="time" sx={{ fontSize: 14 }} gutterBottom>
                Price: {"💰".repeat(parseInt(city.price))}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {props.user ? (
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    likesOrDislikes(city._id);
                  }}
                >
                  {" "}
                  {city.likes.includes(props.user.id) ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteIcon />
                  )}
                </IconButton>
              ) : (
                <FavoriteIcon
                  onClick={() => {
                    Swal.fire("Please register or login");
                  }}
                  sx={{ color: "white" }}
                />
              )}
              <p className="likeslength">{city.likes.length}</p>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon className="arrowmore" />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className="activities">
                <Activities itineraryId={city._id} />
              </CardContent>
              <div className="concomment">
                {city.comments.map((dato, index) => (
                   props.user ? 
                   <>
                   <div className="datename"> <p>{dato.name}</p></div>
                    <div className=" containercomment" key={index}>
                  <Avatar src={dato.profile} className="avatar" aria-label="recipe"></Avatar>
                 {dato.userId === props.user.id ?
                  <div
                  className="comment"
                  type="text"
                  onInput={(event) =>
                    setModifid(event.currentTarget.textContent)
                  }
                  suppressContentEditableWarning={true}
                  contentEditable
                >
           
               <p>{dato.comentary}</p>
                </div>:<div
                className="comment"
                type="text"
                onInput={(event) =>
                  setModifid(event.currentTarget.textContent)
                }
                
              >
         
             {dato.comentary} 
              </div>
                }
                 
                  {dato.userId === props.user.id ? 
                    <>
                  <div style={{ position: "relative" }}>
                    <div
                      onClick={(event) => midifidComentar(event)}
                      id={dato._id}
                      style={{
                        width: " 100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        rigth: 0,
                        backgroundColor: "transparent",
                        zIndex: 10,
                      }}
                    ></div>
                    <IconButton
                      color="primary"
                      sx={{ p: "5px" }}
                      aria-label="directions"
                    >
                      <EditIcon />
                    </IconButton>
                  </div>
                  <div style={{ position: "relative" }}>
                    <div
                      onClick={(event) => deletecomentar(event)}
                      id={dato._id}
                      style={{
                        width: " 100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: "6px",
                        rigth: 0,
                        backgroundColor: "transparent",
                        zIndex: 10,
                      }}
                    ></div>
                    <IconButton
                      color="primary"
                      sx={{ p: "5px" }}
                      aria-label="directions"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div> 
                  </>
                  : null }
                </div>
                </>
                : 
                <div className=" containercomment" key={index}>
                <Avatar src={dato.profile} className="avatar" aria-label="recipe"></Avatar>
                <div
                  className="comment"
                  type="text"
                  onInput={(event) =>
                    setModifid(event.currentTarget.textContent)
                  }
                >
                <p className='dataname'>{dato.name}</p> <p className='datacoment'>{dato.comentary}</p> 
                </div>
              </div>
                     
                ))}
              </div>

              <div className="comments">
                <Paper
                  className="papercomments"
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Create a Comment"
                    inputProps={{ "aria-label": "create a comment" }}
                    onChange={(event) => setInputText(event.target.value)}
                  />

                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  >
                  {props.user ? ( <DirectionsIcon onClick={() => addComentar(city._id)} />) : ( <DirectionsIcon onClick={() =>  Swal.fire("Please register or login")} />)}
                   
                  </IconButton>
                </Paper>
              </div>
            </Collapse>
          </Card>
        ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
  };
};
const mapDispatchToProps = {
  LikeAndDislike: itineraririesActions.LikeAndDislike,
  getOneItinerarios: itineraririesActions.getOneItinerarios,
  getAllUsers: usersActions.getAllUsers,
  addComment: commentActions.addComment,
  deleteComment: commentActions.deleteComment,
  updateComment: commentActions.updateComment,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard);
