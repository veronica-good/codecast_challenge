# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.delete_all
Answer.delete_all
Comment.delete_all

num_q=10
num_ac=5

num_q.times do
    created_at=Faker::Date.backward(days: 365)
    q=Question.create(
        title: Faker::GreekPhilosophers.unique.quote,
        created_at: created_at
    )
    if q.valid?
        q.answers = num_ac.times.map do
            a=Answer.new(
                title: Faker::Lorem.unique.sentence
            )
        end
        q.answers.each do |answer|
            answer.comments= num_ac.times.map do
                Comment.new(
                    title: Faker::Lorem.unique.sentence
                )
            end
        end
    end
end

puts "Created #{Question.count} questions, #{Answer.count} answers, #{Comment.count} comments"