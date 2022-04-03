function get_sierpinski_m_gon_attractors(m, compression_ratio, palette) {
    attractors = new Array(m)
    for (i = 0; i < m; i++) {
        v = [Math.sin(i * 2 * Math.PI / m), Math.cos(i * 2 * Math.PI / m)]
        attractors[i] = {'point': v, 'compression_ratio': compression_ratio, 'probability': 1.0 / m, 'color': palette[i]};
    }
    
    return attractors;
}
