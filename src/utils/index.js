export const getAppointment = () => {
  const book = localStorage.getItem('book')
  if (book) return JSON.parse(book)
  return []
}

export const bookAppointment = doctor => {
  const appointment = getAppointment()

  const isExist = appointment.find(d => d.id === doctor.id)
  if (isExist) return console.log('already added')

  appointment.push(doctor)

  localStorage.setItem('book', JSON.stringify(appointment))
}

export const removeBook = id => {
  const appointment = getAppointment()
  const remainingBook = appointment.filter(doctor => doctor.id !== id)
  localStorage.setItem('book', JSON.stringify(remainingBook))

}