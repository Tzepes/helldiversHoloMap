import * as THREE from 'three';

export function createSector(sectorAngle, innerRadius, outerRadius, numPoints = 4, sectorPoints) {
    const shape = new THREE.Shape();
    shape.moveTo(innerRadius, 0);
    shape.absarc(0, 0, innerRadius, 0, sectorAngle, false);
    shape.lineTo(outerRadius * Math.cos(sectorAngle), outerRadius * Math.sin(sectorAngle));
    shape.absarc(0, 0, outerRadius, sectorAngle, 0, true);
    shape.lineTo(innerRadius, 0);

    const sectorGeometry = new THREE.ShapeGeometry(shape);
    const sectorMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });

    const sector = new THREE.Mesh(sectorGeometry, sectorMaterial);

    const borderMaterial = new THREE.LineBasicMaterial({ color: 0xffffff});
    const points = shape.getPoints()
    const borderGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const border = new THREE.LineLoop(borderGeometry, borderMaterial);

    const sectorGroup = new THREE.Group();
    sectorGroup.add(sector);
    sectorGroup.add(border);

    return sectorGroup;
}

export default createSector;