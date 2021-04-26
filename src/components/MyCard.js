import { CardContent, Typography,Card, CardActions, Button,Grid, Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText,Paper } from "@material-ui/core";
import React,{Fragment, useState} from "react";
import { getMatchDetail } from "../Api/Api";

const MyCard=({ match }) => {
    const [detail,setDetail]=useState({});
    const[open,setOpen]=useState(false);


    const handleClick=(id)=>{
        getMatchDetail(id)
        .then((data)=> {
        console.log(data);
        setDetail(data);
        handleOpen();
        })
        .catch(error=>console.log(error));
    }
   
    const getMatchCart=()=>{
        return (
            <Card style={{marginTop:20,background:"#fff",color:"#000"}}>
                <CardContent>
                <Grid container justify="center" alignItems="center" spacing={4}>
                <Grid item>
                    <img
                        style={{ width: 85 }}
                        src="data:image/jpeg;base64,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"
                        alt="hi!"
                    />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{color:"#3f50b5",fontFamily:"popins",fontWeight:"bolder"}} >{match["team-1"]}</Typography>
                    </Grid>
                    <Grid item>
                    <img
                        style={{ width: 115 }}
                        src="https://www.onlygfx.com/wp-content/uploads/2020/07/comic-vs-versus-2.png"
                        alt="hi!"
                    />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{color:"#f44336",fontFamily:"popins",fontWeight:"bolder"}} >{match["team-2"]}</Typography>
                    </Grid>
                    <Grid item>
                    <img
                        style={{ width: 85 }}
                        src="data:image/png;base64,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"
                        alt="hi!"
                    />
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
                 <Grid container justify="center">
                 <Button 
                 onClick={()=>{
                     handleClick(match.unique_id);
                 }}
                 item variant="contained" color="secondary">
                        Match Detail
                    </Button>
                    <Button style={{marginLeft:30}} item variant="contained" color="primary">
                       Start Time : {new Date(match.dateTimeGMT).toLocaleString() }
                    </Button>
                 </Grid>
                </CardActions>
            </Card>


        );
    };
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }


    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Match Detail"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <Typography>
            {detail.stat}
        </Typography>
        <Typography>
            Match:
            <span style={{fontStyle:"italic",fontWeight:"bold"}}>
            {detail.matchStarted ? " Started" : " Not started"}{" "}
            </span>
        </Typography>
        <Typography>
            Score:
            <span style={{fontStyle:"italic",fontWeight:"bold"}}>
            {detail.score}
            </span>
        </Typography>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="secondary" autoFocus>
                Close
            </Button>
        </DialogActions>
        </Dialog>
    );

   
    return <Fragment>
        {getMatchCart()}
        {getDialog()}
    </Fragment>
};
export default MyCard;