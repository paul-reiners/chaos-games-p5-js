function get_sierpinski_hexagon_attractors() {
  compression_ratio = 0.333333333
  colors = ['red', 'yellow', 'blue', 'orange', 'purple', 'green']
  let attractors = get_sierpinski_m_gon_attractors(6, compression_ratio, colors);

  return attractors;
}
