# Nail IB UI Project

## 🚀 Project Overview
This project is a responsive and interactive UI for Nail IB, designed using **Next.js, Tailwind CSS, and Vimeo for video playback**. It includes dynamic components such as a video player, interactive navigation, and custom fonts.

## 📌 Features
- **Custom Branding**: Uses **IntegralCF** for headings and **Open Sans** for body text.
- **Responsive Design**: Ensures smooth display on different screen sizes.
- **Video Player**: Integrated with **Vimeo** for high-quality lesson playback.
- **Optimized Performance**: Uses **Next.js Image Optimization** and `priority` loading.
- **Favicon Support**: Custom site icon for brand recognition.
-

## 🎨 Branding & Fonts
- **Headings:** `IntegralCF` (Bold & Regular)
- **Body Text:** `Open Sans` (Bold & Regular)
- **Font Integration:**
  - Download fonts: [Google Drive Link](https://drive.google.com/drive/folders/1GEFQQnPtSZFFpXhGN4RReQo7h-6nrgVg)
  - Import in **global.css**:
    ```css
    @font-face {
      font-family: 'IntegralCF';
      src: url('/fonts/IntegralCF-Bold.woff2') format('woff2');
      font-weight: bold;
    }
    @font-face {
      font-family: 'Open Sans';
      src: url('/fonts/OpenSans-Regular.woff2') format('woff2');
      font-weight: normal;
    }
    ```
  - Use in components:
    ```tsx
    <h1 className="font-['IntegralCF'] text-4xl text-black">Ace Your IB Exams</h1>
    ```

---

## 🖼️ Favicon Setup
1. **Convert Image to `favicon.ico`**
   - Use an online tool like [Favicon.io](https://favicon.io/)
2. **Place `favicon.ico` in `public/` folder**
3. **Link in `_app.tsx` or `head` tag**:
   ```tsx
   import Head from 'next/head';
   export default function App({ Component, pageProps }) {
     return (
       <>
         <Head>
           <link rel="icon" href="/favicon.ico" />
         </Head>
         <Component {...pageProps} />
       </>
     );
   }
   ```

---

## 📺 Video Player Implementation
- **Using Next.js `<video>` tag**:
  ```tsx
  <video controls width="100%" src="https://cdn.nailib.com/sample-video.mp4"></video>
  ```
- **Using Vimeo Embed**:
  ```tsx
  <iframe src="https://player.vimeo.com/video/123456789" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
  ```

---

## 💻 Installation & Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/nailib-ui.git
   cd nailib-ui
   ```
2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
4. Open in browser: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Technologies Used
- **Next.js** – Server-side rendering and static site generation
- **Tailwind CSS** – Utility-first styling
- **Vimeo API** – High-quality video streaming
- **Google Fonts** – Custom typography
- **React Hooks** – State management and interactivity

---

## 🚀 Deployment
- **Vercel:**
  ```bash
  vercel deploy
  ```
- **Netlify:**
  ```bash
  netlify deploy
  ```

---

## 📌 Future Enhancements
- Improve UI animations
- Add dark mode
- Implement AI-driven video recommendations

---

## 📞 Support & Contributions
For issues and improvements, please open a GitHub issue or reach out via email. 🚀

