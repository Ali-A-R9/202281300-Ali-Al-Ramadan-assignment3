# Technical Documentation – Assignment 3

## Overview

This project is a personal portfolio website enhanced for Assignment 3 with advanced front-end functionality, API integration, improved state management, and better user interaction.

Compared to previous versions, this project includes:

- GitHub API integration
- advanced project filtering and sorting
- persistent state management using `localStorage`
- enhanced form validation
- improved user feedback and interactivity
- performance optimizations

The website is built using semantic HTML, CSS, and Vanilla JavaScript.

---

## System Architecture

### HTML Structure

The website follows a clear and semantic structure using:

- `header`
- `nav`
- `main`
- `section`
- `form`
- `footer`

Accessibility features include:

- proper label associations
- `aria-live` for dynamic content updates
- `aria-expanded` for toggle buttons
- `aria-invalid` for form validation feedback
- skip navigation link for accessibility

---

### CSS Structure

The CSS is organized into logical sections including:

- theme variables
- global styles
- layout and grid systems
- components (cards, buttons, forms)
- animations and transitions
- responsive design

Key features:

- CSS variables for light/dark theme switching
- responsive layouts using Flexbox and Grid
- reusable component styling
- smooth hover and transition effects

---

### JavaScript Architecture

The JavaScript file (`script.js`) manages all interactivity and application logic.

---

## Core Features Implementation

### 1. Theme Management
- Toggles between light and dark mode
- Stores user preference in `localStorage`
- Updates UI dynamically based on state

---

### 2. Visitor Personalization
- Allows users to save their name
- Stores data in `localStorage`
- Displays personalized greeting message
- Provides option to clear saved data

---

### 3. Greeting System
- Generates greeting based on time of day
- Updates dynamically when page loads
- Integrates with saved visitor name

---

### 4. State Management

The application maintains consistent UI behavior using `localStorage`.

Stored states include:

- theme preference
- visitor name
- About section visibility
- advanced filters visibility
- GitHub section visibility

---

### 5. Projects Module

Projects are dynamically rendered using JavaScript.

Features include:

- search functionality (real-time filtering)
- category filtering (Web / Desktop / Portfolio)
- level filtering (Beginner / Advanced)
- sorting (date and title)
- "Show More / Show Less" toggle
- empty state handling when no results match

Projects are either:

- fetched from GitHub API  
- or fallback to local project data if API fails

---

### 6. GitHub API Integration

The application uses the GitHub REST API to fetch repository data.

#### API Endpoint
```text
https://api.github.com/users/Ali-A-R9/repos?sort=updated&per_page=100
```

#### Features
- Fetches public repositories  
- Filters out forked repositories  
- Sorts by last updated date  
- Displays:
  - Repository name  
  - Description  
  - Language  
  - Stars  
  - Last update date  

#### Error Handling
- If API fails → fallback project data is used  
- User-friendly message is displayed  
- Refresh button allows retry  

---

### 7. Contact Form Validation

The contact form includes client-side validation:

- Name must not be empty (minimum 2 characters)  
- Email must follow valid format (regex)  
- Message must be:
  - At least 15 characters  
  - No more than 500 characters  
- Confirmation checkbox must be selected  

#### Features
- Inline error messages  
- Real-time validation feedback  
- Simulated submission state  
- Success confirmation message  

---

### 8. Time-on-Site Counter

- Tracks how long the user stays on the page  
- Updates every second  
- Displays formatted time (seconds, minutes, hours)  

---

### 9. UI Interactivity

Interactive elements include:

- Collapsible About section  
- Toggleable advanced filters  
- Toggleable GitHub section  
- Animated fade-in on scroll (IntersectionObserver)  

---

### 10. Data Handling

#### Local Data
Fallback project data is stored as JavaScript objects with fields:
- Title  
- Description  
- Category  
- Level  
- Tags  
- Date  
- URL  

#### External Data
- GitHub API provides live repository data  
- Data is mapped into project objects  

#### Persistent Storage
Data stored in `localStorage`:
- Theme preference  
- Visitor name  
- UI visibility states  

---

### 11. Performance Considerations

- No external frameworks used  
- Efficient DOM manipulation  
- Debounced input handling for search  
- Lazy loading for images  
- Minimal reflows and repaints  
- Optimized CSS and reusable functions  

---

### 12. Accessibility Considerations

- Semantic HTML structure  
- Keyboard navigation support  
- Visible focus states  
- `aria-live` for dynamic updates  
- `aria-expanded` for toggle controls  
- Proper error messaging for form inputs  

---

### 13. Testing

The application was tested using:

- Chrome DevTools  
- Responsive design testing (mobile and desktop)  
- Manual form validation tests  
- API loading and error handling tests  
- `localStorage` persistence testing  
- Filtering and sorting functionality testing  

---

### 14. Known Limitations

- Contact form is front-end only (no backend connection)  
- API depends on GitHub availability and rate limits  
- Fallback data is limited compared to live API data  
