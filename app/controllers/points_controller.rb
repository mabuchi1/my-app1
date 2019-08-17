class PointsController < ApplicationController
  before_action :set_group

  def index
    @point = Point.new
    @points = @group.points.includes(:user)
    group = @group.id
    @group_id = GroupUser.where(group_id: group)
    @p_point = Point.where(group_id: group)
    @g_name = []
    @p_name = []
    @rank = []
    @res1 = 0
    @res2 = 0 
    @res3 = 0
    @res4 = 0
    @one = 1
    @two = 2
    @three = 3
    @four = 4
    @flag = 0

    @group_id.each do |id|
      @g_name << id.user.name
    end
    
    @p_point.each do |p|
      @p_name << p.user.name
    end
  end

  def create
    @point = @group.points.new(point_params)
    if @point.save
      redirect_to group_points_path(@group), notice: '得点が送信されました'
    else
      @points = @group.points.includes(:user)
      redirect_to group_points_path(@group), notice: '得点を入力してください'
    end
  end

  private

  def point_params
    params.require(:point).permit(:point).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
