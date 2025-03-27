# PitchHere

PitchHere is a Next.js 15 project leveraging the latest features such as **Partial Prerendering (PPR)** and **Parallel Fetching/Requesting**. It integrates **GitHub OAuth authentication**, **Sanity CMS**, and **Cloudinary** for media management.  

## Live Project Link

https://pitch-here.vercel.app/

## 🔧 Features  
- **Next.js 15** with cutting-edge performance optimizations.  
- **GitHub OAuth authentication** via `next-auth`.  
- **Sanity CMS** integration for structured content management.  
- **Cloudinary** for image storage and optimization.  
- **Tailwind CSS** for fast and scalable styling.  
- **Markdown Support** with `sanity-plugin-markdown` and `@uiw/react-md-editor`.  
- **Error Monitoring** via `@sentry/nextjs`.  

---

## 🛠️ Installation  

### **1. Install dependencies**  
```sh
npm install
# or
yarn install
# or
pnpm install
```

### **2. Set up environment variables**  
Create a `.env.local` file in the root directory and add the following environment variables:  

```env
# Authentication (NextAuth + GitHub OAuth)
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_SANITY_API_VERSION=
SANITY_WRITE_TOKEN=

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## 🚀 Running the Project  

### **Development Mode**  
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
```
Runs the project in development mode at `http://localhost:3000`.

### **Production Build**  
```sh
npm run build
npm run start
```
Compiles and serves the project in production mode.

---

## 🛠️ Scripts  
### **Development Commands**  
| Command               | Description                                     |
|-----------------------|-------------------------------------------------|
| `npm run dev`        | Start the development server.                   |
| `npm run build`      | Build the project for production.               |
| `npm run start`      | Start the production server.                    |
| `npm run lint`       | Run ESLint for code quality checks.             |
| `npm run typegen`    | Generate TypeScript types from Sanity schemas.  |

---

## 🔗 Tech Stack  
- **Framework**: [Next.js 15](https://nextjs.org/)  
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)  
- **Database & CMS**: [Sanity.io](https://www.sanity.io/)  
- **Media Storage**: [Cloudinary](https://cloudinary.com/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)  

---

# Feel free to contribute by submitting a pull request! 
