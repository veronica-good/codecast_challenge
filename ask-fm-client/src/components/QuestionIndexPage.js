import {Component} from 'react';
import {Question} from '../requests';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import QuestionsList from './QuestionsList'

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
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <QuestionsList questions={this.state.questions}/>
            </Grid>
        )
    }
}