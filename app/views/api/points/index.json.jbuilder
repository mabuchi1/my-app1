json.array! @point do |point|
  json.point point.point
  json.user_name point.user.name
  json.id point.id
  json.user_id point.user.id
end

json.array! @point1 do |point|
  json.point point.point
  json.user_name point.user.name
  json.id point.id
  json.user_id point.user.id
end

json.array! @point2 do |point|
  json.point point.point
  json.user_name point.user.name
  json.id point.id
  json.user_id point.user.id
end

json.array! @point3 do |point|
  json.point point.point
  json.user_name point.user.name
  json.id point.id
  json.user_id point.user.id
end