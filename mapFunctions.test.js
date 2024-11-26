const { calculateDistance, getStartLocation, calculateRoute } = require('./mapFunctions');

describe('Pruebas para la función getStartLocation', () => {
  it('Debería devolver la ubicación correcta de inicio', () => {
    const startLocation = getStartLocation();
    expect(startLocation).toEqual({ lat: 19.4326, lng: -99.1332 });
  });
});

describe('Pruebas para la función calculateDistance', () => {
  it('Debe calcular la distancia correcta entre dos puntos', () => {
    const pointA = { lat: 19.4326, lng: -99.1332 }; // Ciudad de México
    const pointB = { lat: 20.6597, lng: -103.3496 }; // Guadalajara
    const distance = calculateDistance(pointA, pointB);
    expect(distance).toBeCloseTo(461.07, 1); // La distancia es aproximadamente 461.07 km
  });

  it('Debe lanzar un error si no se proporcionan ubicaciones válidas', () => {
    const pointA = null; // Ubicación inválida
    const pointB = { lat: 20.6597, lng: -103.3496 }; // Guadalajara
    expect(() => calculateDistance(pointA, pointB)).toThrow('Las ubicaciones de inicio o destino son inválidas');
  });
});

describe('Pruebas para la función calculateRoute', () => {
  it('Debe calcular correctamente una ruta entre dos puntos', () => {
    const startLocation = { lat: 19.4326, lng: -99.1332 }; // Ciudad de México
    const endLocation = { lat: 20.6597, lng: -103.3496 }; // Guadalajara
    const route = calculateRoute(startLocation, endLocation);
    expect(route.start).toEqual(startLocation);
    expect(route.end).toEqual(endLocation);
    expect(route.distance).toBeCloseTo(461.07, 1); // Distancia calculada
  });

  it('Debe lanzar un error si no se proporcionan ubicaciones válidas', () => {
    const startLocation = null; // Ubicación inválida
    const endLocation = { lat: 20.6597, lng: -103.3496 }; // Guadalajara
    expect(() => calculateRoute(startLocation, endLocation)).toThrow('Las ubicaciones de inicio o destino son inválidas');
  });
});
