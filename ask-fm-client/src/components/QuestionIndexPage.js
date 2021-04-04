import {Component} from 'react';
import {Question} from '../requests';
import Grid from '@material-ui/core/Grid';
import QuestionsList from './QuestionsList';
import NewQuestionForm from './NewQuestionForm'


export default class QuestionIndexPage extends Component {
    constructor(props){
        super(props);
        this.state={
            questions: []
        }
    }

    componentDidMount(){
        Question.index()
            .then(questions=>{
                console.log(questions)
                this.setState(state=>{
                    return{
                        questions: questions
                    }
                })
            })
    }

    
    render(){

        return(
            <>
            
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <NewQuestionForm/>
                <QuestionsList questions={this.state.questions}/>
            </Grid>
            </>
        )
    }
}