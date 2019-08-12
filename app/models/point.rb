class Point < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :point, presence: true
end
