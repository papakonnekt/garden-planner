Garden Manager App - Full Product Requirements Document (PRD)



---



## Overview



This app is a standalone garden manager designed to help users plan, track, and optimize their garden beds with intelligent companion planting and environmental insights. It does not include login functionality or NPK calculator features. Its focus is solely on local garden data, plant compatibility, and environmental tracking. The core user experience will be centered around a visually stunning, highly interactive, and fully 3D representation of the user's garden.



---



## Key Features



### 1. Garden Bed Manager



**User Inputs per Bed:**

- Bed name and dimensions
- Bed type (in-ground, raised, container)
- Trellis/netting setup (none, vertical, horizontal)
- Sunlight exposure (hours per day)
- Soil pH
- Soil type (sandy, loamy, clay)
- Drainage quality (poor, average, good)
- Moisture retention (low, medium, high)
- Irrigation method
- Notes (free text)



**Visual Interface:**

- Fully 3D representation of garden beds reflecting user inputs (dimensions, type, trellis).
- Drag-and-drop plant placement directly onto the 3D bed models.
- Real-time visual feedback on bed layout and plant spacing.



---



### 2. Plant Library



**Features:**

- Extensive offline plant database
- Search by name, growth habit, sun needs, pH preference, moisture preference, root depth, harvest time, and plant family
- Each plant profile includes:
  - Preferred pH
  - Moisture and drainage needs
  - Root type (shallow, medium, deep)
  - Companion plants
  - Incompatible plants
  - Common pests/disease
  - Light needs
  - Height and spread
  - Seasonality
  - Edibility and use
  - High-quality 3D models representing different growth stages.



---



### 3. Advanced Companion Planting Engine



**Environmental Data Inputs:**

- Soil pH
- Sunlight exposure (hours)
- Soil drainage & moisture retention
- Root system info
- Soil texture



**Compatibility Evaluation Factors:**

- pH matching
- Root system synergy
- Nutrient complementarity (e.g. nitrogen fixing)
- Moisture/drainage matching
- Pest/disease suppression
- Aromatic/chemical synergy
- Canopy and light competition
- Seasonal overlap



**Outputs:**

- Visual indicators (e.g., subtle glow for good, wilting effect for bad) directly on 3D plant models for compatibility.
- Dynamic recommendations based on user-entered bed data and existing plants.
- Feedback when data is missing: "Add pH for more accurate pairings"
- Tooltips explaining why a pairing is recommended or not.
- LLM-powered natural language Q&A about pairings.



---



### 4. Dashboard and Bed Overview



- Overview of all garden beds, potentially as a miniature 3D representation of the entire garden space.
- Quick stats: water needs, total sunlight hours, # of compatible pairs, pest-prone combos.
- Daily/weekly task list auto-generated from plant growth stage, potentially highlighting affected plants in the 3D view.
- Visual map view of entire garden layout (top-down 2D view derived from the 3D scene).



---



### 5. Next-Generation Visuals & Interaction (Core Experience)



**Goal:** Achieve a "next-gen," visually stunning, highly interactive, and fully 3D experience that sets this application apart. This requires high-fidelity graphics, smooth performance, and intuitive controls.



**Key Elements:**

-   **Realistic 3D Environment:** The primary interface will be a fully 3D representation of the user's garden space.
-   **High-Fidelity Assets:** Detailed and realistic 3D models for plants (various growth stages), garden beds, soil textures, and potentially environmental elements (fences, paths).
-   **Dynamic Lighting & Weather:** Simulate sunlight paths throughout the day based on input, casting realistic shadows. Optional weather effects (rain, clouds) could enhance visual appeal and provide context.
-   **Fluid Camera Controls:** Intuitive controls (orbit, pan, zoom) for navigating the 3D scene. Consider a "flythrough" or "walkthrough" mode for immersive exploration.
-   **Interactive Visualizations:**
    *   **Environmental Overlays:** Visualize sunlight exposure, drainage characteristics, and moisture levels directly onto the 3D terrain and bed models using dynamic shaders or textures. Sunlight paths could be animated.
    *   **Planting Simulation:** Animate the process of placing plants, potentially showing visual guides for spacing or root zones. Visualize plant growth over a simulated time period.
    *   **Companion Planting Feedback:** Use clear, non-intrusive animations or visual effects on the 3D models to indicate compatibility (e.g., glows, subtle connections, warning icons).
    *   **Task Highlighting:** Visually emphasize plants requiring attention (watering, fertilizing, harvesting) within the 3D view.
-   **Smooth Animations:** Fluid transitions for camera movements, UI panel reveals, and object interactions.



**Technology Considerations:**

-   **3D Rendering Engine:** Technologies like **Three.js** or **Babylon.js** are strong contenders for web-based 3D rendering. Other engines (e.g., Unity, Unreal Engine via web export) could be evaluated based on visual fidelity requirements and development complexity. The final choice will be determined in the `design.md` phase, prioritizing the best fit for achieving the target visual quality and interactivity.
-   **3D Asset Pipeline:** Integration with tools like **Blender** (potentially via the **Blender MCP**) is crucial for creating, managing, and optimizing the 3D models required for plants and environmental elements. A streamlined workflow for importing assets into the chosen rendering engine is essential.



**User Customization:**

- Selectable visual themes (light/dark/garden/contrast) that affect UI elements and potentially the 3D environment's mood.
- Configurable dashboard widgets.



**Guidance:**

- First-time guided setup flow introducing the 3D interface and controls.
- "Learn more" links and tooltips integrated seamlessly.
- Interactive tutorials demonstrating 3D navigation and feature usage.



---



### 6. Future Enhancements (Optional/Experimental)



**Community Sharing (Offline Export or Import):**

- Share layout files (including 3D data) with others.
- Import/export JSON or standard 3D formats (e.g., glTF) representing the garden plan.



**Gamification & Challenges:**

- Seasonal challenges visualized within the 3D environment.
- Badge system for mastering features or achieving gardening goals.



---
---



## Data Storage


The application utilizes a local database for storing garden plans and plant information.

- **Database Location:** C:\coding projects\database\garden_database
- **Running Address:** http://localhost:8000



---



### Summary



This app leverages detailed user inputs to drive smart gardening recommendations within a cutting-edge, fully 3D interactive environment. The focus is on providing a visually rich and intuitive experience where users can design, simulate, and manage their garden with unprecedented clarity. The advanced companion planting engine, integrated directly into the 3D visualization, empowers users to make confident choices for healthier, more synergistic gardens, supported by clear visual feedback and data-driven insights. The detailed requirements outlined here will inform the `design.md` process to select the optimal technology stack for delivering this next-generation garden planning tool.
