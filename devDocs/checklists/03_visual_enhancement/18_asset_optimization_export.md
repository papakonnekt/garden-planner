# Checklist: Asset Optimization & Export

**Phase:** 3D Asset Creation (Blender)
**Plan Item:** 18

---

**Objective:** Optimize all created 3D assets in Blender for real-time rendering performance and export them in the glTF format for use in the frontend application.

**References:**
- Design Document: "Technology Stack", "3D Asset Pipeline", "Performance Targets", "Optimizations"

---

**Tasks:**

- [ ] Review all 3D models for unnecessary geometry and optimize where possible (e.g., dissolve edges, decimate).
- [ ] Ensure consistent scaling and origin points for all models.
- [ ] Pack all textures into the Blender file or ensure they are correctly linked for export.
- [ ] Verify that materials are set up correctly for glTF export (e.g., using Principled BSDF).
- [ ] Check animations (rigging or shape keys) for compatibility with glTF and Three.js.
- [ ] Configure glTF export settings for optimal size and compatibility (e.g., applying modifiers, including materials, textures, and animations).
- [ ] Export each optimized 3D asset (plants, beds, trellis, wildlife, robot, environmental elements) to the designated `src/assets` directory in glTF format (.glb or .gltf + .bin + textures).
- [ ] Verify the exported files are correctly generated and can be potentially previewed with a glTF viewer.
- [ ] Organize the exported assets within the `src/assets` directory according to the project structure.