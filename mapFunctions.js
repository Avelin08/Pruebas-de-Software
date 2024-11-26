// Función para calcular la distancia entre dos puntos geográficos
function calculateDistance(pointA, pointB) {
    if (!pointA || !pointB || !pointA.lat || !pointA.lng || !pointB.lat || !pointB.lng) {
      throw new Error('Las ubicaciones de inicio o destino son inválidas');
    }
  
    const R = 6371; // Radio de la Tierra en km
    const lat1 = pointA.lat;
    const lon1 = pointA.lng;
    const lat2 = pointB.lat;
    const lon2 = pointB.lng;
  
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Distancia en km
  }
  
  // Función para obtener la ubicación de inicio
  function getStartLocation() {
    return { lat: 19.4326, lng: -99.1332 }; // Ciudad de México
  }
  
  // Función para calcular la ruta entre dos puntos
  function calculateRoute(startLocation, endLocation) {
    const distance = calculateDistance(startLocation, endLocation);
    return {
      start: startLocation,
      end: endLocation,
      distance: distance
    };
  }
  
  module.exports = { calculateDistance, getStartLocation, calculateRoute };
  