function w(x, attractor) {
    let compression_ratio = attractor.compression_ratio;
    
    return [compression_ratio * x[0] + (1.0 - compression_ratio) * attractor['point'][0], 
            compression_ratio * x[1] + (1.0 - compression_ratio) * attractor['point'][1]];
}



function ifsp(attractors, n) {
    xs = new Array(n).fill(0);
    ys = new Array(n).fill(0);
    x = attractors[0]['point'];
    m = attractors.length;
    for (i = 0; i < n; i++) {
        xs[i] = x[0];
        ys[i] = x[1];
        prob_sum = 0.0;
        attractor_index = null;
        r = Math.random();
        for (j = 0; j < m; j++) {
            prob_sum += attractors[j]['probability'];
            if (prob_sum >= r) {
                attractor_index = j

                break;
            }
        }
        x = w(x, attractors[attractor_index]);
      }
     
     return [xs.slice(20), ys.slice(20)];
  }
