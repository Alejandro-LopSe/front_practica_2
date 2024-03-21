import { FunctionComponent } from "preact";
import { ApiInfo, Data } from "../type.ts";
import { useState } from "preact/hooks";
const slugsout: string[] = []
const slugssave: string[] = []

const random = ()=>{
  const x = Math.floor(Math.random()*4)
  if(x<2)return "Hybrid"
  return "Face to face"
}
const randomlogo = ()=>{
  let x = Math.floor(Math.random()*6)
  if(x===1)return "acenture.png"
  if(x===2)return "logo3.png"
  if(x===3)return "logo2.jpeg"
  if(x===4)return "logo4.jpg"
  if(x===5)return "logo5.jpg"
  if(x===0)return "deloitel.png"
  return "Face to face"
}

export const Linkedin: FunctionComponent<{ data: ApiInfo }> = ({ data }) => {
  const [view, setview] = useState<Data | undefined>(data.data.at(0));
  const [newdata, setdata ] = useState<Data[]>(data.data)

  const setnewdata = ()=>{

    const N= newdata.reduce((acc: Data[],elem:Data)=>{
      if(slugsout.includes(elem.slug)){
        console.log(slugsout);
        
        console.log(slugsout.includes(elem.slug));
        return acc
      }else{
        return[...acc,elem]
      }
    },[])

    setdata(N)
  }
  

  return (
    <div class="divgeneral">
      <div class="divlista">
          <div class="header1">
            <h1 >PRINCIPALES EMPLEOS QUE TE RECOMENDAMOS.</h1>
            <p>{newdata.length} resultados</p>
          </div>
        {data && (
          
          <ul class="list ">
            
            {newdata.map((e: Data) => {
              if(slugsout.includes(e.slug)){
                return
              }
              return (
                <p class = "imagenytexto" key={e.slug} onClick={(elem) => {setview(e);}}>
                  <p class="imagen">
                    <img src={randomlogo()} alt="" />
                  </p>
                  <p class="texto">
                    <h2>{e.title} <img class="imagen3" src="x.png" onClick={(elem)=>{slugsout.push(e.slug); setnewdata()}}/></h2>
                    <p class="empresa">{e.company_name}</p>
                    <p class="location">{e.location} ({random()})</p>
                    <p class="junto">
                      <p class="imagen2">
                        <img class="circulo" src="Usuario-Vacio.png" alt="" />
                      </p>
                      <p class="location">{Math.floor(Math.random()*10)} Contacts Work here</p>
                    </p>
                    <p class="location">Pushing {Math.floor(Math.random()*60) } People {slugssave.includes(e.slug) && <a class="sol">Guardado</a>}</p>
                  </p>

                </p>
              );
            })}
          </ul>
        )}
      </div>
      {view && (
        <div class="divview">
          {view &&
            (
              <>
              <div class="resumen">
              <h2>{view.title}</h2>
                <p>{view.company_name} - {view.location}<a class="sol"> - {Math.floor(Math.random()*6000)} Solicitudes</a></p>
                <p><img class="img1" src="maletin.png" alt="" /> -     {random()} - Jornada Completa - Poca responsabilidad</p>
                <p><img class="img2" src="personas.jpg" alt="" /> -     {Math.floor(Math.random()*6000)} trabajadores</p>
                <p><img  class="img3" src="lista.png" alt="" /> -     {Math.floor(Math.random()*6)}/6 Aptitudes que encajan en tu perfil</p>
                <p class="imagenytexto"><form action={view.url}><button  class="b1"type="submit" name="Solicitar">Solicitar</button></form>{!slugssave.includes(view.slug)  &&<button class="b2" type="button" name="Guardar" onClick={(e)=>{slugssave.push(view.slug); setnewdata()}} >Guardar</button>}</p>
              </div>
              <div class="texto2">

                <h1>About the Job</h1>
                <p dangerouslySetInnerHTML={{ __html: view.description }}></p>

              </div>
              </>
            )}
        </div>
      )}
    </div>
  );
};
