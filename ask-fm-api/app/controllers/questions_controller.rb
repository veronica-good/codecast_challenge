class QuestionsController < ApplicationController
    def index
        questions=Question.all.order created_at: :desc
        render json: questions
    end
end
