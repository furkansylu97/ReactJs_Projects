import { useEffect } from "react";

function usetitle(num) {   
    useEffect(() => {
      document.title = `Sayı ${num}`
     }, [num]);
}

export default usetitle;