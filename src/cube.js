// 1. Define and export a cube factory class
export class CubeFactory {

  // 2. Define a static create method to return new cubes
  static create(spec) {

    // 3. Setup default values or use arguments
    spec = spec || {};
    var name = spec.name = "cube";  
    var color = spec.color || "#FF00FF";
    var width = spec.width || 1;
    var height = spec.height || 1;
    var depth = spec.depth || 1;
    var translateX = spec.translateX || 0.0;
    var translateY = spec.translateY || 0.0;
    var translateZ = spec.translateZ || 0.0;

    // 4. Use ThreeJS to define a 3D cube
    var geometry = new THREE.BoxGeometry(width, height, depth);
    var material = new THREE.MeshBasicMaterial({ color: color });
    var cube = new THREE.Mesh(geometry, material);

    // 5. Use the name property to specify a type
    cube.name = name;

    // 6. Using ThreeJS methods on the cube, move it to a specific offset
    cube.translateX(translateX);
    cube.translateY(translateY);
    cube.translateZ(translateZ);

    // 7. Return the new cube
    return cube;
  }
}