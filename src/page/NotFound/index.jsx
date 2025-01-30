

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center">
      <h1 className="text-9xl font-bold text-vite">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
        Page Not Found!
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
      Sorry, the page you are looking for does not exist or may have moved.
      </p>
    </div>
  )
}
