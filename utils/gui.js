import { GUI } from 'dat.gui';

const gui = new GUI();

export function createGUIPosRotFolder(obj, name) {
    const folder = gui.addFolder(name);
    folder.add(obj.position, 'x', -30, 30, 0.1);
    folder.add(obj.position, 'y', -30, 30, 0.1);
    folder.add(obj.position, 'z', -30, 30, 0.1);
    folder.add(obj.rotation, 'x', -30, 30, 0.1);
    folder.add(obj.rotation, 'y', -30, 30, 0.1);
    folder.add(obj.rotation, 'z', -30, 30, 0.1);
    folder.open();
}


export default gui;