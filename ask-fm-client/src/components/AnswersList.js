import {List, Button} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import { Answer } from '../requests';

const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

export default function AnswersList({answers}){
    const classes = useStyles();

    function deleteAnswer(id){
        Answer.destroy(id);
    }
    return(
        <List className={classes.nested} key="answers">
            {answers.map(answer=>{
            return(
                <>
                <ListItem key={answer.id}>
                    <ListItemIcon>
                        <QuestionAnswerOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>{answer.title}</ListItemText>
                    <Button onClick={()=>deleteAnswer(answer.id)} href="/" color="primary">
                            DELETE
                    </Button>
                </ListItem>
                <List className={classes.nested} key="comments">
                {answer.comments.map(comment=>{
                    return(
                    <ListItem key={comment.id}>
                        <ListItemIcon>
                        <InsertCommentOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>{comment.title}</ListItemText>
                    </ListItem>)
                })}
                </List>
                </>
            )
            })}
        </List>
    )
}