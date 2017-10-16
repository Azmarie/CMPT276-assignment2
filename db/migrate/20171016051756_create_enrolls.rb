class CreateEnrolls < ActiveRecord::Migration
  def change
    create_table :enrolls do |t|
      t.integer :student_id
      t.string :course_id
      t.decimal :percentage
      t.string :lettergrade

      t.timestamps null: false
    end
    add_index :enrolls, :student_id
    add_index :enrolls, :course_id
  end
end
