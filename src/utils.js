// Prepends Vite's base URL so asset paths work in both dev and GitHub Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
