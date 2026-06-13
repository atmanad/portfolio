# Implementation Details

## File Imports Required
```javascript
// All 3D components should import:
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
```

## Data Mapping
- Get project data from existing: `src/data/projects.js` or from Projects.jsx props
- Get skills data from existing: `src/data/skills.js` or from SkillSet.jsx props
- Keep all existing text/content unchanged

## Component Export Pattern
Each component: `export default ComponentName`
App.js imports and uses them in sequence

## Styling
- No CSS-in-JS, use external css file only
- Classes: `.hero3d`, `.projects3d`, `.skills3d`
- Mobile breakpoints: 768px, 480px