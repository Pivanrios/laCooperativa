import React from 'react'

function About() {
  return (
    <div className='bg-yellow-500'>
        <section className='p-2'>
            <div className='flex  flex-col items-center px-3 py-5 md:px-10 bg-yellow-400 rounded-lg'>
                <h3 className='text-3xl md:text-5xl font-bold'>Why?</h3>
                <span className='flex flex-col sm:flex-row gap-2 items-center'>
                    <img src='/images/mision.webp' alt='comida' width={200}
                        className='rounded-lg'/>
                    <p>
                    LaCooperativa abre un canal de comunicación entre compañeros de trabajo para compartir 
                    y coordinar opciones de comidas saludables y accesibles. 
                    A través de nuestra plataforma colaborativa, ampliamos las opciones culinarias 
                    disponibles, permitiendo la creación de menús variados que satisfacen los gustos 
                    y necesidades de todos, promoviendo una alimentación balanceada y comunitaria.
                    </p>
                </span>
            </div> 
        </section>
        <section className='p-2'>
        <div className='flex  flex-col items-center px-3 md:px-10 py-5 bg-yellow-400 rounded-lg'>
                <h3 className='text-3xl md:text-5xl font-bold'>Vision</h3>
                <span className='flex flex-col sm:flex-row  items-center gap-2'>
                    <p>
                    Buscamos ser una alternativa para la alimentación en el entorno laboral, 
                    fomentando comunidades de trabajo saludables y conectadas. Aspiramos a transformar 
                    la manera en que los empleados planifican y disfrutan sus comidas, creando un modelo 
                    sostenible que mejore el bienestar en los lugares de trabajo. Además, buscamos 
                    generar ingresos pasivos para empleados y sus cónyuges, permitiendo a las 
                    amas de casa vender sus productos caseros.
                    </p>
                    <img src='/images/vision.webp' alt='comida' width={200} className=' rounded-lg'/>
                </span>
            </div>
        </section>
        <section className='p-2'>
            <div className='flex  flex-col items-center px-3 md:px-10 py-5 bg-yellow-400 rounded-lg'>
                <h3 className='text-3xl md:text-5xl font-bold'>How?</h3>
                <span className='flex gap-2'>
                    <p>
                        Entregamos tu comida casera preparada por companeros de trabajo, 
                        en el breakroom de preferencia. <br/>
                        Solo tienes que ordenar por medio de la encuesta en nuestro 
                        grupo de whatsapp o por mensaje al numero 646 123-2222.<br/>
                        Mandas tu comprobante de transferencia por zelle o bbva.
                    </p>
                    <img src='../images/lasagnaCompleta.jpeg' alt='comida' width={200} className=' rounded-full'/>
                </span>
            </div>
        </section>
    </div>
  )
}

export default About