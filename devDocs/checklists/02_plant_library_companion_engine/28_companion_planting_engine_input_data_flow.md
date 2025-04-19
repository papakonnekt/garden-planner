# Checklist: Companion Planting Engine - Input Processing & Data Flow

**Phase:** Feature Implementation & Polish
**Plan Item:** 28

---

**Objective:** Implement the processing of environmental data inputs and manage the data flow between the application state, the UI, and the companion planting Web Worker.

**References:**
- PRD: "Garden Bed Manager", "Advanced Companion Planting Engine"
- Design Document: "Core Architecture", "Data Flow", "Companion Planting Engine"

---

**Tasks:**

- [ ] Implement logic to extract relevant environmental data (soil pH, sunlight exposure, soil type, drainage, moisture retention, root system info, soil texture) from the application state for each garden bed.
- [ ] Structure the input data to be sent to the companion planting Web Worker.
- [ ] Implement mechanisms to trigger companion planting calculations when relevant data changes (e.g., adding/removing a plant, updating bed properties).
- [ ] Handle the data flow of compatibility results received from the Web Worker and update the application state accordingly.
- [ ] Ensure the UI components that display compatibility feedback react to changes in the application state.
- [ ] Implement feedback mechanisms for the UI when data is missing for accurate pairings ("Add pH for more accurate pairings").
- [ ] Test the data flow from user input to calculation in the Web Worker and back to the UI.