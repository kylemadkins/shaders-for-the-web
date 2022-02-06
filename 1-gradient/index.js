const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);

sandbox.load(fragment);

sandbox.setUniform("u_disp1", "./disp1.jpg");
