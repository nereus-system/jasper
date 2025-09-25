# Jasper

A modern Next.js project built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ **Next.js 15** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🧩 **shadcn/ui** for beautiful UI components
- 📦 **ESLint** and **Prettier** for code quality
- 🚀 **Ready to deploy** on Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
jasper/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   └── lib/
│       └── utils.ts         # Utility functions
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.