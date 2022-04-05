function w(x, attractor) {
    let compression_ratio = attractor.compression_ratio;

    if ('rotation' in attractor) {
        let unrotated_new_x = 
          compression_ratio * x[0] + 
            (1.0 - compression_ratio) * attractor['point'][0];
        let unrotated_new_y = 
          compression_ratio * x[1] + 
            (1.0 - compression_ratio) * attractor['point'][1];
        let dx = attractor['point'][0] - unrotated_new_x;
        let dy = attractor['point'][1] - unrotated_new_y;
        let d = Math.sqrt(dx**2 + dy**2);
        let theta_1 = Math.atan2(dy, dx);
        let theta_2 = attractor['rotation'] * Math.PI / 180.0;
        let theta = theta_1 + theta_2;
        let new_dx = d * Math.cos(theta);
        let new_dy = d * Math.sin(theta);

        return [attractor['point'][0] + new_dx, attractor['point'][1] + new_dy];
    } else {
        return [compression_ratio * x[0] + 
                  (1.0 - compression_ratio) * attractor['point'][0], 
                compression_ratio * x[1] + 
                  (1.0 - compression_ratio) * attractor['point'][1]];
    }
}


function ifsp(attractors, n) {
    xs = new Array(n).fill(0);
    ys = new Array(n).fill(0);
    points = new Array(n)
    x = attractors[0]['point'];
    m = attractors.length;
    for (i = 0; i < n; i++) {
        p = {}
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
        attractor = attractors[attractor_index]
        x = w(x, attractor);
        p['color'] = attractor['color'];
        p['x'] = x[0]; 
        p['y'] = x[1]
        points[i] = p;
      }
     
     return points.slice(20);
  }
