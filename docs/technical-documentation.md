# Technical Documentation – Assignment 2

## Overview

This portfolio website was upgraded to include interactive features, dynamic content rendering, client-side validation, and improved user feedback mechanisms.

The project follows modern front-end development practices using semantic HTML, modular CSS, and structured JavaScript.

---

## System Architecture

### HTML
- Semantic structure using:
  - `header`
  - `main`
  - `section`
  - `footer`
- Accessible form labels
- `aria-live` for dynamic updates
- `aria-invalid` for validation feedback

### CSS
- CSS Variables for theming
- Responsive design using:
  - Flexbox
  - CSS Grid
- Transition effects for:
  - Buttons
  - Cards
  - Inputs
- Dark/Light theme support

### JavaScript

The JavaScript file handles:

#### 1️⃣ Theme Management
- Toggles light/dark mode
- Saves preference in `localStorage`
- Updates button text dynamically

#### 2️⃣ Greeting System
- Displays time-based greeting
- Automatically updates based on current hour

#### 3️⃣ Dynamic Project Rendering
- Projects stored in a JavaScript array
- DOM elements generated dynamically
- Live filtering using input event listener
- Displays empty state when no matches found

#### 4️⃣ Form Validation
- Prevents default submission
- Validates:
  - Required fields
  - Email format using regex
  - Minimum message length
- Displays inline error messages
- Uses loading state simulation
- Displays success confirmation

---

## Error Handling Strategy

- Field-level validation messages
- Global form status message
- Visual invalid state using `aria-invalid`
- Disabled submit button during "sending" state

---

## Accessibility Considerations

- Semantic HTML structure
- Proper label associations
- `aria-live="polite"` for dynamic messages
- Keyboard navigation support
- Visible focus states

---

## Performance Considerations

- No external libraries
- Lightweight Vanilla JavaScript
- Efficient DOM updates
- Minimal reflows and repaints

---

## Testing

Tested using:
- Chrome DevTools
- Responsive design mode
- Manual validation tests
- Dark/Light mode persistence tests
- Live search functionality tests

---

## Known Limitations

- Form does not connect to backend (demo only)
- Projects are locally stored in JS array
- No server-side validation