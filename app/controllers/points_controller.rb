class PointsController < ApplicationController
  before_action :set_group

  def index
    @point = Point.new
    @points = @group.points.includes(:user)
    group = @group.id
    @group_id = GroupUser.where(group_id: group)
    @p_point = Point.where(group_id: group)
    @g_name = []
    @p_id = []
    @p_name = []
    @p_p = []
    @group_id.each do |id|
      @g_name << id.user.name
    end
    @p_point.each do |p|
      @p_p << p.point
      @p_id << p.user_id
      @p_name << p.user.name
    end
  end

  def create
    @point = @group.points.new(point_params)
    if @point.save
      redirect_to group_points_path(@group), notice: '得点が送信されました'
    else
      @points = @group.points.includes(:user)
      flash.now[:alert] = '得点を入力してください'
      render :index
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
