function get_koch_curve_attractors() {
  compression_ratio = 0.333333333;
  palette = ['red', 'yellow', 'blue', 'orange'];
  xs = [43.0, -43.0, 150.0, -150.0];
  ys = [8.0, 8.0, -30.0, -30.0];
  rotations = [59.99999999999999, -59.99999999999999, 0.0, 0.0]
  n = 4;
  attractors = new Array(n)
  for (i = 0; i < n; i++) {
      v = [xs[i], ys[i]]
      attractors[i] = {'point': v, 'compression_ratio': compression_ratio, 'probability': 1.0 / n, 'color': palette[i], 'rotation': rotations[i]};
  }
  
  return ifsp(attractors, 100);
}
