import Image from 'next/image'


const Page5 = () => {
    return ( 
        <div style={{
            backgroundImage: "url('/05/BACKGROUND.png')", // Correct path to the image
            height: '1000px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}>
            <div>
                <h1 className="text-white text-5xl text-center p-12"
                style={{
                    fontFamily: 'Tusker Grotesk, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '1.0px',
                    lineHeight: '1.2',
                }}>
                    Aprenda diretamente
                    <br/><span className="text-[#F8A312]">com Paulo Vieira</span>
                </h1>
            </div>
            <div className="flex justify-center items-center ">
                <Image src="/05/FOTO.png" className="p-1" width={"450"} height={"60"} alt='Paulo Vieira' />
                <div className=""
                style={{
                    backgroundColor: 'rgba(0, 0, 200, 0.1)', // Blue color with 50% opacity
                    padding: '25px',
                    paddingTop: '50px',
                    paddingBottom: '50px',               
                    borderTopRightRadius: '32px',
                    borderBottomRightRadius: '32px'
                  }}
                >
                    <p className="text-xl font-bold px-16">
                    Tu não serás “cobaia” de algo ainda não validado. Paulo Vieira é:

                    <br/><br/>Master Coach, PhD em Business Administration e Mestre em
                    <br/>Coach pela Florida Christian University

                    <br/><br/>Criador do Método CIS, metodologia de desenvolvimento
                    <br/>humano que mudou a vida de mais de 1,5 milhões de
                    <br/>pessoas nos últimos 26 anos.

                    <br/><br/>Fundador da Febracis, a maior escola de negócios da
                    <br/>América Latina e da Europa, presente em 3 continentes.

                    <br/><br/>Escritor de mais de 30 livros com 10 milhões de cópias vendidas.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Page5;