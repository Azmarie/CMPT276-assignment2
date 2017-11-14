class Student < ActiveRecord::Base
    has_many :enrolls
    has_many :courses, through: :enrolls

    validates_numericality_of :student_id, greater_than: 0, message: ": ID needs to be positive integer."
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true


end
