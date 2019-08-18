class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :points
  validates :name, presence: true, uniqueness: true
            :check_record

  def check_record
    if group && group.group_users.users.count > 5
      errors.add(:group, "人数が越えています")
    end
  end

end
