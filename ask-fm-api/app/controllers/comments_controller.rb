class CommentsController < ApplicationController
    def destroy
        comment=Comment.find params[:id]
        if comment.destroy
            head :ok
        else
            head :bad_request
        end
    end
end
