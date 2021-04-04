class QuestionsController < ApplicationController
    def index
        questions=Question.all.order created_at: :desc
        render json: questions
    end

    def create
        question = Question.new question_params
        if question.save
            render json:{id: question.id}
        else
            render(
                json: {errors: question.errors},
                status: 422
            )
        end
    end

    private
    def question_params
        params.require(:question).permit(:title)
    end
end
