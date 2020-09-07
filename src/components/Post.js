import React,{useState} from 'react';
import { toast, ToastContainer } from "react-toastify";
//import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Popup from "reactjs-popup";
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    maxHeight: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function RecipeReviewCard(props) {
  const classes = useStyles();
  
  const [title, setTitle]=useState(props.user.title)
  const [detail, setDetail]=useState(props.user.detail)
  const [status,setStaus]=useState( props.user.status)
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteevent=(id)=>{  
    axios.post("users/delete-event",{_id : id}).then((res)=>{
      console.log(res.result)
    }).catch((err)=>{
      console.log(err.result)
    })
  }
  const updateDetail=(id)=>{
    setStaus(!status)
    axios.post("users/update-event",{_id : id, title : title, detail: detail}).then((res)=>{
      console.log(res.result)
    }).catch((err)=>{
      console.log(err.result)
    })
  }
  return (
    <Card className={classes.root}>
      
        <CardContent>
       
            <Typography paragraph>
          <b>Title</b> { props.user.title}
          </Typography>
          <Typography heading>
          <b>detail</b> {props.user.detail}
          </Typography>
          <Typography>
          <b>Created At:</b> {props.user.createdAt}
          </Typography>
          <DeleteIcon onClick={()=> deleteevent(props.user._id)}/>      
            <button onClick={()=>updateDetail(props.user._id)}>{status ? "Active" : "DisActive"}</button>
            </CardContent>
    </Card>
  )
}