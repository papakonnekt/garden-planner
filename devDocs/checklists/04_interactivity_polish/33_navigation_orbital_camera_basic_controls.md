# Checklist: Navigation - Orbital Camera & Basic Controls

**Phase:** Feature Implementation & Polish
**Plan Item:** 33

---

**Objective:** Implement the primary orbital camera control for navigating the 3D garden scene, including basic pan, zoom, and orbit functionalities.

**References:**
- PRD: "Next-Generation Visuals & Interaction", "Fluid Camera Controls"
- Design Document: "Dashboard and Navigation", "Navigation"

---

**Tasks:**

- [ ] Ensure a camera is set up in the Three.js scene.
- [ ] Implement orbital camera controls using a library like `OrbitControls` from `three/examples/jsm/controls/OrbitControls`.
- [ ] Configure the controls to allow orbiting around a central point (e.g., the center of the garden).
- [ ] Enable basic pan functionality to move the camera laterally.
- [ ] Enable basic zoom functionality (e.g., mouse wheel or pinch gesture).
- [ ] Set appropriate limits for orbiting, panning, and zooming to keep the camera within a reasonable view of the garden.
- [ ] Ensure camera controls are intuitive and responsive.
- [ ] Test all basic camera movements (orbit, pan, zoom).