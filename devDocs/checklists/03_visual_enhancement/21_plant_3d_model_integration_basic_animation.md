# Checklist: Plant 3D Model Integration & Basic Animation (Loading glTF, Wind/Growth)

**Phase:** 3D System & Integration
**Plan Item:** 21

---

**Objective:** Load and integrate the exported plant glTF models into the Three.js scene using React Three Fiber and set up basic wind and growth animations.

**References:**
- Design Document: "Technology Stack", "Core Architecture", "3D Asset Pipeline", "Plant Library and Visualization", "Ecosystem", "Animation Details"

---

**Tasks:**

- [ ] Install a glTF loader library compatible with Three.js/React Three Fiber (e.g., `@react-three/drei`).
- [ ] Create a React Three Fiber component for rendering a single plant model (e.g., `src/components/3d/Plant.jsx`).
- [ ] Implement logic within the component to load the appropriate glTF model based on the plant type and current growth stage from the application state.
- [ ] Set up the Three.js AnimationMixer to control animations loaded from the glTF models.
- [ ] Implement basic wind animation using the rigging or shape keys set up in Blender.
- [ ] Implement basic growth stage transitions using the rigging or shape keys, potentially driven by a time simulation or state change.
- [ ] Ensure plant models are correctly positioned, rotated, and scaled in the 3D scene based on application state.
- [ ] Handle potential loading errors for 3D models.
- [ ] Test loading and rendering different plant models and growth stages.
- [ ] Verify that basic wind and growth animations play correctly.