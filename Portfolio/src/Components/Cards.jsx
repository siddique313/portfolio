import CardItem from './CardItem';
import imge1 from "../assets/gondol.png"
import imge2 from "../assets/lights.png"
import imge3 from "../assets/logo2.png"
import imge4 from "../assets/me2.png"
import imge5 from "../assets/nature.png"
import imge6 from "../assets/p1.png"
export default function Cards() {
  return (
    <div className='mt-5'>
      <div className=" w-full h-1 bg-slate-300"></div>
      <div className='bg-slate-100 grid grid-cols-3 gap-7 p-9'>
      <CardItem imge={imge1} />
      <CardItem imge={imge2} />
      <CardItem imge={imge3} />
      <CardItem imge={imge4} />
      <CardItem imge={imge5} />
      <CardItem imge={imge6} />
  </div>
    </div>
  )
}
