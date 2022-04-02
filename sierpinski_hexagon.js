function get_sierpinski_hexagon_attractors() {
  compression_ratio = 0.333333333
  let attractors = get_sierpinski_m_gon_attractors(6, compression_ratio);

  return attractors;
}
