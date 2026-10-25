import { Router, Request, Response } from "express"; 
import type { Movie } from "../types/movie";

const router = Router(); 

router.get('/:title', async(req: Request, res: Response)=> {
  const title = req.params.title

  if(!title){
    res.status(400).json({ error: 'Укажите название фильма' }); 
    return; 
  }
    const response = await fetch(
      ''
    )

    const data = await response.json()
    console.log(data)
  
})
