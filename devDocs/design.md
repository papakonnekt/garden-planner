# Garden Manager App - Final Design Document

## Overview

The Garden Manager App is a standalone, visually stunning, and highly interactive tool for planning, tracking, and optimizing garden beds. It delivers a fully 3D representation of the user's garden, leveraging detailed inputs to drive intelligent companion planting and environmental insights. The app focuses on local garden data, plant compatibility, and environmental tracking, without login or NPK calculator features. This design prioritizes a biomorphic, immersive experience with smooth animations, intuitive controls, and robust performance across mobile and desktop platforms.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Build Tool**: Vite (for fast development and optimized production builds)
- **3D Rendering**: Three.js with React Three Fiber (for declarative 3D components and WebGL-based rendering)
- **UI Framework**: React (with JSX), Tailwind CSS (responsive styling), Headless UI (accessible components)
- **State Management**: Zustand (lightweight, with local storage persistence)
- **Animations**:
  - **3D Animations**: Three.js (built-in animation system)
  - **UI Animations**: GSAP (GreenSock Animation Platform for transitions, micro-interactions, and spring physics)
- **Database**: Local server at `http://localhost:8000`, accessed via RESTful API
- **3D Modeling**: Blender, exporting to glTF
- **Performance**: Web Workers (for offloading companion planting calculations)

## Core Architecture

### Application Structure

```
/src
  /components
    /ui              # Reusable UI components (e.g., buttons, modals)
    /3d              # 3D scene components (e.g., beds, plants)
    /garden          # Garden-specific components (e.g., bed editor)
    /plants          # Plant-specific components (e.g., plant cards)
  /hooks             # Custom React hooks (e.g., useGardenState)
  /store             # Zustand state management
  /utils             # Utility functions (e.g., 3D math helpers)
  /data              # Static plant library data
  /assets            # 3D models, textures
  /pages             # App pages (e.g., dashboard, plant library)
  /lib               # Third-party integrations (e.g., Three.js)
```

### Data Flow

- User inputs are stored in Zustand state, persisted to local storage.
- State changes trigger UI updates and 3D scene recalculations via React Three Fiber.
- The companion planting engine processes garden data in Web Workers, caching results for performance.
- Visual feedback is rendered in the 3D scene using shaders and particle systems.

## Visual Design and User Experience

### Overall Aesthetic

- **Biomorphic Design**: Organic shapes, flowing transitions, and natural colors to evoke a living garden.
- **Clean Interface**: Minimal UI elements maximize 3D scene visibility.
- **Context-Sensitive Controls**: UI appears on hover/selection, fading when idle (0.3s GSAP fade).

### Color Palette

- **Primary**: Natural greens (#2C5F2D, #97BC62)
- **Secondary**: Earth tones (#D9BF77, #A67C52)
- **Accent**: Floral hints (#FF6B6B, #AE76A6)
- **Interface**: Light mode (#FFFFFF, #F7F9F9), Dark mode (#1A2421, #2D3A3A)
- **Gradients**: Subtle transitions for sky and terrain depth.

### Typography

- **Primary**: Inter (clean, modern, legible)
- **Secondary**: Fraunces (organic serifs for headings)
- **Styling**: Shadows for readability, clear size hierarchy (16px base, 24px headings).

### 3D Environment Design

- **Lighting**: Dynamic directional sunlight/moonlight, soft ambient light, ambient occlusion for realistic shadows.
- **Atmosphere**: Optional morning mist or afternoon haze via Three.js post-processing.
- **Materials**: PBR materials with bump maps for plants, beds, and terrain. Custom shaders for soil (darkening when watered) and wet surfaces.
- **Terrain**: Procedurally generated with customizable elevation and slopes, using heightmaps and dynamic shaders.
- **Ecosystem**: Animated butterflies and birds reacting to garden state (e.g., more butterflies near flowers), using particle systems and simple AI.
- **Weather**: Wind (swaying plants, 1s sine-wave cycle) and rain (dynamic wet shaders).
- **Day-Night Cycle**: Real-time sun/moon movement with a scrubable timeline, casting dynamic shadows.

## Feature Implementation Details

### 1. 3D Garden Bed Manager

- **Technical Approach**: Parametric 3D models generated from user inputs. Modular bed pieces snap together with physics checks (Three.js Ammo.js). Instanced rendering and custom shaders for soil based on type/moisture.
- **User Inputs**: Bed name, dimensions, type (in-ground, raised, container), trellis/netting, sunlight exposure, soil pH, type (sandy, loamy, clay), drainage, moisture retention, irrigation, notes.
- **Interaction**: Drag-and-drop via raycasting. Context-sensitive controls on hover/selection. Multi-touch gestures (three-finger swipe to pan, long-press to edit). Precise plant manipulation (rotate, scale, tilt) with snap-to-grid.
- **Visual Feedback**: Real-time plant spacing validation, growth projection for mature sizes, interactive shadows, and 3D soil cross-section with animated transitions (e.g., compost mixing, 0.5s GSAP tween).

### 2. Plant Library and Visualization

- **Features**: Offline plant database with search by name, growth habit, sun needs, pH, moisture, root depth, harvest time, and family. Profiles include conditions, compatibility, pests, light needs, size, seasonality, edibility, and 3D models.
- **3D Models**: Morphing growth stages (seedling to mature), wind animations, LOD for performance, instanced foliage for detail.
- **Interface**: 3D carousel with spin animations (0.8s GSAP rotation), growth stage timelines, and drag-and-drop to beds.
- **Visualization**: Animated transitions between profiles (0.3s GSAP fade).

### 3. Companion Planting Engine

- **Inputs**: Soil pH, sunlight, drainage, moisture, root system, soil texture.
- **Evaluation Factors**: pH matching, root synergy, nutrient complementarity, moisture/drainage, pest suppression, aromatic synergy, canopy/light competition, seasonal overlap.
- **Outputs**: Glowing connection lines for compatible plants, red flashes for incompatible ones, tooltips with explanations, and LLM-powered Q&A. Predictive growth simulation over weeks.
- **Visualization**: 3D web of glowing lines, color-coded auras (green for good, red for bad), and animated indicators (e.g., wilting effect, 0.5s Three.js animation).
- **Performance**: Web Workers for calculations, cached results for repeated queries.

### 4. Dashboard and Navigation

- **Layout**: Expandable sidebar, minimalist HUD, bottom drawer for plant library, floating action button (FAB), and floating 3D panels with animated stats (e.g., rising water levels, 0.6s GSAP tween).
- **Navigation**: Orbital camera with momentum, touch gestures (two-finger rotation, pinch zoom), snap-to-views, and first-person walkthrough mode. Cinematic flythroughs with GSAP-timed transitions (1.5s).
- **Details**: Quick stats (water, sunlight, compatibility), daily/weekly tasks with 3D highlights, and top-down 2D map derived from 3D scene.

### 5. Interactivity Enhancements

- **Multi-Touch**: Three-finger swipe (pan), long-press (edit), pinch zoom.
- **Haptic Feedback**: Vibrations on plant placement or task completion (supported devices).
- **Live Collaboration**: Real-time editing via WebSocket, with 3D avatars showing user activity.
- **Smart Suggestions**: AI-driven assistant (3D gardening robot) with speech bubbles (0.3s GSAP fade-in) offering tips.
- **Undo/Redo**: Timeline slider for edit history with animated 3D snapshots (0.5s transitions).

### 6. Visual Enhancements

- **Particle Effects**: Pollen, dust (digging), and rain splashes via Three.js particle systems.
- **Post-Processing**: Lens flares, bloom, and color grading for cinematic visuals.
- **Dynamic Ecosystem**: Butterflies and birds with randomized paths, reacting to plant states.

## Design Specifications

### Animation Details

- **Plant Placement**: Settles into soil with dust puff (0.5s GSAP tween).
- **Weather**: Rain splashes (Three.js particles), wind swaying (1s cycle).
- **UI**: Panels slide in with spring effect (GSAP `elastic.out`, 0.8s), compatibility pulses (0.3s).
- **Micro-Interactions**: Button hovers (0.2s GSAP scale), task highlights (0.4s glow).

### Performance Targets

- **Frame Rate**: 60 FPS (desktop), 30 FPS (mobile).
- **Load Time**: &lt;2s initial load, &lt;0.5s for scene updates.
- **Optimizations**: Frustum culling, instanced rendering, texture atlasing, LOD, progressive asset loading, Web Workers.

### Accessibility Features

- High-contrast mode, screen reader compatibility, text scaling, color blindness accommodations, keyboard shortcuts, and simplified navigation.

## Development Guidance for AI Coding Agent

### Key Components

1. **Setup**:
   - Initialize Vite project with React, React Three Fiber, Tailwind CSS, and Headless UI.
   - Configure Zustand store with local storage persistence.
   - Set up Three.js scene with terrain, skybox, and dynamic lighting.
2. **3D System**:
   - Create `Plant` component with glTF loading, morph targets, and wind animations.
   - Build `Bed` component with modular snapping, physics (Ammo.js), and soil shaders.
   - Implement raycasting for drag-and-drop and context-sensitive controls.
3. **Ecosystem**:
   - Add particle systems for pollen, rain, and wildlife (butterflies, birds).
   - Use skeletal animations for plant swaying (Three.js AnimationMixer).
4. **UI**:
   - Design React components (e.g., `GardenPanel`, `PlantCard`) with Tailwind CSS.
   - Animate with GSAP (e.g., `gsap.from(".panel", { y: 100, opacity: 0, ease: "power2.out" })`).
5. **Companion Engine**:
   - Offload calculations to Web Workers, cache results in Zustand.
   - Render 3D connection lines and auras using Three.js.
6. **Interactivity**:
   - Implement WebSocket for live collaboration (sync plant positions as JSON).
   - Add haptic feedback and multi-touch gestures.

### Sample Visual Mockup

- **Main View**: Lush 3D garden with raised beds, swaying plants, and a setting sun. Floating 3D panels show stats, with a 3D robot assistant offering tips.
- **Plant Library**: 3D carousel of spinning plant models with growth timelines.
- **Dashboard**: Holographic panels orbiting the garden with animated charts (e.g., water levels as rising liquid).

### User Flow

1. **Onboarding**: 3D flythrough with pop-up tips (GSAP fade-ins) guiding bed and plant placement.
2. **Planning**: Drag plants into beds with glowing compatibility lines snapping into place.
3. **Monitoring**: Scrub day-night timeline for shadow shifts, check 3D dashboard for tasks.

## Implementation Roadmap

1. **Core Infrastructure (2-3 weeks)**:
   - Set up Vite, React Three Fiber, Zustand, and local server.
   - Implement basic 3D scene, bed creation, and plant placement.
   - Establish data persistence and initial UI components.
2. **Plant Library & Companion Engine (3-4 weeks)**:
   - Integrate plant database, search, and 3D models.
   - Build companion planting logic with Web Workers.
   - Add compatibility visualizations (lines, auras).
3. **Visual Enhancement (2-3 weeks)**:
   - Implement dynamic lighting, shadows, and particle effects.
   - Add weather and ecosystem animations (wind, rain, wildlife).
   - Enhance materials with PBR and shaders.
4. **Interactivity & Polish (2-3 weeks)**:
   - Add live collaboration, smart suggestions, and undo/redo.
   - Implement haptic feedback and multi-touch gestures.
   - Refine UI animations and accessibility features.
5. **Optimization & Testing (1-2 weeks)**:
   - Optimize performance (LOD, culling, atlasing).
   - Test across devices, ensuring 60 FPS desktop, 30 FPS mobile.
   - Finalize responsive design and accessibility.

## Data Storage

- **Location**: `C:\coding projects\database\garden_database`
- **Access**: RESTful API at `http://localhost:8000`

## Optional Features

- **Community Sharing**: Export/import garden layouts as JSON or glTF.
- **Sound Effects**:
  - Use Web Audio API for simple sounds (e.g., rustling leaves) or pre-recorded files (e.g., bird chirps).
  - Implement spatial audio based on camera position.
  - Priority: Low (stretch goal, to be implemented last).

## Conclusion

This final design document provides a comprehensive blueprint for a cutting-edge Garden Manager App. By leveraging React Three Fiber, Zustand, and GSAP, the app delivers an immersive 3D experience with intelligent companion planting, seamless interactivity, and a biomorphic aesthetic. The AI coding agent can follow this guide to build a polished, next-gen product that delights users and meets all requirements.