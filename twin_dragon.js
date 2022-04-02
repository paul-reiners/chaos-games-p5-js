M = [[1., 1.], [-1., 1.]];
M_inv = math.inv(M);
d_0 = [0., 0.];
d_1 = [1., 0.];

function w_1(x) {
    return math.multiply(M_inv, math.add(x, d_0));
}

function w_2(x) {
    return math.multiply(M_inv, math.add(x, d_1));
}
