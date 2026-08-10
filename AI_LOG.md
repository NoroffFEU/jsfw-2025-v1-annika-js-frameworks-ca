# AI Usage Log

This document records the use of artificial intelligence during the development of the Online Shop assignment.

AI was used as a learning and support tool for planning, explaining concepts, reviewing code, and debugging. ChatGPT also provided example code and implementation suggestions.

GitHub Copilot Next Edit Suggestions were enabled in VS Code during part of the development process. I did not intentionally accept these suggestions and later disabled Next Edit Suggestions to prevent AI-generated related code edits during the remainder of the assignment. Standard TypeScript IntelliSense remained enabled.

GitHub Copilot Chat was also used briefly to help locate relevant files in the project and to suggest minor UI styling adjustments, including theme-aware colours, hover shadows, and tag visibility. It was not used to implement the application’s core functionality.

Where applicable, the implementation suggestions followed patterns and examples from the course material provided, including `useState`, `useEffect`, conditional rendering, list rendering, Zustand, React Hook Form, and Zod. The patterns were adapted to the project’s TypeScript structure and specific requirements rather than copied as complete course solutions. I reviewed, adapted, manually integrated, and tested these suggestions. I am responsible for the final implementation and can explain the submitted code.

## 21–27 July 2026 — Project planning and setup

**Tool used:** ChatGPT

**Purpose:** Review the assignment requirements and discuss a suitable project structure, framework, routing approach, styling solution, and state-management strategy.

**Assistance received:** Explanations and recommendations concerning React with Vite and TypeScript, feature-based folder structure, React Router, Tailwind CSS, shadcn/ui, and Zustand. ChatGPT also helped interpret setup and configuration messages from Vite, TypeScript, ESLint, npm, and Git.

**Outcome:** React with Vite and TypeScript was selected as the framework. The project was structured by feature, and the initial routes and shared layout were configured. Setup issues were reviewed and resolved before continuing.

## 2 August 2026 — API types and product services

**Tool used:** ChatGPT

**Purpose:** Understand how to type data from the Noroff Online Shop API and handle HTTP errors correctly.

**Assistance received:** Explanations and code suggestions for TypeScript interfaces, a generic API response type, `getProducts`, `getProduct`, asynchronous `fetch` calls, and checking `response.ok`.

**Outcome:** Typed API service functions were implemented for retrieving all products and a single product. I reviewed and tested the functions. A key learning point was that `fetch` does not automatically reject responses such as HTTP 404 or 500, so `response.ok` must be checked explicitly.

## 2 August 2026 — Product list and product cards

**Tool used:** ChatGPT

**Purpose:** Build the product overview and understand state-driven rendering of API data.

**Assistance received:** Explanations, debugging, and code suggestions concerning `useState`, `useEffect`, loading and error states, empty results, rendering lists with `.map()`, stable React keys, reusable component props, conditional price rendering, and links to product pages.

**Outcome:** The product overview and reusable `ProductCard` component were implemented and tested. Products display an image, title, rating, and the correct regular or discounted price.

## 2 August 2026 — Product detail page

**Tool used:** ChatGPT

**Purpose:** Retrieve and display a single product based on a dynamic route parameter.

**Assistance received:** Explanations and code suggestions for `useParams`, fetching data when the route ID changes, loading and error states, TypeScript null narrowing, conditional rendering, tags, reviews, and discounted prices. ChatGPT also helped debug an ESLint warning concerning synchronous state updates inside an effect and a missing `hasDiscount` variable.

**Outcome:** The product detail page was implemented and tested with valid and invalid product IDs. I learned why the route ID must be checked and why `!product` represents the absence of product data.

## 2 August 2026 — Shopping cart and global state

**Tool used:** ChatGPT

**Purpose:** Understand and implement global shopping-cart state.

**Assistance received:** Explanations and implementation suggestions concerning Zustand stores, immutable array updates, derived state, adding products, updating quantities, removing products, clearing the cart, persistence with `localStorage`, and displaying the total quantity in the header.

**Outcome:** A persistent cart store was implemented. The cart page supports quantity changes, removal, total-price calculation, checkout navigation, and clearing the cart after successful checkout. I tested the full cart flow and verified persistence after reloading.

## 2 August 2026 — Initial product search and derived state

**Tool used:** ChatGPT

**Purpose:** Understand controlled search input and client-side derived state.

**Assistance received:** Explanations and code suggestions for a controlled search field, normalization with `trim()` and `toLowerCase()`, filtering with `.filter()` and `.includes()`, and handling an empty result. An initial sorting feature was also discussed and implemented before the assignment wording was reviewed more closely.

**Outcome:** I learned how search results can be derived from the loaded product array without storing a duplicate result list in state. Debouncing and `useMemo` were deliberately not used because the product list is small, already loaded in the browser, and inexpensive to filter.

## 2–3 August 2026 — Contact form validation

**Tool used:** ChatGPT

**Purpose:** Implement and understand a validated contact form using techniques from the course material.

**Assistance received:** Explanations and code suggestions for React Hook Form, Zod, `zodResolver`, `z.infer`, form registration, submission handling, accessible error messages, trimming input, resetting the form, and displaying a successful-submission message. The implementation followed the React Hook Form and Zod integration pattern demonstrated in the course material.

**Outcome:** The contact form was implemented with validation for full name, subject, email, and message. I manually tested valid and invalid input. A key learning point was that TypeScript checks the form structure during development, while Zod validates actual user input at runtime before the submission callback runs.

## 3 August 2026 — Discount badge

**Tool used:** ChatGPT

**Purpose:** Add a visual indicator to products with a discounted price.

**Assistance received:** Explanation of conditional rendering using the existing `hasDiscount` value and guidance on positioning a sale badge on the product card.

**Outcome:** A conditional sale badge was added and tested. It is only rendered when the original price is higher than the discounted price.

## 3 August 2026 — Cart toast notification

**Tool used:** ChatGPT

**Purpose:** Give users visible feedback when a product is added to the cart.

**Assistance received:** Recommendation to use the shadcn/ui Sonner component, instructions for integrating the global toaster, and guidance on triggering a success toast after the Zustand cart action. ChatGPT also helped assess and improve the toast position so it did not cover the cart indicator in the header.

**Outcome:** A toast notification containing the product title is shown after adding a product. During the final responsive review, I moved the toast to the top-right and added separate desktop and mobile offsets so it remains visible without covering the header.

## 3 August 2026 — Search requirement correction

**Tool used:** ChatGPT

**Purpose:** Reassess the search implementation against the exact assignment wording.

**Assistance received:** Requirement interpretation, debugging, and code-structure guidance for removing the extra sorting feature, separating search results from the main product grid, and displaying matches in a dedicated clickable container. ChatGPT explained conditional rendering, list rendering, React Router links, and the reason an empty search string must not display every product as a result.

**Outcome:** The earlier sorting and grid-filtering behaviour was removed. The main product grid remains unchanged while typing, and matching products appear dynamically in a separate container. Each result links to the corresponding product detail page.

## 3 August 2026 — AI policy review and documentation

**Tool used:** ChatGPT

**Purpose:** Review whether the development workflow complied with the assignment’s AI policy and prepare an accurate record of AI assistance.

**Assistance received:** ChatGPT identified that some earlier assistance included detailed code suggestions and recommended documenting this transparently, reviewing all submitted code, and changing the remaining workflow to student-written implementation supported by conceptual explanations and debugging. ChatGPT assisted in drafting this AI usage log.

**Outcome:** I reviewed the AI policy and adopted a more restrictive workflow for the remainder of the assignment. All AI assistance will be documented, and I will only submit code that has been understood, integrated, and tested.

## 3 August 2026 — Cart removal notification

**Tool used:** ChatGPT

**Purpose:** Add the required toast notification when a product is removed from the cart.

**Assistance received:** ChatGPT reviewed my `CartPage` code and explained how to reuse a removal handler for both the Remove button and decreasing an item quantity from one to zero. It also helped identify that the current quantity, rather than an already reduced quantity, must be passed to the decrease handler.

**Outcome:** I implemented and tested removal notifications for both removal paths while keeping normal quantity reductions free from unnecessary toast messages.

## 9 August 2026 — Branding and favicon workflow

**Tool used:** ChatGPT

**Purpose:** Discuss an appropriate workflow for creating and exporting a logo and favicon from Figma.

**Assistance received:** ChatGPT provided general guidance on suitable file formats and the practical use of separate light and dark logo variants. I created the visual design and exported the final assets from Figma myself.

**Outcome:** I added a custom favicon and separate light and dark SVG logo files. I integrated both logo variants into the Header and Footer and verified that the files are referenced by the application.

## 9 August 2026 — Responsive cart layout

**Tool used:** ChatGPT

**Purpose:** Identify and correct a horizontal overflow problem on the Cart page at mobile screen widths.

**Assistance received:** I provided a screenshot of the mobile layout. ChatGPT identified that the horizontal card layout and non-wrapping controls caused the Remove button to extend beyond the card. It explained how responsive layout direction, image sizing, and wrapping controls could prevent the overflow.

**Outcome:** I implemented and tested responsive changes to the cart layout. Product information and controls now remain within the card on smaller screens, while the wider layout is retained for larger screens.

## 9 August 2026 — Drafting a Readme file

**Tool used:** ChatGPT

**Purpose:** Create a structured README that documents the project’s functionality, tech stack, setup, API usage, and available scripts.

**Assistance received:** ChatGPT used the project information and package.json I provided to identify the technologies and scripts actually used. It then helped structure and draft the initial README content based on the format of one of my previous projects.

**Outcome:** I reviewed and adapted the draft. README.md now provides clear information about Found for someone who wants to understand, install, run, or review the project.

## 9 August 2026 — Netlify routing

**Tool used:** ChatGPT

**Purpose:** Debug a 404 error when opening or refreshing client-side routes on the deployed site.

**Assistance received:** ChatGPT explained that Netlify needed a redirect rule to serve index.html for routes handled by React Router.

**Outcome:** I added a `public/_redirects` file so routes such as `/cart` work when opened or refreshed directly.

## 9–10 August 2026 — Final UI and responsive refinements

**Tool used:** ChatGPT

**Purpose:** Review user-interface details found during manual testing and ensure that the implemented design met the grading criteria across screen sizes.

**Assistance received:** ChatGPT helped interpret the requirement for a percentage-based discount sticker and provided implementation guidance after I decided to add product thumbnails to the clickable search-results container. Feedback on responsive toast placement and the optical alignment of the cart quantity controls was received. The changes were discussed and tested step by step rather than applied as a complete generated solution.

**Outcome:** I selected, manually implemented, and tested the refinements. Product cards now display the discount percentage, search results include clickable thumbnails, cart controls are visually balanced, and toast notifications remain visible on mobile and large desktop screens.

## 10 August 2026 — Product error handling and final testing

**Tool used:** ChatGPT

**Purpose:** Understand and test error handling for invalid and missing product IDs.

**Assistance received:** ChatGPT explained the difference between HTTP 400 and 404 responses, why the existing generic response.ok check handled both identically, and why the specific status checks must appear before the general error check. It also helped identify a valid UUID that did not correspond to an existing product for testing the deployed 404 flow.

**Outcome:** I implemented and tested separate user-facing messages for invalid product IDs, missing products, and other product-fetching errors. The application now handles these API responses gracefully without crashing.
