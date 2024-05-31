import FormComponent from './Form'

export default function NamePage() {
  return (
    <div className='p-3 flex flex-col justify-center items-center  h-screen'>
      <h1>Enviar nota</h1>
      <div className='p-3'>
        <FormComponent />
      </div>
    </div>
  )
}
