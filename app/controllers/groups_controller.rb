class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]
  def index
  end
  
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.user_ids.length <= 4 && @group.save
        redirect_to root_path, notice: 'グループを作成しました'
      else
      redirect_to new_group_path, notice: '名前の入力・また4人以下にしてください'
    end
  end

  def update
    if @group.update(group_params)
      redirect_to group_points_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end

  def set_group
    @group = Group.find(params[:id])
  end
end