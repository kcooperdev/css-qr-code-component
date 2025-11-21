// app/page.tsx
//mx-auto bg-white rounded-xl shadow-md p-4

export default function HomePage() {
  return (
    <main className="main__container min-h-screen p-6 text-center space-y-6 bg-blue-100">
      <div className="card-container bg-white shadow-sm rounded-xl p-4">
        <img src="images/image-qr-code.png" className="rounded-2xl" alt="" />
        <p className="text-lg font-semibold font-outfit pt-4">
          Improve your front-end skills by building projects
        </p>

        <p className="opacity-25 pt-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}
