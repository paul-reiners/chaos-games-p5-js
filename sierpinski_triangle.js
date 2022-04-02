function get_sierpinski_triangle_attractors() {
  v_1 = [-1.0, 0.0];
  v_2 = [1.0, 0.0];
  v_3 = [0.0, Math.sqrt(3.0)];
  vs = [v_1, v_2, v_3];

  let attractors = 
    [{"point": vs[0], "compression_ratio": 0.5, "probability": 1.0 / 3.0}, 
     {"point": vs[1], "compression_ratio": 0.5, "probability": 1.0 / 3.0}, 
     {"point": vs[2], "compression_ratio": 0.5, "probability": 1.0 / 3.0}];

  return attractors;
}
