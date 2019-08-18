class CreateResults < ActiveRecord::Migration[5.0]
  def change
    create_table :results do |t|
      t.integer :total
      t.integer :user_id
      t.integer :group_id
      t.timestamps
    end
  end
end
