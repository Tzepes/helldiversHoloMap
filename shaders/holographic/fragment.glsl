uniform float uTime;

varying vec3 vPosition;
void main() {

    // Stripes
    float stripes = mod((vPosition.y - uTime * 0.001) * 5.0, 1.0);
    stripes = pow(stripes, 2.0);

    //final color
    gl_FragColor = vec4(1.0, 1.0, 1.0, stripes);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>

    // // Calculate the hexagonal pattern
    // vec2 hexCoord = vec2(
    //     dot(vPosition.xy, vec2(1.0, 0.0)),
    //     dot(vPosition.xy, vec2(0.5, sqrt(3.0) / 2.0))
    // );
    // vec2 hexCell = floor(hexCoord + 0.5);
    // vec2 hexOffset = hexCoord - hexCell;

    // // Calculate the distance to the center of the hexagon
    // float dist = 0.05 * max(abs(hexOffset.x), abs(hexOffset.x - hexOffset.y));

    // // Use the distance to create a pattern
    // float pattern = smoothstep(0.02, 0.03, dist);

    // // Set the fragment color
    // gl_FragColor = vec4(vec3(pattern), 1.0);
}