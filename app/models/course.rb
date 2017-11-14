class Course < ActiveRecord::Base
    has_many :enrolls
    has_many :students, through: :enrolls

    validates :course_id, uniqueness: true, presence: true
end
