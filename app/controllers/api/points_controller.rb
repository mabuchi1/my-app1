class Api::PointsController < ApplicationController
  before_action :set_group

  def index
    @p = @group.points.includes(:user)

    @group_id = GroupUser.where(group_id: @group)
    @g_name = []
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

    @group_id.each do |id|
      @g_name << id.user.name
    end
    gon.name0 = @g_name[0]
    gon.name1 = @g_name[1]
    gon.name2 = @g_name[2]
    gon.name3 = @g_name[3]

    @p.each do |point|
      if point.user.name == @g_name[0]
        @res1 += point.point
      end
      if point.user.name == @g_name[1]
        @res2 += point.point
      end
      if point.user.name == @g_name[2]
        @res3 += point.point
      end
      if point.user.name == @g_name[3]
        @res4 += point.point
      end
    end
    @rank << @res1
    @rank << @res2
    @rank << @res3
    @rank << @res4
    gon.rank0 = @rank[0]
    gon.res1 = @res1
    gon.rank1 = @rank[1]
    gon.res2 = @res2
    gon.rank2 = @rank[2]
    gon.res3 = @res3
    gon.rank3 = @rank[3]
    gon.res4 = @res4

    if ( params[:name] == @g_name[0])
        respond_to do |format|
          format.html
          format.json {  @point = @group.points.includes(:user).where('id > ? and user_id = ?', params[:id], params[:user_id]) }
        end
      end
        if ( params[:name1] == @g_name[1])
        respond_to do |format|
          format.html
          format.json {  @point1 = @group.points.includes(:user).where('id > ? and user_id = ?', params[:id1], params[:user1_id]) }
        end
    end
    if ( params[:name2] == @g_name[2])
      respond_to do |format|
        format.html
        format.json {  @point2 = @group.points.includes(:user).where('id > ? and user_id = ?', params[:id2], params[:user2_id]) }
      end
  end
  if ( params[:name3] == @g_name[3])
    respond_to do |format|
      format.html
      format.json {  @point3 = @group.points.includes(:user).where('id > ? and user_id = ?', params[:id3], params[:user3_id]) }
    end
end
  end

  private
  def set_group
    @group = Group.find(params[:group_id])
  end
end