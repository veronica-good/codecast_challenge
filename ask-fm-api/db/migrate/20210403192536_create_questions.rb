class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :title, index: {unique: true}

      t.timestamps
    end
  end
end
