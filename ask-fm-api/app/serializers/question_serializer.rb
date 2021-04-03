class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at
  has_many :answers

  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :title, :created_at
    has_many :comments

    class CommentSerializer < ActiveModel::Serializer
      attributes :id, :title, :created_at
    end
    
  end

end
