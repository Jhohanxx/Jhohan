
import React from 'react';
import type { GasLaw } from './types';

export const GAS_LAWS: GasLaw[] = [
  {
    id: 'boyle',
    name: 'Ley de Boyle',
    description: 'A temperatura y número de moles constantes, el volumen de un gas es inversamente proporcional a la presión que ejerce. Esto significa que si la presión aumenta, el volumen disminuye, y viceversa.',
    formula: <p className="text-xl md:text-2xl font-mono">P<sub className="text-base">1</sub>V<sub className="text-base">1</sub> = P<sub className="text-base">2</sub>V<sub className="text-base">2</sub></p>,
    variables: {
      'P₁': 'Presión inicial',
      'V₁': 'Volumen inicial',
      'P₂': 'Presión final',
      'V₂': 'Volumen final',
    },
    example: {
      title: 'Burbujas de un buzo',
      scenario: 'Un buzo suelta una burbuja de aire de 10 mL a una profundidad donde la presión es de 2.5 atm. ¿Qué volumen tendrá la burbuja al llegar a la superficie, donde la presión es de 1 atm?',
      calculation: (
        <div className="font-mono text-left">
          <p>P₁ = 2.5 atm, V₁ = 10 mL</p>
          <p>P₂ = 1 atm, V₂ = ?</p>
          <p className="mt-2">V₂ = (P₁V₁) / P₂</p>
          <p>V₂ = (2.5 atm * 10 mL) / 1 atm</p>
        </div>
      ),
      result: 'El volumen final de la burbuja será de 25 mL.',
    },
  },
  {
    id: 'charles',
    name: 'Ley de Charles',
    description: 'A presión y número de moles constantes, el volumen de un gas es directamente proporcional a su temperatura absoluta (en Kelvin). Si la temperatura aumenta, el volumen también aumenta.',
    formula: <p className="text-xl md:text-2xl font-mono">V<sub className="text-base">1</sub> / T<sub className="text-base">1</sub> = V<sub className="text-base">2</sub> / T<sub className="text-base">2</sub></p>,
    variables: {
      'V₁': 'Volumen inicial',
      'T₁': 'Temperatura inicial (en Kelvin)',
      'V₂': 'Volumen final',
      'T₂': 'Temperatura final (en Kelvin)',
    },
    example: {
      title: 'Globo en un día frío',
      scenario: 'Un globo tiene un volumen de 2 L a temperatura ambiente (25 °C o 298 K). Si se saca al exterior en un día frío donde la temperatura es de -10 °C (263 K), ¿cuál será su nuevo volumen?',
      calculation: (
         <div className="font-mono text-left">
          <p>V₁ = 2 L, T₁ = 298 K</p>
          <p>T₂ = 263 K, V₂ = ?</p>
          <p className="mt-2">V₂ = (V₁ * T₂) / T₁</p>
          <p>V₂ = (2 L * 263 K) / 298 K</p>
        </div>
      ),
      result: 'El nuevo volumen del globo será de aproximadamente 1.76 L.',
    },
  },
  {
    id: 'gay-lussac',
    name: 'Ley de Gay-Lussac',
    description: 'A volumen y número de moles constantes, la presión de un gas es directamente proporcional a su temperatura absoluta (en Kelvin). Al calentar un gas en un recipiente rígido, su presión aumenta.',
    formula: <p className="text-xl md:text-2xl font-mono">P<sub className="text-base">1</sub> / T<sub className="text-base">1</sub> = P<sub className="text-base">2</sub> / T<sub className="text-base">2</sub></p>,
    variables: {
      'P₁': 'Presión inicial',
      'T₁': 'Temperatura inicial (en Kelvin)',
      'P₂': 'Presión final',
      'T₂': 'Temperatura final (en Kelvin)',
    },
    example: {
      title: 'Neumático de un coche',
      scenario: 'La presión de un neumático es de 30 psi a 20 °C (293 K). Después de un largo viaje, la temperatura del neumático aumenta a 50 °C (323 K). ¿Cuál es la nueva presión?',
      calculation: (
         <div className="font-mono text-left">
          <p>P₁ = 30 psi, T₁ = 293 K</p>
          <p>T₂ = 323 K, P₂ = ?</p>
          <p className="mt-2">P₂ = (P₁ * T₂) / T₁</p>
          <p>P₂ = (30 psi * 323 K) / 293 K</p>
        </div>
      ),
      result: 'La nueva presión en el neumático será de aproximadamente 33.07 psi.',
    },
  },
  {
    id: 'avogadro',
    name: 'Ley de Avogadro',
    description: 'A presión y temperatura constantes, el volumen de un gas es directamente proporcional al número de moles del gas. Volúmenes iguales de gases diferentes, en las mismas condiciones, contienen el mismo número de moléculas.',
    formula: <p className="text-xl md:text-2xl font-mono">V<sub className="text-base">1</sub> / n<sub className="text-base">1</sub> = V<sub className="text-base">2</sub> / n<sub className="text-base">2</sub></p>,
    variables: {
      'V₁': 'Volumen inicial',
      'n₁': 'Moles iniciales de gas',
      'V₂': 'Volumen final',
      'n₂': 'Moles finales de gas',
    },
    example: {
      title: 'Inhalar un globo',
      scenario: 'Un globo contiene 0.5 moles de aire y ocupa un volumen de 11.2 L. Si se añaden 0.5 moles más de aire al globo manteniendo la presión y temperatura constantes, ¿cuál será el nuevo volumen?',
      calculation: (
         <div className="font-mono text-left">
          <p>V₁ = 11.2 L, n₁ = 0.5 mol</p>
          <p>n₂ = 0.5 + 0.5 = 1.0 mol, V₂ = ?</p>
          <p className="mt-2">V₂ = (V₁ * n₂) / n₁</p>
          <p>V₂ = (11.2 L * 1.0 mol) / 0.5 mol</p>
        </div>
      ),
      result: 'El nuevo volumen del globo será de 22.4 L.',
    },
  },
    {
    id: 'combined',
    name: 'Ley Combinada de los Gases',
    description: 'Esta ley combina las leyes de Boyle, Charles y Gay-Lussac en una sola ecuación. Relaciona la presión, el volumen y la temperatura de una cantidad fija de gas (número de moles constante).',
    formula: <p className="text-xl md:text-2xl font-mono">(P<sub className="text-base">1</sub>V<sub className="text-base">1</sub>) / T<sub className="text-base">1</sub> = (P<sub className="text-base">2</sub>V<sub className="text-base">2</sub>) / T<sub className="text-base">2</sub></p>,
    variables: {
      'P': 'Presión',
      'V': 'Volumen',
      'T': 'Temperatura (en Kelvin)',
    },
    example: {
      title: 'Globo meteorológico',
      scenario: 'Un globo meteorológico tiene un volumen de 100 L en la superficie (1 atm, 27 °C o 300 K). Asciende a una altitud donde la presión es de 0.5 atm y la temperatura es de -23 °C (250 K). ¿Cuál es su nuevo volumen?',
      calculation: (
         <div className="font-mono text-left">
          <p>P₁=1 atm, V₁=100 L, T₁=300 K</p>
          <p>P₂=0.5 atm, T₂=250 K, V₂=?</p>
          <p className="mt-2">V₂ = (P₁V₁T₂) / (T₁P₂)</p>
          <p>V₂ = (1 atm * 100 L * 250 K) / (300 K * 0.5 atm)</p>
        </div>
      ),
      result: 'El nuevo volumen del globo será de aproximadamente 166.67 L.',
    },
  },
  {
    id: 'ideal',
    name: 'Ley del Gas Ideal',
    description: 'La ley del gas ideal es la ecuación de estado de un gas ideal hipotético. Es una buena aproximación del comportamiento de muchos gases en diversas condiciones. Es una de las ecuaciones más importantes en la fisicoquímica.',
    formula: <p className="text-xl md:text-2xl font-mono">PV = nRT</p>,
    variables: {
      'P': 'Presión absoluta (en atm)',
      'V': 'Volumen (en Litros)',
      'n': 'Número de moles de gas',
      'R': 'Constante de los gases ideales (0.0821 L·atm/mol·K)',
      'T': 'Temperatura absoluta (en Kelvin)',
    },
    example: {
      title: 'Calcular moles en un recipiente',
      scenario: '¿Cuántos moles de gas hay en un recipiente de 20 L a una presión de 2 atm y una temperatura de 300 K?',
      calculation: (
         <div className="font-mono text-left">
          <p>P = 2 atm, V = 20 L, T = 300 K</p>
          <p>R = 0.0821 L·atm/mol·K, n = ?</p>
          <p className="mt-2">n = PV / RT</p>
          <p>n = (2 atm * 20 L) / (0.0821 L·atm/mol·K * 300 K)</p>
        </div>
      ),
      result: 'Hay aproximadamente 1.62 moles de gas en el recipiente.',
    },
  },
];
