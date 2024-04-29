export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const elementUl = document.createElement('ul');

  data.forEach((personajes) => {  

    /*Este es el nombre de la variable que se utiliza como parámetro de la función renderItems                                           
  Cada elemento del arreglo data representa un objeto de personaje
  este código se utiliza para generar y renderizar los elementos de lista correspondientes a cada elemento en el arreglo data*/
    const elementli = document.createElement('li');
    elementli.classList.add("stiloLi"); 
    elementli.setAttribute("itemtype", personajes.id);  // aqui antes decia ("itemtype","personajes")
    elementli.setAttribute("itemscope", "");                                                 //es relevante y autosuficiente


    // CREAR MI DL [DT-DD]
    const dlpersonajes = document.createElement('dl');  //se crea un list definition para contener los detalles del personaje


    //IMG
    const img =document.createElement('img');
    img.src = personajes.imageUrl         // o es imageUrl?

    //DT NAME - DD NAME
    const dtName = document.createElement('dt')
    dtName.textContent = 'Nombre:';                        // se establece el contenido de los elemtos dt dd cn la inf del personaj

    const ddName = document.createElement('dd')
    ddName.textContent = personajes.name;
    ddName.setAttribute("itemprop","name")   //ESTO AGREGUE PARA EL TEST       

    //DT SHORT DESCRIPTION DD SHORT DESCRIPTION
    const dtShortDescription = document.createElement('dt')
    dtShortDescription.textContent = 'Description:';            //esto es para cambiar el termino x description
   
    const ddShortDescription = document.createElement('dd')
    ddShortDescription.textContent = personajes.shortDescription; //esto es para reempazar el shortD en el contenidodd
    //INTERESES
    const dtIntereses = document.createElement('dt')
    dtIntereses.textContent = 'Intereses:';            //esto es para cambiar el termino x description
   
    const ddIntereses = document.createElement('dd')
    ddIntereses.textContent = personajes.facts.intereses;
    //GUARDO
    dlpersonajes.appendChild(img);                                                                            //appen guardar y mostrar
    dlpersonajes.appendChild(dtName);
    dlpersonajes.appendChild(ddName);
    dlpersonajes.appendChild(dtShortDescription);
    dlpersonajes.appendChild(ddShortDescription);
    dlpersonajes.appendChild(dtIntereses);
    dlpersonajes.appendChild(ddIntereses);

    elementli.appendChild(dlpersonajes);

    elementUl.appendChild(elementli);

  });
 
  return elementUl;
};

