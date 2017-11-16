class CoursesController < ApplicationController
  before_action :set_course, only: [:show, :edit, :update, :destroy]

  # GET /courses
  # GET /courses.json
  def index
    @courses = Course.all
  end

  # GET /courses/1
  # GET /courses/1.json
  def show
      #how to initialize enroll and studetns
      @course_id = params[:id]
      @course = Course.find(@course_id)
      @enroll = Enroll.all
      @student = Student.all
     # where course id = enrolls course id
      @enrolled = Enroll.select('enrolls.percentage, enrolls.lettergrade, students.name').where(course_id: @course.course_id).joins("INNER JOIN students ON enrolls.student_id = students.student_id")

  end

  # GET /courses/new
  def new
    @course = Course.new
  end

  # GET /courses/1/edit
  def edit
  end

  # GET... render the histgoram html.
  def histogram
      print params[:course_id]
      @course_id = params[:course_id]
      @course = Course.find(@course_id)

      @enrollsForClass = Enroll.select('enrolls.percentage').where(course_id: @course.course_id)
      @percentages = []
      @enrollsForClass.each do |enroll|
          @percentages.push(enroll.percentage)
      end
  end

  #POST for grades changes
  def changeGrades
      print "here m here"
      print params[:max]
      # takes the new grades criteris.
      # goes through all enrolls. and modifies the grade according to the new grades criteria.
      grade_bounds = [
          {max: params[:max], min: params[:A_plus], letter: 'A+'},
          {max: params[:A_plus], min: params[:A], letter: 'A'},
          {max: params[:A], min: params[:A_mius], letter: 'A-'},
          {max: params[:A_minus], min: params[:B_plus], letter: 'B+'},
          {max: params[:B_plus], min: params[:B], letter: 'B'},
          {max: params[:B], min: params[:B_minus], letter: 'B-'},
          {max: params[:B_minus], min: params[:C_plus], letter: 'C+'},
          {max: params[:C_plus], min: params[:C], letter:'C'},
          {max: params[:C], min: params[:C_minus], letter: 'C-'},
          {max: params[:C_minus], min: params[:D], letter: 'D'},
          {max: params[:D], min: params[:F], letter:'F'}
      ]

      @enrollsForClass = Enroll.where(course_id: @courseid)
      @enrollsForClass.each do |enroll|
          grade_bounds.each do |grade_bound|
              check_upper_bound = grade_bound[:letter] == 'A+' ?
                enroll.percentage <= grade_bound[:max]:
                enroll.percentage < grade_bound[:max]
              check_lower_bound = enroll.percentage >= grade_bound[:min]
              if check_lower_bound and check_upper_bound
                  enroll.lettergrade = grade_bound[:letter]
                  enroll.save
                  break
              end
          end
      end
  end


  # POST /courses
  # POST /courses.json
  def create
    @course = Course.new(course_params)

    respond_to do |format|
    if @course.save
        format.html { redirect_to @course, notice: 'Course was successfully created.' }
        format.json { render :show, status: :created, location: @course }
    else
        format.html { render :new }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /courses/1
  # PATCH/PUT /courses/1.json
  def update
    respond_to do |format|
      if @course.update(course_params)
        format.html { redirect_to @course, notice: 'Course was successfully updated.' }
        format.json { render :show, status: :ok, location: @course }
      else
        format.html { render :edit }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /courses/1
  # DELETE /courses/1.json
  def destroy
    @course.destroy
    respond_to do |format|
      format.html { redirect_to courses_url, notice: 'Course was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def course_params
      params.require(:course).permit(:course_id, :description)
    end
end
