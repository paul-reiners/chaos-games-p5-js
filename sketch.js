function setup() {
  createCanvas(700, 600);

  textAlign(CENTER);
  // background(200);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('Sierpiński triangle');
  sel.option('Twin dragon');
  sel.option('Sierpiński hexagon');
  sel.option('Sierpiński pentagon');
  sel.option('Sierpiński carpet');
  sel.selected('Sierpiński triangle');
  sel.changed(mySelectEvent);
  let s = 'Programmed by Paul Reiners';
  text(s, 10, 540, 280, 80);

    createRotationButton();
}

var attractors = get_sierpinski_triangle_attractors();
var y_offset = 0.5;

function mySelectEvent() {
  let item = sel.value();
  // background(200);
  if (item === 'Sierpiński triangle') {
    attractors = get_sierpinski_triangle_attractors();
    y_offset = 0.5;
  } else if (item === 'Sierpiński hexagon') {
    attractors = get_sierpinski_hexagon_attractors();
    y_offset = 1.1;
  } else if (item === 'Sierpiński pentagon') {
    attractors = get_sierpinski_pentagon_attractors();
    y_offset = 1.0;
  } else if (item === 'Sierpiński carpet') {
    attractors = get_sierpinski_carpet_attractors();
    y_offset = 1.0;
  } else {
    y_offset = 1.0;
  }
  let s = 'Programmed by Paul Reiners';
  stroke('black');
  text(s, 10, 540, 280, 80);
}

function createRotationButton() {
  input = createInput();
  input.position(600, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(rotateMe);

  rotateMe = createElement('h2', 'Rotation?');
  rotateMe.position(600, 5);

  textAlign(CENTER);
  textSize(50);
}

function rotateMe() {
  clear();
  const rotation = parseFloat(input.value());
  attractors[0]['rotation'] = rotation;
}


function draw() {
    n = 1000;
    let item = sel.value();
    if (item === 'Twin dragon') {
      x = d_0

      for (i = 0; i < n; i++) {
        r = Math.random()
        color = '';
        if (r < 0.5) {
              x = w_1(x)
              color = 'red'
        } else {
              x = w_2(x)
              color = 'blue'
        }
        p_x = Math.round(200 * (x[0] + 1.0))
        p_y = Math.round(200 * (x[1] + y_offset))
        stroke(color);
        point(p_x, p_y);
      }
    } else {
      min_x = Number.POSITIVE_INFINITY;
      max_x = Number.NEGATIVE_INFINITY;
      min_y = Number.POSITIVE_INFINITY;
      max_y = Number.NEGATIVE_INFINITY;
      result = ifsp(attractors, n);
      for (i = 0; i < result.length; i++) {
        p = result[i];
        x = p['x'];
        if (x > max_x) {
          max_x = x;
        }
        if (x < min_x) {
          min_x = x;
        }
        y = p['y'];
        if (y > max_y) {
          max_y = y;
        }
        if (y < min_y) {
          min_y = y;
        }
      }
      d_x = max_x - min_x;
      scale_x = 600 / d_x;
      d_y = max_y - min_y;
      scale_y = 600 / d_y;
      x_offset = -min_x;
      y_offset = -min_y;
      for (i = 0; i < result.length; i++) {
        p = result[i];
        x = Math.round(scale_x * (p['x'] + x_offset));
        y = Math.round(scale_y * (p['y'] + y_offset));
        stroke(p['color']);
        point(x, y);
    }
  }
  // createRotationButton();
}
