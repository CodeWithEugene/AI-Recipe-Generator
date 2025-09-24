<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1d7i3IGmBg97nkpOvH3PWLcuYFF0p4C52

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Create a `.env` file at the project root with:
   
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
   
   You can copy from `.env.example` if present.
3. Run the app:
   `npm run dev`

## Environment & Security

- Never commit your real API keys. The repository `.gitignore` excludes `.env` files and build outputs.
- Vite loads environment variables and injects them at build time; the code reads `process.env.GEMINI_API_KEY`.
- For CI/CD or hosting, configure `GEMINI_API_KEY` in your platform's secret manager (e.g., Vercel/Netlify project env vars).
- If a key was ever committed in the past, rotate it immediately in Google AI Studio and force-push removal if necessary.
