const fragment = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform sampler2D u_disp1;

varying vec2 v_texcoord;

vec4 rgba(float r, float g, float b, float alpha) {
    return vec4(r / 255.0, g / 255.0, b / 255.0, alpha);
}

void main(void)
{
    vec2 uv = v_texcoord;
    
    vec2 point = fract(uv * 0.1 + u_time * 0.05);
    vec4 dispColor = texture2D(u_disp1, point);
    float dispX = mix(-0.5, 0.5, dispColor.r);
    float dispY = mix(-0.5, 0.5, dispColor.r);
    
    vec4 tl = rgba(251.0, 41.0, 212.0, 1.0);
    vec4 tr = rgba(0.0, 255.0, 224.0, 1.0);
    vec4 bl = rgba(250.0, 255.0, 0.0, 1.0);
    vec4 br = rgba(231.0, 244.0, 255.0, 1.0);
    
    vec4 tmix = mix(tl, tr, uv.x + dispX);
    vec4 bmix = mix(bl, br, uv.x - dispX);
    
    vec4 color = mix(tmix, bmix, uv.y + dispY);
    
    gl_FragColor = color;
}
`;
