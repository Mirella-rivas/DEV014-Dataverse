export function filterData(data, filterBy, value) {   //FILTER DATA - AQUI SE DEFINE

  if (!data || !filterBy || !value) return "Faltan definir prámetros"

  let resultadoFiltro = []

  resultadoFiltro = data.filter((element) => {

    return element.facts[filterBy].includes(value);

  })

  return resultadoFiltro;

}

export function sortData(data, sortBy, sortOrder) {

  //  copiar data
  const copiarData = data.map(item => ({ ...item })); //item => (...)
  console.log(copiarData)

  //  test
  /*if (!data || !sortBy || !sortOrder) {
    return undefined; //o puedes retornar un mensaje de error Parametros no definidos
  } */

  if (sortBy === 'name') {
    if (sortOrder === 'asc') {
      return copiarData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return copiarData.sort((a, b) => b.name.localeCompare(a.name));
    }
  } else {
    if (sortOrder === 'desc') {
      return copiarData.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      return copiarData.sort((a, b) => b[sortBy] - a[sortBy])
    }
  }

}

export function computeStats(data){


  // Reducir los datos para calcular estadísticas
  const stats = data.reduce((acc, current) => {

    // Acceder al número de apariciones de cada objeto
    const apariciones = current.facts['número de apariciones'];

    // Sumar los valores
    acc.sum += apariciones;
 
    // Contar los valores
    acc.count++;
    return acc;
  },

  // Inicializar el objeto de acumulador con las propiedades necesarias
  { sum: 0, count: 0 }
  );

  // Calcular la media
  stats.mean = stats.sum / stats.count;

  return stats;
}
