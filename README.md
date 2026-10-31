# Yash Dhankar — Full Stack Software Developer Portfolio

A real, working, professional full-stack developer portfolio built for **Yash Dhankar**. Engineered with React, Vite, Tailwind CSS, Framer Motion, and Lucide React, following premium dark aesthetics with restrained purple-blue neon accents, glassmorphic surfaces, and responsive layouts.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom glassmorphism & dark palette
- **Animations**: [Framer Motion](https://www.framer.com/motion/) with `prefers-reduced-motion` compliance
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand marks
- **Target Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Key Features & Sections

1. **First-Load Intro Animation**:
   - Letter-by-letter reveal of *"Yash Dhankar"* with subtle purple-blue glow.
   - Smooth reveal of *"Full Stack Software Developer"* transitioning into the Hero.
   - Includes a **Skip Intro** option.
   - Managed via `sessionStorage` so it never replays during normal navigation.
   - Fully respects `prefers-reduced-motion`.

2. **Hero Section**:
   - Displays name, role, and factual summary focused on scalable web development.
   - Direct *"View Projects"* and *"Download Resume"* action buttons.
   - Exact social links for GitHub, LinkedIn, LeetCode, and Email.
   - Dynamic 3D-styled code terminal illustration (`developer.ts`) with floating animated technology badges (React, Next.js, Node.js, PostgreSQL, TypeScript).

3. **Technologies I Work With (High Visibility)**:
   - Major visual feature with generous grid spacing, dark surfaces, and fine borders.
   - Interactive category filter tabs: *All Categories, Languages, Frontend, Backend, Databases, Tools & Platforms*.
   - Displays official SVG logos, readable labels, and role badges.
   - Verified technologies from resume: JavaScript, TypeScript, Python, C++, SQL, HTML5, CSS3, React, Next.js, Node.js, Express, Tailwind CSS, MongoDB, MySQL, PostgreSQL, Prisma, Git, GitHub, Docker, Vercel, and Render.
   - Free of unsupported percentages or progress bars.

4. **Featured Projects**:
   - Side-by-side responsive cards on wide screens, stacked on mobile.
   - **Queueless — Digital Token and Management System**:
     - *Live Demo*: [queueless-eta-one.vercel.app](https://queueless-eta-one.vercel.app/)
     - *GitHub*: [Queueless-Digital-Token-and-Management](https://github.com/dhankaryash71-hue/Queueless-Digital-Token-and-Management)
     - *Stack*: Next.js, PostgreSQL, Prisma, Tailwind CSS
   - **SHADO — Real-Time Chat Application**:
     - *Live Demo*: [shado-your-space.vercel.app/chat](https://shado-your-space.vercel.app/chat)
     - *GitHub*: [SHADO--YOUR-SPACE](https://github.com/dhankaryash71-hue/SHADO--YOUR-SPACE)
     - *Stack*: React, Node.js, Express, Socket.IO, PostgreSQL, Prisma
   - High-fidelity interactive UI mockups with image drop-in support.

5. **About Section**:
   - Factual summary of engineering focus: scalable web development, backend architecture, and database-driven applications.
   - Core coursework tags: OS, OOPs, DSA, DBMS, CN.

6. **Professional Experience**:
   - Software Developer at **CodesWords** with verified contributions directly from resume.

7. **Education**:
   - B.Tech in Computer Science and Engineering from **Dr. A.P.J. Abdul Kalam Technical University** (2023–2027) with verified SGPA 7.8 / 10.

8. **Data Structures & Algorithms (DSA)**:
   - Highlights 140+ LeetCode problems solved.
   - Topic breakdown: Arrays, Strings, Linked Lists, Two Pointers, Stacks & Queues, Binary Search.
   - Direct link to [LeetCode profile](https://leetcode.com/u/YASHDHANKAR/).

9. **Contact Section**:
   - Prominent and clickable:
     - Phone: `tel:7983817368` (7983817368) + One-click copy
     - Email: `mailto:dhankaryash71@gmail.com` + One-click copy
   - Working interactive contact message form with `mailto:` client fallback.

10. **Resume Serving**:
    - Serves `/Yash_Dhankar_Resume.pdf` from the `public/` folder.

---

## 🖼️ How to Add or Replace Real Screenshots

The project cards automatically detect and display custom screenshots if you add them to the `public/projects/` directory:

- **Queueless screenshot**: Place your image at `public/projects/queueless.png`
- **SHADO screenshot**: Place your image at `public/projects/shado.png`

If no custom file is found, the cards automatically display the high-tech UI simulation preview with a neat indicator badge.

---

## 📄 How to Update Resume PDF

Your resume PDF is located at:
`public/Yash_Dhankar_Resume.pdf`

To update your resume in the future, simply replace that file with your new PDF using the exact same filename.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment to Vercel

The project is pre-configured for instant deployment on Vercel:

1. Push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yash Dhankar Full Stack Portfolio"
   git branch -M main
   git remote add origin https://github.com/dhankaryash71-hue/<repo-name>.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
