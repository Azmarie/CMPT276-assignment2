class Enroll < ActiveRecord::Base
    belongs_to :student
    belongs_to :course

    # we check in controller if ids are in the db
    # validates :course_id, presence: true

    validates :percentage, presence: true
    validates_numericality_of :percentage, less_than: 100, message: ": range <= 100."
    validates_numericality_of :percentage, greater_than: 0, message: ": range >= 0."


end
