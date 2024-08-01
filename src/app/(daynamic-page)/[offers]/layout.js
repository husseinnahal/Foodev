import Offercontext from "@/context/offercontext"



export default function Offerlayout({children}) {
  return (
     <div  >
        <Offercontext>

        {children}
        

        </Offercontext>
      </div>
     )
   }

