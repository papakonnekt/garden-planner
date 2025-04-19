# Checklist: Garden Bed Core Implementation (Three.js/React Three Fiber)

**Phase:** 3D System & Integration
**Plan Item:** 19

---

**Objective:** Implement the core functionality for rendering parametric 3D garden bed models in the Three.js scene using React Three Fiber, based on user inputs and incorporating modular snapping and physics.

**References:**
- PRD: "Garden Bed Manager"
- Design Document: "Technology Stack", "Core Architecture", "3D Garden Bed Manager"

---

**Tasks:**

- [ ] Create a React Three Fiber component for rendering a single garden bed (e.g., `src/components/3d/GardenBed.jsx`).
- [ ] Implement logic within the component to generate the 3D geometry of the bed parametrically based on dimensions and type (in-ground, raised, container) from the application state.
- [ ] Load and apply the exported garden bed 3D models and textures.
- [ ] Integrate a physics engine (e.g., Ammo.js) with R3F to handle modular snapping of bed pieces.
- [ ] Implement collision detection for bed placement to prevent overlaps.
- [ ] Apply custom shaders for soil based on type and moisture data from the application state.
- [ ] Ensure bed models are correctly positioned and oriented in the 3D scene based on user input.
- [ ] Test the rendering of different bed types and dimensions.
- [ ] Verify that modular snapping and basic physics interactions work as expected.