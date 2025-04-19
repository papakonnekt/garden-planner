# Checklist: Companion Planting Visualization - Lines & Auras Implementation

**Phase:** Feature Implementation & Polish
**Plan Item:** 29

---

**Objective:** Implement the visual indicators in the 3D scene for plant compatibility, such as glowing connection lines and color-coded auras, based on the results from the companion planting engine.

**References:**
- PRD: "Advanced Companion Planting Engine"
- Design Document: "Companion Planting Engine", "Visualization" under "Companion Planting Engine"

---

**Tasks:**

- [ ] Create a Three.js/React Three Fiber component or system for rendering lines or connections between compatible/incompatible plant pairs.
- [ ] Implement logic to dynamically draw these lines based on the compatibility results from the application state.
- [ ] Use different colors or visual styles for lines to indicate good compatibility (e.g., green/glowing) versus bad compatibility (e.g., red flashes).
- [ ] Create a Three.js/React Three Fiber component or system for rendering color-coded auras around individual plants.
- [ ] Implement logic to dynamically display auras based on the overall compatibility of a plant with its neighbors.
- [ ] Use different aura colors (e.g., green for good, red for bad) as specified in the design.
- [ ] Implement subtle animations for the lines and auras (e.g., pulsing, fading) to make them non-intrusive but noticeable.
- [ ] Ensure the visualizations update in real-time as plants are added, removed, or bed properties change.
- [ ] Optimize the rendering of lines and auras for performance, especially in gardens with many plants.
- [ ] Test the visual appearance and behavior of compatibility lines and auras.