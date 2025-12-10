export function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('darkmode');
  
  if (isDark) {
    localStorage.setItem('darkmode', 'active');
  } else {
    localStorage.removeItem('darkmode');
  }
  
  return isDark;
}

export function initializeDarkMode() {
  const savedMode = localStorage.getItem('darkmode');
  
  if (savedMode === 'active') {
    document.documentElement.classList.add('darkmode');
    return true;
  } else if (savedMode === null) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
      return true;
    }
  }
  
  return false;
}