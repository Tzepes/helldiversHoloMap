uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;

float random2D(vec2 value) {
    return fract(sin(dot(value.xy, vec2(12.9898, 78.233)))* 43758.5453123);
}

void main() {
    //Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    //Glitch animation
    // float glitchStrenght = 3.0;
    // modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrenght;
    // modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrenght;

    //final position
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

        //Model normal
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    // Varyings
    vPosition = modelPosition.xyz;
    vNormal = modelNormal.xyz;
}