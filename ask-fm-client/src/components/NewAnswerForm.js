import {Answer} from '../requests';
import {Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15ch',
      },
    },
  }));

export default function NewAnswerForm(props){
    const classes = useStyles();
    const {id}=props;

    const handleSubmit = event=>{
        const fd = new FormData(event.currentTarget);
        const params = {
            title: fd.get('title')
        }
        createAnswer(id, params);
        event.currentTarget.reset()
    }

    function createAnswer(id, params){
        Answer.create(id, params).then(answer=>{
            console.log('Answer created', answer.id, id)
        })
    }

    return(
        <>
        <Typography variant="subtitle2">New Answer</Typography>
        <form onSubmit={event=>handleSubmit(event)} className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Your answer" variant="outlined" name="title" id="title" size="small"/>
                <Button variant="contained"type="submit">Submit</Button>
        </form>
        </>
    )
}