class Point < ApplicationRecord
  belongs_to :group
  belongs_to :user
  belongs_to :result
  validates :point, presence: true 
end
