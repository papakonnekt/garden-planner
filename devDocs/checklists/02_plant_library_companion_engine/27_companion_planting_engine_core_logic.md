# Checklist: Companion Planting Engine - Core Logic Implementation

**Phase:** Feature Implementation & Polish
**Plan Item:** 27

---

**Objective:** Implement the core calculation logic for the companion planting engine, determining compatibility based on various factors and utilizing Web Workers for performance.

**References:**
- PRD: "Advanced Companion Planting Engine"
- Design Document: "Technology Stack", "Core Architecture", "Companion Planting Engine", "Performance"

---

**Tasks:**

- [ ] Set up a Web Worker to run the companion planting calculations off the main thread.
- [ ] Implement the core logic within the Web Worker to evaluate plant compatibility based on factors listed in the PRD and Design Document (pH matching, root synergy, nutrient complementarity, etc.).
- [ ] Access plant data and garden bed environmental data within the Web Worker.
- [ ] Define the output structure for compatibility results (e.g., a list of plant pairs with compatibility scores or indicators).
- [ ] Implement caching mechanisms within the Web Worker or main thread to store calculation results for performance.
- [ ] Create functions to send garden data to the Web Worker and receive results back.
- [ ] Handle potential errors or long-running calculations within the Web Worker.
- [ ] Test the core calculation logic with various plant combinations and environmental inputs.