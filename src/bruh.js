// len(points) = magic_num
validity_ratio = 0.5
num_points_inside = 0
for elem in points:
	if (polygon.contains(elem)) {
		num_points_inside += 1
	}
if  num_points_inside >= (validity_ratio * magic_num) {
	return green
} else {
	return red
}

// num_red_sets = total amount of invalid
if num_red_sets >= (validity_ratio * total_number_sets) {
	return “Invalid inspection”
}

// instead of an array what if we use a record/tuple?
FeedandValidateTrackPosition(RouteName, arr) {
// let’s say each RouteName maps to a reference polyline in dictionary or key/value pair RouteMap
	poly = RouteMap[RouteName]
}
