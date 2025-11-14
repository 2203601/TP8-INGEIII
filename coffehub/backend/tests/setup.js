// tests/setup.js (CommonJS porque Jest NO soporta ESM aquí)
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: '.env.test' });

// Configuración de entorno
process.env.NODE_ENV = 'test';
process.env.PORT = process.env.PORT || '4001';

// Verificar que MONGODB_URI esté definida
if (!process.env.MONGODB_URI) {
  console.error('❌ ERROR: MONGODB_URI no está definida en .env.test');
  process.exit(1);
}

console.log('✅ Variables de entorno cargadas correctamente');
console.log('📝 NODE_ENV:', process.env.NODE_ENV);
console.log('📝 PORT:', process.env.PORT);
console.log('📝 MONGODB_URI:', process.env.MONGODB_URI ? 'Definida ✅' : 'No definida ❌');
