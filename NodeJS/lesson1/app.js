function findRoots(a, b, c) {
        const D = b * b - 4 * a * c;
        if (D > 0) {
            const x1 = (-b + Math.sqrt(D)) / (2 * a);
            const x2 = (-b - Math.sqrt(D)) / (2 * a);
            return `Ikkita haqiqiy ildiz: x1 = ${x1}, x2 = ${x2}`;
        } else if (D === 0) {
            const x = -b / (2 * a);
            return `Bitta ildiz: x = ${x}`;
        } else {
            return 'Haqiqiy ildizlar yoq';
        }
    }

module.exports = findRoots;