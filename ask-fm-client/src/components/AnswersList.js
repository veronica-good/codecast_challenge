import {List, IconButton, Button} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import { Answer, Comment } from '../requests';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  }));

export default function AnswersList({answers}){
    const classes = useStyles();

    function deleteAnswer(id){
        Answer.destroy(id);
    }

    function deleteComment(id){
        Comment.destroy(id);
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
                    <Button onClick={()=>deleteAnswer(answer.id)} href="/" color="primary" size="small">
                            DELETE
                    </Button>
                </ListItem>
                <List className={classes.nested} key="comments">
                {/* COMMENTS */}
                {answer.comments.map(comment=>{
                    return(
                    <ListItem key={comment.id}>
                        <ListItemIcon>
                        <InsertCommentOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText>{comment.title}</ListItemText>
                    <IconButton onClick={()=>deleteComment(comment.id)} href="/" size="small">
                            <CancelIcon/>
                    </IconButton>
                    </ListItem>)
                })}

                </List>
                </>
            )
            })}
        </List>
    )
}