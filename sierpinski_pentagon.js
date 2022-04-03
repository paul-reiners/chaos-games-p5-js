function get_sierpinski_pentagon_attractors() {
  compression_ratio = 1.0 / 2.7;
  colors = ['red', 'yellow', 'blue', 'orange', 'purple'];
  let attractors = get_sierpinski_m_gon_attractors(5, compression_ratio, colors);

  return attractors;
}
