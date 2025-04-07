# 📝 Proyecto: Onboarding Digital (React)

## 🎯 Descripción

Esta aplicación es una práctica para aplicar los fundamentos básicos de **React** desarrollando un Onboarding digital. A través de una serie de pantallas, se muestra contenido con texto e imágenes, y el usuario puede navegar entre ellas mediante botones de "Siguiente" y "Anterior".

El objetivo es familiarizarse con el uso de componentes, `useState`, props, renderizado condicional y estructuras de carpetas en React.

---


## 🛠 Cómo instalar y ejecutar el proyecto

Sigue estos pasos para descargar e iniciar el proyecto en tu máquina local:

### 1. 📦 Clonar el repositorio

```bash
git clone https://github.com/papercri/it-academy-s5-onboarding-react.git
cd it-academy-s5-onboarding-react
```

### 2. 📁 Instalar dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta:

```bash
npm install
```

### 3. ▶️ Ejecutar la aplicación en modo desarrollo

```bash
npm run dev
```

Esto abrirá la aplicación en tu navegador en la dirección:

```
http://localhost:5173/
```

> 💡 Si no se abre automáticamente, copia y pega la URL manualmente en tu navegador.

---


## 📁 Estructura del proyecto

```
src/
├── assets/              # Imágenes y recursos estáticos
├── components/          # Componentes reutilizables como Card e Indicator
├── data/                # Datos del onboarding (tutorialData.ts)
├── types/               # Tipos TypeScript (como Step.ts)
├── App.tsx              # Componente principal
└── main.tsx             # Punto de entrada de React
```

---

## ✅ Ejercicios por niveles

### 🔹 Nivel 1

#### 🧩 Ejercicio 1: Mostrar el primer paso
1. Crear el componente `Card`.
2. Cargar el componente `Card` dentro de `App`.
3. Definir el array `tutorialData` con los pasos del onboarding.
4. Crear estado `step` con `useState` para saber en qué paso estamos.
5. Pasar los datos del paso actual al componente `Card` por props.
6. Mostrar título y descripción en `Card`.

#### 🧩 Ejercicio 2: Avanzar entre pasos
1. Crear la función `nextStep` en `App.tsx`.
2. Pasar `nextStep` como prop al componente `Card`.
3. Llamar a `nextStep` al hacer clic en el botón en `Card`.

#### 🧩 Ejercicio 3: Maquetar Card de forma responsive
- Utilizar estilos y adaptar `Card` a pantallas móviles.

#### 🧩 Ejercicio 4: Retroceder paso
1. Crear función `prevStep` en `App.tsx`.
2. Pasar `prevStep` al componente `Card`.
3. Usar renderizado condicional para mostrar/ocultar botones:
   - Paso 1: solo botón "Siguiente".
   - Paso 2: botones "Siguiente" y "Anterior".
   - Paso 3: solo botón "Anterior".

#### 🧩 Ejercicio 5: Indicador de paso
1. Crear componente `Indicator`.
2. Cargar `Indicator` dentro de `Card`.
3. Pasar `step` actual y longitud de `tutorialData` como props.
4. Renderizar bolitas dinámicamente con `.map()`.
5. Resaltar la bolita activa con estilo diferente.

---

### 🔹 Nivel 2

#### 🧩 Ejercicio 6: Clic en bolita para cambiar de paso
- Al hacer clic en una bolita del `Indicator`, se mostrará el paso correspondiente.

---

### 🔹 Nivel 3

#### 🧩 Ejercicio 7: Animaciones
- Crear animación al cambiar de paso:
  - La imagen actual desaparece a la izquierda.
  - La siguiente aparece desde la derecha.
- Animar también el cambio en el indicador.

---


## 🚀 Tecnologías utilizadas

- React con Vite
- TypeScript
- CSS Modules o Tailwind (según preferencia)
- Hooks (`useState`, `useEffect`)
- Props y composición de componentes

---



