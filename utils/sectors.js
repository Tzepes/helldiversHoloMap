import * as THREE from 'three';

export function createSector(sectorAngle, innerRadius, outerRadius) {
    const shape = new THREE.Shape();
    shape.moveTo(innerRadius, 0);
    shape.absarc(0, 0, innerRadius, 0, sectorAngle, false);
    shape.lineTo(outerRadius * Math.cos(sectorAngle), outerRadius * Math.sin(sectorAngle));
    shape.absarc(0, 0, outerRadius, sectorAngle, 0, true);
    shape.lineTo(innerRadius, 0);

    const sectorGeometry = new THREE.ShapeGeometry(shape);

    const sectorMaterial = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });

    const sector = new THREE.Mesh(sectorGeometry, sectorMaterial);

    return sector;
}

export default createSector;