import React, {useState} from 'react';
import {Question} from '../requests';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



export default function NewQuestionForm(){
    const classes = useStyles();
    const [errors, setErrors]=useState({});

    const handleSubmit=event=>{
        // event.preventDefault();
        const fd= new FormData(event.currentTarget);
        const params={
            title: fd.get('title')
        }
        createQuestion(params);
        event.currentTarget.reset();
    }

    const createQuestion=(params)=>{
        Question.create(params)
            .then(question=>{
                if(question.errors){
                    console.log("Errors", question.errors)
                    setErrors(question.errors)
                }
                if(question.id){
                    console.log(question)
                }
            })
    }

    return (
        <>

        <Typography variant="h4">New Question</Typography>

        <form onSubmit={event=>handleSubmit(event)} className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Your question" variant="outlined" name="title" id="title"/>
            <Button variant="contained"type="submit">Submit</Button>
        </form>

        </>
    );
}