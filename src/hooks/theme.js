


 const theme=()=>{
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    function applyTheme(theme) {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
      }
    
  
  
  // İlk yükleme
  if (!localStorage.getItem("theme")) {
    const defaultTheme = colorSchemeQueryList.matches ? "dark" : "light";
    applyTheme(defaultTheme);
  } else {
    applyTheme(localStorage.getItem("theme"));
  }
}


  export default theme
