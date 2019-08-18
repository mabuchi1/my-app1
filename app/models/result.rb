class Result < ApplicationRecord
  belongs_to :group through: :group_user
  belongs_to :user
  has_many :point

end