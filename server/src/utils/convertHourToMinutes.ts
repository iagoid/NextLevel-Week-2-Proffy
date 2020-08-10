export default function convertHourToMinutes(time: string){
    // Divide ele entre os : e converte para numero
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes
}