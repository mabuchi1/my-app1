class Result < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :point

end