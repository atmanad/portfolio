# Feature Requirements

## Hero3D Component
- Display: Name, Title, Short intro from Introduction.jsx
- 3D Elements: Rotating cube/icosahedron
- Animations: Fade-in on load, infinite rotation
- CTA Button: "View My Work" (smooth scroll)
- Canvas size: Responsive (window.innerWidth/Height)

## ProjectsCard3D Component
- Map over projects array
- Each card: 3D mesh (PlaneGeometry or CustomGeometry)
- Data fields: title, description, tech stack, github link, demo link
- Interaction: Hover = tilt + scale, Click = open link
- Animation: Entrance stagger effect

## SkillsVisualization3D Component
- Grid layout of 3D bars
- Each bar height = skill proficiency (0-100%)
- Labels floating above bars
- Animation: Bars grow from 0 on load
- Filter/toggle by category option

## Performance
- Use THREE.LOD for complex geometries
- Lazy load components below fold
- Implement canvas disposal on unmount