// server/src/configs/swagger.config.js

// server/src/configs/swagger.config.js

import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { healthRegistry } from '../documents/health.doc.js';

const registries = [healthRegistry];
const definitions = registries.flatMap((registry) => registry.definitions);

const generator = new OpenApiGeneratorV3(definitions);

export const swaggerDoc = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Map Marker API',
    version: '1.0.0',
    description: 'API documentation for the Map Marker application',
  },
});




