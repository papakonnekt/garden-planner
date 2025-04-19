# Checklist: Weather & Ecosystem Animations

**Phase:** 3D System & Integration
**Plan Item:** 24

---

**Objective:** Implement animations for weather effects (wind, rain) and ecosystem elements (wildlife) in the Three.js scene to enhance the visual environment.

**References:**
- Design Document: "3D Environment Design", "Weather", "Ecosystem", "Animation Details", "Dynamic Ecosystem" under "Visual Enhancements"

---

**Tasks:**

- [ ] Implement wind animation for plants using the rigging or shape keys and the Three.js AnimationMixer, potentially using a sine wave cycle as suggested.
- [ ] Integrate the rain particle system (from Checklist 23) with logic to control its appearance based on weather state.
- [ ] Implement dynamic wet shaders for surfaces (terrain, beds) that activate during rain.
- [ ] Integrate the wildlife models (butterflies, birds) into the scene.
- [ ] Implement simple AI or randomized paths for wildlife movement.
- [ ] Connect wildlife behavior to garden state (e.g., more butterflies near flowering plants).
- [ ] Ensure weather and ecosystem animations are performant and do not significantly impact frame rate.
- [ ] Test the appearance and behavior of wind, rain, and wildlife animations.