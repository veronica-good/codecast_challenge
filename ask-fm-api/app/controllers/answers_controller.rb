class AnswersController < ApplicationController
    def create
        question=Question.find params[:question_id]
        answer=Answer.new params.require(:answer).permit(:title);
        answer.question=question
        if answer.save
            render json:answer
        else
            render(
                json: {errors: answer.errors},
                status: 422
            )
        end
    end

    def destroy
        answer=Answer.find params[:id]
        if answer.destroy
            head :ok
        else
            head :bad_request
        end
    end
end
