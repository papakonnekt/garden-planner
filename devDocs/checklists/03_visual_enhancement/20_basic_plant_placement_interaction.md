# Checklist: Basic Plant Placement & Interaction (Raycasting, Controls)

**Phase:** 3D System & Integration
**Plan Item:** 20

---

**Objective:** Implement the core drag-and-drop functionality for placing plants in 3D beds using raycasting and set up basic context-sensitive controls in the Three.js scene.

**References:**
- PRD: "Garden Bed Manager"
- Design Document: "Technology Stack", "Core Architecture", "3D Garden Bed Manager", "Visual Design and User Experience", "Context-Sensitive Controls"

---

**Tasks:**

- [ ] Implement raycasting in the R3F scene to detect intersections with garden beds and the terrain.
- [ ] Create logic for handling drag-and-drop events for plant models from the UI onto the 3D scene.
- [ ] Update the position of the dragged plant model in real-time based on the raycasting intersection point.
- [ ] Implement basic visual feedback during dragging (e.g., changing color or outline of the plant model).
- [ ] On dropping a plant, update the application state to record the plant's position and orientation within the selected bed.
- [ ] Implement basic context-sensitive controls that appear when a plant or bed is selected (e.g., a simple UI element near the object).
- [ ] Set up event listeners for object selection (click or touch).
- [ ] Ensure plant placement respects bed boundaries and potentially basic spacing rules.
- [ ] Test dragging and dropping plants onto different beds and terrain areas.
- [ ] Verify that context-sensitive controls appear upon selection.