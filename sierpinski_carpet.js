function get_sierpinski_carpet_attractors() {
  compression_ratio = 0.333333333;
  palette = ['red', 'yellow', 'blue', 'orange', 'purple', 'green', 'magenta', 'mediumturquoise'];
  xs = [-150.0, -150.0, -150.0, 0.0, 0.0, 150.0, 150.0, 150.0]
  ys = [-150.0, 0.0, 150.0, -150.0, 150.0, -150.0, 0.0, 150.0]
  n = 8;
  attractors = new Array(n)
  for (i = 0; i < n; i++) {
      v = [xs[i], ys[i]]
      attractors[i] = {'point': v, 'compression_ratio': compression_ratio, 'probability': 1.0 / n, 'color': palette[i]};
  }

  return attractors;
}
