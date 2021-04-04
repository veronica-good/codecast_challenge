class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at
  has_many :answers

  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :title, :created_at, :comments
  end

end
