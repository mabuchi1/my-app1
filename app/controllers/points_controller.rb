class PointsController < ApplicationController
  before_action :set_group

  def index
    @point = Point.new
    @points = @group.points.includes(:user)
    group = @group.id
    @group_id = GroupUser.where(group_id: group)
    @g_name = []
    @p_name = []
    @rank = []
    @res1 = 0
    @res2 = 0 
    @res3 = 0
    @res4 = 0
    gon.one = @one = 1
    gon.two = @two = 2
    gon.three = @three = 3
    gon.four = @four = 4
    gon.flag = @flag = 0
    @user_id = ""

    @group_id.each do |id|
      @g_name << id.user.name
    end
    gon.name0 = @g_name[0]
    gon.name1 = @g_name[1]
    gon.name2 = @g_name[2]
    gon.name3 = @g_name[3]

    @points.each do |point|
      if point.user.name == @g_name[0]
        @user_id = point.user.id
        @p_id = point.id
        @res1 += point.point
      end
      if point.user.name == @g_name[1]
        @user1_id = point.user.id
        @p_id1 = point.id
        @res2 += point.point
      end
      if point.user.name == @g_name[2]
        @user2_id = point.user.id
        @p_id2 = point.id
        @res3 += point.point
      end
      if point.user.name == @g_name[3]
        @user3_id = point.user.id
        @p_id3 = point.id
        @res4 += point.point
      end
    end

    @rank << @res1
    @rank << @res2
    @rank << @res3
    @rank << @res4
    @rank.sort
    gon.rank0 = @rank[0]
    gon.rank1 = @rank[1]
    gon.rank2 = @rank[2]
    gon.rank3 = @rank[3]

    gon.res1 = @res1
    gon.res2 = @res2
    gon.res3 = @res3
    gon.res4 = @res4
    
  end

  def create
    @point = @group.points.new(point_params)
    if @point.save
      respond_to do |format|
        format.json
        format.html { redirect_to group_points_path(@group) }
      end
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
