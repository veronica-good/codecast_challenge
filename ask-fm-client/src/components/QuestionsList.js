import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import AnswersList from './AnswersList'
import NewAnswerForm from './NewAnswerForm';
import {Divider} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function QuestionsList(props) {
    let {questions} = props
    const classes = useStyles();

    return (
        <List
        component="nav"
        key="questions"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            All Questions
            </ListSubheader>
        }
        className={classes.root}
        >
            {questions.map(question=>{
                return(
                    <>
                        <ListItem key={question.id}>
                            <ListItemIcon>
                                <ContactSupportOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={question.title} />
                        </ListItem>
                        <NewAnswerForm id={question.id}/>
                        <AnswersList answers={question.answers}/>
                        <Divider/>
                    </>
                )
            })}
        </List>
    );
}
